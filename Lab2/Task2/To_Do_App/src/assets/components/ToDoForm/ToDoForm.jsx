/* eslint-disable react/prop-types */
import "./ToDoForm.css";
import React, { useState } from "react";
function ToDoForm(props) {
  const { handleClick, handleChange, task } = props;

  return (
    <div className="p-5">
      <h1>To Do List</h1>
      <div className="input-group flex-nowrap">
        <input
          type="text"
          className="form-control my-5"
          placeholder="Please enter a task to add..."
          aria-label="Username"
          aria-describedby="addon-wrapping"
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
      </div>
      <button
        type="button text-end"
        className="btn btn-primary my-2"
        onClick={() => {
          handleClick(task);
        }}
      >
        Add task
      </button>
    </div>
  );
}

export default ToDoForm;
