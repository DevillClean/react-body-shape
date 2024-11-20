import { NavLink } from "react-router-dom";

const SectionBest = () => {
    return ( 
      
                <section className="section-beast">
                <div className="container">
                    <div className="section-beast-title">РЕЖИМ ЗВЕРЯ</div>
                    <div className="section-beast-desc">
                        <p>Ультраинтенсивные тренировки для тех, кто стремится выйти за пределы своих возможностей. Силовые
                            и кардиотренировки
                            высокой интенсивности помогут развить выносливость, мощь и непоколебимую уверенность в себе.</p>
                    </div>
                    <div className="section-beast-btn-wrapper">
                <NavLink to='/contacts'>
                        <button className="button">
                                ЗАПИСАТЬСЯ
                        </button>
                </NavLink>
                    </div>
                </div>
            </section>
  );
}

export default SectionBest;