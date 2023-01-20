
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintbrush } from '@fortawesome/free-solid-svg-icons'

export function SidebarColors({ title, onChange, propertyName }) {
  const [color, setColor] = useState({
    color: '#FFFFFF',
    backgroundColor: '#FFFFFF',
  })


  const onChangeColor = (colorInput) => {
    setColor((prevState) => ({ ...prevState, backgroundColor: colorInput }))
    onChange(propertyName, colorInput)
  }

  const backgroundColors = ['#FFFFFF', '#F28B82', '#FBBC04', '#CCFF90', '#A7FFEB', '#CBF0F8', '#F1E4DE', '#D7AEFB', '#FDCFE8', '#E6C9A8', 'transparent']

  const colors = ['#FFFFFF', '#F28B82', '#FBBC04', '#CCFF90', '#A7FFEB', '#CBF0F8', '#F1E4DE', '#D7AEFB', '#FDCFE8', '#E6C9A8', '#151515']

  let renderedColors = colors

  return (
    <div>
      <div>{title}</div>
      <div className="colors-container">
        <label
          htmlFor="color-input"
          style={{
            height: '1.5rem',
            width: '1.5rem',
            borderRadius: '50%',
            backgroundColor: color.background === 'transparent' ? '#FFF' : color.background,
            cursor: 'pointer',
            border: '1px solid rgba(0, 0, 0, 0.4)',
          }}
        >
        </label>
        {renderedColors.map((color) => (
          <div
            onClick={() => onChangeColor(color)}
            key={color}
            style={{
              height: '1.5rem',
              width: '1.5rem',
              borderRadius: '50%',
              background: color === 'transparent' ? 'url(https://images.saymedia-content.com/.image/t_share/MTc0NTEwNzkwMDA5ODI1Mjcw/how-many-squares-are-on-a-chessboard-a-maths-problem.png)' : color,
              backgroundSize: '100%',
              cursor: 'pointer',
              border: `1px solid ${color === '#151515' ? 'rgba(255,255,255,0.4)' : 'rgba(0, 0, 0, 0.4)'}`,
            }}
          ></div>
        ))}
      </div></div>
  )
}