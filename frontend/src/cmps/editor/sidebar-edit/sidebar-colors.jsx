
import { useEffect, useState } from 'react'

export function SidebarColors({ title, onChange, propertyName, selectedElement }) {
  const [color, setColor] = useState('#FFFFFF')


  const onChangeColor = (color) => {
    setColor(color)
    onChange(propertyName, color)
  }

  const colors = [
    '#ddd9d9',
    '#e1de9a',
    '#d6c085',
    '#d3b0c0',
    '#d6a4a4',
    '#b0cfd3',
    '#9bc1b3',
    '#86aac5',
    '#a391b1',
    '#b1afaa',
    '#73726e',
  ]

  let renderedColors = colors

  if (propertyName === "backgroundColor" && (selectedElement.type === 'txt' || selectedElement.type === 'img' || selectedElement.type === 'map' || selectedElement.type === 'video')) return
  if (propertyName === "color" && selectedElement.type !== 'txt' && selectedElement.type !== 'btn' && selectedElement.type !== 'input') return
  // console.log('propertyName:', propertyName)
  return (
    <div>

      <div className="label">{title}</div>
      <div className="colors-container">
        <label
          htmlFor="color-input"
          style={{
            height: '28px',
            width: '28px',
            borderRadius: '28px',
            backgroundColor: color,
            cursor: 'pointer',
          }}
        >

          <input onChange={(ev) => onChangeColor(ev.target.value)} style={{ visibility: 'hidden' }} id="color-input" type="color" />
          <span className="material-symbols-outlined colorize-icon">colorize</span>
        </label>
        {renderedColors.map((clr) => (
          <div
            onClick={() => onChangeColor(clr)}
            key={clr}
            className={clr === color ? 'active' : ''}
            style={{ background: clr }}
          ></div>
        ))}
      </div>

    </div>
  )
}