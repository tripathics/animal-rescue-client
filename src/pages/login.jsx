import React from "react";
import "../styles/login.css";

const Login = () => {
    return (


        <div className="container" >
            <h1>Login</h1>
            <form className="login">
                <label for="Email">Email</label>
                <input type="text" id="Email" name="Email" placeholder="Email" required />
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
            <p>don't have an account  sign in </p>

        </div>

    )
}

export default Login;