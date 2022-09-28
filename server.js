const express = require('express');
const app = express();
// const cors = require('cors')

const nodemailer = require("nodemailer")
const PORT = process.env.PORT || 5000;
app.use(express.static('public'));
app.use(express.json())
// app.use(cors({
//     origin: 'https://mtqibanali.am/index.html'
// }));
app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/public/index.html')
})
app.post('/', (req, res) =>{
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        auth: {
            user: "mtqibanali@gmail.com",
            pass:"ushlrjozwsllgjhf"
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: "mtqibanali@gmail.com",
        subject: `massage from ${req.body.email}`,
        text: req.body.message
    }
    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            res.send('error')
        }else{
            console.log('email sent: ' + info.response);
            res.send('success')
        }
    })
})
app.listen(PORT, ()=>{
    console.log(`server runing on port ${PORT}`);
})