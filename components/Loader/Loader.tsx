import s from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={s.loader__container}>
      <span className={s.loader}></span>
    </div>
  );
};
