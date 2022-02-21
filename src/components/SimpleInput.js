import { useState, useRef } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameisValid, setEnteredNameIsvalid] = useState(false);
  const [enteredNameTuch, setEnteredNameTuch] = useState(false);

  const nameInputHandler = (e) => {
    setEnteredName(e.target.value);
    if (e.target.value !== '') {
      setEnteredNameIsvalid(true);
    }
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTuch(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsvalid(false);
    }
  };

  const addSubmitHandler = (e) => {
    e.preventDefault();
    setEnteredNameTuch(true);
    if (enteredName.trim() === '') {
      setEnteredNameIsvalid(false);
      return;
    }
    setEnteredNameIsvalid(true);
    console.log(enteredName);

    const enteredValue = nameInputRef.current.value;

    console.log(enteredValue);
    setEnteredName('');
  };
  const inputIsInvalid = !enteredNameisValid && enteredNameTuch;

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
          ref={nameInputRef}
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
