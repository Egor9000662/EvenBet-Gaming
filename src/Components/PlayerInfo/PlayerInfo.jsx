import { useState } from "react";
import * as img from "./img";
import userData from "../../data/user.json";
import Spinner from "../Spinner/Spinner";
import Loader from "../Loader/Loader";
import style from "./style.module.less";

export default function PlayerInfo() {
  const [cashState, setCashState] = useState(false);
  const { userName, cash, typeGame,progress } = userData

  function handlePrivateClose() {
    setCashState(true);
  }
  function handlePrivateOpen() {
    setCashState(false);
  }

  return (
    <>
      <div className={style.title_game}>
        <h1>{typeGame}</h1>
      </div>
      <div className={style.wrapper_spinner}>
        <Spinner />
      </div>
      <div className={style.wrapper_info_user}>
        <div className={style.user_name}>
          <p>{userName}</p>
          <div className={style.stars}>
            <img src={img.star} alt="star" />
            <img src={img.star} alt="star" />
            <img src={img.star} alt="star" />
            <img src={img.star} alt="star" />
            <img src={img.star} alt="star" />
          </div>
        </div>
        <div className={style.avatar}>
          <img src={img.avatar} alt="avatar" />
        </div>
        <div className={style.wrapper_cash}>
        {cashState ? (
          <div className={style.cashOpen}>
            <button onClick={handlePrivateOpen}>
              <img src={img.privateOpen} alt="open" />
            </button>
            <span>{cash}</span>
          </div>
        ) : (
          <div className={style.cashClose}>
              <img onClick={handlePrivateClose} src={img.privateClose} alt="close" />
            <span>Show balance</span>
          </div>
        )}
        </div>
      </div>
      <div className={style.wrapper_loader}>
        <Loader progress={progress}  />
      </div>
    </>
  );
}
