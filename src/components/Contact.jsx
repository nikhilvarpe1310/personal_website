import React from 'react';

const Contact = () => {
  return (
    <section className="py-8 md:py-12 px-4 border">
      <div className="container mx-auto py-8 md:py-16">
        <h1 className="text-center pb-6 text-3xl md:text-5xl underline font-bold">
          Contact Me
        </h1>
        <h2 className="pb-8 md:pb-14 text-lg md:text-2xl text-center">
          Any Queries, feel free to ask
        </h2>

        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-xl md:text-2xl text-gray-600 font-semibold"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-xl md:text-2xl text-gray-600 font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded-full"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-xl md:text-2xl text-gray-600 font-semibold"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-full"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-orange-500 px-3 py-2 text-xl md:text-2xl rounded-full shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
