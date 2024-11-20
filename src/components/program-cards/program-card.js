import { NavLink } from 'react-router-dom';
import './style.css'

const Card = ({title, img, index}) => {
    return ( 
        <NavLink to={`/section/${index}`}>
            <li className="card-group">
                <img 
                    src={img} srcset="./img/groups/program-01@2x.jpg 2x" alt={title}
                    className="card-group-img" 
                    />
                <h3 className="card-group-link">{title}</h3>
            </li>
        </NavLink>
     );
}
 
export default Card;