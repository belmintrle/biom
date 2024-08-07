const ButtonLight = ( props ) => {
  return(
    <a href={props.link} className={`bg-white hover:bg-gray-light transition-colors duration-300 ease-out rounded-[6px] px-[40px] py-[16px] w-min whitespace-nowrap font-brandon font-black text-[13px] leading-[16px] tracking-[1.95px] text-teal uppercase ${props.className}`}>
      {props.children}
    </a>
  )
}

const ButtonDark = ( props ) => {
  return(
    <a href={props.link} className={`bg-teal hover:bg-teal-dark transition-colors duration-300 ease-out rounded-[6px] px-[40px] py-[16px] w-min whitespace-nowrap font-brandon font-black text-[13px] leading-[16px] tracking-[1.95px] text-gray-light uppercase ${props.className}`}>
      {props.children}
    </a>
  )
}

const ButtonIcon = ( props ) => {
  return(
    <a href={props.link} className={`group border border-teal-dark transition-colors duration-300 ease-out rounded-[6px] w-min whitespace-nowrap font-brandon font-black text-[13px] leading-[16px] tracking-[1.3px] text-teal uppercase flex flex-row ${props.className}`}>
      <div className="px-[15px] py-[15px]">{props.label}</div>
      <div className="px-[15px] py-[15px] border-l border-teal-dark flex items-center">
        <div className="w-[18px] transition-transform duration-300 ease-out group-hover:translate-x-1">
          {props.children}
        </div>
      </div>
    </a>
  )
}

const ButtonIconIg = ( props ) => {
  return(
    <a href={props.link} className={`group border border-teal-dark transition-colors duration-300 ease-out rounded-[6px] w-min whitespace-nowrap font-brandon font-black text-[13px] leading-[16px] tracking-[1.3px] text-teal uppercase flex flex-row overflow-hidden ${props.className}`}>
      <div className="px-[15px] py-[15px]">{props.label}</div>
      <div className="px-[15px] py-[15px] border-l border-teal-dark transition-colors duration-300 ease-out bg-transparent group-hover:bg-teal-dark flex items-center">
        <div className="w-[18px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.996 15.996" className="transition-colors duration-300 ease-out fill-teal group-hover:fill-white"><g transform="translate(-4.5 -4.5)"><path d="M15.83,5.833a3.342,3.342,0,0,1,3.332,3.332V15.83a3.342,3.342,0,0,1-3.332,3.332H9.165A3.342,3.342,0,0,1,5.833,15.83V9.165A3.342,3.342,0,0,1,9.165,5.833H15.83m0-1.333H9.165A4.679,4.679,0,0,0,4.5,9.165V15.83A4.679,4.679,0,0,0,9.165,20.5H15.83A4.679,4.679,0,0,0,20.5,15.83V9.165A4.679,4.679,0,0,0,15.83,4.5Z" transform="translate(0 0)"/><path d="M24.637,11.024a1.012,1.012,0,1,1,1.012-1.012A1.009,1.009,0,0,1,24.637,11.024Z" transform="translate(-7.814 -1.839)"/><path d="M15.283,12.594a2.688,2.688,0,1,1-2.688,2.688,2.691,2.691,0,0,1,2.688-2.688m0-1.344a4.033,4.033,0,1,0,4.033,4.033,4.034,4.034,0,0,0-4.033-4.033Z" transform="translate(-2.785 -2.785)"/></g></svg>
        </div>
      </div>
    </a>
  )
}

export { ButtonLight, ButtonDark, ButtonIcon, ButtonIconIg }