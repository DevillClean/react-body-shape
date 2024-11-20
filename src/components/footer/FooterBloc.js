import vk from "../../img/socials/vk.svg";
import tg from "../../img/socials/telegram.svg";
import ru from "../../img/socials/rutube.svg";
import dz from "../../img/socials/dzen.svg";

import { ReactComponent as Logo } from '../../img/socials/telegram.svg'

import './style.css'
const FooterBloc = () => {
    return ( 
        <footer className="footer">
		<div className="container">
			<ul className="footer-socials">
				<li><a href="#!"><img src={vk} alt="Social" className="vk" /></a></li>
				<li><a href="#!"><img src={ru} alt="Social" /></a></li>
				<li><a href="#!"><img src={dz} alt="Social" /></a></li>
				<li><a href="#!"><Logo src={tg} alt="Social" className="logo"/></a></li>
			</ul>
			<div className="footer-contacts">
				<div className="footer-contacts-col">
					<address>
						г. Кропивницкий, ул. Волкова, 14/1 <br />
						Украина
					</address>
				</div>
				<div className="footer-contacts-col">
					<p>
						Телефон <a href="tel:+78001234567">+(380) 95 812 37 94</a><br />
						<a href="mailto:info@bodyshape.ru">info@bodyshape.ua</a>
					</p>

				</div>
			</div>
		</div>
	</footer>
    );
}
 
export default FooterBloc;