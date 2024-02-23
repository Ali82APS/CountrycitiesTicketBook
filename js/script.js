let countrySelectBox = document.querySelector(".countrySelect");
let citySelect = document.querySelector(".citySelect");

let countriesData = {
  Iran:[Tehran,Kerman,Shiraz],
  Turkey:[Ezmir,Ankara],
  US:[Seattle,Newyork,chicago,mami]
};

countrySelectBox.addEventListener("change", function () {

  if (countrySelectBox.value === "Please Select") {
    citySelect.innerHTML = "";
    citySelect.innerHTML += "<option>Select City</option>";
  } else {
    let mainCountryName = countrySelectBox.value; // Us
    let mainCountryCities = countriesData[mainCountryName];

    citySelect.innerHTML = "";

    mainCountryCities.forEach(function (city) {
      citySelect.innerHTML += "<option>" + city + "</option>";
    });
  }
});



//---------------Ali82Aps------------------------------------------------------------------























