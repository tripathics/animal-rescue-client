import React from "react";
import "./login.css";

const Register = () => {
    return (
        <div>
            <h1>Register</h1>
            <form action="#">
                <label for="Email">Email</label>
                <input type="text" id="Email" name="Email" placeholder="Email" required />
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Password" required />
                <label for="password">Confirm Password</label>
                <input type="password" id="password" name="password" placeholder="Password" required />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}