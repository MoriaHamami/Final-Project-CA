
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintbrush } from '@fortawesome/free-solid-svg-icons'

export function SidebarColors() {
    const [color, setColor] = useState({
        color: '#FFFFFF',
        background: '#FFFFFF',
      })
      
      console.log('color:',color)
      
      const onChangeColor = (colorInput) => {
        setColor((prevState) => ({ ...prevState, background: colorInput }))
      }
      
      const backgroundColors = ['#FFFFFF', '#F28B82', '#FBBC04', '#CCFF90', '#A7FFEB', '#CBF0F8', '#F1E4DE', '#D7AEFB', '#FDCFE8', '#E6C9A8', 'transparent']
      
      const colors = ['#FFFFFF', '#F28B82', '#FBBC04', '#CCFF90', '#A7FFEB', '#CBF0F8', '#F1E4DE', '#D7AEFB', '#FDCFE8', '#E6C9A8', '#151515']
      
      let renderedColors =  colors
      
        return (
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
                {/* <FontAwesomeIcon icon={faPaintbrush} 
                style={{
                  margin:'auto',
                }}/> */}
                {/* <input onChange={(ev) => debounce(ev.target.value)} id="color-input" type="color" /> */}
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
            </div>
        )
      }