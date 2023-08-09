const FormData = require("form-data");
const fs = require("fs");
const axios = require("axios");
const concat = require("concat-stream")

const data = new FormData();
data.append("prompt", "a cool mohawk haircut");
data.append("init_image", fs.createReadStream("input/1.jpg"));
data.append("mask_prompt", "hair")
data.append("model", "stablediffusion_inpaint_2")
data.append("seed", "1419651187")


data.pipe(concat({encoding: 'buffer'}, buf => {

    const options = {
        method: 'POST',
        url: 'https://dezgo.p.rapidapi.com/text-inpainting',
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'dezgo.p.rapidapi.com',
            ...data.getHeaders()
          },
        data: buf,
        responseType: "arraybuffer"
    };

    axios.request(options).then(function (response) {

        console.log("Success! Writing output file...")
        fs.writeFileSync('/output/inpaint_text.png', response.data);

    }).catch(function (error) {
        console.error("There was an error:", error);
    });

}))
