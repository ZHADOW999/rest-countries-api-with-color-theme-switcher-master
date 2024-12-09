//import axios from "axios";
import { Link } from "react-router-dom";
const CountryCard = ({country}) => {
   
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
            {country.map((item,index) => (
                <Link to={`/country/${item.name.common}`} key={item.ccn3}>
                    <div className="transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer rounded-md bg-light-mode-element text-light-mode-text dark:bg-dark-mode-element dark:text-dark-mode-text shadow-lg" key={index}>
                        <img className="w-full h-44 sm:h-32" src={item.flags.png} alt={`Flag of ${item.name.common}`} />
                        <div className="p-6">
                            <h1 className="font-Ns-bold  capitalize text-lg mb-2">{item.name.common}</h1>
                            <span className="space-y-2">
                                <p className="font-Ns-regular text-sm">
                                    <span className="font-Ns-bold">Population:</span> {item.population.toLocaleString()}
                                </p>
                                <p className="font-Ns-regular text-sm">
                                    <span className="font-Ns-bold">Region:</span> {item.region}
                                </p>
                                <p className="font-Ns-regular text-sm">
                                    <span className="font-Ns-bold">Capital:</span> {item.capital}
                                </p>
                            </span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
     );
}
 
export default CountryCard;