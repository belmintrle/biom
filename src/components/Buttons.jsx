const ButtonLight = ( props ) => {
  return(
    <a href={props.link} className={`bg-white rounded-[6px] px-[40px] py-[16px] w-min whitespace-nowrap font-brandon font-black text-[13px] leading-[30px] tracking-[1.95px] text-teal uppercase ${props.className}`}>
      {props.children}
    </a>
  )
}

const ButtonDark = ( props ) => {
  return(
    <a href={props.link} className={`bg-teal rounded-[6px] px-[40px] py-[16px] w-min whitespace-nowrap font-brandon font-black text-[13px] leading-[30px] tracking-[1.95px] text-gray-light uppercase ${props.className}`}>
      {props.children}
    </a>
  )
}

export { ButtonLight, ButtonDark }