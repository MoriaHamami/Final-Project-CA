import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay, Pagination } from 'swiper'
import { Link, useNavigate } from 'react-router-dom'
import { saveWap } from '../../store/wap.actions.js'
import { wapService } from "../../services/wap.service"
import { useState, useEffect } from 'react'

import 'swiper/css'
import 'swiper/css/pagination'
import "swiper/css/effect-coverflow"


export function HomePreview() {
  const navigate = useNavigate()
  const [windowWidth, setWindowWidth] = useState(1400)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])



  async function onSelectWapDemo(id) {
    try {
      let wap = wapService.getWapDemoById(id)
      const savedWapId = await saveWap(wap)
      navigate(`/editor/${savedWapId}`)
    } catch (err) {
      console.log('Had issues in wap editor', err)
    }
  }


  return <div id='home-preview' className='home-preview-page'>
    <h2 className="preview-title ">Introducing <span>Webix</span></h2>
    <p className="preview-subtitle">We will provide you the freedom to create the Website You want according to your needs.
      Whether you're promoting your business, showcasing your work, opening your online store or starting a blog
      - you can do it all with the Webix website builder.</p>

    {/* <h1 style={{ color: 'red', padding: '100px' }}>ANOTHER SECTION</h1> */}

    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={windowWidth > 900 ? 4 : 2}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 60,
          stretch: 0,
          depth: 100,
          modifier: 3,
          // slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {wapService.getWapDemos()?.map((demoWap, idx) => {
          if (idx === 0) return
          return <SwiperSlide style={{ width: '200px', aspectRatio: '6/8' }}>
            <img className="home-preview-demo-img" src={demoWap.imgUrl} onClick={() => onSelectWapDemo(demoWap._id)} />
          </SwiperSlide>
        })}

      </Swiper>
    </>


  </div>

}

