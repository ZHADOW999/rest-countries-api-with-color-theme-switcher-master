import { Spinner, Pagination } from "flowbite-react";
import CountryCard from "../components/countyCard";
import UseFetch from "../components/UseFetch";
import UseFetchRegion from "../components/UseFetchRegion";
import { useState, useEffect } from "react";

const Home = () => {
    const { data: country, error, loading } = UseFetch("https://restcountries.com/v3.1/all");
    
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState(localStorage.getItem('searchQuery') || "");
    const [selectedRegion, setSelectedRegion] = useState(localStorage.getItem('selectedRegion') || "All");
    const itemsPerPage = 20;
    const [none, setNone] = useState("Oops! We couldn't find any countries matching your search.");

    
    const { region, loading: regionLoading, error: regionError } = UseFetchRegion(selectedRegion !== "All" ? selectedRegion : null);

    const combinedError = error || regionError;
    const combinedLoader = loading || regionLoading;
    const filteredCountries = (selectedRegion === "All" ? country : region) 
        ? (selectedRegion === "All" ? country : region).filter(c => 
            c.name.common.toLowerCase().includes(searchQuery.toLowerCase())
        ) 
        : [];

    // Calculate the indices for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCountries = filteredCountries.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Save search query and selected region to local storage
    useEffect(() => {
        localStorage.setItem('searchQuery', searchQuery);
        localStorage.setItem('selectedRegion', selectedRegion);
    }, [searchQuery, selectedRegion]);

    //Reset pagination when the selected region changes
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedRegion]);

    useEffect(() => {
        if (currentPage > Math.ceil(filteredCountries.length / itemsPerPage)) {
            setCurrentPage(1); // Reset to the first page if the current page exceeds the total pages
        }
    }, [filteredCountries]);
    

    return (
        <section className="pt-10 bg-light-mode-bg dark:bg-dark-mode-bg min-h-screen transition-all duration-200 ease-linear">
            <div className="w-[90%] mx-auto">

                <div className="flex justify-between sm:items-center space-y-10 sm:space-y-0 sm:flex-row flex-col">
                    <form className="lg:w-2/5 sm:w-1/2 font-Ns-regular w-full" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <button 
                            aria-label="Submit button"
                            type="submit" className="absolute inset-y-0 start-5 flex items-center ps-3">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </button>
                            <input
                                type="search"
                                id="default-search"
                                className="indent-7 block w-full p-4 ps-10 text-sm text-gray-900 border rounded-lg bg-white focus:ring-gray-300 focus:border-gray-300 border-none dark:bg-dark-mode-element dark:placeholder-gray-400 dark:text-white"
                                placeholder="Search for a country..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                required
                            />
                        </div>
                    </form>

                    <form className="2xl:w-1/6 sm:w-[30%] font-Ns-regular w-2/3">
                        <select 
                            aria-label="Select your country"
                            id="countries" 
                            className="cursor-pointer bg-white border border-none text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-300 block w-full p-2.5 dark:bg-dark-mode-element dark:border-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-300 dark:focus:border-gray-300"
                            value={selectedRegion}
                            onChange={(e) => setSelectedRegion(e.target.value)}
                            
                        >
                            <option aria-label="Filter by Region" value="All">Filter by Region</option>
                            <option aria-label="Africa" value="Africa">Africa</option>
                            <option aria-label="Americas" value="America">America</option>
                            <option aria-label="Asia" value="Asia">Asia</option>
                            <option aria-label="Europe" value="Europe">Europe</option>
                            <option aria-label="Oceania" value="Oceania">Oceania</option>
                        </select>
                    </form>
                    
                </div>
                {(combinedLoader) && <div className="flex justify-center items-center h-screen"><Spinner aria-label="Extra large spinner example" size="xl" /></div>}
                {combinedError && <div className="text-light-mode-text dark:text-white  font-Ns-regular text-center text-2xl flex justify-center items-center ">{combinedError}</div>}
                {country && <CountryCard country={currentCountries} />}
                {filteredCountries.length === 0 && !combinedError&& (<div className="flex justify-center items-center text-2xl font-Ns-regular text-light-mode-text text-center dark:text-white">{none}</div>)}

                <Pagination
                    className="flex justify-center items-center mt-10 pb-10"
                    currentPage={currentPage}
                    totalPages={Math.ceil(filteredCountries.length / itemsPerPage)}
                    onPageChange={paginate}
                    theme={{
                        button: {
                            base: 'px-4 py-2 rounded-md',
                            active: 'bg-black text-white',
                            inactive: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
                        },
                    }}
                />
            </div>

        </section>
    );
}

export default Home;