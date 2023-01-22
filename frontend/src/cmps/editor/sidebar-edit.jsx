
import { SidebarFontDecoration } from './sidebar-edit/sidebar-font-decoration.jsx'
import { SidebarColors } from './sidebar-edit/sidebar-colors.jsx'
import { SidebarFontFamily } from './sidebar-edit/sidebar-font-family.jsx'
import { SidebarFontSize } from './sidebar-edit/sidebar-font-size.jsx'
import { SidebarBorderRadius } from './sidebar-edit/sidebar-border-radius.jsx'
import { useSelector } from 'react-redux'

export function SidebarEdit({ handleWapEdit, chosenComponent }) {

    const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)
    if(!selectedElement) return <span>Choose item to edit</span>

    return <div className='tools-container edit-container'>
        {/* <p>Editing component: {chosenComponent}</p> */}
        {/* <p>Editing container: {selectedElement}</p> */}

        <SidebarFontDecoration title='Decoration' onChange={handleWapEdit} />
        <SidebarFontFamily title='Font' propertyName='fontFamily' onChange={handleWapEdit} />
        <SidebarColors title='Text Color' propertyName='color' onChange={handleWapEdit} />
        <SidebarColors title='Background Color' propertyName='backgroundColor' onChange={handleWapEdit} />
        <SidebarFontSize title='Text Size' propertyName='fontSize' onChange={handleWapEdit} chosenComponent={chosenComponent} />
        <SidebarBorderRadius title='Border Radius' propertyName='borderRadius' onChange={handleWapEdit} />
    </div>
}