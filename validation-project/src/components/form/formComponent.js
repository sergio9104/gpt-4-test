import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFirstName, setLastName, setEmail, setMessage } from '../../reducer';

const FormComponent = () => {
  const dispatch = useDispatch();
  const { firstName, lastName, email, message } = useSelector((state) => state.form);

  return (
    <div>
      <input 
        type="text" 
        placeholder="First Name" 
        value={firstName} 
        onChange={(e) => dispatch(setFirstName(e.target.value))}
      />
      <input 
        type="text" 
        placeholder="Last Name" 
        value={lastName} 
        onChange={(e) => dispatch(setLastName(e.target.value))}
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => dispatch(setEmail(e.target.value))}
      />
      <textarea 
        placeholder="Message" 
        value={message} 
        onChange={(e) => dispatch(setMessage(e.target.value))}
      />
      <button onClick={() => console.log({ firstName, lastName, email, message })}>
        Submit
      </button>
    </div>
  );
};

export default FormComponent;
