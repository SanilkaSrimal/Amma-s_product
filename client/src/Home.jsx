import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const products = [
    {
      id: 1,
      name: "Organic Coconut Oil",
      description: "Cold-pressed, 100% natural coconut oil.",
      image:
        "https://cdn.pixabay.com/photo/2016/01/05/13/58/coconut-1120989_1280.jpg",
    },
    {
      id: 2,
      name: "Coconut Water",
      description: "Fresh & hydrating natural coconut water.",
      image:
        "https://images.unsplash.com/photo-1587049352842-4a8b18a6bb7e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Coconut Milk",
      description: "Rich and creamy coconut milk for cooking.",
      image:
        "https://images.unsplash.com/photo-1602539509803-9c3fca6dfb4e?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-green-50 min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1
          data-aos="fade-up"
          className="text-5xl md:text-6xl font-extrabold text-green-800"
        >
          Pure & Natural Coconut Products
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl"
        >
          Bringing you the freshest organic coconut products straight from the
          farm to your home.
        </p>
        <button
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-6 px-6 py-3 bg-green-700 text-white rounded-2xl shadow-lg hover:bg-green-800 transition-all"
        >
          Shop Now
        </button>
      </section>

      {/* Products Section */}
      <section className="py-16 px-6 bg-white">
        <h2
          data-aos="fade-right"
          className="text-3xl font-bold text-center text-green-800 mb-12"
        >
          Our Best Sellers
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.id}
              data-aos="zoom-in"
              data-aos-delay={index * 200}
              className="bg-green-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-700">
                  {product.name}
                </h3>
                <p className="mt-2 text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-green-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <img
            data-aos="fade-right"
            src="https://images.unsplash.com/photo-1623065396091-08e72b1f4010?auto=format&fit=crop&w=800&q=80"
            alt="Coconut Farm"
            className="rounded-2xl shadow-lg"
          />
          <div data-aos="fade-left">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We source coconuts directly from organic farms to ensure premium
              quality. Our products are 100% natural, eco-friendly, and packed
              with nutrition for your health & wellness.
            </p>
            <button className="mt-6 px-6 py-3 bg-green-700 text-white rounded-2xl shadow hover:bg-green-800 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8 text-center">
        <p>&copy; {new Date().getFullYear()} CoconutPure. All rights reserved.</p>
      </footer>
    </div>
  );
}
