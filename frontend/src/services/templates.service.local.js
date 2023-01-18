import { wapTemplate1 } from '../templates-examples/wap-template-1'
import { wapTemplate2 } from '../templates-examples/wap-template-2'

export const wapTemplates = [
    wapTemplate1,
    wapTemplate2
]

export function getTemplateById(templateId) {
    // if (templateId === 'blank') return { cmps: [] }
    return wapTemplates.find((template) => template._id === templateId)
}