import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export function SidebarFontSize({ title, propertyName, onChange, chosenComponent }) {

  const [fontSizeVal, setFontSizeVal] = useState(1.6)
  const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)


  // TODO !!!!!!!!!!!!!!!!!!!!!!!
  useEffect(() => {
    console.log('selectedElement.style[propertyName]:',selectedElement.style[propertyName])
    console.log('propertyName:',propertyName)
    const fontSize = selectedElement?.style[propertyName] ? +selectedElement.style[propertyName].replace('rem', '') : 1
    console.log('fontSize:',fontSize)
    setFontSizeVal(fontSize)
  }, [selectedElement])

  

  function onChangeRange({ target }) {
    target.title = target.value
    setFontSizeVal(target.value)
    onChange(propertyName, target.value + 'rem')
    // const fontSize = selectedElement?.style[propertyName] ? +selectedElement.style[propertyName].replace('rem', '') : 1
    // setFontSizeVal(fontSize)
  }

  return <div>
    <label>{title}</label>
    <Box marginLeft={'5px'} width={100}>
      <Slider
        size='small'
        key={'fontSizeSlider123'}
        onChange={onChangeRange}
        value={fontSizeVal}
        aria-label='Default'
        valueLabelDisplay='auto'
        step={0.1}
        min={0.1}
        max={4}
        sx={{ color: '#aedff9' }}
      />
      {/* <input type="range" min="0.5" max="10" step="0.1" onChange={onChangeRange} /> */}
    </Box>
  </div>
}