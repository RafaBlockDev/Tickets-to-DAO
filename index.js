const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");
const canvas = createCanvas(1000, 1000); //pixels
const ctx = canvas.getContext("2d");