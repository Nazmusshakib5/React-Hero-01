

const InnerDetails = (props) => {
    const {country,handleVisitedCountry}=props;
    return (
        <div>
            <p>{country.cca3}</p>
        </div>
    );
};

export default InnerDetails;