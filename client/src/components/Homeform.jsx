import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    yourName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    requirements: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.yourName.trim()) {
      newErrors.yourName = 'Name is required';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    // const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
    // if (!formData.phoneNumber.trim()) {
    //   newErrors.phoneNumber = 'Phone number is required';
    // } else if (!phoneRegex.test(formData.phoneNumber)) {
    //   newErrors.phoneNumber = 'Please enter a valid phone number';
    // }

    // Company name validation
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    // Requirements validation
    if (!formData.requirements.trim()) {
      newErrors.requirements = 'Please summarize your requirements';
    } else if (formData.requirements.trim().length < 10) {
      newErrors.requirements = 'Please provide more details (at least 10 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = () => {
    
    if (validateForm()) {
      setIsSubmitted(true);
      console.log('Form submitted:', formData);
      // Here you would typically send the data to your backend
    }
  };

  const resetForm = () => {
    setFormData({
      yourName: '',
      email: '',
      phoneNumber: '',
      companyName: '',
      requirements: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

//   if (isSubmitted) {
//     return (
//       <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
//         <div className="text-center">
//           <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
//             <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//             </svg>
//           </div>
//           <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
//           <p className="text-gray-600 mb-6">Your form has been submitted successfully. We'll get back to you soon.</p>
//           <button
//             onClick={resetForm}
//             className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
//           >
//             Submit Another Form
//           </button>
//         </div>
//       </div>
//     );
//   }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Contact Form</h2>
      
      <div className="space-y-4">
        {/* Your Name */}
        <div>
          <label htmlFor="yourName" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="yourName"
            name="yourName"
            value={formData.yourName}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.yourName ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your full name"
          />
          {errors.yourName && <p className="mt-1 text-sm text-red-600">{errors.yourName}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your email address"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your phone number"
          />
          {errors.phoneNumber && <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>}
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.companyName ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your company name"
          />
          {errors.companyName && <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>}
        </div>

        {/* Requirements */}
        <div>
          <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">
            Summarize Your Requirements
          </label>
          <textarea
            id="requirements"
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            rows={4}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical ${
              errors.requirements ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Please describe your requirements in detail..."
          />
          {errors.requirements && <p className="mt-1 text-sm text-red-600">{errors.requirements}</p>}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
        >
          Submit Form
        </button>
      </div>
    </div>
  );
}