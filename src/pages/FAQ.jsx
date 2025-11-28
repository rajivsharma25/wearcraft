import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion"

const FAQ = () => {
    const faqs = [
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay."
        },
        {
            question: "How can I track my order?",
            answer: "Once your order has shipped, you will receive an email with a tracking number. You can use this number to track your package on our website or the carrier's website."
        },
        {
            question: "Do you ship internationally?",
            answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary depending on the destination."
        },
        {
            question: "What is your return policy?",
            answer: "We offer a 30-day return policy for unused and unworn items in their original packaging. Please visit our Returns Policy page for more details."
        },
        {
            question: "How do I determine my size?",
            answer: "We have a comprehensive size guide available on each product page. If you are still unsure, please contact our customer support team for assistance."
        },
        {
            question: "Can I cancel or modify my order?",
            answer: "We process orders quickly, but if you contact us within 1 hour of placing your order, we may be able to make changes or cancel it. Please contact us immediately."
        }
    ];

    return (
        <div className="container mx-auto px-4 py-16 max-w-3xl">
            <h1 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h1>

            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default FAQ;
