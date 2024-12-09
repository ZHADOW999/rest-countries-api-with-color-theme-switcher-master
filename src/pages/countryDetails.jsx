//import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import UseFetch from "../components/UseFetch";
import { Link, useParams } from "react-router-dom";
import BorderCountries from "../components/BorderCountries";
const CountryDetails = () => {
  const BackBtn = () => {
    let navigate = useNavigate();
    navigate(-1);
  };
  const getNativeName = (nativeName) => {
    // Return the official name of the first language found in the nativeName object
    return nativeName ? Object.values(nativeName)[0]?.official || "N/A" : "N/A";
  };

  const { name } = useParams();
  const {
    data: country,
    error,
    loading,
  } = UseFetch(`https://restcountries.com/v3.1/name/${name}`);

  return (
    <>
      {country && country.length > 0 && (
        <section className=" pt-14 bg-light-mode-bg dark:bg-dark-mode-bg min-h-screen transition-all duration-300 ease-in-out">
          <div className=" dark:text-dark-mode-text text-light-mode-text m-auto w-[90%]">
            <div onClick={BackBtn}>
                <button
                  
                  className="rounded-md text-lg px-10 py-2 dark:bg-dark-mode-element bg-light-mode-element shadow-btn-shadow"
                >
                  <FontAwesomeIcon
                    className="mr-3 text-xl"
                    icon={faArrowLeftLong}
                  />{" "}
                  <Link to="/">Back</Link>
                </button>
            </div>
            <div className="gap-[10%] mt-20 flex flex-col md:flex-row ">
              <img
                className="mb-14 w-full h-72 md:w-[40%]"
                src={country[0].flags.png}
                alt={country[0].name.common}
              />
              <div>
                <div className="flex flex-col space-y-10 md:space-y-0 lg:flex-row lg:items-center lg:space-x-10">
                  <article className="space-y-4">
                    <h1 className="font-Ns-bold mb-10 capitalize text-3xl ">
                      {country[0].name.common}
                    </h1>

                    <p className="font-Ns-regular text-sm">
                      <span className="font-Ns-bold ">Native Name:</span>{" "}
                      {getNativeName(country[0].name.nativeName)}
                    </p>
                    <p className="font-Ns-regular text-sm">
                      <span className="font-Ns-bold">Population:</span>{" "}
                      {country[0].population.toLocaleString()}
                    </p>
                    <p className="font-Ns-regular text-sm">
                      <span className="font-Ns-bold">Region:</span>{" "}
                      {country[0].region}
                    </p>
                    <p className="font-Ns-regular text-sm">
                      <span className="font-Ns-bold">Sub Region:</span>{" "}
                      {country[0].subregion}
                    </p>

                    <p className="font-Ns-regular text-sm">
                      <span className="font-Ns-bold">Capital:</span>{" "}
                      {country[0].capital}
                    </p>
                  </article>

                  <article className="space-y-4">
                    <p className="font-Ns-regular text-sm">
                      <span className="font-Ns-bold">Top Level Domain:</span>{" "}
                      {country[0].tld}
                    </p>

                    <p className="font-Ns-regular text-sm">
                      <span className="font-Ns-bold">Currencies:</span>{" "}
                      {country[0].currencies
                        ? Object.values(country[0].currencies)
                            .map((currency) => currency.name)
                            .join(", ")
                        : "N/A"}
                    </p>

                    <p className="font-Ns-regular text-sm">
                      <span className="font-Ns-bold">Languages:</span>{" "}
                      {country[0].languages
                        ? Object.values(country[0].languages).sort().join(", ")
                        : "N/A"}
                    </p>
                  </article>
                </div>
                <BorderCountries borders={country[0].borders} />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CountryDetails;
