import style from './StatisticsItem.module.css';

const StatisticsItem = ({ total, title, Icon }) => {
  return (
    <>
      <Icon className={style.icon} />
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};

export default StatisticsItem;
