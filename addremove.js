// const addressSearch = document.querySelector(".street-address"); //address searchbar
// const propertySearch = document.querySelector(".property-type"); //property dropdown
// const citySearch = document.querySelector(".city"); //city searchbar
// const stateSearch = document.querySelector(".state"); //state dropdown

//Submit Button
const submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", function() {
    const li = document.createElement("li");
    const addressSearch = document.querySelector("input.street-address").value; //address searchbar
    const propertySearch = document.querySelector("input.property-type").value; //property dropdown
    const citySearch = document.querySelector("input.city").value; //city searchbar
    const stateSearch = document.querySelector("input.state").value; //state dropdown
  
    console.log(addressSearch + propertySearch +
        citySearch +stateSearch);
    li.textContent = `${addressSearch}  ${propertySearch} 
         ${citySearch}  ${stateSearch}`;
    const ul = document.querySelector("ul");
    ul.append(li);
});


//Street Address
// const street = document.querySelector(".street-address");
// street.addEventListener("input", function () {
//     return street.input.value;
//     //input information needs to be added to searchEngine in the 'address' key
// });