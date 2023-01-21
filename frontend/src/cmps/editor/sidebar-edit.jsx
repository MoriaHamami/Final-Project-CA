
import { SidebarFontDecoration } from './sidebar-edit/sidebar-font-decoration.jsx'
import { SidebarColors } from './sidebar-edit/sidebar-colors.jsx'
import { SidebarFontFamily } from './sidebar-edit/sidebar-font-family.jsx'
import { SidebarFontSize } from './sidebar-edit/sidebar-font-size.jsx'
import { SidebarBorderRadius } from './sidebar-edit/sidebar-border-radius.jsx'

export function SidebarEdit({ handleWapEdit, chosenComponent }) {
    return <div className='tools-container'>
        {/* <p>Editing component: {chosenComponent}</p> */}
        {/* <p>Editing container: {selectedElement}</p> */}

        <SidebarFontDecoration title='Decoration' onChange={handleWapEdit} />
        <SidebarFontFamily title='Font' propertyName='fontFamily' onChange={handleWapEdit} />
        <SidebarColors title='Background Color' propertyName='backgroundColor' onChange={handleWapEdit} />
        <SidebarColors title='Text Color' propertyName='color' onChange={handleWapEdit} />
        <SidebarFontSize title='Text Size' propertyName='fontSize' onChange={handleWapEdit} chosenComponent={chosenComponent} />
        <SidebarBorderRadius title='Border Radius' propertyName='borderRadius' onChange={handleWapEdit} />
    </div>
}