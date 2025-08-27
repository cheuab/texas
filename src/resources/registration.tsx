import React from "react";

const tips = [
  {
    title: "Prepare a Backup Schedule",
    description:
      "A lot of classes fill up fast, make sure to have alternative courses ready in case your first choices fill up quickly. UT Registration Plus is a helpful tool for this.",
  },
  {
    title: "Check yourself for Prerequisites",
    description:
      "UT has it's own system for checking if courses enforce their prerequisites, sometimes you can get away with skipping prerequisites, sometimes you can't, depending if it's an enforcer or informer.",
  },
  {
    title: "Meet With Your Advisor",
    description:
      "You should be assigned a Faculty Advisor in Navigate, try to schedule a meeting. Sometimes, they may not be responsive, in that case schedule an appointment with an Academic Advisor.",
  },
  {
    title: "Register using the course schedule.",
    description:
      "In order to get classes as quick as possible, stay on the course schedule and click add class to your first class, then have your second class code copied to paste and register right after the first.",
  },
];

const faqs = [
  {
    question: "What should I do if a class is full?",
    answer:
      "Join the waitlist if available, and check the schedule regularly for new sections. Contact the instructor to ask about overrides after the 4th class day.",
  },
  {
    question: "How do I know which classes to take?",
    answer:
      "Review your degree plan and consult with your academic advisor. Use online tools to track prerequisites and graduation requirements.",
  },
  {
    question: "Can I change my schedule after registering?",
    answer:
      "Yes, you can add/drop classes during the registration period. Be mindful of deadlines to avoid fees or academic penalties.",
  },
  {
    question: "Where can I find registration help?",
    answer:
      "Ask your advisor for assistance. Also, find upperclassmen, they can be great for advice.",
  },
  {
    question: "What if I have a hold on my account?",
    answer:
      "Visit your RIS page to see details. Usually it will give you a good description of what you need to do. Contact the Advisors if you need help.",
  },
  {
    question: "How do I get more details about a class?",
    answer:
      "Visit the course schedule, and click on the past syllabi button. You can then search different classes and see all the syllabi for that course for the past 15 years.",
  },
];

const Registration: React.FC = () => (
  <div className="min-h-screen w-full bg-[#FFF8F0] py-12 px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold text-[#BF5700] mb-4 text-center">Registration Tips & FAQ</h1>
      <p className="text-gray-700 mb-10 text-lg max-w-2xl mx-auto text-center">
        Get the most out of course registration with these practical tips and answers to common questions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <section className="bg-white rounded-lg shadow p-6 flex-1">
          <h2 className="text-3xl font-bold text-[#BF5700] mb-4 text-center">Tips & Tricks</h2>
          <ul className="space-y-4">
            {tips.map((tip, idx) => (
              <li key={idx} className="text-center">
                <span className="block text-lg font-semibold text-[#BF5700] mb-1">{tip.title}</span>
                <span className="text-gray-700 text-base">{tip.description}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="bg-white rounded-lg shadow p-6 flex-1">
          <h2 className="text-2xl font-bold text-[#BF5700] mb-4 text-center">Helpful Links</h2>
          <ul className="space-y-4">
            <li>
              <a href="https://registrar.utexas.edu/schedules" target="_blank" rel="noopener noreferrer" className="block text-lg font-semibold text-[#BF5700] mb-1 hover:underline">UT Course Schedules</a>
              <span className="text-gray-700 text-base">This is where you'll go to find information on course offerings.</span>
            </li>
            <li>
              <a href="https://enterprise.login.utexas.edu/idp/profile/SAML2/Redirect/SSO?execution=e1s2" target="_blank" rel="noopener noreferrer" className="block text-lg font-semibold text-[#BF5700] mb-1 hover:underline">EAB Navigate</a>
              <span className="text-gray-700 text-base">Make advising appointments and create your 4 year plan.</span>
            </li>
            <li>
              <a href="https://chromewebstore.google.com/detail/ut-registration-plus/hboadpjkoaieogjimneceaahlppnipaa?hl=en&pli=1" target="_blank" rel="noopener noreferrer" className="block text-lg font-semibold text-[#BF5700] mb-1 hover:underline">Download UT Registration Plus</a>
              <span className="text-gray-700 text-base">Download UTRP, a Chrome extension that will help you out lots.</span>
            </li>
            <li>
              <a href="" target="_blank" rel="noopener noreferrer" className="block text-lg font-semibold text-[#BF5700] mb-1 hover:underline">Priority sheet</a>
              <span className="text-gray-700 text-base">See which classes fill up the fastest so you can make a plan for registering.</span>
            </li>
            <li>
              <a href="https://utdirect.utexas.edu/apps/studentfinancials/mytuitionbill/" target="_blank" rel="noopener noreferrer" className="block text-lg font-semibold text-[#BF5700] mb-1 hover:underline">My Tuition Bill</a>
              <span className="text-gray-700 text-base">Make sure to confirm your tuition bill before semesters.</span>
            </li>
            <li>
              <a href="https://catalog.utexas.edu/undergraduate/engineering/degrees-and-programs/bs-chemical-engineering/" target="_blank" rel="noopener noreferrer" className="block text-lg font-semibold text-[#BF5700] mb-1 hover:underline">Degree Plan</a>
              <span className="text-gray-700 text-base">Use the degree plan to cooridnate your schedules.</span>
            </li>
          </ul>
        </section>
      </div>
      <section>
        <h2 className="text-3xl font-bold text-[#BF5700] mb-4">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold text-[#BF5700] mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default Registration;
