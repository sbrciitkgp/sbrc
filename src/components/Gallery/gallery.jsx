import React, { useEffect, useRef } from "react";
import ImageGallery from "react-image-gallery";

import 'react-image-gallery/styles/css/image-gallery.css';

import "./gallery.css";
import Img1 from './2022/Img1.jpg';
import Img2 from './2022/Img2.jpg';
import Img3 from './2022/Img3.jpg';
import Img4 from './2022/Img4.jpg';
import Img5 from './2022/Img5.jpg';
import Img6 from './2022/Img6.jpg';
import Img7 from './2022/Img7.jpg';
import Img8 from './2022/Img8.jpg';
import Img9 from './2022/Img9.jpg';
import Img10 from './2022/Img10.jpg';
import Img11 from './2022/Img11.jpg';
import Img12 from './2022/Img12.jpg';
import Img13 from './2022/Img13.jpg';
import Img14 from './2022/Img14.jpg';
import Img15 from './2022/Img15.jpg';
import Img16 from './2022/Img16.jpg';
import Img17 from './2022/Img17.jpg';
import Img18 from './2022/Img18.jpg';
import Img19 from './2022/Img19.jpg';
import Img20 from './2022/Img20.jpg';
import Img21 from './2022/Img21.jpg';
import Img22 from './2022/Img22.jpg';
import Img23 from './2022/Img23.jpg';
import Img24 from './2022/Img24.jpg';

  const images = [
    {
      original: Img1,
      thumbnail: Img1,
    },
    {
      original: Img2,
      thumbnail: Img2,
    },
    {
      original: Img3,
      thumbnail: Img3,
    },
    {
      original: Img4,
      thumbnail: Img4,
    },
    {
      original: Img5,
      thumbnail: Img5,
    },
    {
      original: Img6,
      thumbnail: Img6,
    },
    {
      original: Img7,
      thumbnail: Img7,
    },
    {
      original: Img8,
      thumbnail: Img8,
    },
    {
      original: Img9,
      thumbnail: Img9,
    },
    {
      original: Img10,
      thumbnail: Img10,
    },
    {
      original: Img11,
      thumbnail: Img11,
    },
    {
      original: Img12,
      thumbnail: Img12,
    },
    {
      original: Img13,
      thumbnail: Img13,
    },
    {
      original: Img14,
      thumbnail: Img14,
    },
    {
      original: Img15,
      thumbnail: Img15,
    },
    {
      original: Img16,
      thumbnail: Img16,
    },
    {
      original: Img17,
      thumbnail: Img17,
    },
    {
      original: Img18,
      thumbnail: Img18,
    },
    {
      original: Img19,
      thumbnail: Img19,
    },
    {
      original: Img20,
      thumbnail: Img20,
    },
    {
      original: Img21,
      thumbnail: Img21,
    },
    {
      original: Img22,
      thumbnail: Img22,
    },
    {
      original: Img23,
      thumbnail: Img23,
    },
    {
      original: Img24,
      thumbnail: Img24,
    },
  ];
function Gallery(){
  const galleryRef = useRef(null);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 37) {
        // Left arrow key
        galleryRef.current.slideLeft();
      } else if (event.keyCode === 39) {
        // Right arrow key
        galleryRef.current.slideRight();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

    return (
        <section id="gallery" >
        <div className="gallery-page">
        <h3 className="gallery-title my-2">Gallery</h3>
        <div className="gallery-slides my-5">
      <ImageGallery
        ref={galleryRef}
        items={images}
        showBullets={true}
        showIndex={false}
        showThumbnails={false}
        lazyLoad={false}
        showPlayButton={true}
        showNav={true}
        showFullscreenButton={true}
        thumbnailPosition={"bottom"}
        autoPlay={true} 
      />
      </div>
      </div>
      </section>
    );
}
export default Gallery;
