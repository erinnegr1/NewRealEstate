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
    li.textContent = `${addressSearch},  ${propertySearch}, 
         ${citySearch},  ${stateSearch}`;
    const ul = document.querySelector("ul");

    const deleteListing = document.createElement('button');
    deleteListing.textContent = "x";
    deleteListing.addEventListener('click',function() {
        this.parentElement.remove();
    })
    
    const commentBtn = document.createElement('button');
        commentBtn.innerText = "Add Comment";
        commentBtn.addEventListener('click', function () {
            const input = document.createElement("input");
            input.type = "text";
            input.innerText ="Add Comments"
            input.maxLength = 280;
            li.append(input);

            const saveBtn = document.createElement("button");
                saveBtn.innerText = "Save";
                saveBtn.addEventListener('click', () => {
                  let savedMessage = document.createElement("ul");
                  savedMessage = input.value;
                  li.append(savedMessage);
                })
                li.append(saveBtn);
        })
        
        li.append(deleteListing);
        li.append(commentBtn);
    ul.append(li);
});


//Street Address
// const street = document.querySelector(".street-address");
// street.addEventListener("input", function () {
//     return street.input.value;
//     //input information needs to be added to searchEngine in the 'address' key
// });