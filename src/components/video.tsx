import React from "react";

const Video = () => {
  return (
    <div>
      <video width="600" autoPlay muted loop controls>
        <source
          src="/6143904-uhd_4096_2160_25fps (1) (3) (1) (1).mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Video;
