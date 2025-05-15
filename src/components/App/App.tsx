import { useState } from "react";
import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import type { Votes, VoteType } from "../../types/votes";

function App() {
  const [_votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: VoteType) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  };

  const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };
  return (
    <div className={css.app}>
      <div>
        <CafeInfo />
      </div>
      <div>
        <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={true} />
        {/* Тут у майбутньому додамо VoteStats */}
      </div>
    </div>
  );
}

export default App;
