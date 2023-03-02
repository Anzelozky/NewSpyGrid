import "./VideoBackGround.css";
import BackgroundVideo from "../../assets/BackgroundVideo.mp4";

type VideoBackgroundProps = {
  children?: JSX.Element | Array<JSX.Element>;
};

const VideoBackground = ({ children }: VideoBackgroundProps) => {
  return (
    <div className="videobackground">
      <video src={BackgroundVideo} autoPlay loop muted />
      {children}
    </div>
  );
};

export default VideoBackground;
