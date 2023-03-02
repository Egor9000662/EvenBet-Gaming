import { useEffect, useState } from "react";
import PUT from '../../services/PUT'
import * as img from "./img";
import style from "./style.module.less";

export default function TournamentInfo({ item,setIsLoadRend,isLoadRend }) {
  const [bg, setBg] = useState("#373352");
  const [stausBg, setstatusBg] = useState({
    status: "active",
    color: " #00BB40",
  });
  const [flag, setFlag] = useState(false);

  const { type, title, date, tickets, bonus, status, bookmark,id } = item;

  useEffect(() => {
    const resultColor = status === "active" ? "#423D62" : "#2F2B47";
    setBg(resultColor);
    const copyObj = { ...stausBg };
    if (status === "disabled") {
      copyObj.color = "rgba(255, 255, 255, 0.15)";
    } else if (status === "active") {
      copyObj.color = "#00BB40";
    }
    setstatusBg(copyObj);
  }, [status, flag]);

  function handleTouchStartBg() {
    setBg("#443E73");
  }

  function handleTouchend() {
    setFlag(!flag);
  }

  function handleTouchStartBgButton() {
    const copyObj = { ...stausBg };
    copyObj.color = "#0E8938";
    setstatusBg(copyObj);
  }
   function handelStatausTournament(){
    const newItem = {...item}
    if(status === "active"){
      newItem.status = "disabled"
    }else if(status === "disabled"){
      newItem.status = "active"
    }
   PUT.putTournaments(newItem,id) 
   setIsLoadRend(!isLoadRend)
  }


  return (
    <div
      className={style.container_tournament}
      style={{ backgroundColor: `${bg}` }}
      onTouchStart={handleTouchStartBg}
      onTouchEnd={handleTouchend}
    >
      <div
        className={style.registering}
        style={{ backgroundColor: `${stausBg.color}` }}
      >
        {status === "active" ? (
          <div className={style.registering__active}>
            <span>Registering</span>
          </div>
        ) : (
          <div className={style.registering__disabled}>
            <span>Canceled</span>
          </div>
        )}
      </div>
      <div className={style.info}>
        <div className={style.info__interactive}>
          <div className={style.info_wrapper_interactive}>
            <div className={style.info__type}>
              {bookmark && <img src={img.pin} alt="pin" />}
              <span>{type}</span>

              {type === "NL OFC/pineapple prg" && (
                <>
                  <img src={img.time} alt="clock" />
                  <img src={img.door} alt="door" />
                </>
              )}
              {type === "NL 6 cards omaha h/l" && (
                <img src={img.rapid} alt="rapid" />
              )}
            </div>
            <div className={style.info__title}>{title}</div>
          </div>
          <div className={style.info__button_interactive}>
            {status === "active" ? (
              <button
                className={style.button}
                style={{ backgroundColor: stausBg.color }}
                onTouchStart={handleTouchStartBgButton}
                onTouchEnd={handleTouchend}
                onClick ={handelStatausTournament}
              >
                Join table
              </button>
            ) : (
              <button
                className={style.button}
                style={{ backgroundColor: stausBg.color }}
                onClick ={handelStatausTournament}
              >
                Cancelled
              </button>
            )}
          </div>
        </div>
        <div className={style.info__data}>
          <div className={style.info__date}>
            <img src={img.clock} alt="pin" />
            <span>{date}</span>
          </div>
          <div className={style.info__wrapper_tickets_cup}>
            <div className={style.info__tickets}>
              <img src={img.players} alt="player" />
              <span>{tickets}</span>
            </div>
            <div className={style.info__cup}>
              <img src={img.tourney} alt="tourney" />
              <span>{bonus}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
