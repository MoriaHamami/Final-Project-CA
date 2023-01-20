import { wapService } from "../../services/wap.service"
import { WapDemoPreview } from "./wap-demo-preview"

export function WapDemoList({ onSelectDemoWap }) {
    return <div className="preview-list">
        {wapService.getWapDemos()?.map((demoWap) => {
            return <WapDemoPreview key={demoWap._id} demoWap={demoWap} onSelectDemoWap={onSelectDemoWap} />
        })}
    </div>
}