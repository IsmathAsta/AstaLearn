import React from "react";
export default function InstituteReg() {
    
const steps = [
  {
    icon: 'fa-user-plus',
    title: 'Easy Registration',
    desc: 'Sign up in minutes, no tech skills needed.',
    step: 1,
    color: '#f24080'
  },
  {
    icon: 'fa-chalkboard-user',
    title: 'Add Teachers & Courses',
    desc: 'Easily onboard your team and content.',
    step: 2,
    color: '#3f2179'
  },
  {
    icon: 'fa-user-graduate',
    title: 'Invite Students',
    desc: 'Send invites or let students self-register.',
    step: 3,
    color: '#f24080'
  },
  {
    icon: 'fa-rocket',
    title: 'Launch & Track',
    desc: 'Go live with classes, monitor everything in real time.',
    step: 4,
    color: '#3f2179'
  },
];
    return (
        <>
            <div className="institute-wrapper py-5">
                <div className="institute-signup position-relative text-white text-center shadow-lg">
                    <div className="overlay rounded-4"></div>
                    <div className="institute-content position-relative p-5">
                        <h1 className="fw-bold mb-3">Ready to Digitize Your Institute?</h1>
                        <h6 className="mb-4">Register to publish your courses and host live classes</h6>
                        <button className="btn btn-light px-4 py-2 fw-semibold">Register Now</button>
                    </div>
                </div>
            </div>

            <div className="register-process-section py-5 text-center">
                <p className="text-muted mb-2">Let’s Get You Online</p>
                <h2 className="fw-bold mb-5">Get Started in 4 Simple Steps</h2>

                <div className="container">
                    <div className="row justify-content-center g-4">
                        {steps.map((step, index) => (
                            <div className="col-md-6 col-sm-12 col-lg-3" key={index}>
                                <div className="register-card text-center h-100">
                                    <div className="icon-circle mb-3" style={{ borderColor: step.color }}>
                                        <i className={`fa-solid ${step.icon}`} style={{ color: step.color }}></i>
                                        <span className="step-badge" style={{ backgroundColor: step.color }}>{step.step}</span>
                                    </div>
                                    <h5 className="fw-bold">{step.title}</h5>
                                    <p className="small text-muted px-2">{step.desc}</p>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
