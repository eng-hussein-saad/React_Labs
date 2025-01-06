import React, { useState } from "react";
function Register() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    nameError: null,
    emailError: null,
    userNameError: null,
    passwordError: null,
    confirmPasswordError: null,
  });

  function handleSubmit(e) {
    e.preventDefault();
    //check if any value in the formErrors doesn't have a null value then print error.
    const hasErrors = Object.values(formErrors).some((error) => error !== null);

    if (!hasErrors) {
      console.log(formValues);
      alert("Form is submitted: " + JSON.stringify(formValues));
    } else {
      alert("Please fix errors first");
    }
  }

  function handleChange(e) {
    if (e.target.name === "name") {
      setFormValues({
        ...formValues,
        name: e.target.value,
      });
      setFormErrors({
        ...formErrors,
        nameError: e.target.value.length === 0 ? "Required" : null,
      });
    }
    if (e.target.name === "email") {
      setFormValues({
        ...formValues,
        email: e.target.value,
      });
      setFormErrors({
        ...formErrors,
        emailError: e.target.value.length === 0 ? "Required" : null,
      });
      setFormErrors({
        ...formErrors,
        emailError: e.target.value.match(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        )
          ? null
          : "Invalid Email",
      });
    }
    if (e.target.name === "userName") {
      setFormValues({
        ...formValues,
        userName: e.target.value,
      });
      setFormErrors({
        ...formErrors,
        userNameError: e.target.value.length === 0 ? "Required" : null,
      });
    }

    if (e.target.name === "password") {
      setFormValues({
        ...formValues,
        password: e.target.value,
      });
      setFormErrors({
        ...formErrors,
        passwordError: e.target.value.length === 0 ? "Required" : null,
      });
      setFormErrors({
        ...formErrors,
        passwordError: e.target.value.match(
          /^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*\d))(?=(.*[@%$#]))[A-Za-z\d@%$#]{8,}$/
        )
          ? null
          : "Invalid password",
      });
    }
    if (e.target.name === "confirmPassword") {
      setFormValues({
        ...formValues,
        confirmPassword: e.target.value,
      });
      setFormErrors({
        ...formErrors,
        confirmPasswordError: e.target.value.length === 0 ? "Required" : null,
      });
      setFormErrors({
        ...formErrors,
        confirmPasswordError:
          e.target.value === formValues.password
            ? null
            : "passwords don't match",
      });
    }
  }
  return (
    <div className="container form-box">
      <h2>Registeration Page</h2>
      <hr />

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Name
            </label>
            <input
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Please type your name..."
              value={formValues.name}
              name="name"
              onChange={handleChange}
            />
          </div>
          {formErrors.nameError && (
            <div id="emailHelp" className="form-text text-danger">
              {formErrors.nameError}
            </div>
          )}
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            value={formValues.email}
            name="email"
            onChange={handleChange}
          />
          {formErrors.emailError && (
            <div id="emailHelp" className="form-text text-danger">
              {formErrors.emailError}
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              User Name
            </label>
            <input
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Please type your name..."
              value={formValues.user_name}
              name="userName"
              onChange={handleChange}
            />
            {formErrors.userNameError && (
              <div id="emailHelp" className="form-text text-danger">
                {formErrors.userNameError}
              </div>
            )}
          </div>
          <label htmlFor="inputPassword5" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="inputPassword5"
            className="form-control"
            aria-describedby="passwordHelpBlock"
            placeholder="Please type your password..."
            value={formValues.password}
            name="password"
            onChange={handleChange}
          />
          {formErrors.passwordError && (
            <div id="emailHelp" className="form-text text-danger">
              {formErrors.passwordError}
            </div>
          )}
          <div id="passwordHelpBlock" className="form-text">
            Your password length not less than 8 characters, contains at least
            one lowercase letter, one uppercase letter, at least one digit, and
            a special character
          </div>
          <label htmlFor="inputPassword5" className="form-label mt-3">
            Confirm password
          </label>
          <input
            type="password"
            id="inputPassword5"
            className="form-control"
            aria-describedby="passwordHelpBlock"
            placeholder="Please retype your password..."
            value={formValues.confirm_password}
            name="confirmPassword"
            onChange={handleChange}
          />
          {formErrors.confirmPasswordError && (
            <div id="emailHelp" className="form-text text-danger">
              {formErrors.confirmPasswordError}
            </div>
          )}
          <button type="submit" className="btn btn-success mt-4">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
