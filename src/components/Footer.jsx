const Footer = () => {
  return (
    <footer className="w-full min-h-[386px] bg-teal/[.72] mt-[150px] pt-[150px] px-[69px] relative flex flex-col items-center">
      <div className="absolute h-[300px] -top-[150px] inset-x-[69px] rounded-[14px] bg-gray">
        <img src="./src/assets/images/footer.png" alt="biom product footer image" className="absolute h-full"></img>
      </div>
      <nav className="w-[839px] justify-between my-[50px] flex flex-row items-center font-brandon font-bold text-[14px] leading-[20px] tracking-[1.4px] text-gray-light uppercase">
        <a href="#">Shop</a>
        <a href="#">Why Biom</a>
        <a href="#">Scents</a>
        <a href="#">
          <img src="/footerlogo.svg" className="h-[30px] w-auto" alt="Biom Footer Logo" />
        </a>
        <a href="#">Faqs</a>
        <a href="#">Account</a>
        <a href="#">Help</a>
      </nav>
      <hr className="border-teal w-full"></hr>
      <div className="h-[105px] w-full flex flex-row items-center justify-between">
        <div className="font-brandon font-normal text-[15px] leading-[22px] tracking-[0.38px] text-gray-light">
          © 2021 biom. All rights reserved • <a href="#">Privacy Policy</a> • <a href="#">Terms of Service</a>
        </div>
        <div className="flex flex-row gap-[10px]">
          <a href="#" className="w-[30px] h-[30px] flex items-center justify-center bg-gray-light rounded-full">
            <img src="./src/assets/icons/ig.svg" className="h-[16px] w-auto" alt="Instagram Logo" />
          </a>
          <a href="#" className="w-[30px] h-[30px] flex items-center justify-center bg-gray-light rounded-full">
            <img src="./src/assets/icons/fb.svg" className="h-[16px] w-auto" alt="Facebook Logo" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;