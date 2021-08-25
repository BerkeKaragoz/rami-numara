import s from "./paper.module.scss";

const Paper = (props) => {
  const { children } = props;

  return <div className={s.root}>{children}</div>;
};

export default Paper;
