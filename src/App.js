import React, { useState } from "react";
import "./css/style.css";

function App() {
	const [message, setMessage] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [isValid, setIsValid] = useState(false);
	const [values, setValues] = useState({
		name: "",
		email: "",
		password: "",
	});

	/*
  
  function handleInputNameChange(e){
    setValues({...values, name : e.target.value})   
  }
  
  function handleInputEmailChange(e){
    setValues({...values, email : e.target.value})
    console.log(values);    
    
  }

  function handleInputPasswordChange(e){
    setValues({...values, password : e.target.value})
    console.log(values);    
  
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      if(values.name && values.email, values.password){
        setIsValid(true)
      }
      setSubmitted(true)
     
  } */

	function handleChange(e) {
		setValues({ ...values, [e.target.name]: e.target.value });
		console.log(values);
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		if (values.name && values.email && values.password) {
			setIsValid(true);
		}
		setSubmitted(true);
		setMessage("Thank you !!!");
	};

	return (
		<>
			<div className="box-form">
				<h2>Registration Form</h2>
				{submitted && isValid ? <p className="green">{message}</p> : null}
				<form action="" onSubmit={handleSubmit}>
					<div className="form-group mb-2">
						<label htmlFor="">Name</label>
						<input
							type="text"
							name="name"
							value={values.name}
							onChange={handleChange}
							className="form-control"
							placeholder=""
						/>
						{submitted && !values.name ? (
							<p className="red">Please enter your Name</p>
						) : null}
					</div>

					<div className="form-group mb-2">
						<label htmlFor="">Email</label>
						<input
							type="email"
							name="email"
							value={values.email}
							onChange={handleChange}
							className="form-control"
							placeholder=""
						/>
						{submitted && !values.email ? (
							<p className="red">Please enter your Email</p>
						) : null}
					</div>

					<div className="form-group mb-2">
						<label htmlFor="">Password</label>
						<input
							type="password"
							name="password"
							value={values.password}
							onChange={handleChange}
							className="form-control"
							placeholder=""
						/>
						{submitted && !values.password ? (
							<p className="red">Please enter your Password"</p>
						) : null}
					</div>
					<button type="submit" className="btn m-auto mt-3">
						Submit
					</button>
				</form>
			</div>
		</>
	);
}

export default App;
