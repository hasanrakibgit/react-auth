import React from 'react';
import { useParams } from 'react-router-dom';
import "./DestinaTionForm.css";
import sample from "../../images/peopleicon.png";

const DestinationForm = () => {
    const { id } = useParams();
    return (
        <div>
             <h1>You Choose to travel by {id}</h1>
            <div className="des-form">
                <form  action="">
                    <label>Pick From</label><br />
                    <input type="text" name="name" placeholder="Please Type" /><br />
                    <label>Pick To</label><br />
                    <input type="text" name="name" placeholder="Please Type" /><br />
                    <label>Pick Date</label><br/>
                    <input type="date"/><br/>
                    <input type="submit" />
                </form>
            </div>
            <div className="result">
                <img src={sample} alt="" />
                <img src={sample} alt="" />
                <img src={sample} alt="" />
            </div>
        </div>
    );
};

export default DestinationForm;