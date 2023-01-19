import { Link } from 'react-router-dom'

export function TemplateCard({ wapTemplate, onSelectTemplate }) {
  return <div key={wapTemplate._id} className="preview-card">
      <div className="img-container">
          <img className="preview-img" src={wapTemplate.imgUrl} />
          <div className="templates-btn-container">
              <button className="edit-btn" onClick={() => onSelectTemplate(wapTemplate._id)}>Edit</button>
              <button className="preview-btn">Preview</button>
          </div>
      </div>
      <div className="preview-name">{wapTemplate.name}</div>
  </div>
}