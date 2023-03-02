import { useEffect, useState } from "react";
import GET from "../services/GET";

import PlayerInfo from "../Components/PlayerInfo/PlayerInfo";
import TournamentItem from "../Components/TournamentItem/TournamentItem";

import "./app.less";
import Spinner from "../Components/Spinner/Spinner";

function App() {
  const [tournaments, setToutnaments] = useState("");
  const [isLoadRend, setIsLoadRend] = useState(false);
  useEffect(() => {
    getData();
  }, [isLoadRend]);

  async function getData() {
    const data = await GET.getTournaments();
    setToutnaments(data);
  }

  if (!tournaments) {
    return (
      <div className="container">
       <div className="wrapperLoading"><Spinner /></div> 
      </div>
    );
  }

  return (
    <div className="container">
      <div className="wrapper_player">
        <PlayerInfo />
      </div>
      <div className="wrapper_tournament">
        {tournaments?.map((item) => (
          <TournamentItem
            item={item}
            key={item.id}
            setIsLoadRend={setIsLoadRend}
            isLoadRend={isLoadRend}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
