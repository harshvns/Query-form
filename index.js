
document.getElementById('quoteForm').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var formFields = document.getElementsByClassName('form-field');

    for (var i = 0; i < formFields.length; i++) {
        formFields[i].addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                var currentIndex = Array.from(formFields).indexOf(event.target);
                var nextIndex = currentIndex + 1;

                if (nextIndex < formFields.length) {
                    formFields[nextIndex].focus();
                }
            }
        });
    }
});

document.addEventListener('change', function () {
    console.log('durationOfCommercialClean', document.getElementById('additional-section'));
    console.log('durationOfCommercialClean', document.getElementById('durationOfCommercialClean'));
});

// document.getElementById('durationOfCommercialClean').addEventListener('change', function () {
//     const var =
//         console.log('durationOfCommercialCleanValue', this.value);
// });

function showAdditionalSection() {
    var serviceSelect = document.getElementById('typeOfServices')
    console.log(serviceSelect)
    var additionalSection = document.getElementById('additional-section')
    var addOther = document.querySelector('.addOther')
    var selectedService = serviceSelect.options[serviceSelect.selectedIndex];
    const selectedValue = selectedService.value;
    console.log(selectedService)
    // console.log(selectedValue)
    const xyz = selectedService.innerHTML;
    console.log(xyz)
    additionalSection.innerHTML = '';
    addOther.innerHTML = '';

    const getElementById = document.getElementById('durationOfCommercialClean');
    console.log(getElementById)

    switch (xyz) {
        case 'Commercial/Office Cleaning':
            var newElement = document.createElement("div");

            newElement.innerHTML = `
                < div class="main_commercial" >
                    <div class="Commercial">
                        <h2>Commercial/Office Cleaning</h2>
                        <label for="">How often would you like to get your premises cleaned?</label>
                        <br>
                            <select name="" id="durationOfCommercialClean" >

                                <option value="">Select</option>
                                <option value="">1 day per week</option>
                                <option value="">2 day per week</option>
                                <option value="">3 day per week</option>
                                <option value="">4 day per week</option>
                                <option value="">5 day per week</option>
                                <option value="">6 day per week</option>
                                <option value="">7 day per week</option>
                                <option value="">Other</option>
                            </select>
                            <br>

                                <label for="">What time would you like to get your premises cleaned?</label>
                                <br>
                                    <select name="" id="timeOfCommercialClean">

                                        <option value="">Select</option>
                                        <option value="">After Business Hours</option>
                                        <option value="">During Business Hours</option>
                                    </select>

                                    <br>
                                        <label for="">
                                            Approximate Number of Employees working at your premises?</label>
                                        <br>
                                            <select name="" id="numberOfEmployeForCommercialClean">

                                                <option value="">Select</option>
                                                <option value="">Less than 10</option>
                                                <option value="">Between 10 to 50</option>
                                                <option value="">More than 50</option>
                                            </select>

                                            <br>

                                                <label for="service">When would you like to have a Free Site Inspection to get a No obligation Quote?</label>
                                                <br>
                                                    <input type="date" id="freeSiteInspection">
                                                    </div>
                                                </div>

                                                `;
            // const inputtag = document.createElement("input")
            // const additional_section =  document.getElementById("additional-section")
            // additionalSection.appendChild(inputtag)
            // additionalSection.innerHTML = newElement.innerHTML;
            additionalSection.appendChild(newElement);
            break;
        case 'Spring Cleaning':
            additionalSection.innerHTML = `
                                                <div class="spring_property">
                                                    <div class="springProperty">
                                                        <h2>Property Details</h2>
                                                        <label for="">Type of Property</label>
                                                        <br>
                                                            <select name="" id="typeOfProperty" >

                                                                <option value="">Select</option>
                                                                <option value="">Studio</option>
                                                                <option value="">Unit/Apartment</option>
                                                                <option value="">House</option>
                                                            </select>

                                                            <br>

                                                                <label for="">Will the property Empty or Furnished at the time of clean?</label>
                                                                <br>
                                                                    <select name="" id="" >

                                                                        <option value="">Select</option>
                                                                        <option value="">Unfurnished and Empty</option>
                                                                        <option value="">Furnished</option>
                                                                    </select>

                                                                    <br>

                                                                        <label for="">Number of Bedrooms</label>
                                                                        <br>
                                                                            <select name="" id="" >

                                                                                <option value="">0</option>
                                                                                <option value="">1</option>
                                                                                <option value="">2</option>
                                                                                <option value="">3</option>
                                                                                <option value="">4</option>
                                                                                <option value="">5</option>
                                                                                <option value="">6</option>

                                                                            </select>

                                                                            <br>

                                                                                <label for="">Number of Bathrooms</label>
                                                                                <br>
                                                                                    <select name="" id="" >

                                                                                        <option value="">0</option>
                                                                                        <option value="">1</option>
                                                                                        <option value="">2</option>
                                                                                        <option value="">3</option>
                                                                                        <option value="">4</option>
                                                                                        <option value="">5</option>

                                                                                    </select>

                                                                                    <br>

                                                                                        <label for="">Number of Floors</label>
                                                                                        <br>
                                                                                            <select name="" id="" >

                                                                                                <option value="">Slect</option>
                                                                                                <option value="">Single Story</option>
                                                                                                <option value="">Double Story</option>
                                                                                                <option value="">Triple Story</option>
                                                                                            </select>

                                                                                            <br>

                                                                                                <label for="">Number of Study Rooms</label>
                                                                                                <br>
                                                                                                    <select name="" id="" >

                                                                                                        <option value="">0</option>
                                                                                                        <option value="">1</option>
                                                                                                        <option value="">2</option>
                                                                                                        <option value="">3</option>
                                                                                                    </select>

                                                                                                    <br>

                                                                                                        <label for="">Number of Living Rooms</label>
                                                                                                        <br>
                                                                                                            <select name="" id="" >

                                                                                                                <option value="">0</option>
                                                                                                                <option value="">1</option>
                                                                                                                <option value="">2</option>
                                                                                                                <option value="">3</option>
                                                                                                            </select>

                                                                                                            <br>

                                                                                                                <label for="">How would you like your carpets cleaned?</label>
                                                                                                                <br>
                                                                                                                    <select name="" id="" >

                                                                                                                        <option value="">Select</option>
                                                                                                                        <option value="">Steam Cleaned</option>
                                                                                                                        <option value="">Vacuumed Only</option>
                                                                                                                        <option value="">I don't have carpets</option>
                                                                                                                    </select>
                                                                                                                </div>
                                                                                                            </div>

                                                                                                            <br>
                                                                                                                <div class="ExtraServices">

                                                                                                                    <h2>Most of our Customers added below Extra Services<h2>
                                                                                                                        <br>
                                                                                                                            <div class="Extra_Services">
                                                                                                                                <div>
                                                                                                                                    <label for="Fridge Cleaning">Fridge Cleaning</label>
                                                                                                                                    <br>
                                                                                                                                        <label for="Yes">Yes</label>
                                                                                                                                        <input type="radio" name="Fridge" id="Yes">
                                                                                                                                            <label for="No">No</label>
                                                                                                                                            <input type="radio" name="Fridge" value="default" id="No" checked>
                                                                                                                                            </div>

                                                                                                                                            <div>
                                                                                                                                                <label for="Microwave Cleaning">Microwave Cleaning</label>
                                                                                                                                                <br>
                                                                                                                                                    <label for="Yes">Yes</label>
                                                                                                                                                    <input type="radio" name="Microwave" id="Yes">
                                                                                                                                                        <label for="No">No</label>
                                                                                                                                                        <input type="radio" name="Microwave" value="default" id="No" checked>
                                                                                                                                                        </div>

                                                                                                                                                        <div>
                                                                                                                                                            <label for="Washing Machine Cleaning">Washing Machine Cleaning</label>
                                                                                                                                                            <br>
                                                                                                                                                                <label for="Yes">Yes</label>
                                                                                                                                                                <input type="radio" name="Washing" id="Yes">
                                                                                                                                                                    <label for="No">No</label>
                                                                                                                                                                    <input type="radio" name="Washing" value="default" id="No" checked>
                                                                                                                                                                    </div>

                                                                                                                                                                    <div>
                                                                                                                                                                        <label for="Garage Internal Clean">Garage Internal Clean</label>
                                                                                                                                                                        <br>
                                                                                                                                                                            <label for="Yes">Yes</label>
                                                                                                                                                                            <input type="radio" name="Garage" id="Yes">
                                                                                                                                                                                <label for="No">No</label>
                                                                                                                                                                                <input type="radio" name="Garage" value="default" id="No" checked>
                                                                                                                                                                                </div>

                                                                                                                                                                                <div>
                                                                                                                                                                                    <label for="Balcony Clean">Balcony Clean</label>
                                                                                                                                                                                    <br>
                                                                                                                                                                                        <label for="Yes">Yes</label>
                                                                                                                                                                                        <input type="radio" name="Balcony" id="Yes">
                                                                                                                                                                                            <label for="No">No</label>
                                                                                                                                                                                            <input type="radio" name="Balcony" value="default" id="No" checked>
                                                                                                                                                                                            </div>

                                                                                                                                                                                            <div>
                                                                                                                                                                                                <label for="Oven Cleaning">Oven Cleaning</label>
                                                                                                                                                                                                <br>
                                                                                                                                                                                                    <label for="Yes">Yes</label>
                                                                                                                                                                                                    <input type="radio" name="Oven" id="Yes">
                                                                                                                                                                                                        <label for="No">No</label>
                                                                                                                                                                                                        <input type="radio" name="Oven" value="default" id="No" checked>
                                                                                                                                                                                                        </div>

                                                                                                                                                                                                        <div>
                                                                                                                                                                                                            <label for="External Window Cleaning">External Window Cleaning Clean</label>
                                                                                                                                                                                                            <br>
                                                                                                                                                                                                                <label for="Yes">Yes</label>
                                                                                                                                                                                                                <input type="radio" name="External" id="Yes">
                                                                                                                                                                                                                    <label for="No">No</label>
                                                                                                                                                                                                                    <input type="radio" name="External" value="default" id="No" checked>
                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                    <br>
                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                <br>

                                                                                                                                                                                                                    <div class="OtherServices">

                                                                                                                                                                                                                        <h2>Any other Services would you like us to help ?<h2>
                                                                                                                                                                                                                            <br>
                                                                                                                                                                                                                                <div class="Other_Services">
                                                                                                                                                                                                                                    <div>
                                                                                                                                                                                                                                        <label for="Lawn Mowing">Lawn Mowing</label>
                                                                                                                                                                                                                                        <br>
                                                                                                                                                                                                                                            <label for="Yes">Yes</label>
                                                                                                                                                                                                                                            <input type="radio" name="Lawn" id="Yes">
                                                                                                                                                                                                                                                <label for="No">No</label>
                                                                                                                                                                                                                                                <input type="radio" name="Lawn" value="default" id="No" checked>
                                                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                                                <div>
                                                                                                                                                                                                                                                    <label for="Pest Control">Pest Control</label>
                                                                                                                                                                                                                                                    <br>
                                                                                                                                                                                                                                                        <label for="Yes">Yes</label>
                                                                                                                                                                                                                                                        <input type="radio" name="Pest" id="Yes">
                                                                                                                                                                                                                                                            <label for="No">No</label>
                                                                                                                                                                                                                                                            <input type="radio" name="Pest" value="default" id="No" checked>
                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                            <div>
                                                                                                                                                                                                                                                                <label for="Rubbish Removal">Rubbish Removal</label>
                                                                                                                                                                                                                                                                <br>
                                                                                                                                                                                                                                                                    <label for="Yes">Yes</label>
                                                                                                                                                                                                                                                                    <input type="radio" name="Rubbish" id="Yes">
                                                                                                                                                                                                                                                                        <label for="No">No</label>
                                                                                                                                                                                                                                                                        <input type="radio" name="Rubbish" value="default" id="No" checked>
                                                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                                                        <div>
                                                                                                                                                                                                                                                                            <label for="Painting Services">Painting Services</label>
                                                                                                                                                                                                                                                                            <br>
                                                                                                                                                                                                                                                                                <label for="Yes">Yes</label>
                                                                                                                                                                                                                                                                                <input type="radio" name="Painting" id="Yes">
                                                                                                                                                                                                                                                                                    <label for="No">No</label>
                                                                                                                                                                                                                                                                                    <input type="radio" name="Painting" value="default" id="No" checked>
                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                        <br>


                                                                                                                                                                                                                                                                            `;
            break;

        case 'Carpet,Upholstery Steam and Leather Cleaning':
            additionalSection.innerHTML = `
                                                                                                                                                                                                                                                                            <div class="leather_property">
                                                                                                                                                                                                                                                                                <div class="leatherProperty">
                                                                                                                                                                                                                                                                                    <h2>Property Details</h2>

                                                                                                                                                                                                                                                                                    <label for="">Number of Carpeted Bedrooms</label>
                                                                                                                                                                                                                                                                                    <br>

                                                                                                                                                                                                                                                                                        <select name="" id="upholsteryProperty" >

                                                                                                                                                                                                                                                                                            <option value="">0</option>
                                                                                                                                                                                                                                                                                            <option value="">1</option>
                                                                                                                                                                                                                                                                                            <option value="">2</option>
                                                                                                                                                                                                                                                                                            <option value="">3</option>
                                                                                                                                                                                                                                                                                            <option value="">4</option>
                                                                                                                                                                                                                                                                                            <option value="">5</option>
                                                                                                                                                                                                                                                                                            <option value="">6</option>
                                                                                                                                                                                                                                                                                        </select>
                                                                                                                                                                                                                                                                                        <br>

                                                                                                                                                                                                                                                                                            <label for="">Number of Carpeted Living Rooms</label>
                                                                                                                                                                                                                                                                                            <br>
                                                                                                                                                                                                                                                                                                <select name="" id="upholsteryProperty" >

                                                                                                                                                                                                                                                                                                    <option value="">0</option>
                                                                                                                                                                                                                                                                                                    <option value="">1</option>
                                                                                                                                                                                                                                                                                                    <option value="">2</option>
                                                                                                                                                                                                                                                                                                    <option value="">3</option>
                                                                                                                                                                                                                                                                                                </select>
                                                                                                                                                                                                                                                                                                <br>
                                                                                                                                                                                                                                                                                                    <label for="">Number of Carpeted Hallways</label>
                                                                                                                                                                                                                                                                                                    <br>
                                                                                                                                                                                                                                                                                                        <select name="" id="upholsteryProperty" >

                                                                                                                                                                                                                                                                                                            <option value="">0</option>
                                                                                                                                                                                                                                                                                                            <option value="">1</option>
                                                                                                                                                                                                                                                                                                            <option value="">2</option>
                                                                                                                                                                                                                                                                                                            <option value="">3</option>
                                                                                                                                                                                                                                                                                                        </select>
                                                                                                                                                                                                                                                                                                        <br>
                                                                                                                                                                                                                                                                                                            <label for="">Number of Carpeted Staircases</label>
                                                                                                                                                                                                                                                                                                            <br>
                                                                                                                                                                                                                                                                                                                <select name="" id="upholsteryProperty" >

                                                                                                                                                                                                                                                                                                                    <option value="">0</option>
                                                                                                                                                                                                                                                                                                                    <option value="">1</option>
                                                                                                                                                                                                                                                                                                                    <option value="">2</option>
                                                                                                                                                                                                                                                                                                                    <option value="">3</option>
                                                                                                                                                                                                                                                                                                                </select>
                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                                                                                        <br>
                                                                                                                                                                                                                                                                                                            <div class="OtherServices" >
                                                                                                                                                                                                                                                                                                                <h2>Most of our Customers added below Extra Services<h2>
                                                                                                                                                                                                                                                                                                                    <br>
                                                                                                                                                                                                                                                                                                                        <div class="Other_Services">
                                                                                                                                                                                                                                                                                                                            <div>
                                                                                                                                                                                                                                                                                                                                <label for="Do you need Couch/Sofa Steam Cleaning">Do you need Couch/Sofa Steam Cleaning</label>
                                                                                                                                                                                                                                                                                                                                <br>
                                                                                                                                                                                                                                                                                                                                    <label for="Yes">Yes</label>
                                                                                                                                                                                                                                                                                                                                    <input type="radio" name="Couch/Sofa" id="Yes">
                                                                                                                                                                                                                                                                                                                                        <label for="No">No</label>
                                                                                                                                                                                                                                                                                                                                        <input type="radio" name="Couch/Sofa" value="default" id="No" checked>
                                                                                                                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                                                                                                                        <div>
                                                                                                                                                                                                                                                                                                                                            <label for="Do you need Rug Steam Cleaning">Do you need Rug Steam Cleaning</label>
                                                                                                                                                                                                                                                                                                                                            <br>
                                                                                                                                                                                                                                                                                                                                                <label for="Yes">Yes</label>
                                                                                                                                                                                                                                                                                                                                                <input type="radio" name="Rug" id="Yes">
                                                                                                                                                                                                                                                                                                                                                    <label for="No">No</label>
                                                                                                                                                                                                                                                                                                                                                    <input type="radio" name="Rug" value="default" id="No" checked>
                                                                                                                                                                                                                                                                                                                                                    </div>

                                                                                                                                                                                                                                                                                                                                                    <div>
                                                                                                                                                                                                                                                                                                                                                        <label for="Do you need Mattress Steam Cleaning">Do you need Mattress Steam Cleaning</label>
                                                                                                                                                                                                                                                                                                                                                        <br>
                                                                                                                                                                                                                                                                                                                                                            <label for="Yes">Yes</label>
                                                                                                                                                                                                                                                                                                                                                            <input type="radio" name="Mattress" id="Yes">
                                                                                                                                                                                                                                                                                                                                                                <label for="No">No</label>
                                                                                                                                                                                                                                                                                                                                                                <input type="radio" name="Mattress" value="default" id="No" checked>
                                                                                                                                                                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                                                                                                                                                                <div>
                                                                                                                                                                                                                                                                                                                                                                    <label for="Do you need Leather Sofa Cleaning">Do you need Leather Sofa Cleaning</label>
                                                                                                                                                                                                                                                                                                                                                                    <br>
                                                                                                                                                                                                                                                                                                                                                                        <label for="Yes">Yes</label>
                                                                                                                                                                                                                                                                                                                                                                        <input type="radio" name="Fridge" id="Yes">
                                                                                                                                                                                                                                                                                                                                                                            <label for="No">No</label>
                                                                                                                                                                                                                                                                                                                                                                            <input type="radio" name="Fridge" value="default" id="No" checked>
                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                </div>

                                                                                                                                                                                                                                                                                                                                                                `;
            break;
        case 'Other':
            addOther.innerHTML = `
                                                                                                                                                                                                                                                                                                                                                                <label for="addOther">Other</label>
                                                                                                                                                                                                                                                                                                                                                                <br>
                                                                                                                                                                                                                                                                                                                                                                    <input type="text" id="addOther">
                                                                                                                                                                                                                                                                                                                                                                        `;

            break
        // Add more cases for other services
        default:
            // Hide additional section if no service is selected
            additionalSection.style.display = 'none';
    }

    // Show additional section
    additionalSection.style.display = 'block';

}

showAdditionalSection();