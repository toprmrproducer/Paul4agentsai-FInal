import React from 'react';
import { Container } from '../ui/Container';
import { GradientText } from '../ui/GradientText';
import { TestimonialCard } from './TestimonialCard';

const testimonials = [
  {
    quote: "4agents.ai transformed our customer service operations. The AI solutions they implemented reduced response times by 80%.",
    author: "Sarah Johnson",
    role: "CEO, TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
  },
  {
    quote: "The ROI we've seen from their lead automation tools has been incredible. Our conversion rates doubled in just three months.",
    author: "Michael Chen",
    role: "Marketing Director, GrowthX",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150"
  },
  {
    quote: "Their expertise in AI integration is unmatched. They didn't just provide a solution; they transformed our entire workflow.",
    author: "Emily Rodriguez",
    role: "CTO, InnovateNow",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-black">
      <Container>
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          What Our <GradientText>Clients Say</GradientText>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}