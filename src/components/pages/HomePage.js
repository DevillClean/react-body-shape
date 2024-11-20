import Contacts from "../contacts/ContactsBloc";
import FooterBloc from "../footer/FooterBloc";
import Header from "../header/Header";
import SectionTrainers from "../section-1/SectionTrainers";
import SectionBest from "../section-2/SectionBest";
import SectionGroup from "../section-3/SectionGroup";

const HomePage = () => {
    return ( 
        <>
            <Header />
            <SectionTrainers />
            <SectionBest />
            <SectionGroup />
            <Contacts />
        </>
     );
}
 
export default HomePage;