
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintbrush } from '@fortawesome/free-solid-svg-icons'

export function SidebarColors({ title, onChange, propertyName }) {
  const [color, setColor] = useState('#FFFFFF')

  const onChangeColor = (color) => {
    setColor(color)
    onChange(propertyName, color)
  }

  const colors = ['#FFFFFF', '#FFEF82', '#F28B82', '#FBBC04', '#CCFF90', '#A7FFEB', '#F1E4DE', '#D7AEFB', '#FDCFE8', '#E6C9A8', '#151515']
  let renderedColors = colors

  return (
    <div>
      <span>{title}</span>
      <div className="colors-container">
      <label
          htmlFor="color-input"
          style={{
            height: '28px',
            width: '28px',
            borderRadius: '28px',
            backgroundColor: color,
            cursor: 'pointer',
            // border: '1px solid rgba(255, 255, 255, 0.4)',
          }}
        >
          
          <input onChange={(ev) => onChangeColor(ev.target.value)} style={{visibility:'hidden'}} id="color-input" type="color" />
          <span class="material-symbols-outlined colorize-icon">colorize</span>
        </label>
        {renderedColors.map((clr) => (
          <div
            onClick={() => onChangeColor(clr)}
            key={clr}
            className={clr === color ? 'active' : ''}
            style={{
              background: clr,
            }}
          ></div>
        ))}
      </div></div>
)
}