import React from 'react';
import { userSchema } from './Validations/UserValidation';

function App() {
  const createUser = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };
    const isValid = await userSchema.isValid(formData);
    console.log(isValid);
  };
  return (
    <div className="App">
      <form onSubmit={createUser}>
        <input type="text" placeholder="name.." />
        <input type="text" placeholder="email@email.com" />
        <input type="password" placeholder="password123" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
