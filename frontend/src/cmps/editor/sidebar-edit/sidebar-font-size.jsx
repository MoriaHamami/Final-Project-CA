
export function SidebarFontSize({title, propertyName,  onChange}) {

function onChangeRange({target}){
    console.log('target:',target)
    target.title = target.value
    onChange(propertyName, target.value + 'rem')



}

    return <div>
      <label>{title}</label>
      <input type="range" min="0.5" max="10" step="0.1" onChange={onChangeRange} />
    </div>
}