import { useEffect, useState } from "react";
import SingleCountry from "./SingleCountry";

const Countries = () => {
    const [country,setCountry]=useState([]);
    useEffect(()=>{
        const url='https://restcountries.com/v3.1/all';
        let searchCountry=async()=>{
            const res=await fetch(url);
            const data= await res.json();
            setCountry(data);
        }
        searchCountry();
    },[])
    return (
        <div>
            {country.map(item => <SingleCountry country={item}></SingleCountry>)}
        </div>
    );
};

export default Countries;