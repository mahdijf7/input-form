import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const enteredNameIsValid = enteredName.trim() !== '';
  const inputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
  };

  const addSubmitHandler = (e) => {
    e.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    setEnteredName('');
    setEnteredNameTouched(false);
  };

  const nameInputClasses = inputIsInvalid
    ? 'form-control invalid'
    : 'form-control ';
  return (
    <form onSubmit={addSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputHandler}
          onBlur={nameInputBlurHandler}
        />
        {inputIsInvalid && <p className="error-text">form is empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit </button>
      </div>
    </form>
  );
};

export default SimpleInput;
