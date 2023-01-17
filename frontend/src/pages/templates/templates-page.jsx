
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loadTemplate } from '../../store/wap.actions.js'
import { wapTemplate1 } from '../../templates-examples/wap-template-1'

export function Templates() {
    const dispatch = useDispatch()

    function onSelectTemplate(id) {
        loadTemplate(id)
    }

    return (
        <div className="templates-page">
            <h2>Choose a template</h2>
            <div className="preview-card">
                <img className="preview-img" src={wapTemplate1.imgUrl} />
                    <Link className='templates-btn-container' to="/editor">
                        <button className="edit-btn" onClick={() => onSelectTemplate(wapTemplate1._id)}>Edit</button>
                        <button className="preview-btn">Preview</button>
                    </Link>
            </div>
        </div>
    )
}