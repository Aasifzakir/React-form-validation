import { useRef, useState } from 'react';
import './App.css';
import FormInput from './components/FormInput.js'

function App() {

  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [fullname, setFullname] = useState('');
  // const [something, setSomething] = useState('');

  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: ''
  })  

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      label: 'Username',
      required: true,
      pattern: '^[A-Za-z0-9]{3,16}$',
      errorMsg: "!Username should be 3-16 chars and shouldn't include ant special chars"
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      label: 'Email',
      required: true,
      errorMsg: "!Use a valid Email address"
    },
    {
      id: 3,
      name: 'birthday',
      type: 'date',
      placeholder: 'Date of Birth',
      required: true,
      label: 'Birthday'
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      label: 'Password',
      required: true,
      pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,20}$',
      errorMsg: "!Password should be 8-20 chars and includes atleast 1 letter, number and special char"
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm password',
      label: 'Confirm password',
      required: true,
      pattern: values.password,
      errorMsg: "!Password doesn't match"
    }
  ]

  const handleSubmit = e => {
    e.preventDefault();
    window.alert(`Hello ${values.username}! and your password is ${values.confirmPassword}`)
  }

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }
  
  console.log(values)
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map(input => (
          <FormInput handleChange={handleChange} key={input.id} {...input} values={values[input.name]} />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
