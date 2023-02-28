import userData from "../../data/user.json";
import { useState } from "react";
import Spinner from "../Spinner/Spinner";
import Loader from "../Loader/Loader";
import style from "./style.module.less";
import avatar from "../../assets/img/avatar.png";
import star from "../../assets/img/star.svg"
import privateClose from '../../assets/img/privateClose.png'
import privateOpen from '../../assets/img/privarteOpen.png'

export default function PlayerInfo() {
  const [cashState, setCashState] = useState(false);
  const { userName, cash, typeGame } = userData[0];


  function handlePrivateClose(){
    setCashState(true)
  }
  function handlePrivateOpen(){
    setCashState(false)
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
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </div>
        </div>
        <div className={style.avatar}>
          <img src={avatar} alt="avatar" />
        </div>
        {cashState ? (
          <div className={style.cashOpen}>
            <button onClick={handlePrivateOpen}><img src={privateOpen} alt="open" /></button>
            <span>{cash}</span>
            </div>
        ) : (
          <div className={style.cashClose}>
            <img src={privateClose} alt="close" onClick={handlePrivateClose} />
            <span>Show balance</span>
          </div>
        )}
      </div>
      <div className={style.wrapper_loader}>
        <Loader />
      </div>
    </>
  );
}
