import React from 'react'
import { useState } from "react"

import { useSelector } from 'react-redux'

export function FormCmp({ style, cmp, onElClick, selectedCmpId, displayClass }) {

    const [isOn, setIsOn] = useState({})

    const selectedElement = useSelector((storestate) => storestate.wapModule.selectedElement)
    const info = cmp.info

    return (
        <div id={cmp.type} style={style}
            className={((selectedCmpId === cmp.id && selectedElement?.id === cmp.id) ? 'selected' : '') + ' ' + cmp.name + ' ' + displayClass + ' ' + (selectedElement?.id !== cmp.id && isOn.cmp && 'hover-cmp')}
            onMouseOut={() => setIsOn((prevIsOn) => {
                return { ...prevIsOn, cmp: false }
            })}
            onMouseOver={() => setIsOn((prevIsOn) => {
                return { ...prevIsOn, cmp: true }
            })}
            data-container={JSON.stringify(cmp)} onClick={onElClick}>
            <h2 style={info.title.style} data-container={JSON.stringify(info.title)} contentEditable={selectedElement?.id === info.title.id} onClick={onElClick}
                className={`${(selectedCmpId === cmp.id && selectedElement?.id === info.title.id) ? 'selected' : ''} title ${selectedElement?.id !== info.title.id && isOn.title && 'hover'}`}
                onMouseOut={() => setIsOn((prevIsOn) => {
                    return { ...prevIsOn, title: false }
                })}
                onMouseOver={() => setIsOn((prevIsOn) => {
                    return { ...prevIsOn, title: true }
                })}
            >{info.title.txt}</h2>
            <span style={info.subtitle.style} data-container={JSON.stringify(info.subtitle)} contentEditable={selectedElement?.id === info.subtitle.id} onClick={onElClick}
                className={`${(selectedCmpId === cmp.id && selectedElement?.id === info.subtitle.id) ? 'selected' : ''} subtitle ${selectedElement?.id !== info.subtitle.id && isOn.subtitle && 'hover'}`}
                onMouseOut={() => setIsOn((prevIsOn) => {
                    return { ...prevIsOn, subtitle: false }
                })}
                onMouseOver={() => setIsOn((prevIsOn) => {
                    return { ...prevIsOn, subtitle: true }
                })}
            >{info.subtitle.txt}</span>
            <form>
                {info.inputs?.map((input, idx) => {
                    return <input type={input.dataType}
                        // className={`${(selectedCmpId === cmp.id && selectedElement?.id === input.id) ? 'selected' : ''}  ${selectedElement?.id !== input.id && isOn.input && 'hover'}`}
                        // onMouseOut={() => setIsOn((prevIsOn) => {
                        //     return { ...prevIsOn, input: false }
                        // })}
                        // onMouseOver={() => setIsOn((prevIsOn) => {
                        //     return { ...prevIsOn, input: true }
                        // })}
                        placeholder={input.placeholder} key={input.id}
                        style={input.style} data-container={JSON.stringify(input)} onClick={onElClick}
                        className={`${(selectedCmpId === cmp.id && selectedElement?.id === input.id) ? 'selected' : ''} ${selectedElement?.id !== input.id && isOn['input' + idx] && 'hover'}`
                        }
                        onMouseOut={() => setIsOn((prevIsOn) => {
                            return { ...prevIsOn, ['input' + idx]: false }
                        })}
                        onMouseOver={() => setIsOn((prevIsOn) => {
                            return { ...prevIsOn, ['input' + idx]: true }
                        })} />
                })}
                <button style={info.btn.style}
                    data-container={JSON.stringify(info.btn)}
                    contentEditable={selectedElement?.id === info.btn.id}
                    onClick={onElClick}
                    className={`${(selectedCmpId === cmp.id && selectedElement?.id === info.btn.id) ? 'selected' : ''} ${selectedElement?.id !== info.btn.id && isOn.btn && 'hover'}`}
                    onMouseOut={() => setIsOn((prevIsOn) => {
                        return { ...prevIsOn, btn: false }
                    })}
                    onMouseOver={() => setIsOn((prevIsOn) => {
                        return { ...prevIsOn, btn: true }
                    })}
                >{info.btn.label}</button>
            </form>
        </div>
    )
}
// style={info.txt.style} onClick={onElClick} contentEditable={selectedElement?.id === info.txt.id} data-container={info.txt.id}