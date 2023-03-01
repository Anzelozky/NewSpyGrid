import "./VideoBackGround.css";
import BackgroundVideo from "../../assets/BackgroundVideo.mp4";

type VideoBackgroundProps = {
  title?: string;
};

const VideoBackground = ({ title }: VideoBackgroundProps) => {
  return (
    <div className="videobackground">
      <video src={BackgroundVideo} autoPlay loop muted />
      <p>{title}</p>
    </div>
  );
};

export default VideoBackground;
