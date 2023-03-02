import "./App.css";

import VideoBackground from "../VideoBackground/VideoBackGround";
import ProfileGrid from "../ProfileGrid/ProfileGrid";

import { useAgent } from "../../Hooks/useAgent";

export default function App() {
  const [agent, isLoading, hasError] = useAgent();
  console.log(agent, isLoading, hasError);

  if (!isLoading) {
    return (
      <div className="App">
        <VideoBackground>
          <ProfileGrid agent={agent}></ProfileGrid>
        </VideoBackground>
      </div>
    );
  }
}
