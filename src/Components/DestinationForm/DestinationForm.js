import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import sample from "../../images/peopleicon.png";
import "./DestinationForm.css";
import vData from "../Data/data.json";



const DestinationForm = () => {
    const { id } = useParams();
    const [show, setShow] = useState(false);

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

                </form>
                <button onClick={() => setShow(!show)}>Search</button>
                {
                    show ?
                        <div style={{ display: "flex", border: "1px solid black", marginTop: "20px", backgroundColor:"white"}}>
                            <img style={{ width: "70px", height: "40px", marginTop: "10px" }} src={vehicleDetails?.image} alt="" />
                            <h5 style={{ marginLeft: "10px", marginRight: "10px" }}>{vehicleDetails?.transportType}</h5>
                            <img style={{ width: "25px", height: "25px", marginTop: "20px" }} src={sample} alt="" />
                            <h5>{vehicleDetails?.capacity}</h5>
                            <h5 style={{ marginLeft: "30px" }}>BDT :{vehicleDetails?.rent}</h5>
                        </div> : null


                }
                {
                   show ?
                   <div style={{ display: "flex", border: "1px solid black", marginTop: "20px",backgroundColor:"white" }}>
                       <img style={{ width: "70px", height: "40px", marginTop: "10px" }} src={vehicleDetails?.image} alt="" />
                       <h5 style={{ marginLeft: "10px", marginRight: "10px" }}>{vehicleDetails?.transportType}</h5>
                       <img style={{ width: "25px", height: "25px", marginTop: "20px" }} src={sample} alt="" />
                       <h5>{vehicleDetails?.capacity}</h5>
                       <h5 style={{ marginLeft: "30px" }}>BDT :{vehicleDetails?.rent}</h5>
                   </div> : null 
                }
                {
                    show ?
                    <div style={{ display: "flex", border: "1px solid black", marginTop: "20px",backgroundColor:"white" }}>
                        <img style={{ width: "70px", height: "40px", marginTop: "10px" }} src={vehicleDetails?.image} alt="" />
                        <h5 style={{ marginLeft: "10px", marginRight: "10px" }}>{vehicleDetails?.transportType}</h5>
                        <img style={{ width: "25px", height: "25px", marginTop: "20px" }} src={sample} alt="" />
                        <h5>{vehicleDetails?.capacity}</h5>
                        <h5 style={{ marginLeft: "30px" }}>BDT :{vehicleDetails?.rent}</h5>
                    </div> : null
                }

            </div>

        </div>
    );
};

export default DestinationForm;