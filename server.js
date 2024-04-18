const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { text } = require('body-parser')
const nodemailer = require('nodemailer')
const app = express();
const port = 3000;

// Body parser middleware to parse POST request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/",(req,res)=>{
    res.send("hi")
})
app.use(cors())
// // Route handler for form submission
app.post('/submit-form', (req, res) => {
    const obj= req.body;
    if(obj.name){
        res.send(200)
        console.log("Data sent Successfullly")
    }
    sendMail(obj);
   
});

// // Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});






// configure nodemailer and send it
async function sendMail(obj){
    // create an email transporter
    // SMTP (simpple mail transfer protocol)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user:'harshmultiuser@gmail.com',
            pass:'hrhuqcjhgpnvbxlc'
        }
    })
    const mailOptions = {
        from: 'harshmultiuser@gmail.com',
    to: 'harshupadhyayupps@gmail.com,shivam969684@gmail.com',
    subject: 'Welcome2',
    text: `
        Name: ${obj.name}
        Email: ${obj.email}
        Phone: ${obj.phone}
        City: ${obj.city}
        Postcode: ${obj.postcode}
        Suburb: ${obj.suburb}
        Street Address: ${obj.streetAddress}
        Service Data: ${obj.serviceData}
        Time: ${obj.time}
        Type of Services: ${obj.typeOfServices}
        Comment: ${obj.comment}
        How Did You Hear: ${obj.howDidYouHear}
        Contact Method: ${obj.contactMethod}
        How often would you like to get your premises cleaned?: ${obj.durationOfCommercialCleanValue}
        What time would you like to get your premises cleaned?: ${obj.timeOfCommercialCleanValue}
        Approximate Number of Employees working at your premises?: ${obj.numberOfEmployeForCommercialCleanValue}
        When would you like to have a Free Site Inspection to get a No obligation Quote?: ${obj.freeSiteInspectionValue}
    `
        
    }
    try {
        const result = await transporter.sendMail(mailOptions);
        console.log(result)
        console.log('Email sent successfully')
    } catch (error) {
        console.log('Email send failed',error)
    }
}





