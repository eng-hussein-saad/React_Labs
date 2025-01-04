import { useState } from "react";
import ToDoForm from "../ToDoForm/ToDoForm";
import TodoList from "../ToDoList/ToDoList";
function ToDoWrapper() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  function handleClick(title) {
    console.log(`title = ${title}`);
    if (title) {
      setTaskList([
        ...taskList,
        { id: taskList.length, title, finished: false },
      ]);
      console.log(taskList);
    }
  }
  function handleChange(data) {
    setTask(data);
    console.log(task);
  }
  function handleRemove(data) {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== data;
      })
    );
  }

  return (
    <>
      <ToDoForm
        handleClick={handleClick}
        handleChange={handleChange}
        task={task}
      />
      <TodoList taskList={taskList} handleRemove={handleRemove} />
    </>
  );
}

export default ToDoWrapper;
