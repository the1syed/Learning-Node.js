const sum = (req, res) => {
    console.log("In sum handler");
    const body = [];
    req.on("data", (chunk) => {
        body.push(chunk);
    })

    req.on("end", ()=>{
        const parsedBody = Buffer.concat(body).toString();
        console.log("ParsedBody : ", parsedBody);
        const params = new URLSearchParams(parsedBody);
        console.log("Params : ", params);
        const bodyObj = Object.fromEntries(params);
        console.log("bodyObj : ", bodyObj);
        const result = Number(bodyObj.num1) + Number(bodyObj.num2);
        res.write(`<h1> ${bodyObj.num1} + ${bodyObj.num2}  = ${result}</h1>`);
        res.write(`<a href="/"> Home </a>`);
        res.end();
    })


}

exports.sum = sum;