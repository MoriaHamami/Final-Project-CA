import { NavLink } from "react-router-dom";

export function WapDemoPreview({ demoWap, onSelectDemoWap }) {
    return <div key={demoWap._id} className="preview-card">
        <div className="img-container">
            <img className="preview-img" src={demoWap.imgUrl} />
            {demoWap.isBlack ? <div className="btn-container">
                <button className="edit-btn" onClick={() => onSelectDemoWap(demoWap._id)}>Add</button>
            </div>
                : <div className="btn-container">
                    <button className="edit-btn" onClick={() => onSelectDemoWap(demoWap._id)}>Edit</button>
                    
                    <NavLink key="/preview" to={`/preview/${demoWap._id}`}><button className="preview-btn">Preview</button></NavLink>
                </div>}
      </div>
        <div className="preview-name">{demoWap.name}</div>
    </div>
}