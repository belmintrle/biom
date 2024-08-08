import EmailInput from "./EmailInput"
import footerBg from "../assets/images/footer.png"
import igIcon from "../assets/icons/ig.svg"
import fbIcon from "../assets/icons/fb.svg"

const Footer = () => {
  return (
    <footer className="w-full min-h-[386px] bg-teal/[.72] mt-[150px] pt-[150px] px-[69px] relative flex flex-col items-center">
      <div className="absolute min-h-[300px] -top-[150px] inset-x-[69px] rounded-[14px] bg-gray lg:px-[111px] lg:py-[47px] p-[10px] text-black">
        <img src={footerBg} alt="biom product footer image" className="absolute hidden lg:block h-full inset-y-0 right-0 aspect-auto"></img>
        <h1 className="max-w-[324px] font-chronicle font-black text-[30px] leading-[38px]">Get the latest news delivered to your inbox.</h1>
        <p className="max-w-[414px] font-brandon font-normal text-[16px] leading-[26px] mt-[10px]">Get access to the exciting stuff — exclusive new deals, product launches and more. Plus, get a 10% discount on your next order.</p>
        <EmailInput />
      </div>
      <nav className="lg:w-[839px] w-full gap-[10px] lg:gap-0 justify-between my-[50px] flex lg:flex-row flex-col items-center font-brandon font-bold text-[14px] leading-[20px] tracking-[1.4px] text-gray-light uppercase">
        <a href="#" className="block lg:hidden">
          <img src="/footerlogo.svg" className="h-[30px] w-auto" alt="Biom Footer Logo" />
        </a>
        <a href="#" className="underline underline-offset-[8px] decoration-teal/0 hover:decoration-teal decoration-2 transition-colors duration-300 ease-out">Shop</a>
        <a href="#" className="underline underline-offset-[8px] decoration-teal/0 hover:decoration-teal decoration-2 transition-colors duration-300 ease-out">Why Biom</a>
        <a href="#" className="underline underline-offset-[8px] decoration-teal/0 hover:decoration-teal decoration-2 transition-colors duration-300 ease-out">Scents</a>
        <a href="#" className="hidden lg:block">
          <img src="/footerlogo.svg" className="h-[30px] w-auto" alt="Biom Footer Logo" />
        </a>
        <a href="#" className="underline underline-offset-[8px] decoration-teal/0 hover:decoration-teal decoration-2 transition-colors duration-300 ease-out">Faqs</a>
        <a href="#" className="underline underline-offset-[8px] decoration-teal/0 hover:decoration-teal decoration-2 transition-colors duration-300 ease-out">Account</a>
        <a href="#" className="underline underline-offset-[8px] decoration-teal/0 hover:decoration-teal decoration-2 transition-colors duration-300 ease-out">Help</a>
      </nav>
      <hr className="border-teal w-full"></hr>
      <div className="min-h-[105px] w-full flex flex-row items-center justify-between">
        <div className="font-brandon font-normal text-[15px] leading-[22px] tracking-[0.38px] text-gray-light">
          © 2021 biom. All rights reserved • <a href="#">Privacy Policy</a> • <a href="#">Terms of Service</a>
        </div>
        <div className="flex flex-row gap-[10px]">
          <a href="#" className="w-[30px] h-[30px] flex items-center justify-center bg-gray-light rounded-full">
            <img src={igIcon} className="h-[16px] w-auto" alt="Instagram Logo" />
          </a>
          <a href="#" className="w-[30px] h-[30px] flex items-center justify-center bg-gray-light rounded-full">
            <img src={fbIcon} className="h-[16px] w-auto" alt="Facebook Logo" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;