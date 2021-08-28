const loadCountrys = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
 
}
loadCountrys();

const displayCountry = countries => {
    const countriesDiv = document.getElementById("countries");
    countries.forEach(country => {
       
        const div = document.createElement("div");
        div.classList.add("country");
        div.innerHTML = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <button onClick="loadCountryByName('${country.name}')">Drtails</button>
        `;
        countriesDiv.appendChild(div)
    });
}

const loadCountryByName = countryName => {
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = country => {
    window.scrollTo(0, 0);
    const { name, population, area, borders, callingCodes, altSpellings } = country;
    const countryDiv = document.getElementById('country-details')
    countryDiv.innerHTML = `
        <h3>${name}</h3>
        <p>Population : ${population}</p>
        <p>Area : ${area}</p>
        <p>Borders : ${borders}</p>
        <p>CallingCodes : ${callingCodes}</p>
        <p>Name Spelling : ${altSpellings}</p>
        <p>Language : ${country.languages[0].name} ${country.languages[0].nativeName}</p>
        <p>Currencies : ${country.currencies[0].code} ${country.currencies[0].name} ${country.currencies[0].symbol}</p>
        <img width="150px" src="${country.flag}">
    `;
    

} 