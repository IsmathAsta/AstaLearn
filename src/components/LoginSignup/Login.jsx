import React from "react";
import logo from '../../assets/logos1.png'
import { Button, Form } from "react-bootstrap";

export default function Login() {
  return (
    <>
      <div className="login-wrapper pt-3">
        <div className="login-img text-center">
          <img src={logo} alt="learningApp Logo" width={'10%'} />
        </div>
        <div className="login-ac pt-3">
           <h2 className="fw-bold text-center">Sign In To Your Account</h2>
          {/* <p className="text-center">Don't have an account? <a href="/">SIGN UP</a></p> */}
         
          <section className="input-container container mt-5">
            <Form>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Email*</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" className="rounded-pill" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label>Password*</Form.Label>
                <Form.Control type="password" placeholder="Enter your Password" className="rounded-pill" />
                <p className="text-end pt-2">Forgot Password?</p>
              </Form.Group>
              <Button className="rounded-pill w-100 p-2 mt-3 mb-4 py-2">SIGN IN</Button>
              <p className="text-muted mt-4 text-center mb-0 pb-3">Continue without signin? <a href="#">Explore</a></p>
             
             
            </Form>
          </section>
        </div>

      </div >

    </>
  )
}