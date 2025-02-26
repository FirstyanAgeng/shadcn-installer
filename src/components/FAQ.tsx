import { Button } from "./ui/button";

const faq = [
  {
    question: "What is your return policy?",
    answer:
      "You can return unused items in their original packaging within 30 days for a refund or exchange. Contact support for assistance.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Track your order using the link provided in your confirmation email, or log into your account to view tracking details.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship worldwide. Shipping fees and delivery times vary by location, and customs duties may apply for some countries.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, MasterCard, American Express, PayPal, Apple Pay, and Google Pay, ensuring secure payment options for all customers.",
  },
  {
    question: "What if I receive a damaged item?",
    answer:
      "Please contact our support team within 48 hours of delivery with photos of the damaged item. We’ll arrange a replacement or refund.",
  },
  {
    question: "How can I contact customer support?",
    answer: "Reach out via email at support@example.com or call us at 1-800-123-4567 for assistance with any inquiries.",
  },
];

const FAQ = () => {
  return (
    <div className="   bg-[#E4E7EC] flex justify-center items-center py-[95px]">
      <div className="max-w-[900px]  p-[40px] bg-[#F9FAFB]  rounded-[16px]">
        <div className="flex justify-between">
          <div className="space-y-5">
            <h1 className="font-medium text-[48px] leading-[60px]">Support FAQ</h1>
            <p className="text-[#637083] font-[400]">Frequently Asked Question for Support</p>
          </div>
          <Button className="bg-[#1051C5] h-[48px] w-[198px] rounded-[12px] text-[16px] font-base">Ask Other Question</Button>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-x-[48px]">
          {faq.map(({ question, answer }) => (
            <div key={question} className="border-b-[1px] border-[#E4E7EC] py-6 space-y-[16px]">
              <div className=" flex items-start gap-2   tracking-tight">
                <span className="font-[600] text-[18px] leading-[28px]">{question}</span>
              </div>
              <p className="text-[#414E62] font-[400] text-[16px] leading-[24px]">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
