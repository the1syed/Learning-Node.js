const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/paths');

let homes = [];

module.exports = class Home{
    constructor(houseName, price, location, rating, picUrl){
        this.houseName = houseName;
        this.price = price;
        this.location = location;
        this.rating = rating;
        this.picUrl = picUrl;
    }

    save(){
        homes.push(this);
        const filePath = path.join(rootDir, 'data', 'homes.json');
        fs.writeFile(filePath, JSON.stringify(homes), (err)=>{
            console.log(err);
        })
    }
    
    static fetchAll(callback){
        const filePath = path.join(rootDir, 'data', 'homes.json');
        fs.readFile(filePath, (err, data)=>{
            if(!err){ 
                homes = JSON.parse(data)
            }
            callback(homes);
        });
    }
}