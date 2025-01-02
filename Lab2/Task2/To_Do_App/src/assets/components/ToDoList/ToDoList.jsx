/* eslint-disable react/prop-types */
function TodoList(props) {
  const { taskList, handleRemove } = props;
  return (
    <div className="input-group">
      {taskList.map((task) => (
        <div key={task.id} className="d-block w-100">
          <input
            type="text"
            className="form-control my-2 "
            aria-label="Username"
            value={task.title}
            aria-describedby="addon-wrapping"
          />
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              console.log(task.id);
              handleRemove(task.id);
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
