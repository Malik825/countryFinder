let searchBtn = document.getElementById('search-btn');
let countryInput = document.getElementById('country-inp');

let closeResults = ()=>{
    document.querySelector('#results').classList.add('active');

}
countryInput.addEventListener('click', closeResults)
searchBtn.addEventListener('click', async()=>{
  document.querySelector('#results').classList.remove('active');
    
    let countryName = await countryInput.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    fetch(finalURL).then((response)=>response.json())
    .then((data)=>{
    results.innerHTML = `
    <img src ="${data[0].flags.svg}" class="flag-img" />
    <h2>${data[0].name.common}</h2>
    <div class="wrapper">
        <div class="data-wrapper">
            <h4>capital:</h4>
            <span>${data[0].capital[0]}</span>
        </div>
    </div>
      <div class="wrapper">
        <div class="data-wrapper">
            <h4>Continent:</h4>
            <span>${data[0].continents[0]}</span>
        </div>
    </div>
      <div class="wrapper">
        <div class="data-wrapper">
            <h4>Population:</h4>
            <span>${data[0].population}</span>
        </div>
    </div>
      <div class="wrapper">
        <div class="data-wrapper">
            <h4>Currency:</h4>
            <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
        </div>
    </div>
     <div class="wrapper">
        <div class="data-wrapper">
            <h4>Common Languages:</h4>
            <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
        </div>
    </div>
    `
    }).catch(()=>{
        if(countryName.name == 0){
           results.innerHTML = `<h3>The input Field Cannot be empty</h3>` 
        }
        else{
            results.innerHTML = `<h3>Please Enter a valid country Name</h3>`
        }
    })

})