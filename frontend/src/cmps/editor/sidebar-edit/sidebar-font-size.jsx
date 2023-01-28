import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export function SidebarFontSize({ title, propertyName, onChange, chosenComponent }) {

  const [fontSizeVal, setFontSizeVal] = useState(1.6)
  const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)


  useEffect(() => {
    const fontSize = selectedElement?.style[propertyName] ? +selectedElement.style[propertyName].replace('em', '') : false
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
      
    </div>


    <Box className="flex space-between align-center">
      <Slider
        className="range-container"
        style={{width:'200px'}}
        size='small'
        key={'fontSize1'}
        color='primary'
        onChange={onChangeRange}
        value={fontSizeVal}
        aria-label='Default'
        valueLabelDisplay='auto'
        step={0.1}
        min={0.1}
        max={10}
        sx={{ color: '#434242' }}
      />
    {!!fontSizeVal && <span>{fontSizeVal}</span>}
    </Box>


  </div>
}