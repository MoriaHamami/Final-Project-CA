import { useEffect, useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { saveToHistory, updateCmp } from '../../../../store/wap.actions'

export function TxtCmp({ cmp }) {


  return (
    <p style={cmp.style}>
        {cmp.info.txt}
    </p>
  )
}
