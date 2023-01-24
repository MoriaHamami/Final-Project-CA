import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export function SidebarFontSize({ title, propertyName, onChange, chosenComponent }) {

  const [fontSizeVal, setFontSizeVal] = useState(1.6)
  const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)


  useEffect(() => {
    const fontSize = selectedElement?.style[propertyName] ? +selectedElement.style[propertyName].replace('em', '') : 1
    setFontSizeVal(fontSize)
  }, [selectedElement])



  function onChangeRange({ target }) {
    target.title = target.value
    setFontSizeVal(target.value)
    onChange(propertyName, target.value + 'em')
  }

  return <div>
    <div className='slider-container'>
      <label>{title}: </label>
      <span>{fontSizeVal}</span>
    </div>


    {/* <Box> */}
      <Slider
        className="range-container"
        size='small'
        key={'fontSize1'}
        color='primary'
        onChange={onChangeRange}
        value={fontSizeVal}
        aria-label='Default'
        valueLabelDisplay='auto'
        step={0.1}
        min={0.1}
        max={4}
        sx={{ color: '#434242' }}
      />
    {/* </Box> */}


  </div>
}