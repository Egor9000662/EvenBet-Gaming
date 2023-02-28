import PlayerInfo from "../Components/PlayerInfo/PlayerInfo";
import TournamentItem from "../Components/TournamentItem/TournamentItem";
import tournaments from "../data/tournaments.json";

import "./app.less";

function App() {
  return (
    <div className="container">
      <div className="wrapper_player">
        <PlayerInfo />
      </div>
      <div className="wrapper_tournament">
        {tournaments?.map((item) => (
          <TournamentItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
