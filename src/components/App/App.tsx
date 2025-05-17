import { useState } from "react";
import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import type { Votes, VoteType } from "../../types/votes";
import VoteStats from "../VoteStatus/VoteStats";

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

  const totalVotes = _votes.good + _votes.neutral + _votes.bad;
  const positiveRate = totalVotes
    ? Math.round((_votes.good / totalVotes) * 100)
    : 0;

  return (
    <div className={css.app}>
      <div>
        <CafeInfo />
      </div>
      <div>
        <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={true} />
        <VoteStats
          votes={_votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      </div>
    </div>
  );
}

export default App;
