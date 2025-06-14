'use client'

import { useState, useEffect } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    restaurant: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [emailJSReady, setEmailJSReady] = useState(false);

  // Check for EmailJS availability
  useEffect(() => {
    const checkEmailJS = () => {
      if (typeof window !== 'undefined' && window.emailjs) {
        window.emailjs.init("winnx47WIGJzZR862");
        setEmailJSReady(true);
        console.log('EmailJS initialized successfully');
      } else {
        // Retry after a short delay
        setTimeout(checkEmailJS, 100);
      }
    };

    // Start checking after component mounts
    const timer = setTimeout(checkEmailJS, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) {
      setError('');
    }
  };

  const validateForm = () => {
    const { name, email, restaurant, message, phone } = formData;
    
    // Check required fields
    if (!name.trim() || !email.trim() || !restaurant.trim() || !message.trim()) {
      return 'Моля, попълнете всички задължителни полета';
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Моля, въведете валиден имейл адрес';
    }
    
    // Validate phone if present
    if (phone.trim()) {
      const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
      if (!phoneRegex.test(phone)) {
        return 'Моля, въведете валиден телефонен номер';
      }
    }
    
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Check if EmailJS is ready
    if (!emailJSReady) {
      setError('Моля, изчакайте да се зареди системата за изпращане на имейли...');
      return;
    }
    
    // Validate form
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Double check if EmailJS is available
      if (!window.emailjs) {
        throw new Error('EmailJS все още се зарежда');
      }
      
      // Prepare template parameters
      const templateParams = {
        restaurant: formData.restaurant,
        name: formData.name,
        message: formData.message,
        email: formData.email,
        phone: formData.phone || 'Не е предоставен'
      };
      
      console.log('Sending email with params:', templateParams);
      
      // Send email using EmailJS
      const result = await window.emailjs.send("service_5zeefxe", "template_glecl94", templateParams);
      
      console.log('Email sent successfully:', result);
      
      // Success
      setIsSubmitted(true);
      
      // Track successful form submission (if Google Analytics is available)
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'form_submission', {
          'event_category': 'Contact',
          'event_label': 'Restaurant Partner'
        });
      }
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      setError('Възникна грешка при изпращането. Моля, опитайте отново по-късно или се свържете с нас на info@ketaring.bg');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewMessage = () => {
    setIsSubmitted(false);
    setError('');
    setFormData({
      name: '',
      email: '',
      restaurant: '',
      phone: '',
      message: ''
    });
  };

  if (isSubmitted) {
    return (
      <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
          <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Благодарим за интереса!</h3>
        <p className="text-gray-600 mb-6">
          Вашето съобщение беше успешно изпратено. Ще се свържем с вас възможно най-скоро.
        </p>
        <button
          type="button"
          onClick={handleNewMessage}
          className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-colors"
        >
          Изпратете друго съобщение
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-md bg-red-50 p-4 border border-red-200">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* EmailJS loading indicator */}
      {!emailJSReady && (
        <div className="rounded-md bg-blue-50 p-4 border border-blue-200">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="animate-spin h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">Зарежда се системата за изпращане на имейли...</p>
            </div>
          </div>
        </div>
      )}
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-900">
          Име *
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={formData.name}
          onChange={handleInputChange}
          className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
          placeholder="Вашето име"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-900">
          Имейл *
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={formData.email}
          onChange={handleInputChange}
          className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
          placeholder="Вашият имейл адрес"
        />
      </div>
      
      <div>
        <label htmlFor="restaurant" className="block text-sm font-medium text-gray-900">
          Име на ресторанта *
        </label>
        <input
          type="text"
          name="restaurant"
          id="restaurant"
          required
          value={formData.restaurant}
          onChange={handleInputChange}
          className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
          placeholder="Името на вашия ресторант"
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
          Телефон
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
          placeholder="Вашият телефонен номер"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-900">
          Съобщение *
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleInputChange}
          className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
          placeholder="Вашето съобщение"
        />
      </div>
      
      <div>
        <button
          type="submit"
          disabled={isSubmitting || !emailJSReady}
          className="w-full flex justify-center items-center rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Изпращане...
            </>
          ) : !emailJSReady ? (
            'Зарежда се...'
          ) : (
            'Изпрати съобщението'
          )}
        </button>
      </div>
    </form>
  );
} 