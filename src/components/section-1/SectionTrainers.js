import trainer1 from "../../img/trainers/trainer-01.jpg";
import trainer2 from "../../img/trainers/trainer-02.jpg";
import trainer3 from "../../img/trainers/trainer-03.jpg";
import trainer4 from "../../img/trainers/trainer-04.jpg";
import trainer5 from "../../img/trainers/trainer-05.jpg";
import trainer6 from "../../img/trainers/trainer-06.jpg";
import trainer7 from "../../img/trainers/trainer-07.jpg";
import trainer8 from "../../img/trainers/trainer-08.jpg";



const SectionTrainers = () => {
	return ( 
		<section className="section section-trainers">
		<div className="container">
			<header className="section-header">
				<h2 className="section-title">ПЕРСОНАЛЬНЫЕ <br />ТРЕНЕРЫ</h2>
				<div className="section-desc">
					<p>В нашей команде профессиональные тренеры, которые помогут вам достичь ваших фитнес-целей.
						Индивидуальный подход,
						мотивация и поддержка на каждом этапе вашего пути к успеху.</p>
				</div>
			</header>

			<div className="section-trainers-grid">

				<a href="#" className="card-trainer">
					<div className="card-trainer-name">Олександр Турченко</div>
					<img className="card-trainer-img" src={trainer1}
						srcset="./img/trainers/trainer-01@2x.jpg 2x" alt="Trainer" />
				</a>

				<a href="#" className="card-trainer">
					<div className="card-trainer-name">Елена Витмар</div>
					<img className="card-trainer-img" src={trainer2}
						srcset="./img/trainers/trainer-02@2x.jpg 2x" alt="Trainer" />
				</a>
				<a href="#" className="card-trainer">
					<div className="card-trainer-name">Олексей Зайченко</div>
					<img className="card-trainer-img" src={trainer3}
						srcset="./img/trainers/trainer-03@2x.jpg 2x" alt="Trainer" />
				</a>
				<a href="#" className="card-trainer">
					<div className="card-trainer-name">Влад Зинченко</div>
					<img className="card-trainer-img" src={trainer4}
						srcset="./img/trainers/trainer-04@2x.jpg 2x" alt="Trainer" />
				</a>

				<a href="#" className="card-trainer">
					<div className="card-trainer-name">Том Оливер</div>
					<img className="card-trainer-img" src={trainer5}
						srcset="./img/trainers/trainer-05@2x.jpg 2x" alt="Trainer" />
				</a>

				<a href="#" className="card-trainer">
					<div className="card-trainer-name">Наталья Виниченко</div>
					<img className="card-trainer-img" src={trainer6}
						srcset="./img/trainers/trainer-06@2x.jpg 2x" alt="Trainer" />
				</a>

				<a href="#" className="card-trainer">
					<div className="card-trainer-name">Анна Волкова</div>
					<img className="card-trainer-img" src={trainer7}
						srcset="./img/trainers/trainer-07@2x.jpg 2x" alt="Trainer" />
				</a>

				<a href="#" className="card-trainer">
					<div className="card-trainer-name">Анна Остапова</div>
					<img className="card-trainer-img" src={trainer8}
						srcset="./img/trainers/trainer-08@2x.jpg 2x" alt="Trainer" />
				</a>
			</div>
		</div>
		</section>
	 );
}
 
export default SectionTrainers;
