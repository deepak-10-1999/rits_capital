import React from 'react'
import Div from '../Div'
import './logolist.scss'

export default function LogoList() {
  const partnerLogos = [
    {
      src: '/images/afinozlogo.png', 
      alt:'Partner'
    },
    {
      src: '/images/climifylogo.png', 
      alt:'Partner'
    },
    {
      src: '/images/dlflogo.png', 
      alt:'Partner'
    },
    {
      src: '/images/flaglogo.png', 
      alt:'Partner'
    },
    {
      src: '/images/maavatarlogo.png', 
      alt:'Partner'
    },
    {
      src: '/images/sushain.png', 
      alt:'Partner'
    },
     {
      src: '/images/sanjivlogo.png', 
      alt:'Partner'
    },
    {
      src: '/images/xtendedlogo.png', 
      alt:'Partner'
    }
  ]
  return (
    <Div className="cs-partner_logo_wrap col-md-12 flex">
      {partnerLogos.map((partnerLogo, index)=><div className="cs-partner_logo" key={index}><img className='   m-auto rounded-5 p-2' src={partnerLogo.src} alt={partnerLogo.alt} /></div>)}
    </Div>
  )
}
