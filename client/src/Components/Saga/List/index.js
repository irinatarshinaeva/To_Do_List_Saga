import { useSelector } from 'react-redux';
import Item from '../Item';

function List() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <ul className="list-group">
      {tasks.length
        ? tasks.map((el, index) => (
            <Item key={el._id} index={index} {...el} />
            // <Item key={el._id} index={index} id={el._id} status={el.status} text={el.text}  />
          ))
        : null}
    </ul>
  );
}

export default List;
