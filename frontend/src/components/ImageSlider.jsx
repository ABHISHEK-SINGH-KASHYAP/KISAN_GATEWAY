import React from 'react';
import Slider from 'react-slick'

const images = [
  { url:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp2024155.jpg&f=1&nofb=1&ipt=f0774e1603f34647986bd8d4f722d0a1f168f720e1560f00c833cb157cf8a194&ipo=images', alt: 'Rice' },
  { url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.s4f5lmbsUrpXF3hhk7htmwHaE8%26pid%3DApi&f=1&ipt=66a08082746379fdcace4835bf217e7914fa03e4d95fb21b4568969311f6e890&ipo=images', alt: 'Wheat' },
  { url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.qgZ-0XgplL0kBr4i4Vg6lgHaFj%26pid%3DApi&f=1&ipt=6c4b20dc8d93fd29783593b746a02c28dd5e80d5074a5839e98e53a2f9f5cda7&ipo=images', alt: 'Pulses' },
  { url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.zJ-Lu0nuELhbVhxt-CcEAAHaEK%26pid%3DApi&f=1&ipt=1c32dbd62122826cd7d8d7135ed9a3cb6da22750c4157d58d367a1d32825acd1&ipo=images', alt: 'Oil' }
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
  };

  return (
    <Slider {...settings} className="w-full max-h-70 mb-8">
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-61 rounded"
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
