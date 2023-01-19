export function WapDemoPreview({ demoWap, onSelectDemoWap }) {
  return <div key={demoWap._id} className="preview-card">
      <div className="img-container">
          <img className="preview-img" src={demoWap.imgUrl} />
          <div className="btn-container">
              <button className="edit-btn" onClick={() => onSelectDemoWap(demoWap._id)}>Edit</button>
              <button className="preview-btn">Preview</button>
          </div>
      </div>
      <div className="preview-name">{demoWap.name}</div>
  </div>
}