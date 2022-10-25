import React from "react";
import { useForm } from "react-hook-form";


const RegisterForm = () => {
  const { handleSubmit } = useForm();
  const handleRegistration = (data:any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
      <div>
        <label className="p-2">Name:</label>
        <input name= "{...register('name')}" />
      </div>
      <div>
        <label className="p-2">Email:</label>
        <input type="email" name= "{...register('email')}" />
      </div>
      <div>
        <label className="p-2">Password:</label>
        <input type="password" name= "{...register('password')}" />
      </div>
      <button>Submit</button>
    </form>
  );
};
export default RegisterForm;