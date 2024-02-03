import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {

  const [values, setValues] = useState({
    email:"",
    name:"",
    country:"",
    age:"",
    password:""
  });

  const inputs = [
    {
      id:1,
      name:"email",
      type:"text",
      placeholder:"Email",
      errorMessage:"It should be a valid email address!",
      label:"Email",
      pattern:"^\\S+@\\S+\\.\\S+$",
      required:true,
    },
    {
      id:2,
      name:"name",
      type:"text",
      placeholder:"Name",
      errorMessage:"Name should be at least 3-16 characters and shouldn't include any special character!",
      label:"Name",
      pattern:"^[A-Za-z]{3,16}$",
      required:true,
    },
    {
      id:3,
      name:"country",
      type:"text",
      placeholder:"Country",
      label:"Country",
      required:true,
    },
    {
      id:4,
      name:"age",
      type:"number",
      placeholder:"Age",
      errorMessage:"Enter only Numbers",
      label:"Age",
      required:true,
    },
    {
      id:5,
      name:"password",
      type:"password",
      placeholder:"Password",
      errorMessage:"Password must be at least 8 characters long and include at least 1 number and 1 special character and 1 uppercase letter!",
      label:"Password",
      pattern:"^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$",
      required:true,
    },
  ]

  const isFormValid = () => {
    return inputs.every(input => !input.required || Boolean(values[input.name]));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={e => setValues({...values, [e.target.name]: e.target.value})} />
        ) )}
        <button disabled={!isFormValid()}>Submit</button>
      </form>
    </div>
  );
}

export default App;
