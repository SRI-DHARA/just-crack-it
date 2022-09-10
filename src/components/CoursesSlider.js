import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { home1CoursesProps } from "./sliderProps";
const CoursesSlider = () => {
  return (
    <Swiper {...home1CoursesProps}>
      {/* COURSE #1 */}
      <SwiperSlide className="cbox-1">
        <Link href="/course-details">
          <a>
            {/* Image */}
            <img
              className="img-fluid"
              src="images/courses/latest vacancies.jpg"
              alt="course-preview"
            />
            {/* Text */}
            <div className="cbox-1-txt">
              {/* Course Tags */}
              <p className="course-tags">
                {/* <span>Languages</span>
                <span>English</span> */}
              </p>
              {/* Course Title */}
              <h5 className="h5-xs">Latest vacancies</h5>
              {/* Course Rating */}
              {/* <div className="course-rating clearfix">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <span>4.5 (26 Ratings)</span>
              </div> */}
              {/* Course Price */}
              {/* <span className="course-price">
                <span className="old-price">$149.99</span>
                $138.99
              </span> */}
            </div>
          </a>
        </Link>
      </SwiperSlide>
      {/* END COURSE #1 */}
      {/* COURSE #2 */}
      <SwiperSlide className="cbox-1">
        <Link href="/course-details">
          <a>
            {/* Image */}
            <img
              className="img-fluid"
              src="images/courses/Exam date anouncement.jpg"
              alt="course-preview"
            />
            {/* Text */}
            <div className="cbox-1-txt">
              {/* Course Tags */}
              <p className="course-tags">
                {/* <span>Languages</span>
                <span>English</span> */}
              </p>
              {/* Title */}
              <h5 className="h5-xs">
                Exam dates announced
              </h5>
              {/* Course Rating */}
              {/* <div className="course-rating clearfix">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <span>5 (118 Ratings)</span>
              </div> */}
              {/* Course Price */}
              {/* <span className="course-price">
                <span className="old-price">$174.99</span>
                $59.99
              </span> */}
            </div>
          </a>
        </Link>
      </SwiperSlide>
      {/* END COURSE #2 */}
      {/* COURSE #3 */}
      <SwiperSlide className="cbox-1">
        <Link href="/course-details">
          <a>
            {/* Image */}
            <img
              className="img-fluid"
              src="images/courses/eligibility.png"
              alt="course-preview"
            />
            {/* Text */}
            <div className="cbox-1-txt">
              {/* Course Tags */}
              <p className="course-tags">
                {/* <span>Network Security</span> */}
              </p>
              {/* Title */}
              <h5 className="h5-xs">

                Eligibility
              </h5>
              {/* Course Rating */}
              {/* <div className="course-rating clearfix">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <span>4.5 (72 Ratings)</span>
              </div> */}
              {/* Course Price */}
              {/* <span className="course-price">
                <span className="old-price">$119.99</span>
                $34.99
              </span> */}
            </div>
          </a>
        </Link>
      </SwiperSlide>
      {/* END COURSE #3 */}
      {/* COURSE #4 */}
      <SwiperSlide className="cbox-1">
        <Link href="/course-details">
          <a>
            {/* Image */}
            <img
              className="img-fluid"
              src="images/courses/expected cut off.jpg"
              alt="course-preview"
            />
            {/* Text */}
            <div className="cbox-1-txt">
              {/* Course Tags */}
              <p className="course-tags">
                {/* <span>SEO</span>
                <span>Marketing</span> */}
              </p>
              {/* Title */}
              <h5 className="h5-xs">Expected cut-off</h5>
              {/* Course Rating */}
              {/* <div className="course-rating clearfix">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <span>5 (281 Ratings)</span>
              </div> */}
              {/* Course Price */}
              {/* <span className="course-price">Free Course</span> */}
            </div>
          </a>
        </Link>
      </SwiperSlide>
      {/* END COURSE #4 */}
      {/* COURSE #5 */}
      <SwiperSlide className="cbox-1">
        <Link href="/course-details">
          <a>
            {/* Image */}
            <img
              className="img-fluid"
              src="images/courses/exam pattern.jpg"
              alt="course-preview"
            />
            {/* Text */}
            <div className="cbox-1-txt">
              {/* Course Tags */}
              <p className="course-tags">
                {/* <span>Design</span>
                <span>WordPress</span> */}
              </p>
              {/* Title */}
              <h5 className="h5-xs">
                Exam Pattern
              </h5>
              {/* Course Rating */}
              {/* <div className="course-rating clearfix">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <span>4.15 (58 Ratings)</span>
              </div> */}
              {/* Course Price */}
              {/* <span className="course-price">
                <span className="old-price">$194.99</span>
                $62.99
              </span> */}
            </div>
          </a>
        </Link>
      </SwiperSlide>
      {/* END COURSE #5 */}
      {/* COURSE #6 */}
      <SwiperSlide className="cbox-1">
        <Link href="/course-details">
          <a>
            {/* Image */}
            <img
              className="img-fluid"
              src="images/courses/exam related instructions.jpg"
              alt="course-preview"
            />
            {/* Text */}
            <div className="cbox-1-txt">
              {/* Course Tags */}
              <p className="course-tags">
                {/* <span>Sowtware</span>
                <span>Productivity</span> */}
              </p>
              {/* Title */}
              <h5 className="h5-xs">
              Exam related instructions
              </h5>
              {/* Course Rating */}
              {/* <div className="course-rating clearfix">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <span>5 (31 Ratings)</span>
              </div> */}
              {/* Course Price */}
              {/* <span className="course-price">
                <span className="old-price">$149.99</span>
                $45.99
              </span> */}
            </div>
          </a>
        </Link>
      </SwiperSlide>
      {/* END COURSE #6 */}
      {/* COURSE #7 */}
     
      {/* END COURSE #8 */}
      <div className="owl-nav mt-5">
        <button type="button" className="owl-prev">
          <span>
            <img src="images/prev.png" alt="image" />
          </span>
        </button>
        <button type="button" className="owl-next">
          <span>
            <img src="images/next.png" alt="image" />
          </span>
        </button>
      </div>
    </Swiper>
  );
};

export default CoursesSlider;
