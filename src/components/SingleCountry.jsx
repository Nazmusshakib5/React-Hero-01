import '../assets/css/SingleCountry.css'
const SingleCountry = ({country}) => {
    const {name,flags,population,area}=country
    console.log(country)
    return (
        <div className='SingleCountry'>
            <p>Country name : {name.common}</p>
            <img src={flags.png} alt="image" />
            <p>population : {population}</p>
            <p>area : {area}</p>
        </div>
    );
};

export default SingleCountry;