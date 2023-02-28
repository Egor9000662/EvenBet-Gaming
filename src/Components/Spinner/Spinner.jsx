import style from './style.module.less'
export default function Spinner() {
  return (
    <div className={style.preloader}>
      <div className={style.preloader__image_animate}></div>
    </div>
  );
}
