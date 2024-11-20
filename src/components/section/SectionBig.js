import { useParams } from 'react-router-dom';
import {projects} from '../helpers/helpersList'

const Section = () => {

    const {id} = useParams();
    const project = projects[id];

    return ( 
        <section className="section section-groups">
            <div className="container">
                <div className="container-card">
                    <img src={project.img} alt="Group" className="card-section" />
                </div>
                <div className="section-desc">
                     <h1 className="section-title">
                        {project.title}
                     </h1>
                </div>
                <div>
                    <h2 className='sub-title'>
                       {project.subtitle}
                    </h2>
                </div>
            </div>
        </section>
     );
}
 
export default Section;