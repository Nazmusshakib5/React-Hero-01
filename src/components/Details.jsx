

//used for prop drilling

import InnerDetails from "./InnerDetails";

const Details = (props) => {
    const {country,handleVisitedCountry}=props;
    return (
        <div>
            <hr />
            <p>{country.name.common}</p>
            <hr />
            <InnerDetails {...props}></InnerDetails>
        </div>
    );
};

export default Details;