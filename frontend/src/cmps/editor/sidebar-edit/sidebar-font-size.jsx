import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

export function SidebarFontSize({title, propertyName,  onChange}) {

function onChangeRange({target}){
    console.log('target:',target)
    target.title = target.value
    onChange(propertyName, target.value + 'px')



}

    return <div>
      <label>{title}</label>
      <Box width={92}>
      <Slider
        size='small'
        key={'fontSizeSlider123'}
        onChange={onChangeRange}
        // value={currValue ? currValue : 0}
        defaultValue={7}
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