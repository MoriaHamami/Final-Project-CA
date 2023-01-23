import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export function SidebarBorderRadius({ title, propertyName, onChange, chosenContainer }) {





  const [borderRadiusVal, setBorderRadiusVal] = useState(0)
  const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)

  useEffect(() => {
    const borderRad = selectedElement?.style[propertyName] ? +selectedElement.style[propertyName].replace('em', '') : 0
    console.log('borderRad:', borderRad)
    setBorderRadiusVal(borderRad)
  }, [selectedElement])



  function onChangeRange({ target }) {
    target.title = target.value
    setBorderRadiusVal(target.value)
    onChange(propertyName, target.value + 'em')

  }

  return <div>

    <div className='slider-container'>
    <label>{title} </label>
    <span>{borderRadiusVal}</span>
    </div>

    <Box marginLeft={'5px'} width={200}>
      <Slider
        size='small'
        key={'fontSizeSlider123'}
        onChange={onChangeRange}
        value={borderRadiusVal}
        aria-label='Default'
        valueLabelDisplay='auto'
        step={0.1}
        min={0}
        max={3}
        sx={{ color: '#434242' }}
      />
    </Box>

  </div>
}