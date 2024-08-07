import { useState } from 'react';

const EmailInput = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    setEmail('');
  };

  return (
    <div className="relative w-[424px] h-[52px]">
      <input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full h-full px-[15px] flex items-center box-border text-base leading-6 rounded-md"
      />
      <button
        onClick={handleSubmit}
        className="absolute right-[7px] top-1/2 transform -translate-y-1/2 w-[44px] h-[38px] bg-teal rounded-md"
      >
        <img src="/footerlogo.svg" className="w-[18px] h-auto" alt="Biom Footer Logo" />
      </button>
    </div>
  );
};

export default EmailInput;
