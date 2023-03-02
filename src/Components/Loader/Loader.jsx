import style from "./style.module.less";

export default function Loader({ progress }) {
  return (
    <div className={style.container_progress}>
      <div
        className={style.filter_progress}
        style={{width:progress}}
      ></div>
      <span className={style.label_progress}>Loading {progress}</span>
    </div>
  );
}
