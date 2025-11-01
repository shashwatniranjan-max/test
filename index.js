const { rejects } = require("assert");
const fs = require("fs");
function readFilePromisified(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, "utf-8", (err, data) => {
            if(err) {
                rejects(err);
            } else {
                resolve(data);
            }
        })

    })
}
async function read(filename) {
    try {
        const data = await readFilePromisified(filename);
        console.log(data);
    } catch(err) {
        console.log("Error reading this file" + err);
    }
}
read("a.txt");