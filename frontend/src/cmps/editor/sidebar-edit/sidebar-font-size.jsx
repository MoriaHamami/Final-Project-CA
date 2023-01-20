
export function SidebarFontSize() {

function onChangeRange({target}){
    console.log('target:',target)
    target.title = target.value



}

    return <div>
      <input type="range" min="0.5" max="10" step="0.1" onChange={onChangeRange} />
    </div>
}