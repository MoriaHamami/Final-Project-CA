
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loadTemplate } from '../../store/wap.actions.js'
import { wapTemplate1 } from '../../templates-examples/wap-template-1'

export function Tamplates() {
    const dispatch = useDispatch()

    function onSelectTemplate(id) {
        loadTemplate(id)
    }

    return (
        <div>
            <h2>Tamplates Page!</h2>
            <div>
                <h2>this is template card</h2>
                <Link to="/editor">
                    <button onClick={() => onSelectTemplate(wapTemplate1._id)}>Create Site!!!!</button>
                </Link>
            </div>
        </div>
    )
}