import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export function SidebarFontSize({ title, propertyName, onChange, chosenComponent }) {

  const [fontSizeVal, setFontSizeVal] = useState(0)
  const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)

  // TODO !!!!!!!!!!!!!!!!!!!!!!!
  useEffect(() => {
    // console.log('here:')
    // console.log('propertyName:', selectedElement.style[propertyName])
    // console.log('chosenComponent:', chosenComponent)
    // setFontSizeVal(+selectedElement.style[propertyName])
  }, [selectedElement])

  function onChangeRange({ target }) {
    target.title = target.value
    onChange(propertyName, target.value + 'px')
  }

  return <div>
    <label>{title}</label>
    <Box marginLeft={'5px'} width={100}>
      <Slider
        size='small'
        key={'fontSizeSlider123'}
        onChange={onChangeRange}
        // value={currValue ? currValue : 0}
        defaultValue={fontSizeVal}
        aria-label='Default'
        valueLabelDisplay='auto'
        step={1}
        min={10}
        max={50}
        sx={{ color: '#aedff9' }}
      />
      {/* <input type="range" min="0.5" max="10" step="0.1" onChange={onChangeRange} /> */}
    </Box>
  </div>
}