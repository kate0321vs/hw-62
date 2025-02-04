import { Carousel } from 'react-bootstrap';
import { useState } from 'react';

const CarouselImage = () => {
  const [index, setIndex] = useState(0);

  const projects = [
    {img: 'https://cdnn1.img.sputnik.az/img/42205/05/422050524_0:74:1920:1280_1920x0_80_0_0_62bda2d19a9109eb0b636ecbf83becd1.jpg',
    title: 'Brand Reputation Management'},
    {img: 'https://static.tildacdn.com/tild6432-3933-4031-a539-346261343164/__.png',
    title: 'Contextual Advertising'},
    {img: 'https://kartinkof.club/uploads/posts/2022-03/1648322519_1-kartinkof-club-p-serial-ofis-memi-1.jpg',
      title: 'Online Marketing'},
  ];

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container mb-5">
      <h2 className="my-4 text-center">Project</h2>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {projects.map((project, index) => (
          <Carousel.Item key={index}>
            <img className="carouselImg" src={project.img} alt=""/>
            <Carousel.Caption>
              <h3>{project.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
      );
    };

  export default CarouselImage;