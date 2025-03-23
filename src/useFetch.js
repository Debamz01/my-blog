import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
const [stillLoading, setStillLOading] = useState(true);
const [error, setError] = useState(null);


    useEffect (() => {

        const abortControl = new AbortController ();
        setTimeout(() => {
            fetch(url, {signal: abortControl.signal })  
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch data');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setStillLOading(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('Fetch Aborted');
                    
                } else {
                    setStillLOading(false);
                    setError(err.message);                    
                }

            })
        }, 1000); 

        return () => abortControl.abort();
        }, [url]); 
    return { data, stillLoading, error }

}
 
export default useFetch;