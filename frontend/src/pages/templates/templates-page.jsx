
import { Link } from 'react-router-dom'

export function Tamplates() {

    return (
        <div>
            <h2>Tamplates Page!</h2>
            <div>
                <h2>this is template card</h2>
                <Link to="/editor">
                    <button>Create Site!!!!</button>
                </Link>
            </div>
        </div>
    )
}