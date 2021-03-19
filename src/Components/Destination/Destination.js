
import { useParams } from 'react-router-dom';


const Destination = () => {
    
    const {id}= useParams();
   
    return (
        <div>
            <h1>You Choose to travel by {id}</h1>
        </div>
    );
};

export default Destination;