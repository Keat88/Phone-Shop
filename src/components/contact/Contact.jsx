import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <span className="inline-block text-orange-400 border border-orange-200/60 text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-3">
            Contact Us
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-gray-900">
            Get In Touch With Us
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mt-3 leading-relaxed">
            Have questions about our smartphones, delivery, or warranty? Send us a message or reach out using the info below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Info Cards */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            {/* Phone */}
            <div className="flex items-start space-x-4 bg-gray-50 border border-gray-100 rounded-lg hover:-translate-y-0.5 duration-200 transition-transform p-5">
              <div className="p-3 bg-orange-50 rounded-xl text-orange-300 flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.826-1.47-5.11-3.754-6.58-6.58l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Call Us</h3>
                <p className="text-xs text-gray-500 mt-0.5">Mon–Sat, 9am to 6pm</p>
                <p className="text-sm font-semibold text-gray-800 mt-2">+885965757413</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4 bg-gray-50 border border-gray-100 hover:-translate-y-0.5 duration-200 transition-transform rounded-lg p-5">
              <div className="p-3 bg-orange-50 rounded-xl text-orange-300 flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Email Us</h3>
                <p className="text-xs text-gray-500 mt-0.5">Our team will respond in 24h</p>
                <p className="text-sm font-semibold text-gray-800 mt-2">vabdyvavdy929@gmail.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-4 bg-gray-50 border border-gray-100 rounded-lg hover:-translate-y-0.5 duration-200 transition-transform p-5">
              <div className="p-3 bg-orange-50 rounded-xl text-orange-400 flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">Visit Our Store</h3>
                <p className="text-xs text-gray-500 mt-0.5">Come say hello at our location</p>
                <p className="text-sm font-semibold text-gray-800 mt-2">#32 .58P Sen Sok, Phonm Penh</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-2 bg-gray-50/50 border border-gray-100 rounded-lg p-6 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center h-full py-12 space-y-4">
                <div className="w-16 h-16 bg-orange-100 text-orange-400 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Message Sent!</h3>
                <p className="text-sm text-gray-500 max-w-md">
                  Thank you for reaching out. A customer support representative will get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="mt-4 bg-orange-300 hover:bg-orange-400 text-white font-semibold text-xs uppercase tracking-wider px-6 py-2.5 rounded-xl transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-orange-300 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-orange-300 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Inquiry about product warranty..."
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-orange-300 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full sm:w-auto self-start bg-orange-400 hover:bg-orange-500 text-white font-semibold text-xs uppercase tracking-wider px-8 py-3.5 rounded-lg shadow-md shadow-orange-500/20 transition-all duration-200 active:scale-95"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;