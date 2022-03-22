import React, { useEffect, useState } from "react";

const GeoLocation = () => {
    const [details, setDetails] = useState(null);

    //  Find my IP address
    useEffect(() => {
        const interval = setInterval(() => {
            console.log('This will run every second!');
            getUserGeolocationDetails()
            console.log("first")
          }, 5000);
          return () => clearInterval(interval);
    },[]);
    

    const getUserGeolocationDetails = () => {
        fetch(
            "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
        )
            .then(response => response.json())
            .then(data => setDetails(data));
    };

    return (
        <>
            <div className="row">
                <div className="col text-center">
                    <p className="mt-3">
                        <div className="row justify-content-center mt-3">
                            <div className="col-lg-6 text-center text-dark">
                                {details && (
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            Location :{" "} 
                                            {`${details.city}, ${details.country_name}(${details.country_code})`}
                                        </li>
                                        <li className="list-group-item">
                                            IP: {details.IPv4}
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </p>
                </div>
            </div>
        </>
    );
};

export default GeoLocation;