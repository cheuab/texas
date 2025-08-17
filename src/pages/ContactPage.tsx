import React from 'react';
import { MapPinIcon, MailIcon, PhoneIcon } from 'lucide-react';
const ContactPage = () => {
  return <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#BF5700] mb-6">Contact Us</h1>
      <p className="text-gray-700 mb-8">
        Have questions or suggestions? We'd love to hear from you. Reach out to
        the Chemical Engineering Undergraduate Advisory Board.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">
                Name
              </label>
              <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#BF5700]" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email
              </label>
              <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#BF5700]" placeholder="Your email" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 mb-1">
                Subject
              </label>
              <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#BF5700]" placeholder="Message subject" />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1">
                Message
              </label>
              <textarea id="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#BF5700]" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="px-6 py-3 bg-[#BF5700] text-white rounded-md hover:bg-[#A64A00] transition-colors">
              Send Message
            </button>
          </form>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <MapPinIcon className="w-6 h-6 text-[#BF5700] mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-700">
                  McKetta Department of Chemical Engineering
                  <br />
                  The University of Texas at Austin
                  <br />
                  200 E Dean Keeton St, Austin, TX 78712
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <MailIcon className="w-6 h-6 text-[#BF5700] mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:cheadvisoryboard@utexas.edu" className="text-[#BF5700] hover:underline">
                  cheadvisoryboard@utexas.edu
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <PhoneIcon className="w-6 h-6 text-[#BF5700] mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-700">(512) 471-5238</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Office Hours</h3>
              <p className="text-gray-700">
                Monday - Friday: 9:00 AM - 5:00 PM
                <br />
                Weekend: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ContactPage;