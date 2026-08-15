import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "Senior Frontend Developer",
    company: "TechCorp",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    content:
      "DevTools Hub has become an essential part of my daily workflow. The JWT decoder and JSON formatter alone save me hours every week. Highly recommended!",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Full Stack Engineer",
    company: "StartupXYZ",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    content:
      "The performance is incredible. No ads, no fluff – just solid tools that work exactly as expected. This is how developer tools should be.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "DevOps Engineer",
    company: "CloudServices Inc",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    content:
      "I've tried many tool collections, but DevTools Hub is the most comprehensive and user-friendly. The regex tester is particularly impressive.",
    rating: 5,
  },
  {
    name: "James Thompson",
    role: "Backend Developer",
    company: "Enterprise Solutions",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    content:
      "Clean interface, fast execution, and everything works reliably. This is my go-to tool collection for all encoding/decoding needs.",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Loved by Developers
          </h2>
          <p className="text-lg text-slate-600">
            Join thousands of developers who trust DevTools Hub for their daily
            development tasks
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col p-6 bg-slate-50 rounded-lg border border-slate-200 hover:border-indigo-300 transition-colors"
            >
              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Content */}
              <p className="text-slate-700 text-sm leading-relaxed mb-6 flex-1">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-slate-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold text-slate-900 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 mb-4">
            Ready to boost your productivity?
          </p>
          <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
            Get Started Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
