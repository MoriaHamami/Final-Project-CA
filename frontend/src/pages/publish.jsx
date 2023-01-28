import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { DynamicCmp } from "../cmps/wap-cmps/wap-dynamic-cmp";
import { addWap, loadPublisedhWap, loadPublishedWap } from "../store/wap.actions";


export function Publish() {
  const wap = useSelector((storestate) => storestate.wapModule.wap)
  const navigate = useNavigate()
  const { wapName } = useParams()

  useEffect(() => {
    try {
      // console.log('here:')
      // getWapByName(wapName)
      loadPublishedWap(wapName)
    } catch (err) {
      console.log('Had issues in wap editor', err)
      navigate('/WapDemos')
    }
  }, [])


  return (
    <div className="preview-page">
      {wap && wap[0]?.cmps?.map((cmp, index) => <DynamicCmp key={cmp.id} cmp={cmp} />)}
    </div>
  )
}