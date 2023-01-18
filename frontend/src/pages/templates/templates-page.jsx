
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loadTemplate } from '../../store/wap.actions.js'
import { wapTemplates } from '../../services/templates.service.local'

export function Templates() {
    const dispatch = useDispatch()

    function onSelectTemplate(id) {
        loadTemplate(id)
    }

    return (
        <div className="templates-page">
            <h2>Choose Your Template</h2>
            <div className="preview-list">
                {wapTemplates?.map((wapTemplate) => {
                    return <div className="preview-card">
                        <div className="img-container">
                            <img className="preview-img" src={wapTemplate.imgUrl} />
                            <Link className="templates-btn-container" to="/editor">
                                <button className="edit-btn" onClick={() => onSelectTemplate(wapTemplate._id)}>Edit</button>
                                <button className="preview-btn">Preview</button>
                            </Link>
                        </div>
                        <div className="preview-name">{wapTemplate.name}</div>
                    </div>
                })}
            </div>
        </div>
    )
}