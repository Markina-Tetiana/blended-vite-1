import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const Icon = {
  1: FaRegThumbsUp,
  2: MdPeople,
  3: MdOutlineProductionQuantityLimits,
  4: GiTreeDoor,
};

const Statistics = ({ title, stats }) => {
  return (
    <section>
      {title && <h3 className={style.title}>{title}</h3>}

      <ul className={style.list}>
        {stats.map(({ id, total, title }) => {
          const IconComponent = Icon[id];
          return (
            <li key={id} className={style.item}>
              <StatisticsItem
                total={total}
                title={title}
                Icon={IconComponent}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Statistics;
