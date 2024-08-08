import { useState } from 'react';
import arrowIcon from "../assets/icons/arrow.svg"

const EmailInput = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    setEmail('');
  };

  return (
    <div className="relative max-w-[424px] h-[52px] mt-[18px]">
      <input
        type="email"
        name='email input'
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full h-full px-[15px] flex items-center font-brandon font-normal text-[16px] leading-[30px] rounded-[6px] outline-none placeholder-black"
      />
      <button
        onClick={handleSubmit}
        className="absolute right-[7px] top-1/2 transform -translate-y-1/2 w-[44px] h-[38px] bg-teal rounded-[6px] flex justify-center items-center"
      >
        <img src={arrowIcon} className="w-[18px] h-auto" alt="Email Submit icon" />
      </button>
    </div>
  );
};

export default EmailInput;
