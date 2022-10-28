const content = document.getElementById('content');

const detail = (details) => {
  const currency = details.currencies;
  const { languages } = details;
  const { borders } = details;

  const getCurrency = () => {
    let curren = '';
    Object.values(currency).forEach((curr) => {
      curren += `${curr.name} `;
    });
    return curren;
  };

  const getLanguages = () => {
    let lan = '';
    Object.values(languages).forEach((language) => {
      lan += `${language} `;
    });
    return lan;
  };

  const getBorderCountries = () => {
    let bord = '';
    if (details.borders && borders.length) {
      borders.forEach((border) => {
        bord += `<button class="px-7 py-1 shadow border">${border}</button> `;
      });
    } else {
      bord += 'Not Available';
    }
    return bord;
  };

  const html = `<section class="px-4 md:px-20 w-full py-10">
  <button type="button" class="back flex items-center gap-2 px-5 py-2 border shadow-md">
    <span><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg></span>
    <span>Back</span>
  </button>
  
  <section id="country-details" class="mt-16 md:flex gap-20 items-center">
    <div class="c-img">
      <img src="${details.flags.svg}" alt="Country Flag" class="w-98">
    </div>
  
    <section class="md:flex md:flex-col">
      <div class="md:flex gap-40">
        <div>
          <h3 class="mt-10 md:mt-0 font-extrabold text-3xl md:text-2xl">${
  details.name.common
}</h3>
        
          <div class="mt-4">
            <p class="text-md">
              <span class="font-bold">Native Name: </span>
              <span>2,930,120</span>
            </p>
            <p class="text-md my-2">
              <span class="font-bold">Population: </span>
              <span>${details.population.toLocaleString('en-US')}</span>
            </p>
            <p class="text-md my-2">
              <span class="font-bold">Region: </span>
              <span>Africa</span>
            </p>
            <p class="text-md my-2">
              <span class="font-bold">Sub Region: </span>
              <span>${details.region}</span>
            </p>
            <p class="text-md">
              <span class="font-bold">Capital: </span>
              <span>${details.capital}</span>
            </p>
          </div>
        </div>
  
        <div class="mt-10">
          <p class="text-md">
            <span class="font-bold">Top Level Domain: </span>
            <span>${details.tld[0]}</span>
          </p>
          <p class="text-md my-2">
            <span class="font-bold">Currencies: </span>
            <span>${getCurrency()}</span>
          </p>
          <p class="text-md my-2">
            <span class="font-bold">Languages: </span>
            <span>${getLanguages()}</span>
          </p>
        </div>
      </div>
  
      <div class="mt-7 md:flex md:items-center md:gap-4">
        <h3 class="font-bold">Border Countries:</h3>
  
        <div class="mt-4 md:mt-0">
          ${getBorderCountries()}
        </div>
      </div>
    </section>
  
  </section>
  
  </section>`;
  return html;
};

const populate = (data) => {
  const html = detail(data);
  content.innerHTML = html;
};

export default populate;
