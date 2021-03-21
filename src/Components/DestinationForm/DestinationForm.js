import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import sample from "../../images/peopleicon.png";
import "./DestinationForm.css";
import vData from "../Data/data.json";



const DestinationForm = () => {
    const { id } = useParams();
    
    const [vehicles, setVehicles] = useState([]);
    useEffect(() => {
        setVehicles(vData);
    }, []);
    const vehicleDetails = vehicles.find(vehicle => vehicle.transportType == id);
    console.log(vehicleDetails);

    return (
        <div>
            <h1>You Choose to travel by {id}</h1>
            <div className="des-form">
                <form action="">
                    <label>Pick From</label><br />
                    <input type="text" name="name" placeholder="Please Type" /><br />
                    <label>Pick To</label><br />
                    <input type="text" name="name" placeholder="Please Type" /><br />
                    <label>Pick Date</label><br />
                    <input type="date" /><br />
                    <button type="submit">Search</button>
                </form>
            </div>
            <div >
                <img src={vehicleDetails?.image} alt="" />
                <h1>BDT :{vehicleDetails?.rent}</h1>
                <img src={sample} alt="" />
                <h1>Total Seat:{vehicleDetails?.capacity}</h1>
            </div>
        </div>
    );
};

export default DestinationForm;