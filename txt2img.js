const axios = require("axios");
const fs = require("fs");

const encodedParams = new URLSearchParams();
encodedParams.append("prompt", "an astronaut riding a horse, digital art, epic lighting, highly-detailed masterpiece trending HQ");
encodedParams.append("negative_prompt", "ugly, poorly drawn, deformed, deformed limbs");
encodedParams.append("model", "stablediffusion_1_5");
encodedParams.append("guidance", "8");
encodedParams.append("seed", "568542368");

const options = {
  method: 'POST',
  url: 'https://api.dezgo.com/text2image',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-Dezgo-Key': process.env.API_KEY,
  },
  data: encodedParams,
  responseType: "arraybuffer"
};

axios.request(options).then(function (response) {

    console.log("Success! Writing output file...")
    fs.writeFileSync('/output/txt2img.png', response.data);

}).catch(function (error) {
    console.error("There was an error:", error);
});
