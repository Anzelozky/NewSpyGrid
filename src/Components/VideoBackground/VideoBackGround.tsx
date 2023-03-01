import "./VideoBackGround.css";
import BackgroundVideo from "../../assets/BackgroundVideo.mp4";

type VideoBackgroundProps = {
  title?: string;
  children?: JSX.Element;
};

const VideoBackground = ({ title, children }: VideoBackgroundProps) => {
  return (
    <div className="videobackground">
      <video src={BackgroundVideo} autoPlay loop muted />
      <p>{title}</p>
      {children}
    </div>
  );
};

export default VideoBackground;
