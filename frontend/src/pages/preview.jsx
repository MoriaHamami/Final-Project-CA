// import { EditorBoard } from "./editor/cmps/editor-board";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { EditorBoard } from "../cmps/editor/editor-board";
import { DynamicCmp } from "../cmps/wap-cmps/wap-dynamic-cmp";
import { loadWap } from "../store/wap.actions";

export function Preview() {

    const wap = useSelector((storestate) => storestate.wapModule.wap)
    const navigate = useNavigate()
    const { wapId } = useParams()

    useEffect(() => {
        try {
            console.log('here:')
            loadWap(wapId)
        } catch (err) {
            console.log('Had issues in wap editor', err)
            navigate('/WapDemos')
        }
    }, [])

    // return <EditorBoard />
    return <div>
        {wap?.cmps.map((cmp, index) => <DynamicCmp key={cmp.id} cmp={cmp} />)}
    </div>
}