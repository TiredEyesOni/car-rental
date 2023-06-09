import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Testimonials from "../components/Testimonials";

const TestimonialsPage = () => {
  return (
    <>
      <section className="testimonial-page">
        <HeroPages name="Testimonials" />
        <Testimonials />
        <div className="book-banner">
          <div className="book-banner__overlay">
            <div className="container">
              <div className="text-content">
                <h2>Book a car by getting in touch with us</h2>
                <span>
                  <i className="fa-solid fa-phone"></i>
                  <h3>912 345 678</h3>
                </span>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default TestimonialsPage;
