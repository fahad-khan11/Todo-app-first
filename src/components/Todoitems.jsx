import TodoItems from "./TodoItem";
import styles from "./TodoItems.module.css";

const Todoitems=({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemContainer}>
      {todoItems.map((item) => (
        <TodoItems
        key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        ></TodoItems>
      ))}
    </div>
  );
};

export default Todoitems;
