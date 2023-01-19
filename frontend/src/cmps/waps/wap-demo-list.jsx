import { wapDemos } from "../../services/wap.service.local"
import { WapDemoPreview } from "./wap-demo-preview"

export function WapDemoList({ onSelectDemoWap }) {
    return <div className="preview-list">
        {wapDemos?.map((demoWap) => {
            return <WapDemoPreview key={demoWap._id} demoWap={demoWap} onSelectDemoWap={onSelectDemoWap} />
        })}
    </div>
}