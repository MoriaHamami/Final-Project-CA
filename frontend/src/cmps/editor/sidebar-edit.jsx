
import { SidebarFontDecoration } from './sidebar-edit/sidebar-font-decoration.jsx'
import { SidebarColors } from './sidebar-edit/sidebar-colors.jsx'
import { SidebarFontFamily } from './sidebar-edit/sidebar-font-family.jsx'
import { SidebarFontSize } from './sidebar-edit/sidebar-font-size.jsx'
import { SidebarBorderRadius } from './sidebar-edit/sidebar-border-radius.jsx'
import { SidebarMapLat } from './sidebar-edit/sidebar-map-lat.jsx'
import { SidebarMapLng } from './sidebar-edit/sidebar-map-lng.jsx'
import { SidebarUrl } from './sidebar-edit/sidebar-url.jsx'
import { useSelector } from 'react-redux'

export function SidebarEdit({ handleWapEdit, chosenComponent }) {

    const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)
    if (!selectedElement) return <span>Choose an item to edit</span>
    // console.log('selectedElement:', selectedElement)
    // KEY[0] = txt === txt
    // KEY[0] = label === btn
    // KEY[0] = id === cmp

    return <div className='tools-container edit-container'>
        {/* <p>Editing component: {chosenComponent}</p> */}
        {/* <p>Editing container: {selectedElement}</p> */}

        {(selectedElement.type === 'txt' ||
            selectedElement.type === 'input' ||
            selectedElement.type === 'btn') &&
            <SidebarFontDecoration title='Decoration' onChange={handleWapEdit} />
        }

        {(selectedElement.type === 'txt' ||
            selectedElement.type === 'input' ||
            selectedElement.type === 'btn') &&
            <SidebarFontFamily title='Font' propertyName='fontFamily' onChange={handleWapEdit} />
        }

        {/* {selectedElement.type !== 'img' ||
            selectedElement.type !== 'wap-map' ||
            selectedElement.type !== 'wap-gallery' || */}
        <SidebarColors title='Text Color' propertyName='color' onChange={handleWapEdit} selectedElement={selectedElement} />
        {/* } */}

        {/* {selectedElement.type !== 'img' ||
                selectedElement.type !== 'wap-map' ||
                selectedElement.type !== 'wap-gallery' ||
                selectedElement.type !== 'txt' || */}
        <SidebarColors title='Background Color' propertyName='backgroundColor' onChange={handleWapEdit} selectedElement={selectedElement} />
        {/* } */}

        {(selectedElement.type === 'txt' ||
            selectedElement.type === 'input' ||
            selectedElement.type === 'btn') &&
            <SidebarFontSize title='Text Size' propertyName='fontSize' onChange={handleWapEdit} />}


        {(selectedElement.type === 'btn' ||
            selectedElement.type === 'input') &&
            <SidebarBorderRadius title='Border Radius' propertyName='borderRadius' onChange={handleWapEdit} />
        }

        {/* {selectedElement.type === 'map' &&
            <SidebarMapLat title='Latitude coordinates' propertyName='lat' onChange={handleWapEdit} />
        }

        {selectedElement.type === 'map' &&
            <SidebarMapLng title='Longitude coordinates' propertyName='lng' onChange={handleWapEdit} />
        }

        {selectedElement.type === 'img' &&
            <SidebarUrl title='URL' propertyName='src' onChange={handleWapEdit} />
        } */}
    </div>
}