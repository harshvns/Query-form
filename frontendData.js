// import './index.js'
document.addEventListener("DOMContentLoaded", function() {

// Get references to all input elements
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const cityInput = document.getElementById('city');
const postcodeInput = document.getElementById('postcode');
const suburbInput = document.getElementById('suburb');
const streetAddressInput = document.getElementById('streetaddress');
const serviceDateInput = document.getElementById('service');
const timeInput = document.getElementById('time');
const time =timeInput.value
const typeOfServicesInput = document.getElementById('typeOfServices');
// console.log("type",typeOfServicesInput)
const services = typeOfServicesInput.value
console.log("services",services)
const commentInput = document.getElementById('comment');
const googleRadio = document.getElementById('Google');
const facebookRadio = document.getElementById('Facebook');
const emailRadio = document.getElementById('email');
const referalRadio = document.getElementById('Referal');
const otherRadio = document.getElementById('Other');
const phoneCheckbox = document.getElementById('Phone');
const smsCheckbox = document.getElementById('SMS');
const emailCheckbox = document.getElementById('Email');
console.log("email" ,emailCheckbox)
const submitButton = document.getElementById('submitData');


const durationOfCommercialClean = document.getElementById('durationOfCommercialClean')
console.log("duration",durationOfCommercialClean)
const durationOfCommercialCleanValue = durationOfCommercialClean.value
console.log("duration",durationOfCommercialCleanValue)
// const timeOfCommercialClean = document.getElementById('timeOfCommercialClean')
// const timeOfCommercialCleanValue = timeOfCommercialClean.value 
// const numberOfEmployeForCommercialClean = document.getElementById('numberOfEmployeForCommercialClean')
// const numberOfEmployeForCommercialCleanValue = numberOfEmployeForCommercialClean.value
// const freeSiteInspection = document.getElementById('freeSiteInspection')
// const freeSiteInspectionValue = freeSiteInspection.value



// Create an object for each input field
const formData = {
  name: nameInput.value,
  email: emailInput.value,
  phone: phoneInput.value,
  city: cityInput.value,
  postcode: postcodeInput.value,
  suburb: suburbInput.value,
  streetAddress: streetAddressInput.value,
  serviceDate: serviceDateInput.value,
  // time: timeInput.value,
  time:time.value,
  typeOfServices: services.value,
  comment: commentInput.value,
  howDidYouHear: getHowDidYouHearValue(),
  contactMethod: getContactMethodValue(),
  durationOfCommercialClean: durationOfCommercialCleanValue.value,
  // timeOfCommercialClean: timeOfCommercialCleanValue.value,
  // numberOfEmployeForCommercialClean: numberOfEmployeForCommercialCleanValue.value,
  // freeSiteInspection: freeSiteInspectionValue.value
};
// console.log("services",services)

// Function to get the value of the "How did you hear about us?" radio buttons
function getHowDidYouHearValue() {
  let howDidYouHear = [];
  
  if (googleRadio.checked) {
    howDidYouHear.push('Goodle');
  } if (facebookRadio.checked) {
    howDidYouHear.push('Facebook');
  } if (emailRadio.checked) {
    howDidYouHear.push('Email');
  } if (referalRadio.checked) {
    howDidYouHear.push('Referal');
  } if (otherRadio.checked) {
    howDidYouHear.push('Other');
  } 
  return howDidYouHear
}

// Function to get the selected contact methods
function getContactMethodValue() {
  let methods = [];
  if (phoneCheckbox.checked) {
    methods.push('Phone');
  }
  if (smsCheckbox.checked) {
    methods.push('SMS');
  }
  if (emailCheckbox.checked) {
    methods.push('Email');
  }
  return methods;
}
const front_end=async(formData)=>{
    let connection=fetch("http://localhost:3000/submit-form",{
      method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(formData),
    })
    const resdata=await connection;
    console.log(resdata)
}
console.log(getHowDidYouHearValue())
console.log(getContactMethodValue())

submitButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission
    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        city: cityInput.value,
        postcode: postcodeInput.value,
        suburb: suburbInput.value,
        streetAddress: streetAddressInput.value,
        serviceDate: serviceDateInput.value,
        time: timeInput.value,
        typeOfServices: typeOfServicesInput.value,
        comment: commentInput.value,
        howDidYouHear: getHowDidYouHearValue(),
        contactMethod: getContactMethodValue(),
        // durationOfCommercialCleanValue: durationOfCommercialCleanInput.value,
        // timeOfCommercialCleanValue: timeOfCommercialCleanInput.value,
        // numberOfEmployeForCommercialCleanValue: numberOfEmployeForCommercialCleanInput.value,
        // freeSiteInspectionValue: freeSiteInspectionInput.value

        
    };

    console.log(formData);
    front_end(formData);
    // Here you can do whatever you want with the formData, like sending it to a server via AJAX
});
});

