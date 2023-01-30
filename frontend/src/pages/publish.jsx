import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { DynamicCmp } from "../cmps/wap-cmps/wap-dynamic-cmp";
import { addWap, loadPublisedhWap, loadPublishedWap, updateWap } from "../store/wap.actions";
import { wapService } from "../services/wap.service"
import { socketService, SOCKET_EVENT_ADD_SITE_VIEW, SOCKET_EVENT_UPDATE_SITE_VIEWS, SOCKET_EMIT_SET_SITE } from '../services/socket.service'
import { Loader } from './loader'


export function Publish() {
  const wap = useSelector((storestate) => storestate.wapModule.wap)
  const navigate = useNavigate()
  const { wapName } = useParams()

  useEffect(() => {
    getWap()
    console.log('HEREEEEEE');
    // socketService.emit(SOCKET_EMIT_SET_SITE, updatedWap._id)
    // socketService.emit(SOCKET_EVENT_ADD_SITE_VIEW, updatedWap)
    return () => {
      // socketService.off(SOCKET_EVENT_ADD_MSG, addMsg)
      // socketService.off(SOCKET_EVENT_REMOVE_MSG, removeMsg)
      // socketService.off(SOCKET_EVENT_IS_TYPING, setTypingState)
      // socketService.off(SOCKET_EMIT_SET_SITE, null)
    }
  }, [])


  async function getWap() {
    try {
      let currWap = await loadPublishedWap(wapName)
      const updatedWap = await wapService.increaseViewCount(currWap)
      updateWap(updatedWap)
      return updatedWap

    } catch (err) {
      console.log('Had issues in wap editor', err)
      navigate('/WapDemos')
    }
  }


  if (!wap) return <Loader />

  return (
    <div className="preview-page">
      {wap && wap?.cmps?.map((cmp, index) => <DynamicCmp key={cmp.id} cmp={cmp} />)}
    </div>
  )
}