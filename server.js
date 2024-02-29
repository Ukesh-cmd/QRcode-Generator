const express = require('express');
const app = express();
const ejs = require('ejs');
// const sharp = require('sharp')
const path = require('path')
// const multer = require('multer');
const qrcode = require('qrcode');

app.use(express.json())
app.use(express.urlencoded({extended:false}))
const port = 3002;
app.set('view engine', 'ejs')
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });
app.set('views', path.join(__dirname,'view'))
app.get("/", (req, res, next)=>{
    res.render("index");
})

app.post('/generate', (req, res, next)=>{
    
    
        const text = req.body.text;
        qrcode.toDataURL(text, (err, result)=>{
        res.render("code", {
            qr_code:result
        })
    })
})
    
   
    // else if(req.body.inputType === 'image'){
    //     const imageBuffer = req.file.buffer;
    //     sharp(imageBuffer).png().jpeg().toBuffer()
    //     .then((processedImageBuffer) =>{
    //         qrcode.toBuffer(processedImageBuffer, (err, result)=>{
    //             if(error){
    //                 console.log(err);
    //             }
    //             res.render("code", {
    //                 qr_code:result
    //             })
    //         })

    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
       
    // }


app.listen(port, (req, res)=>{
    console.log(`Server running on port ${port}`);
})