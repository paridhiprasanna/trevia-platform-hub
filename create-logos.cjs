const fs = require("fs");
const icons = require("simple-icons");

fs.mkdirSync("public/images/logos", { recursive: true });

const aws = icons.siAmazonaws;
const azure = icons.siMicrosoftazure;

if (!aws) {
  console.log("AWS icon not found");
} else {
  fs.writeFileSync("public/images/logos/aws.svg", aws.svg);
  console.log("AWS created");
}

if (!azure) {
  console.log("Azure icon not found");
} else {
  fs.writeFileSync("public/images/logos/azure.svg", azure.svg);
  console.log("Azure created");
}