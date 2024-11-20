import './style.css'
import Card from '../program-cards/program-card'
import {projects} from './../helpers/helpersList'


const SectionGroup = () => {
    return ( 
		<section className="section section-groups">
		<div className="container">
			<header className="section-header">
				<h2 className="section-title">ПРОГРАММЫ <br/>И СЕКЦИИ</h2>
				<div className="section-desc">
					<p>Разнообразные тренировки и занятия для всех уровней подготовки. Найдите свою идеальную
						программу и начните путь к
						здоровью и силе.</p>
				</div>
			</header>

			<div className="section-groups-grid">
					{projects.map((projects, index) => {
						return <Card 
							key={index} 
							title={projects.title} 
							img={projects.img}
							index={index}
						/>;
					})}
			</div>
		</div>
		
	</section>
     );
}
 
export default SectionGroup;