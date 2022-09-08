import React from "react";

const Demo6Services2 = () => {
    return (
        <section
            id="services-2"
            className="bg-lightgrey wide-60 services-section division"
        >
            <div className="container">
                <div className="row">
                    {/* SERVICE BOX #1 */}
                    <div className="col-md-6 col-lg-3">
                        <div className="sbox-2">
                            {/* Icon */}
                            <img
                                className="img-75"
                                src="images/icons/trophy.png"
                                alt="service-icon"
                            />
                            {/* Text */}
                            <div className="sbox-2-txt">
                                {/* Title */}
                                <h5 className="h5-md">Self-pace <br /> learning material</h5>
                                {/* Text */}
                                <p className="grey-color">
                                    Complete study material is categorized and organized to facilitate step-wise learning
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* END SERVICE BOX #1 */}
                    {/* SERVICE BOX #2 */}
                    <div className="col-md-6 col-lg-3">
                        <div className="sbox-2">
                            {/* Icon */}
                            <img
                                className="img-75"
                                src="images/icons/classroom.png"
                                alt="service-icon"
                            />
                            {/* Text */}
                            <div className="sbox-2-txt">
                                {/* Title */}
                                <h5 className="h5-md">Live Mentoring and Guidance by experts</h5>
                                {/* Text */}
                                <p className="grey-color">
                                    Our experts will help you make personalized plans of preparation based on your schedule
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* END SERVICE BOX #2 */}
                    {/* SERVICE BOX #3 */}
                    <div className="col-md-6 col-lg-3">
                        <div className="sbox-2">
                            {/* Icon */}
                            <img
                                className="img-75"
                                src="images/icons/mouse-1.png"
                                alt="service-icon"
                            />
                            {/* Text */}
                            <div className="sbox-2-txt">
                                {/* Title */}
                                <h5 className="h5-md">An actual <br /> exam experience</h5>
                                {/* Text */}
                                <p className="grey-color">
                                    The mock tests are especially designed after thorough analysis of DSSSB previous year exams
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* END SERVICE BOX #3 */}
                    {/* SERVICE BOX #4 */}
                    <div className="col-md-6 col-lg-3">
                        <div className="sbox-2">
                            {/* Icon */}
                            <img
                                className="img-75"
                                src="images/icons/certificate.png"
                                alt="service-icon"
                            />
                            {/* Text */}
                            <div className="sbox-2-txt">
                                {/* Title */}
                                <h5 className="h5-md">Knowledge+ Skills = Success</h5>
                                {/* Text */}
                                <p className="grey-color">
                                    Specialized instructions to enhance NOT ONLY knowledge BUT ALSO much needed skills are provided
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* END SERVICE BOX #4 */}
                </div>
                {/* End row */}
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo6Services2;
