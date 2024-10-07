import React from "react";
import { testimonialsData } from "../Data/testimonialsData"; // Importing data for the section

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section py-12 text-center">
      <div className="container mx-auto">
        <h2 className="testimonials-title">{testimonialsData.title}</h2>

        <div className="testimonials-grid">
          {testimonialsData.testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-position">{testimonial.position}</p>
                </div>
              </div>
              <p className="testimonial-message">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
