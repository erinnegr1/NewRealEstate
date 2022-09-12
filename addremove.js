const addressSearch = document.querySelector(".street-address"); //address searchbar
const propertySearch = document.querySelector(".property-type"); //property dropdown
const citySearch = document.querySelector(".city"); //city searchbar
const stateSearch = document.querySelector(".state"); //state dropdown

//Submit Button
const submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", function() {
    let addressInput = addressSearch.value;
    let propertyInput = propertySearch.value;
    let cityInput = citySearch.value;
    let stateInput = stateSearch.value;
  
    const li = document.createElement("li");
    console.log(addressInput + propertyInput + cityInput + stateInput);
    li.textContent = addressInput + propertyInput + cityInput + stateInput;
    const ul = document.querySelector("ul");
    ul.appendChild("li");
});


//Street Address
const street = document.querySelector(".street-address");
street.addEventListener("input", function () {
    return street.input.value;
    //input information needs to be added to searchEngine in the 'address' key
});