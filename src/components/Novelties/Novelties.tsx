import './Novelties.scss';
import React from 'react';
import { Carousel } from '../Carousel';
import { Img } from '../../types/Img';
import carouselImg from '../../img/Banner.png';

export const Novelties: React.FC = () => {
  const imgs:Img[] = [
    {
      id: 1,
      img: carouselImg,
      desc: 'photo 1',
    },
    {
      id: 2,
      img: carouselImg,
      desc: 'photo 1',
    },
    {
      id: 3,
      img: carouselImg,
      desc: 'photo 1',
    },
  ];

  return (
    <section className="novelties">
      <Carousel imgs={imgs} />
    </section>
  );
};
