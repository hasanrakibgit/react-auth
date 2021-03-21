
import { useParams } from 'react-router-dom';
import './Destination.css'
import sample from "../../images/peopleicon.png";
import Map from '../Map/Map';


const Destination = () => {

    const { id } = useParams();


    return (
        <div className="main">
            <h1>You Choose to travel by {id}</h1>
            <div className="des-form">
                <div >
                    <form action="">
                        <label>Pick From</label><br />
                        <input type="text" name="name" placeholder="Please Type" /><br />
                        <label>Pick To</label><br />
                        <input type="text" name="name" placeholder="Please Type" /><br />
                        <input type="submit" />
                    </form>
                </div>
                <div >
                    <div className="toggle">
                        <div className="row">
                            <div className="column"><img src={sample} alt="" /></div>
                        </div>
                        <div className="row">
                            <div className="column"><img src={sample} alt="" /></div>
                        </div>
                        <div className="row">
                            <div className="column"><img src={sample} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="map">
                <Map></Map>

            </div>

        </div>
    );
};
export default Destination;


