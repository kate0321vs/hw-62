import Sidebar from '../../components/Sidebar/Sidebar.tsx';
import MainContent from '../../components/MainContent/MainContent.tsx';
import MarketingCards from '../../components/MarketingCards/MarketingCards.tsx';

const Home = () => {

  return (
    <div className="container">
      <div className="mainContainer">
        <Sidebar />
        <MainContent />
      </div>
      <MarketingCards />
    </div>
  );
};

export default Home;