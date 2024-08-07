import cartIcon from "../assets/icons/cart.svg"

const CartIcon = ( props ) => {
  return(
    <div className="relative">
      <img src={cartIcon} className="h-[22px] w-auto" alt="Biom Logo"/>
      <div className="bg-gold h-[16px] min-w-[16px] rounded-full border border-white absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-cente font-medium text-[10px] tracking-[1.5px] text-gray-light"><p className="-mr-[1.5px]">{ props.itemCount }</p></div>
    </div>
  )
}

export default CartIcon;