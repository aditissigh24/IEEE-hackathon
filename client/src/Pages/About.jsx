import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui
          mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor
          neque eu tellus rhoncus ut eleifend nibh porttitor.
        </p>
        <p className="text-lg mb-6">
          Ut in nulla enim. Phasellus molestie magna non est bibendum non
          venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
          Mauris iaculis porttitor posuere.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
            <p>
              To provide exceptional service and innovative solutions that help
              our clients achieve their goals and overcome challenges in today's
              rapidly evolving landscape.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Our Vision</h2>
            <p>
              To become the industry leader known for excellence, integrity, and
              forward-thinking approaches that create lasting value for all our
              stakeholders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
