
export function BtnCmp({ cmp }) {

  return (
    <a>
      <button
        style={cmp.style}>
        {cmp.info.txt}
      </button>
    </a>
  )
}