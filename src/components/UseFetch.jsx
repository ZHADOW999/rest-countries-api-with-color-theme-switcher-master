import axios from "axios";
import { useState, useEffect } from "react";const UseFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // setTimeout(() => {
            
        // }, 1000);
        setLoading(true);
        axios.get(url).then((res) => {
            setData(res.data);
            console.log(res.data)
            setError(null);
        }).catch((err) => {
            if (err.response && err.response.status === 404) {
                setError("Hmm, we couldn't find the data you're looking for. Please check the URL or try again later.");
            } else {
                setError("Oops! Something went wrong while fetching the data. Please give it another try!");
            }
            console.error(err);
        }).finally(() => {
            setLoading(false);
        });
    }, [url]);
    return { data, error, loading };
}
 
export default UseFetch;