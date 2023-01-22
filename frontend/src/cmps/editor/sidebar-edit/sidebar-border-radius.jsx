import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export function SidebarBorderRadius({ title, propertyName, onChange, chosenContainer }) {

    // function onChangeRange({ target }) {
    //     console.log('target:', target)
    //     target.title = target.value
    //     onChange(propertyName, target.value + 'px')



    // }

    const [fontSizeVal, setFontSizeVal] = useState(0)
    const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)
  
  
    // TODO !!!!!!!!!!!!!!!!!!!!!!!
    useEffect(() => {
    //   console.log('selectedElement.style[propertyName]:',selectedElement.style[propertyName])
    //   console.log('propertyName:',propertyName)
      const borderRad = selectedElement?.style[propertyName] ? +selectedElement.style[propertyName].replace('em', '') : 0
      console.log('borderRad:',borderRad)
      setFontSizeVal(borderRad)
    }, [selectedElement])
  
    
  
    function onChangeRange({ target }) {
      target.title = target.value
      setFontSizeVal(target.value)
      onChange(propertyName, target.value + 'em')
      // const fontSize = selectedElement?.style[propertyName] ? +selectedElement.style[propertyName].replace('rem', '') : 1
      // setFontSizeVal(fontSize)
    }
    
    return <div>
        <label>{title}</label>

        <Box marginLeft ={'5px'} width={100}>
            <Slider
                size='small'
                key={'fontSizeSlider123'}
                onChange={onChangeRange}
                value={fontSizeVal}
                aria-label='Default'
                valueLabelDisplay='auto'
                step={0.1}
                min={0}
                max={3}
                sx={{ color: '#aedff9' }}
            />
        </Box>
    </div>
}