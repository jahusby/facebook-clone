import React from "react";
import Story from "./Story";
import "./StoryReel.css";

const StoryReel = () => {
  return (
    <div className="storyReel">
      {/* story >> img, prilepic, title */}
      <Story
        image="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/119733779/original/cc2e5944473be8570911a5f558f0d28a150e3cdc/paint-you-a-custom-abstract-portrait-drawing-illustration.png"
        profileSrc=""
        title="john"
      />
      <Story
        image="https://i.pinimg.com/originals/d9/3a/0c/d93a0c9ffc47f273258c41df1426f2c4.jpg"
        profileSrc=""
        title="ola"
      />
      <Story
        image="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/abstract-portrait-marin-victor.jpg"
        profileSrc=""
        title="per"
      />
    </div>
  );
};

export default StoryReel;
