import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFirstName, setLastName, setEmail, setMessage, addEntry } from '../../reducer';
import validator from 'validator';

const FormComponent = () => {
  const dispatch = useDispatch();
  const { firstName, lastName, email, message } = useSelector((state) => state.form);

  const isValidEmail = validator.isEmail(email);
  const isValidFirstName = validator.isAlpha(firstName);
  const isValidLastName = validator.isAlpha(lastName);
  const isValidMessage = message.length >= 10;

  const isFormValid = isValidEmail && isValidFirstName && isValidLastName && isValidMessage;

  return (
    <div>
      <input 
        type="text" 
        placeholder="First Name"
        style={{ borderColor: isValidFirstName ? 'green' : 'red' }}
        value={firstName} 
        onChange={(e) => dispatch(setFirstName(e.target.value))}
      />
      <input 
        type="text" 
        placeholder="Last Name" 
        style={{ borderColor: isValidLastName ? 'green' : 'red' }}
        value={lastName} 
        onChange={(e) => dispatch(setLastName(e.target.value))}
      />
      <input 
        type="email" 
        placeholder="Email"
        style={{ borderColor: isValidEmail ? 'green' : 'red' }} 
        value={email} 
        onChange={(e) => dispatch(setEmail(e.target.value))}
      />
      <textarea 
        placeholder="Message (at least 10 characters)"
        style={{ borderColor: isValidMessage ? 'green' : 'red' }}
        value={message} 
        onChange={(e) => dispatch(setMessage(e.target.value))}
      />
      <button
        disabled={!isFormValid} 
        onClick={() => dispatch(addEntry())}
      >
        Submit
      </button>
    </div>
  );
};

export default FormComponent;
