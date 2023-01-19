import React from 'react'
import { DynamicCmp } from './dynamic-cmp'

// info: {
//     subtitle: 'Our Story',
//     title: 'THE LOVE FOR PIZZA',
//     imgUrl: 'https://uploads-ssl.webflow.com/5af49de0dbb1e3637f2d8886/5afa1b861bc189407c1a9b2c_dash-device.png',
//     txt: "Mario takes great pride in crafting each pizza with care. He tirelessly experiments with new recipes to perfect his craft. He takes the time to listen to customers' feedback to improve his pizzas. His enthusiasm for his work is contagious and it's clear that he truly loves what he does."

//   },

export function WapPreview({ style, cmp }) {
  return (
    <div id={cmp.type} style={style} className={cmp.name}>
            <span className="subtitle">{cmp.info.subtitle}</span>
            <h2 className="title">{cmp.info.title}</h2>
            {cmp.info.imgUrl && <img src={cmp.info.imgUrl} alt="" />}
            <p className="txt">{cmp.info.txt}</p>
            {cmp.info.btn && <button>{cmp.info.btn.label}</button>}
    </div>
  )
}
