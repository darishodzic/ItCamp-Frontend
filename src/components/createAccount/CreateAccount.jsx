import { useState } from "react";
import React from "react";
import "./createAccount.css";
import { useForm } from "react-hook-form";

const CreateAccount = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //const onSubmit = (data) => setResult(JSON.stringify(data))
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="forme">
      <div className="column">
        <h1>Create account</h1>
        <div className="button">
          <button>
            <i className="ikonice" class="fab fa-google"></i> Sign up with
            Google
          </button>
          <button>
            <i class="fab fa-facebook"></i> Sign up witg Facebook{" "}
          </button>
        </div>
        <h2> -OR-</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Full name"
            name="name"
            id="name"
            {...register("name", {
              required: true,
              //pattern: /^.{3,}$/
            })}
          />
          <input
            type="text"
            placeholder="E-mail adress"
            name="email"
            id="email"
            {...register("email", {
              required: true,
              pattern: /^\s[\w-+]+(.[\w-+]+)@[\w-+]+.[\w-+]+(.[\w-+_]+)\s$/,
            })}
          />
          {errors.email && <p>Email is required</p>}
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            {...register("password", {
              required: true,
              pattern: /^.{6,}$/,
            })}
          />
          {errors.password && <p>Password mora da ima minimum 6 karaktera.</p>}
          <br />
          <div>
            <input type="submit" value="Create acount"></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
