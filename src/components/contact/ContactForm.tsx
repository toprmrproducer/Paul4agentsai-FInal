import React from 'react';
import { Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { useContactForm } from './useContactForm';

export function ContactForm() {
  const { formData, errors, handleChange, handleSubmit } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-xl">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className={`w-full px-4 py-3 rounded-lg bg-black/50 border ${
              errors.name ? 'border-red-500' : 'border-gray-800'
            } text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all`}
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className={`w-full px-4 py-3 rounded-lg bg-black/50 border ${
              errors.email ? 'border-red-500' : 'border-gray-800'
            } text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all`}
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>
      </div>
      <div className="mb-6">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your business needs"
          rows={4}
          className={`w-full px-4 py-3 rounded-lg bg-black/50 border ${
            errors.message ? 'border-red-500' : 'border-gray-800'
          } text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all`}
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>
      <Button type="submit" className="w-full">
        Book Free Consultation
        <Send className="w-5 h-5" />
      </Button>
    </form>
  );
}