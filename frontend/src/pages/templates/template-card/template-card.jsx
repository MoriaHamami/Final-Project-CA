import { Link } from 'react-router-dom'

export function TemplateCard({ wapTemplate, onSelectTemplate }) {
  return <div key={wapTemplate._id} className="preview-card">
    <div className="img-container">
      <img className="preview-img" src={wapTemplate.imgUrl} alt={wapTemplate.name} />
      <Link className="templates-btn-container" to="/editor">
        <button className="edit-btn" onClick={() => onSelectTemplate(wapTemplate._id)}>Edit</button>
        <button className="preview-btn">Preview</button>
      </Link>
    </div>
    <div className="preview-name">{wapTemplate.name}</div>
  </div>
}