import { useEffect, useState } from "react";
import SingleCountry from "./SingleCountry";
import  '../assets/css/Countries.css' 
import '../assets/css/SingleCountry.css'

const Countries = () => {
    const [country,setCountry]=useState([]);
    const [viewedCountry,setVisitedCountry]=useState([]);
    useEffect(()=>{
        const url='https://restcountries.com/v3.1/all';
        let searchCountry=async()=>{
            const res=await fetch(url);
            const data= await res.json();
            setCountry(data);
        }
        searchCountry();
    },[])

    const handleVisitedCountry=(country)=>{
        let newVisitedCountry=[...viewedCountry,country]
        setVisitedCountry(newVisitedCountry)
    }

    return (
        <div>
            <h2> Total Countries : {country.length}</h2>
            <div>
                <h2>Visited Country : {viewedCountry.length}</h2>
                <ul>
                    {
                        viewedCountry.map(item => <li key={item.cca3}>
                            <div className="SingleCountry visited">
                                <h2>{item.name.common}</h2>
                            </div>
                        </li>)
                    }
                </ul>
            </div>
            <div className="country-container">
            {country.map((item,index) => <SingleCountry
                key={item.cca3} country={item} 
                handleVisitedCountry = {handleVisitedCountry}
                ></SingleCountry>)}
            </div>
        </div>
        
    );
};

export default Countries;