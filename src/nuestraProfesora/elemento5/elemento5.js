import React, { useState } from "react";
import '../../App.css';
import Thumbnail1 from '../../imagenes/11.jpeg'; // Imagen de previsualización 1
import Thumbnail2 from '../../imagenes/pame.jpeg'; // Imagen de previsualización 2
import Thumbnail3 from '../../imagenes/1.jpeg'; // Imagen de previsualización 3

const videos = [
  {
    thumbnail: Thumbnail1,
    src: "https://www.w3schools.com/html/mov_bbb.mp4", // URL del video 1
    description: "1mera competencia",
  },
  {
    thumbnail: Thumbnail2,
    src: "https://www.w3schools.com/html/mov_bbb.mp4", // URL del video 2
    description: "2da competencia",
  },
  {
    thumbnail: Thumbnail3,
    src: "https://www.w3schools.com/html/mov_bbb.mp4", // URL del video 3
    description: "3cera competencia",
  },
];

function Elemento5() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleImageClick = (index) => {
    setSelectedVideo(index);
  };

  return (
    <div>
      <div className="section-elemento5">
        <div className="titulo-elemento-5">
          <h2>Videos de sus competencias</h2>
        </div>
        <div className="videos-elemento-5">
          {videos.map((video, index) => (
            <div key={index} className="video-contenedor">
              {selectedVideo === index ? (
                <video src={video.src} controls autoPlay />
              ) : (
                <img
                  src={video.thumbnail}
                  alt={`Video ${index + 1}`}
                  onClick={() => handleImageClick(index)}
                />
              )}
              <span>{video.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Elemento5;
