import { Spinner, Pagination } from "flowbite-react";
import CountryCard from "../components/countyCard";
import UseFetch from "../components/UseFetch";
import { useState } from "react";

const Home = () => {
    const { data: country, error, loading } = UseFetch("https://restcountries.com/v3.1/all");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    // Calculate the indices for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCountries = country ? country.slice(indexOfFirstItem, indexOfLastItem) : [];

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <section className="pt-10 bg-light-mode-bg dark:bg-dark-mode-bg min-h-screen transition-all duration-300 ease-in-out">
            <div className="w-[90%] mx-auto">

                <div className="flex justify-between items-center">
                    <form className="w-2/5 font-Ns-regular">
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <button type="submit" class=" absolute  inset-y-0 start-5 flex items-center ps-3 ">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </button>
                            <input type="search" id="default-search" class="indent-7 block w-full p-4 ps-10 text-sm text-gray-900 border rounded-lg bg-white focus:ring-gray-300 focus:border-gray-300 border-none dark:bg-dark-mode-element  dark:placeholder-gray-400 dark:text-white" placeholder="Search for a country..." required />
                            {/* <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                        </div>
                    </form>

                    <form class="w-1/6 font-Ns-regular">
                        {/* <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Filter by Region</label> */}
                        <select id="countries" class="bg-white border border-none text-gray-900 text-sm rounded-lg focus:ring-gray-300 focus:border-gray-300 block w-full p-2.5 dark:bg-dark-mode-element dark:border-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Filter by Region</option>
                            <option value="Africa">Africa</option>
                            <option value="Americas">Americas</option>
                            <option value="Asia">Asia</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                        </select>
                    </form>
                    
                </div>
                {loading && <div className="flex justify-center items-center h-screen"><Spinner aria-label="Extra large spinner example" size="xl" /></div>}
                {error && <div className="font-Ns-regular uppercase text-2xl flex justify-center items-center ">{error}</div>}
                {country && <CountryCard country={currentCountries} />}
                <Pagination
                    className="flex justify-center items-center mt-10 space-x-2"
                    currentPage={currentPage}
                    totalPages={Math.ceil((country ? country.length : 0) / itemsPerPage)}
                    onPageChange={paginate}
                    theme={{
                        button: {
                            base: 'px-4 py-2 rounded-md',
                            active: 'bg-blue-500 text-white',
                            inactive: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
                        },
                    }}
                />
            </div>

        </section>
    );
}

export default Home;