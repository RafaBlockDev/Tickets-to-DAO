const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");
const console = require("console");
const canvas = createCanvas(1000, 1000); //pixels
const ctx = canvas.getContext("2d");

const saveLayer = () => {
    fs.writeFileSync("./newImage.png", )
}


const drawLayer = () => {
    const image = await loadImage("./Coney - Blue#10");
    ctx.drawImage(image, 0, 0, 1000, 1000);
    console.log("This ran.");
};

drawLayer();