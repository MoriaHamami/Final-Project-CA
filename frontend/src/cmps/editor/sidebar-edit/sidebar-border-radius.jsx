import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export function SidebarBorderRadius({ title, propertyName, onChange, chosenContainer }) {





  const [borderRadiusVal, setBorderRadiusVal] = useState(0)
  const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)

  useEffect(() => {
    const borderRad = selectedElement?.style[propertyName] ? +selectedElement.style[propertyName].replace('em', '') : 0
    setBorderRadiusVal(borderRad)
  }, [selectedElement])



  function onChangeRange({ target }) {
    target.title = target.value
    setBorderRadiusVal(target.value)
    onChange(propertyName, target.value + 'em')

  }

  console.log('borderRadiusVal:',  !!borderRadiusVal )

  return <div>

    <div className='slider-container'>
      <label>{title}: </label>
    </div>

    {/* <Box marginLeft={'5px'} width={226} margin={0} padding={0}> */}
    <Box className="flex space-between align-center">

      <Slider
        className="range-container"
        style={{ width: '200px' }}
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
      { !!borderRadiusVal && <span>{borderRadiusVal}</span>}
    </Box>

  </div>
}