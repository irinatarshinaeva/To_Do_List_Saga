import { useSelectorContext } from '../../../contexts/store';
import Item from '../Item';

function List() {
  const { tasks } = useSelectorContext();

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
