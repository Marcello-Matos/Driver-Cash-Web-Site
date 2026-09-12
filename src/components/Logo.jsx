export default function Logo({ className = 'h-10 w-auto' }) {   return (     <svg viewBox='0 0 901 344' className={className} role='img' aria-label='Driver Cash'>       <defs>         <linearGradient id='lgShine' x1='0' y1='0' x2='1' y2='0'>           <stop offset='0' stopColor='#fff' stopOpacity='0' />           <stop offset='0.5' stopColor='#fff' stopOpacity='0.35' />           <stop offset='1' stopColor='#fff' stopOpacity='0' />         </linearGradient>         <clipPath id='lgClip'>           <rect width='901' height='344' rx='26' />         </clipPath>       </defs>        <g clipPath='url(#lgClip)'>         {/* Selo verde */}         <g className='logo-tile' transform='translate(83 72)'>           <rect width='200' height='200' rx='38' fill='#21d36b' />           <g className='logo-car-group'>             <g fill='none' stroke='#fff' strokeWidth='10' strokeLinecap='round' strokeLinejoin='round'>               <path className='logo-car-body' d='M38 128V91h93l31 32v34H38z' />               <path className='logo-car-body' d='M131 91v32h31' />               <path className='logo-car-detail' d='M38 157h-12M162 157h18' />               <path className='logo-car-detail' d='M38 128h-16M178 128h13' />               <circle className='logo-car-detail logo-wheel' cx='72' cy='157' r='15' />               <circle className='logo-car-detail logo-wheel' cx='143' cy='157' r='15' />             </g>           </g>         </g>

        {/* Texto */}
        <text className='logo-text-driver' x='335' y='207' fill='#fff' fontFamily='Arial,sans-serif' fontSize='92' fontWeight='700' letterSpacing='-3'>Driver</text>
        <text className='logo-text-cash' x='604' y='207' fill='#21d36b' fontFamily='Arial,sans-serif' fontSize='92' fontWeight='700' letterSpacing='-3'>Cash</text>
        {/* Brilho */}
        <rect className='logo-shine' x='-90' y='-20' width='130' height='384' fill='url(#lgShine)' />
      </g>
    </svg>
  )
}
