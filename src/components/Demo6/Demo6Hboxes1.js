import Link from "next/link";
import React from "react";

const Demo6Hboxes1 = () => {
    return (
        <section id="hboxes-1" className="hero-boxes-section division">
            <div className="container">
                <div className="hero-boxes-holder">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                {/* Text */}
                                <h4 className="h4-xl">
                                    Your tools to crack it
                                </h4>
                                <p>
                                    Explore from 2,769 online courses in 20
                                    categories
                                </p>
                                {/* Button */}
                                <div className="title-btn">
                                    <Link href="/categories-list">
                                        <a className="btn btn-sm btn-rose tra-black-hover">
                                            View All
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* HERO BOXES HOLDER */}
                    <div className="row">
                        {/* CATEGORIE BOX #1 */}
                        <div className="col-md-4 col-lg-2">
                            <Link href="/category-details">
                                <a>
                                    <div className="c2-box-txt text-center">
                                        {/* Icon */}
                                        <img
                                            className="img-70"
                                            src="images/icons/mock-test.png"
                                            alt="category-icon"
                                        />
                                        {/* Text */}
                                        <h5 className="h5-sm">Mock Tests</h5>
                                        <p>36 Courses</p>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        {/* END CATEGORIE BOX #1 */}
                        {/* CATEGORIE BOX #2 */}
                        <div className="col-md-4 col-lg-2">
                            <Link href="/category-details">
                                <a>
                                    <div className="c2-box-txt text-center">
                                        {/* Icon */}
                                        <img
                                            className="img-70"
                                            src="images/icons/previous_year_practice_paper.png"
                                            alt="category-icon"
                                        />
                                        {/* Text */}
                                        <h5 className="h5-sm">Previous Year Papers-Practice</h5>
                                        <p>28 Courses</p>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        {/* END CATEGORIE BOX #2 */}
                        {/* CATEGORIE BOX #3 */}
                        <div className="col-md-4 col-lg-2">
                            <Link href="/category-details">
                                <a>
                                    <div className="c2-box-txt text-center">
                                        {/* Icon */}
                                        <img
                                            className="img-70"
                                            src="images/icons/topic_wise_practice .png"
                                            alt="category-icon"
                                        />
                                        {/* Text */}
                                        <h5 className="h5-sm">
                                        Topic-wise Practice
                                        </h5>
                                        <p>54 Courses</p>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        {/* END CATEGORIE BOX #3 */}
                        {/* CATEGORIE BOX #4 */}
                        <div className="col-md-4 col-lg-2">
                            <Link href="/category-details">
                                <a>
                                    <div className="c2-box-txt text-center">
                                        {/* Icon */}
                                        <img
                                            className="img-70"
                                            src="images/icons/study_material.png"
                                            alt="category-icon"
                                        />
                                        {/* Text */}
                                        <h5 className="h5-sm">Let's Learn (Study Material)</h5>
                                        <p>68 Courses</p>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        {/* END CATEGORIE BOX #4 */}
                        {/* CATEGORIE BOX #5 */}
                        <div className="col-md-4 col-lg-2">
                            <Link href="/category-details">
                                <a>
                                    <div className="c2-box-txt text-center">
                                        {/* Icon */}
                                        <img
                                            className="img-70"
                                            src="images/icons/all_about_dsssb.png"
                                            alt="category-icon"
                                        />
                                        {/* Text */}
                                        <h5 className="h5-sm">All about DSSSB </h5>
                                        <p>78 Courses</p>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        {/* END CATEGORIE BOX #5 */}
                        {/* CATEGORIE BOX #6 */}
                        <div className="col-md-4 col-lg-2">
                            <Link href="/category-details">
                                <a>
                                    <div className="c2-box-txt text-center">
                                        {/* Icon */}
                                        <img
                                            className="img-70"
                                            src="images/icons/online_classes.png"
                                            alt="category-icon"
                                        />
                                        {/* Text */}
                                        <h5 className="h5-sm">Online Classes</h5>
                                        <p>103 Courses</p>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        {/* END CATEGORIE BOX #6 */}
                    </div>
                    {/* END HERO BOXES HOLDER */}
                </div>
                {/* End hero-boxes-holder */}
            </div>
            {/* End container */}
        </section>
    );
};

export default Demo6Hboxes1;
