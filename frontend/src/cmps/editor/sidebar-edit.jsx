
import {SidebarColors} from './sidebar-edit/sidebar-colors.jsx'
import {SidebarFontSize} from './sidebar-edit/sidebar-font-size.jsx'

export function SidebarEdit({ chosenContainer, handleWapEdit, chosenComponent }) {
    return <div>
        <div>Editing component: {chosenComponent}</div>
        <div>Editing container: {chosenContainer}</div>
        <br />
        <SidebarColors title='Background Color' propertyName='backgroundColor' onChange={handleWapEdit} />
        <SidebarColors title='Text Color' propertyName='color' onChange={handleWapEdit} />
        <SidebarFontSize title='Text Size' propertyName='fontSize' onChange={handleWapEdit}/>
    </div>
}