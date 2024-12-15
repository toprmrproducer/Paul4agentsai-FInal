import { useState } from 'react';
import { addLeadToSpreadsheet } from '../../utils/spreadsheet';

export function useLeadCapture() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (data: any) => {
    setIsSubmitting(true);
    setError('');

    try {
      const result = await addLeadToSpreadsheet(data);
      
      if (result) {
        setIsSuccess(true);
        // Send the free AI ebook
        window.location.href = '/assets/ai-ebook.pdf';
      } else {
        setError('Failed to submit. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    isSuccess,
    error,
    handleSubmit
  };
}