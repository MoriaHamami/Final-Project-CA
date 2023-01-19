// WAP DEMOS
import { emptyWapDemo } from '../waps/wap-demos/empty-wap-demo'
import { wapDemo1 } from '../waps/wap-demos/wap-demo-1.js'
import { wapDemo2 } from '../waps/wap-demos/wap-demo-2.js'

// HEADERS
import { wapHeader1 } from '../waps/headers/wap-header-1.js'

// HEROS
import { wapHero1 } from '../waps/heros/wap-hero-1'

// PREVIEWS
import { wapPreview1 } from '../waps/previews/wap-preview-1'

// CONTAINERS
import { wapContainer1A } from '../waps/containers/wap-container-1a'
import { wapContainer1B } from '../waps/containers/wap-container-1b'

// FOOTERS
import { wapFooter1 } from '../waps/footers/wap-footer-1'
import { wapHeader2 } from '../waps/headers/wap-header-2'
import { wapHero2 } from '../waps/heros/wap-hero-2'
import { wapPreview2 } from '../waps/previews/wap-preview-2'
import { wapContainer2A } from '../waps/containers/wap-container-2a'
import { wapContainer2B } from '../waps/containers/wap-container-2b'
import { wapContainer2C } from '../waps/containers/wap-container-2c'
import { wapFooter2 } from '../waps/footers/wap-footer-2'

const mapCmpByCategory = {
    headers: [wapHeader1, wapHeader2],
    heros: [wapHero1, wapHero2],
    previews: [wapPreview1, wapPreview2],
    containers: [wapContainer1A, wapContainer1B, wapContainer2A, wapContainer2B, wapContainer2C],
    footers: [wapFooter1, wapFooter2],
}

export const wapDemos = [
    emptyWapDemo,
    wapDemo1,
    wapDemo2,
]


export function getCmpsByCategory(category) {
    if (mapCmpByCategory[category]) {
      return mapCmpByCategory[category].map((cmp) => ({
        id: cmp.id,
        thumbnail: cmp.thumbnail,
        category,
      }))
    }
  }

export function getWapDemoById(wapDemoId) {
    // if (wapDemoId === 'blank') return { cmps: [] }
    return wapDemos.find((wapDemo) => wapDemo._id === wapDemoId)
}

export function getCmpById(id) {
    let cmpsToReturn = null
    Object.keys(mapCmpByCategory).forEach((category) => {
        const cmp = mapCmpByCategory[category].find((cmp) => cmp.id === id)
        if (cmp) cmpsToReturn = cmp
    })

    return cmpsToReturn
}