import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  company: string;
  avatarUrl?: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote:
      "This AI summarization tool has completely transformed how our team processes research papers. What used to take hours now takes minutes.",
    name: "Sarah Johnson",
    position: "Research Director",
    company: "TechInsights",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
  },
  {
    quote:
      "The accuracy of the summaries is impressive. It captures the key points while maintaining the context of the original document.",
    name: "Michael Chen",
    position: "Content Strategist",
    company: "MediaFlow",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
  },
  {
    quote:
      "We've integrated this tool into our workflow and it's saved our analysts countless hours. The customization options are particularly valuable.",
    name: "Alex Rivera",
    position: "Data Analytics Lead",
    company: "DataSphere",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
  },
  {
    quote:
      "As a journalist, I need to quickly digest large amounts of information. This tool has become indispensable to my daily work.",
    name: "Emma Thompson",
    position: "Senior Editor",
    company: "Global News Network",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
  },
];

const Testimonial = ({
  quote,
  name,
  position,
  company,
  avatarUrl,
}: TestimonialProps) => {
  return (
    <Card className="h-full bg-white border border-gray-100 shadow-sm">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex-1">
          <svg
            className="h-8 w-8 text-teal-500 mb-4"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="text-gray-700 mb-4">{quote}</p>
        </div>
        <div className="flex items-center mt-4">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-gray-900">{name}</p>
            <p className="text-sm text-gray-500">
              {position}, {company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-16 " id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how our AI summarization tool is helping professionals
            across industries save time and improve productivity.
          </p>
        </div>

        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>

        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Testimonial {...testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="relative static mr-2" />
              <CarouselNext className="relative static ml-2" />
            </div>
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
            Read More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
