import "./App.css";
import { useEffect, useState } from "react";

import VideoBackground from "../VideoBackground/VideoBackGround";
import ProfileGrid from "../ProfileGrid/ProfileGrid";
import TypedText from "../TypedText/TypedText";

import { useAgent } from "../../Hooks/useAgent";

export default function App() {
  const [agent, isLoading, hasError] = useAgent();
  const [currentAgent, setCurrentAgent] = useState<any>();

  useEffect(() => {
    if (agent != {}) setCurrentAgent(agent);
  }, [agent]);

  const loadNextAgent = () => {
    const newAgent: any = useAgent();
    setCurrentAgent(newAgent.agent);
  };

  if (!isLoading) {
    return (
      <div className="App">
        <VideoBackground>
          <ProfileGrid agent={currentAgent}></ProfileGrid>
          <button onClick={() => loadNextAgent()} className="next-asset">
            <TypedText texts={["Next Asset"]} />
          </button>
        </VideoBackground>
      </div>
    );
  }
}
