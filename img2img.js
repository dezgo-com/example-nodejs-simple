const FormData = require("form-data");
const fs = require("fs");
const axios = require("axios");
const concat = require("concat-stream")

const data = new FormData();
data.append("prompt", "Stunning portrait of a young woman, snowy background, digital art, highly-detailed masterpiece trending HQ");
data.append("init_image", fs.createReadStream("input/0.png"));
data.append("strength", "0.97")
data.append("seed", "2942950965")


data.pipe(concat({encoding: 'buffer'}, buf => {

    const options = {
        method: 'POST',
        url: 'https://dezgo.p.rapidapi.com/image2image',
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
        fs.writeFileSync('/output/img2img.png', response.data);

    }).catch(function (error) {
        console.error("There was an error:", error);
    });

}))
