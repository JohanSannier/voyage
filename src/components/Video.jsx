import React, { useRef, useState } from "react";
import video from "../assets/video/video.mp4";

const Video = () => {
  const videoRef = useRef();
  const [activeVideo, setActiveVideo] = useState(false);

  function playVideo() {
    videoRef.current.play();
    setActiveVideo(true);
  }
  function pauseVideo() {
    videoRef.current.pause();
    setActiveVideo(false);
  }
  return (
    <section className="video section">
      <h2 className="section__title">Tour Vidéo</h2>
      <div className="video__container container">
        <p className="video__description">
          Découvrez les plus beaux endroits pour vous et votre famille à travers
          cette vidéo.
        </p>

        <div className="video__content">
          <video
            id="video-file"
            ref={videoRef}
            onEnded={() => setActiveVideo(false)}
          >
            <source src={video} type="video/mp4" />
          </video>

          {!activeVideo ? (
            <button
              className="button button--flex video__button"
              id="video-button"
              onClick={playVideo}
            >
              <i
                className="ri-play-line video__button-icon"
                id="video-icon"
              ></i>
            </button>
          ) : (
            <button
              className="button button--flex video__button"
              id="video-button"
              onClick={pauseVideo}
            >
              <i
                className="ri-pause-line video__button-icon"
                id="video-icon"
              ></i>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Video;
