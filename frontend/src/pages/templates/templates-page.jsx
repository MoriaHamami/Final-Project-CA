
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createWap, saveTemplateDraft, saveWap } from '../../store/wap.actions.js'
import { wapTemplates } from '../../services/templates.service.local'
import { TemplateCard } from './template-card.jsx'

export function Templates() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // TODO USE QUERY IN ACTION , CALL ACTION
    // ADD TO STORE WAPS
    // function loadTemplates() {

    // }

    async function onSelectTemplate(id) {
        try{
            const wapCopyId = await saveTemplateDraft(id)
            // console.log('wapCopyId:', wapCopyId)
            navigate(`/editor/${wapCopyId}`)
        } catch(err) {
            console.log('Had issues in template editor', err)
        }
    }

    return (
        <div className="templates-page">
            <h2>Choose Your Template</h2>
            <div className="preview-list">
                {wapTemplates?.map((wapTemplate) => {
                    return <TemplateCard key={wapTemplate._id} wapTemplate={wapTemplate} onSelectTemplate={onSelectTemplate}/>
                })}
                {/* <Link className="templates-btn-container" to={`/editor/${wapTemplate._id}`}> */}
            </div>
        </div>
    )
}

