import TeamCards from '../../components/TeamCards/TeamCards.tsx';
import Carousel from '../../components/CarouselImage/CarouselImage.tsx';


const AboutUs = () => {
  return (
    <div className="container pt-5">
      <Carousel />
      <div className="row justify-content-around gap-3">
        <h2 className='text-center mb-4'>Our Team</h2>
        <TeamCards/>
      </div>
    </div>
  );
};

export default AboutUs;