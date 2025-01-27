import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const faqs = [
  { question: "What services do you provide?", answer: "We offer residential, commercial, and industrial services." },
  { question: "Are you certified?", answer: "Yes, we are certified by NICEIC and ISO standards." },
];

const FAQPage = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto my-8">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        {faqs.map((faq, index) => (
          <div key={index} className="border-b py-4">
            <h2 className="font-bold">{faq.question}</h2>
            <p>{faq.answer}</p>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
};

export default FAQPage;
