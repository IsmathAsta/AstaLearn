import React from "react";

export default function PricingPlan() {
  return (
    <div className="pricing-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Simple Pricing for Every Institute</h2>
        <p className="text-center text-muted mb-5">Choose the plan that fits your needs and scale as you grow.</p>
        
        <div className="row justify-content-center">
          {/* Free Plan */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">Free Plan</h5>
                <h2 className="my-3">$0<span className="fs-6 text-muted">/month</span></h2>
                <ul className="list-unstyled mb-4">
                  <li>✔ Up to 50 students</li>
                  <li>✔ 1 teacher account</li>
                  <li>✔ Limited live classes</li>
                  <li>✔ Basic course publishing</li>
                  <li>✔ Community support</li>
                </ul>
                <button className="btn btn-outline-primary w-100">Start for Free</button>
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg border border-primary h-100">
              <div className="card-body text-center">
                <h5 className="card-title fw-bold text-primary">Premium Plan</h5>
                <h2 className="my-3 text-primary">$49<span className="fs-6 text-muted">/month</span></h2>
                <ul className="list-unstyled mb-4">
                  <li>✔ Unlimited students & teachers</li>
                  <li>✔ Unlimited live classes</li>
                  <li>✔ Full course tools</li>
                  <li>✔ Reports & analytics</li>
                  <li>✔ Priority support</li>
                </ul>
                <button className="btn btn-primary w-100">Upgrade Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
