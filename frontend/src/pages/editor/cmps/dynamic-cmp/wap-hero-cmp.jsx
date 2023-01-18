import React from 'react'
import { DynamicCmp } from './dynamic-cmp'

// info: {
//     title: "Mario",
//     subtitle: "PIZZA PLACE",
//     txt: 'TAKEOUT & DELIVERY',

//     btn:{ label: "Order NOW", link: "#wc03" },
//   },

export function WapHero({ style, cmp, onHoverCmp, onSelectCmp, selectedCmp, displayClass }) {
  return (
    <div style={style} className={cmp.name}>
        <div>
            <p className='title'>{cmp.info.title}</p>
            <h2 className='subtitle'>{cmp.info.subtitle}</h2>
            <p className='txt'>{cmp.info.txt}</p>
        </div>
        <nav>

         <button href={cmp.info.btn.link}>{cmp.info.btn.label}</button>
      </nav>
    </div>
  )
}
