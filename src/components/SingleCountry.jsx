import { useState } from 'react';
import '../assets/css/SingleCountry.css'
import Details from './Details';
const SingleCountry = ({country,handleVisitedCountry}) => {
    const [visit,setVisit]=useState(false)
    const {name,flags,population,area,cca2}=country
    function visitStatus (){
        setVisit(!visit);
    }
    return (
        <div className={`SingleCountry ${visit && 'visited'}`}>
            <p style={{color: visit ? 'yellow' : 'white'}}>{name.common}</p>
            <img src={flags.png} alt="image" />
            <p>population : {population}</p>
            <p>area : {area}</p>
            <p>{cca2}</p>
            <div>
            <button onClick={()=>{
                handleVisitedCountry(country)
            }}>{visit ? "Mark as Visited":"Mark as Going"}</button>
            <button onClick={visitStatus}>{visit ? "Visited":"Going"}</button>
            </div>
            <Details country={country} handleVisitedCountry={handleVisitedCountry}></Details>
        </div>
    );
};

export default SingleCountry;