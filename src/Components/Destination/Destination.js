

import './Destination.css'

import Map from '../Map/Map';
import DestinationForm from '../DestinationForm/DestinationForm';


const Destination = () => {

    return (
        <div className="main">

            <div >
                <DestinationForm></DestinationForm>
            </div>

            <div>
                <Map></Map>
            </div>

        </div>
    );
};
export default Destination;


