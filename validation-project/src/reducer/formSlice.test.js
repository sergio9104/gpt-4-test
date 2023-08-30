import formReducer, { setFirstName, setLastName, setEmail, setMessage } from './formSlice';

describe('form reducer', () => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  };

  it('should handle initial state', () => {
    expect(formReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setFirstName', () => {
    const actual = formReducer(initialState, setFirstName('John'));
    expect(actual.firstName).toEqual('John');
  });

  it('should handle setLastName', () => {
    const actual = formReducer(initialState, setLastName('Doe'));
    expect(actual.lastName).toEqual('Doe');
  });

  it('should handle setEmail', () => {
    const actual = formReducer(initialState, setEmail('john.doe@example.com'));
    expect(actual.email).toEqual('john.doe@example.com');
  });

  it('should handle setMessage', () => {
    const actual = formReducer(initialState, setMessage('This is a message'));
    expect(actual.message).toEqual('This is a message');
  });
});
