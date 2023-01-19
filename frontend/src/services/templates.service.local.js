// TEMPLATES
import { wapTemplate1 } from '../templates-examples/wap-template-1'
import { wapTemplate2 } from '../templates-examples/wap-template-2'
import { emptyTemplate } from '../templates-examples/create-new-template'

// HEADERS
import { wapHeader1 } from '../templates-examples/headers/wap-header-1.js'

// HEROS
import { wapHero1 } from '../templates-examples/heros/wap-hero-1'

// PREVIEWS
import { wapPreview1 } from '../templates-examples/previews/wap-preview-1'

// CONTAINERS
import { wapContainer1A } from '../templates-examples/containers/wap-container-1a'
import { wapContainer1B } from '../templates-examples/containers/wap-container-1b'

// FOOTERS
import { wapFooter1 } from '../templates-examples/footers/wap-footer-1'

const mapCmpByCategory = {
    header: [wapHeader1],
    hero: [wapHero1],
    preview: [wapPreview1],
    container: [wapContainer1A, wapContainer1B],
    footer: [wapFooter1],
}

export const wapTemplates = [
    emptyTemplate,
    wapTemplate1,
    wapTemplate2,
]

export function getTemplateExById(templateId) {
    // if (templateId === 'blank') return { cmps: [] }
    return wapTemplates.find((template) => template._id === templateId)
}

export function getCmpById(id) {
    let cmpsToReturn = null
    Object.keys(mapCmpByCategory).forEach((category) => {
        const cmp = mapCmpByCategory[category].find((cmp) => cmp.id === id)
        if (cmp) cmpsToReturn = cmp
    })

    return cmpsToReturn
}