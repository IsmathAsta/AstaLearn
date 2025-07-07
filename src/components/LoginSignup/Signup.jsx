import React from "react";
import logo from '../../assets/logos1.png'
import { Button, Form } from "react-bootstrap";

export default function Signup() {
  return (
    <>
      <div className="login-wrapper pt-4">
        <div className="login-img text-center">
          <img src={logo} alt="learningApp Logo" width={'10%'} />
        </div>
        <div className="login-ac pt-5">
           <h2 className="fw-bold text-center">Create Your Account</h2>
                    <p className="text-center">Already have an account? <a href="/signup">SIGN IN</a></p>
          <section className="input-container container">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email*</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" className="rounded-pill" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password*</Form.Label>
                <Form.Control type="password" placeholder="Enter your Password" className="rounded-pill" />
              </Form.Group>
              <Button className="rounded-pill w-100 p-2 mt-3 mb-4 py-2">SIGN IN</Button>
              <p className="py-3 text-center"><a href="#">FORGOT PASSWORD?</a></p>
              <h6 className="text-center">or</h6>

              {/* Google Button */}
              <div className="google-btn mb-3 w-100">
                {/* Google Button */}
                <Button className="rounded-pill w-100 mb-3 p-2 fw-bold" variant="light" style={{ border: '1px solid #ccc' }}>
                  <i className="fab fa-google me-2"></i> Continue with Google
                </Button>


              </div>

              {/* Apple Button */}
              <Button className="rounded-pill w-100 mb-3 p-2 fw-bold" variant="dark">
                <i className="fab fa-apple me-2"></i> Continue with Apple
              </Button>

              {/* GitHub Button */}
              <Button className="rounded-pill w-100 mb-3 p-2 fw-bold" style={{ backgroundColor: '#24292e', color: '#fff' }}>
                <i className="fab fa-github me-2"></i> Continue with Github
              </Button>
              <p className="text-muted mt-4 text-center mb-0 pb-3">Continue without signin? <a href="#">Explore</a></p>
            </Form>
          </section>
        </div>

      </div >

    </>
  )
}