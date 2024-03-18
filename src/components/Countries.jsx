import { useEffect, useState } from "react";
import SingleCountry from "./SingleCountry";
import  '../assets/css/Countries.css' 

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
            <h2> Total Countries : {country.length}</h2>

            <div className="country-container">
            {country.map((item,index) => <SingleCountry key={item.cca3} country={item}></SingleCountry>)}
            </div>
        </div>
        
    );
};

export default Countries;