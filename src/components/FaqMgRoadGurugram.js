import React from "react";

const FaqMgRoadGurugram = () => {
  return (
    <>
      <div className="Frequently">
        <div className="container">
          <div className="row">
            <h2 className="text-center">Frequently Asked Questions</h2>
            <h5>Memberships and Packages</h5>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h4 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What KYC documents are required for signing up for membership?
                  </button>
                </h4>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    We believe in keeping our membership packages transparent.
                    Therefore, we are upfront about all charges and additional
                    costs which would be charged.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h4 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Is there transparency on additional costs within your membership packages?
                  </button>
                </h4>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    We believe in keeping our membership packages transparent.
                    Therefore, we are upfront about all charges and additional
                    costs which would be charged.
                  </div>
                </div>
              </div>
            </div>
            <h5 className="mt-5">General</h5>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h4 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Do I get access to all Coworking space locations?
                  </button>
                </h4>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    We believe in keeping our membership packages transparent.
                    Therefore, we are upfront about all charges and additional
                    costs which would be charged.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h4 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    If I want to visit Coworking, do I need to schedule a tour or can I just walk in?
                  </button>
                </h4>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    We believe in keeping our membership packages transparent.
                    Therefore, we are upfront about all charges and additional
                    costs which would be charged.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h4 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    What are Coworking spaces' operating hours?
                  </button>
                </h4>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    We believe in keeping our membership packages transparent.
                    Therefore, we are upfront about all charges and additional
                    costs which would be charged.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqMgRoadGurugram;
