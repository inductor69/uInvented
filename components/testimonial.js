export const Testimonial = () => {
  if (process.browser) {
    const photos = document.querySelectorAll(".testimonial__photo");
    const contents = document.querySelectorAll(".testimonial__content");
    const slider = document.querySelector(".slider__buttons");

    slider.addEventListener("click", function () {
      for (const photo of photos) {
        photo.classList.toggle("testimonial__photo--active");
      }

      for (const content of contents) {
        content.classList.toggle("testimonial__content--active");
      }
    });
  }
  return (
    <>
      <div className="bg-black">
        <div className="testimonial">
          <div className="slide__img-container">
            <img
              className="testimonial__photo"
              src="images/image-tanya.jpg"
              alt="Tanya Sinclair"
            />
            <img
              className="testimonial__photo testimonial__photo--active"
              src="images/image-john.jpg"
              alt="John Tarkpor"
            />
            <div className="slider__buttons">
              <div className="btn1">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18">
                  <path
                    fill="none"
                    stroke="#8585AC"
                    stroke-width="3"
                    d="M11 1L3 9l8 8"
                  />
                </svg>
              </div>

              <div className="btn1 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="18">
                  <path
                    fill="none"
                    stroke="#8585AC"
                    stroke-width="3"
                    d="M2 1l8 8-8 8"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="testimonial__content-container">
            <div className="testimonial__content">
              <blockquote className="testimonial__text text-white">
                I've been interested in coding for a while but never taken the
                jump, until now. I couldn't recommend this course enough. I'm
                now in the job of my dreams and so excited about the future.
              </blockquote>
              <div className="testimonial__author">
                <h2 className="testimonial__name text-white">Tanya Sinclair</h2>
                <p className="testimonial__job text-white">UX Engineer</p>
              </div>
            </div>
            <div className="testimonial__content testimonial__content--active">
              <blockquote className="testimonial__text text-white">
                If you want to lay the best foundation possible I'd recommend
                taking this course. The depth the instructors go into is
                incredible. I now feel so confident about starting up as a
                professional developer.
              </blockquote>
              <div className="testimonial__author">
                <h2 className="testimonial__name text-white">John Tarkpor</h2>
                <p className="testimonial__job text-white">
                  Junior Front-end Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
