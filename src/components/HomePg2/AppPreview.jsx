import React from "react";
import { Button } from "react-bootstrap";

export default function AppPreview(){
    return(
        <>
         <div className="app-bg py-5">
        <div className="container">
          <div className="row align-items-center">
            
            {/* Left: Text Content */}
            <div className="col-md-6 mb-4 mb-md-0">
              <p className="text-uppercase text-muted small">Seamless Workflow</p>
              <h2 className="fw-bold mb-4">Tired of Manual Work? Watch the Solution.</h2>
              <p className="text-muted mb-4">
               Our powerful, user-friendly platform helps your institution stay productive and organized.
Watch the demo to explore how it simplifies your daily tasks — so you can focus on teaching, not managing.
              </p>
              <Button style={{ backgroundColor: '#F24080', borderColor: '#F24080', borderRadius: '50px' }} className="mt-3 b-0 px-3 py-2">Get Started </Button>
            </div>

           

          </div>
        </div>
      </div>
        </>
    )
}