import React, { useEffect } from 'react';
import '../../App.css';


const InstagramPost = () => {
  useEffect(() => {
    // Cargar el script de Instagram
    const script = document.createElement('script');
    script.src = "//www.instagram.com/embed.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      // Limpiar el script al desmontar el componente
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Forzar la actualización del componente al volver a la página de inicio
    window.instgrm?.Embeds?.process();
  }, []);

  return (
    <div className='centrateMierda'>
      <div className="instagram-post-outer-container">
        <div className="instagram-post-inner-container">
          <div className="instagram-post-container">
            <h1 className='h1dos'>Ultimos posts</h1>
            <blockquote className="instagram-media"
                        data-instgrm-captioned
                        data-instgrm-permalink="https://www.instagram.com/p/C467WVYLKeI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                        data-instgrm-version="13"></blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramPost;
