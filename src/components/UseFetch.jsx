import axios from "axios";
import { useState, useEffect } from "react";
const UseFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            
            setLoading(true);
            axios.get(url).then((res) => {
                setData(res.data);
                setError(null);
            }).catch((err) => {
                setError('Failed to fetch data. Please try again later.');
                console.error(err);
            }).finally(() => {
                setLoading(false);
            });
        }, 10);
    }, [url]);
    return { data, error, loading };
}
 
export default UseFetch;