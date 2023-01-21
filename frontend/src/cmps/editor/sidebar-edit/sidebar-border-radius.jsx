import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

export function SidebarBorderRadius({ title, propertyName, onChange, chosenContainer }) {

    function onChangeRange({ target }) {
        console.log('target:', target)
        target.title = target.value
        onChange(propertyName, target.value + 'px')



    }
    return <div>
        <label>{title}</label>

        <Box marginLeft ={'5px'} width={100}>
            <Slider
                size='small'
                key={'fontSizeSlider123'}
                onChange={onChangeRange}
                defaultValue={7}
                aria-label='Default'
                valueLabelDisplay='auto'
                step={1}
                min={0}
                max={30}
                sx={{ color: '#aedff9' }}
            />
        </Box>
    </div>
}