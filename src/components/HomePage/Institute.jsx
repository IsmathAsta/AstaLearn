import React from "react";
export default function Institute() {
    
const steps = [
  {
    icon: 'fa-user-plus',
    title: 'Easy Registration',
    desc: 'Create your institute account in under 2 minutes or log in via social login.',
    step: 1,
    color: '#f24080'
  },
  {
    icon: 'fa-clipboard-check',
    title: 'Quick Verification',
    desc: 'We verify basic info to ensure quality and assign access.',
    step: 2,
    color: '#3f2179'
  },
  {
    icon: 'fa-book',
    title: 'Publish Courses',
    desc: 'Add your teachers and upload your course materials or go live.',
    step: 3,
    color: '#f24080'
  },
  {
    icon: 'fa-rocket',
    title: 'Start Teaching',
    desc: 'Launch your classes, track student progress, and scale!',
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
                        <h1 className="fw-bold mb-3">Are You an Institute?</h1>
                        <h6 className="mb-4">Register to publish your courses and host live classes</h6>
                        <button className="btn btn-light px-4 py-2 fw-semibold">Register Now</button>
                    </div>
                </div>
            </div>

            <div className="register-process-section py-5 text-center">
                <p className="text-muted mb-2">Simple Steps to Get Started</p>
                <h2 className="fw-bold mb-5">How to Register as an Institute</h2>

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
