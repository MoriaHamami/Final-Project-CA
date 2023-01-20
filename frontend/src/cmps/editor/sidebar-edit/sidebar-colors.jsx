
import { useState } from 'react'

export function SidebarColors({ title, onChange, propertyName }) {
  const [color, setColor] = useState({
    color: '#FFFFFF',
    backgroundColor: '#FFFFFF',
  })


  const onChangeColor = (colorInput) => {
    setColor((prevState) => ({ ...prevState, backgroundColor: colorInput }))
    onChange(propertyName, colorInput)
  }


  const colors = ['#FFFFFF', '#FFEF82', '#F28B82', '#FBBC04', '#CCFF90', '#A7FFEB', '#CBF0F8', '#F1E4DE', '#D7AEFB', '#FDCFE8', '#E6C9A8', '#151515']

  let renderedColors = colors

  return (
    <div>
      <span>{title}</span>
      <div className="colors-container">
        {renderedColors.map((color) => (
          <div
            onClick={() => onChangeColor(color)}
            key={color}
            style={{
              background: color,
            }}
          ></div>
        ))}
      </div></div>
  )
}