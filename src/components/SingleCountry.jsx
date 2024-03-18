
const SingleCountry = ({country}) => {
    const {name}=country
    console.log(country)
    return (
        <div>
            <p>Country name : {name.common}</p>
        </div>
    );
};

export default SingleCountry;