
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createWap, loadTemplate, saveWap } from '../../store/wap.actions.js'
import { wapTemplates } from '../../services/templates.service.local'
import { TemplateCard } from './template-card/template-card.jsx'
import { emptyTemplate } from '../../templates-examples/create-new-template.js'

export function Templates() {


    // TODO USE QUERY IN ACTION , CALL ACTION
    // ADD TO STORE WAPS
    // function loadTemplates() {

    // }

    function onSelectTemplate(id) {
        // console.log('id:', id)
        loadTemplate(id)
    }

    return (
        <div className="templates-page">
            <h2>Choose Your Template</h2>
            <div className="preview-list">
                {wapTemplates?.map((wapTemplate) => <TemplateCard wapTemplate={wapTemplate} onSelectTemplate={onSelectTemplate} />)}
            </div>
        </div>
    )
}

