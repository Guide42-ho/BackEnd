const express = require('express');
var bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
// ใช้ Static File  จาก "public"
app.use(express.static('public'));

app.get('/index.html', (req, res)=>{
    res.sendFile(__dirname + '/public/index.html');

} );
app.get('/styles.css', (req, res) => {
    res.sendFile(__dirname + '/public/styles.css');
});

app.post("/", (req,res)=>{
    // console.log(req.body); //JavaScropt Object
    // console.log(req.body.num1)
    var result = Number(req.body.num1) +Number(req.body.num2)
    res.send("เลขที่ออก" + result);
 });
 app.post("/bmiCalculator", (req, res) => {
    
    const heightInCm = Number(req.body.height); 
    const weightInKg = Number(req.body.weight); 

   

    const bmi = weightInKg / (heightInCm * heightInCm);

    if (bmi >= 30){
        res.send("โรคอ้วนตราย");
    }else if (bmi >= 25.0){
        res.send("อ้วน");
    }else if (bmi >= 23.0) {
        res.send("น้ำหนักเกิน");
    } else if (bmi >= 18.5 && bmi <= 22.9) {
        res.send("สมส่วน"); 
    }else if (bmi<18.5){
        res.send("น้ําหนักต่ํเกณฑ์")
    }
});
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error); // ส่ง error ไปยัง middleware ถัดไป
})

app.listen(3000, ()=> {
   console.log ("Server is running on port 3000");
});
