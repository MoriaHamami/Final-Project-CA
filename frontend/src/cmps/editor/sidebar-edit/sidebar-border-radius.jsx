
export function SidebarBorderRadius({title, propertyName,  onChange, chosenContainer}) {

    function onChangeRange({target}){
        console.log('target:',target)
        target.title = target.value
        onChange(propertyName, target.value + 'rem')
    
    
    
    }
        return <div>
          <label>{title}</label>
          <input type="range" min="0" max="2" step="0.2" onChange={onChangeRange} />
        </div>
        // value={chosenContainer.style}
    }