import {useEffect, useState} from "react";
import axios from "axios";

const usePage = () => {
    const [aPIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setAPIData(response.data.slice(0,10));
            })
    }, [])
    return {aPIData}
}

export default usePage
