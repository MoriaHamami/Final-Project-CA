
import { useState } from 'react'

export function SidebarColors({ title, onChange, propertyName }) {
  const [color, setColor] = useState('#FFFFFF')

  const onChangeColor = (color) => {
    setColor(color)
    onChange(propertyName, color)
  }

  const colors = ['#FFFFFF', '#FFEF82', '#F28B82', '#FBBC04', '#CCFF90', '#A7FFEB', '#CBF0F8', '#F1E4DE', '#D7AEFB', '#FDCFE8', '#E6C9A8', '#151515']
  let renderedColors = colors

  return (
    <div>
      <span>{title}</span>
      <div className="colors-container">
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