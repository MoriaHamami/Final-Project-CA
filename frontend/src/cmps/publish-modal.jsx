import { useState } from "react";
import { addWap, saveWap } from "../store/wap.actions";



export function PublishModal({ currWap }) {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState('')

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }


  async function changeWapName() {
    try {
      const wapToPublish = { ...currWap, name: name, isPublished: true }
      // delete wapToPublish._id
      await addWap(wapToPublish)
      // await saveWap(wapToPublish)
      // setIsVisible(prevState => !prevState)
      window.open(`/${wapToPublish.name}`, '_blank')
    } catch (err) {
      console.log('Could not change wap name')
    }
  }

  function onCloseModal(){
    setModal(false)
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Publish
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 className="title">Publish your website</h2>
            <input onChange={(e) => setName(e.target.value)} placeholder='Please enter your website name' type={'text'} required />
            {/* <button className="close-modal"> X </button> */}
            <span className="material-symbols-outlined close-modal" onClick={onCloseModal}>close</span>
            <button className="save-btn" onClick={changeWapName}>
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
}