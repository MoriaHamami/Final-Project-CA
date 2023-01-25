import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { DynamicCmp } from "../cmps/wap-cmps/wap-dynamic-cmp";
import { loadPublishWap } from "../store/wap.actions";


export function Publish() {
  const wap = useSelector((storestate) => storestate.wapModule.wap)
  const navigate = useNavigate()
  const { wapName } = useParams()

  useEffect(() => {
    try {
      console.log('here:')
      loadPublishWap(wapName)
    } catch (err) {
      console.log('Had issues in wap editor', err)
      navigate('/WapDemos')
    }
  }, [])


  return (

    <div className="preview-page">
      {wap?.cmps.map((cmp, index) => <DynamicCmp key={cmp.id} cmp={cmp} />)}
    </div>)
}