  
import { useState } from "react";
import User from "./user";
function AddUser() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
 const[errors,setErrors]= useState({
    emailError:null,
    passwordError:null
  })

  const handleChange = (event) => {
   
    let name = event.target.name;
    if (event.target.name == "email") 
      setUser({ ...user, email: event.target.value });
    if (event.target.name == "password")
      setUser({ ...user, password: event.target.value });
    if (event.target.name == "rememberMe") {
      debugger;
      console.log(user.rememberMe);
      setUser({ ...user, rememberMe: event.target.checked });
      console.log(user.rememberMe);
    }
      //debugger;?? why not wok 
    // console.log(name);
    // user[name]=event.target.value ;
    // setUser(user);
    if(event.target.name == "email")
    {
      setErrors({...errors,emailError:null});
      setErrors({...errors,emailError:
        event.target.value?.trim().length>10?
        "max length"
        :event.target.value?.trim().length==0?
        "this is requied"
        :null });
    }
  }
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className={`form-control ${errors.emailError ? "border-danger" : ""}`}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={user.email}
            onChange={(e) => {
              handleChange(e);
            }}
            name="email"
          />
          <small className="text-danger">{errors.emailError}</small>
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            value={user.password}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              handleChange(e);
            }}
          />
            <small className="text-danger">{errors.passwordError}</small>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            value={user.rememberMe}
            name="rememberMe"
            onChange={(e) => {
              handleChange(e);
            }}
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
export default AddUser;
