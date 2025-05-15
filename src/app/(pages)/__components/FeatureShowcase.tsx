import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Target, Sliders, Globe } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({
  icon,
  title,
  description = "Feature description",
}: FeatureProps) => {
  return (
    <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="p-3 rounded-full bg-blue-50 text-blue-600 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const FeatureShowcase = () => {
  const features = [
    {
      icon: <Zap size={24} />,
      title: "Lightning Fast",
      description:
        "Get concise summaries in seconds, no matter how long the original text.",
    },
    {
      icon: <Target size={24} />,
      title: "Pinpoint Accuracy",
      description:
        "Our AI captures key points and main ideas with remarkable precision.",
    },
    {
      icon: <Sliders size={24} />,
      title: "Fully Customizable",
      description:
        "Adjust summary length and focus to meet your specific needs.",
    },
    {
      icon: <Globe size={24} />,
      title: "Seamless Integration",
      description:
        "Easily integrate with your existing workflow and applications.",
    },
  ];

  return (
    <section className="py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI summarization tool offers everything you need to extract
            valuable insights quickly and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;