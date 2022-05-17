var fs = require("fs");

var dir = './metadatas';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const cidIpfs = process.argv[2];
const from = process.argv[3];
const to = process.argv[4];


for(let i = from ; i <= to ; i++) {
    
    res = {
        "description": "SmileyWeb3 hidden description",
        "image": cidIpfs+"/hidden.png",
        "name": "SmileyWeb3 #"+i,
        "attributes": []
    }
    
    let json = JSON.stringify(res);
    fs.writeFile("metadatas/"+i + ".json", json, function (err, result) {
        if (err) console.log(err);
    });
}