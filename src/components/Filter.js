const filter = `<!-- Filter Section -->
<section id="filter-section" class="px-4 sm:px-10 md:px-20 mt-10 flex flex-col justify-center items-start md:flex-row md:justify-between">
  <form id="search" class="w-full md:w-auto">
    <div>
      <label for="country" hidden></label>
      <div class="form-control flex border shadow-md p-4 md:p-3 items-center">
        <span>
          <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </span>
        <input type="text" id="country" name="country" placeholder="Search for a country..." class="px-2 focus:outline-none w-full md:w-72">
      </div>
    </div>
  </form>

  <div id="filter-country" class="mt-6 md:mt-0">
    <form id="select-form">
    <select name="filter" id="filter" class="focus:outline-none shadow-md px-5 py-3 border w-56">
      <option value="default">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="americas">Americas</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
    </form>
  </div>
</section>`;

const renderFilter = () => filter;

export default renderFilter;
