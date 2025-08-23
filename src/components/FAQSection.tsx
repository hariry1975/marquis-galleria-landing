import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is the payment plan structure?",
      answer: "Our flexible 5-year payment plan requires only 10% down payment, 40% during construction in easy instalments, and 50% on handover in Q4 2028. No hidden fees or charges."
    },
    {
      question: "Are the units really fully furnished?",
      answer: "Yes, all units come with premium furniture package including kitchen appliances, wardrobes, AC, lighting, and stylish furniture. Move-in ready with no additional setup costs."
    },
    {
      question: "What makes Arjan a good investment location?",
      answer: "Arjan is Dubai's fastest-growing mid-market area with 28% price appreciation in 2024. Strategic location near major business districts, upcoming metro extension, and high rental demand (7-9% yield)."
    },
    {
      question: "Is there really zero commission?",
      answer: "Absolutely. As the developer's exclusive partner, we don't charge any commission fees. This saves you approximately AED 35,000-50,000 compared to going through agents."
    },
    {
      question: "What about resale and rental potential?",
      answer: "Arjan properties have strong resale market due to affordability and location. Rental yields are 7-9% annually. Our property management partners ensure hassle-free rental if you choose to invest."
    },
    {
      question: "Can non-UAE residents buy these units?",
      answer: "Yes, all nationalities can purchase freehold properties in Dubai. We assist with the entire process including visa applications, bank account opening, and mortgage arrangements if needed."
    },
    {
      question: "What if I want to cancel my booking?",
      answer: "We offer a 14-day cooling-off period for full refund. Our transparent contracts ensure no surprise clauses. All payments are held in escrow for your protection."
    },
    {
      question: "When will construction start and finish?",
      answer: "Construction is already underway with foundation work completed. Project is on schedule for Q4 2028 handover. Regular progress updates and site visits available for buyers."
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Speak to Expert",
      description: "Direct line to senior property consultant",
      action: "Call +971 56 170 0817",
      color: "green"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Chat", 
      description: "Quick responses to your questions",
      action: "Start WhatsApp Chat",
      color: "blue"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
            <HelpCircle className="w-3 h-3 mr-1" />
            Got Questions?
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get instant answers to the most common questions about Marquis One investment
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FAQ Accordion */}
          <div className="lg:col-span-2">
            <Card className="shadow-luxury">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-gold/20">
                      <AccordionTrigger className="text-left font-semibold text-navy hover:text-gold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-navy mb-4">Still Have Questions?</h3>
              <p className="text-muted-foreground mb-6">
                Our property experts are available 24/7 to help with any specific queries about Marquis One.
              </p>
            </div>

            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="shadow-soft hover:shadow-luxury transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${method.color === 'green' ? 'bg-green-100' : 'bg-blue-100'}`}>
                        <Icon className={`w-5 h-5 ${method.color === 'green' ? 'text-green-600' : 'text-blue-600'}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-navy">{method.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button 
                      className={`w-full ${method.color === 'green' ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
                      onClick={() => {
                        if (method.title === "Speak to Expert") {
                          window.open('tel:+971561700817', '_self');
                        } else {
                          const message = encodeURIComponent("Hi, I have questions about Marquis One in Arjan. Please help.");
                          window.open(`https://wa.me/971561700817?text=${message}`, '_blank');
                        }
                      }}
                    >
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}

            {/* Quick Stats */}
            <Card className="bg-gradient-luxury text-white shadow-luxury">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold mb-2">1,200+</div>
                <div className="text-sm opacity-90 mb-3">Successful Property Transactions</div>
                <div className="text-xs opacity-75">
                  Trusted by investors across 50+ countries
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;