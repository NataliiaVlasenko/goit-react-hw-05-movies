import { Link} from "react-router-dom";
import { nanoid } from 'nanoid';
import { useLocation } from 'react-router-dom';


export const MovieList = ({movies}) => {

const location = useLocation();

    const elements = movies.map(({id, title, name}) => 
    
    <li key={id + nanoid()}>
                <Link  to={`/movies/${id}`} state={ {from: location} }>{title || name}</Link>
        </li>);


    return <ul>{elements}</ul>
}

