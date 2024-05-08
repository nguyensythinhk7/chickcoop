import Button from '../components/Button';
import Banner from '../images/banner.png';
import BannerMobile from '../images/home_banner_mobile.png';
import farming1 from '../images/farming-1.png';
import farming2 from '../images/farming-2.png';
import farmingMobile1 from '../images/farming-1-mobile.png';
import farmingMobile2 from '../images/farming-2-mobile.png';
import { Carousel } from 'antd';
import Q22024 from '../images/q2_2024.png';
import Q32024 from '../images/q3_2024.png';
import Q42024 from '../images/q4_2024.png';
import Q12025 from '../images/q1_2025.png';
import Q22025 from '../images/q2_2025.png';
import Q32025 from '../images/q3_2025.png';
import ArrowPrev from '../images/arrow-prev.png';
import ArrowNext from '../images/arrow-next.png';
import { createRef, useState } from 'react';
import { CarouselRef } from 'antd/es/carousel';
import { isMobile } from '../utils';

const Home = () => {
  const carouselRoadMapRef = createRef<CarouselRef>();
  const carouselFarmingRef = createRef<CarouselRef>();
  const [mobile, setMobile] = useState<boolean>(isMobile());

  const joinDualEvent = () => {
    console.log("Join Dual Event...");
  }

  const joinEarlyRegister = () => {
    console.log("Join Early Register...");
  }

  const joinReferralRace = () => {
    console.log("Join Referral Race...");
  }

  const renderRoadmap = () => {
    let numberOfSlide = 3;

    if(mobile) {
      numberOfSlide = 1;

      return <div className='roadmap-mobile'>
        <div style={{ width: `${100/numberOfSlide}%`, display: 'flex'}} className='roadmap-item'>
          <div className='road-map-box-image'>
            <img src={Q22024} alt={'Q2-2024'} />
          </div>
          <div className='road-map-box-content'>
            <h3>Q2 2024</h3>
            <h3>ChickCoop Launched</h3>
            <p className='roadmap-sub-content'>Play-to-Aidrop</p>
            <p className='roadmap-sub-content'>Mechanism</p>
          </div>
        </div>

        <div style={{ width: `${100/numberOfSlide}%`, display: 'flex'}} className='roadmap-item'>
          <div className='road-map-box-image'>
            <img src={Q32024} alt={'Q3-2024'} />
          </div>
          <div className='road-map-box-content'>
            <h3>Q3 2024</h3>
            <h3>Token Airdrop & Listing</h3>
            <p className='roadmap-sub-content'>Airdrop for User & Contributors</p>
            <p className='roadmap-sub-content'>Exchange listing</p>
          </div>
        </div>

        <div style={{ width: `${100/numberOfSlide}%`, display: 'flex'}} className='roadmap-item'>
          <div className='road-map-box-image'>
            <img src={Q42024} alt={'Q4-2024'} />
          </div>
          <div className='road-map-box-content'>
            <h3>Q4 2024</h3>
            <h3>NFT Launching Restacking</h3>
            <p className='roadmap-sub-content'>NFT launch</p>
            <p className='roadmap-sub-content'>Restacking Mechanism</p>
            <p className='roadmap-sub-content'>Revenue Sharing</p>
          </div>
        </div>

        <div style={{ width: `${100/numberOfSlide}%`, display: 'flex'}} className='roadmap-item'>
          <div className='road-map-box-image'>
            <img src={Q12025} alt={'Q1-2025'} />
          </div>
          <div className='road-map-box-content'>
            <h3>Q1 2025</h3>
            <h3>Play with NFT</h3>
            <p className='roadmap-sub-content'>Care for and hatch you<br />NFT to wait for the unexpected</p>
          </div>
        </div>

        <div style={{ width: `${100/numberOfSlide}%`, display: 'flex'}} className='roadmap-item'>
          <div className='road-map-box-image'>
            <img src={Q22025} alt={'Q2-2025'} />
          </div>
          <div className='road-map-box-content'>
            <h3>Q2 2025</h3>
            <h3>First Universal Game</h3>
            <p className='roadmap-sub-content'>First Universal Game Launched</p>
            <p className='roadmap-sub-content'>Something?</p>
          </div>
        </div>

        <div style={{ width: `${100/numberOfSlide}%`, display: 'flex'}} className='roadmap-item'>
          <div className='road-map-box-image'>
            <img src={Q32025} alt={'Q3-2025'} />
          </div>
          <div className='road-map-box-content'>
            <h3>Q3 2025</h3>
            <h3>Universal Game Lauch One-by-one</h3>
            <p className='roadmap-sub-content'>To be continued...</p>
          </div>
        </div>
      </div>
    }

    return <>
      <Carousel ref={carouselRoadMapRef} arrows={false} dots={false} infinite={true}>
        <div className="roadmap-slide">
          <div style={{ width: `${100/numberOfSlide}%`}} className='roadmap-item'>
            <img src={Q22024} alt={'Q2-2024'} />
            <h3>Q2 2024 <br />ChickCoop Launched</h3>
            <ul>
              <li className='roadmap-sub-content'>Play-to-Aidrop</li>
              <li className='roadmap-sub-content'>Mechanism</li>
            </ul>
          </div>

          <div style={{ width: `${100/numberOfSlide}%`}} className='roadmap-item'>
            <img src={Q32024} alt={'Q3-2024'} />
            <h3>Q3 2024 <br />Token Airdrop<br />& Listing</h3>
            <ul>
              <li className='roadmap-sub-content'>Airdrop for User & Contributors</li>
              <li className='roadmap-sub-content'>Exchange listing</li>
            </ul>
          </div>

          <div style={{ width: `${100/numberOfSlide}%`}} className='roadmap-item'>
            <img src={Q42024} alt={'Q4-2024'} />
            <h3>Q4 2024 <br />NFT Launching<br />Restacking</h3>
            <ul>
              <li className='roadmap-sub-content'>NFT launch</li>
              <li className='roadmap-sub-content'>Restacking Mechanism</li>
              <li className='roadmap-sub-content'>Revenue Sharing</li>
            </ul>
          </div>
        </div>

        <div className="roadmap-slide">
          <div style={{ width: `${100/numberOfSlide}%`}} className='roadmap-item'>
            <img src={Q12025} alt={'Q1-2025'} />
            <h3>Q1 2025<br />Play with NFT</h3>
            <ul>
              <li className='roadmap-sub-content roadmap-sub-content-center'>Care for and hatch you<br />NFT to wait for the<br/>unexpected</li>
            </ul>
          </div>

          <div style={{ width: `${100/numberOfSlide}%`}} className='roadmap-item'>
            <img src={Q22025} alt={'Q2-2025'} />
            <h3>Q2 2025<br />First Universal<br />Game</h3>
            <ul>
              <li className='roadmap-sub-content'>First Universal Game Launched</li>
              <li className='roadmap-sub-content'>Something?</li>
            </ul>
          </div>

          <div style={{ width: `${100/numberOfSlide}%`}} className='roadmap-item'>
            <img src={Q32025} alt={'Q3-2025'} />
            <h3>Q3 2025<br />Universal Game <br />Lauch One-by-one</h3>
            <ul>
              <li className='roadmap-sub-content roadmap-sub-content-center'>To be continued...</li>
            </ul>
          </div>
        </div>
      </Carousel>
      <div className="arrow-container">
        <img src={ArrowPrev} className="arrow-prev" alt="arrow-prev" onClick={() => carouselRoadMapRef?.current?.prev()} />
        <img src={ArrowNext} className="arrow-next" alt="arrow-next" onClick={() => carouselRoadMapRef?.current?.next()} />
      </div>
    </>
  }

  const renderFarming = () => {
    if(mobile) {
      return <>
        <div className='mobile-farming-1'>
          <h3 className='farming-title'>Farming Universe</h3>
          <img className='img-full' src={farmingMobile1} alt='' />
          <p className='farming-description'>
            Chick Coop is not just a farm game; it's the beginning of Farmverse - a promising and vibrant farming world on the Telegram platform.
          </p>
          <Button className='btn-stroke2'  padding='10px 15px' fontSize={35} type='primary' title='Join Early Register' onClick={joinEarlyRegister} />
        </div>
        <div className='mobile-farming-2'>
          <h3 className='farming-title'>Farming Universe</h3>
          <img className='img-full' src={farmingMobile2} alt='' />
          <p className='farming-description'>
            After Chick Coop, we'll immerse ourselves in a limitless creative system of farms with crops (Farming Game), fishing, cattle farming, and beyond.
          </p>
          <Button className='btn-stroke2'  padding='10px 15px' fontSize={35} type='secondary' title='Join Referral Race' onClick={joinReferralRace} />
        </div>
      </>
    }

    return <Carousel ref={carouselFarmingRef} arrows={false} dots={false} infinite={true}>
      <div className='farming-slide'>
        <img className='img-full' src={farming1} alt="farming" />

        <div className='farming-content'>
          <h3 className='farming-title'>Farming Universe</h3>
          <p className='farming-description'>
            Chick Coop is not just a farm game; it's the beginning of Farmverse - a promising and vibrant farming world on the Telegram platform.
          </p>
          <Button className='btn-stroke2'  padding='15px 35px' fontSize={35} type='primary' title='Join Early Register' onClick={joinEarlyRegister} />
          <div className="arrow-container arrow-container-farming">
            <img src={ArrowPrev} className="arrow-prev" alt="arrow-prev" onClick={() => carouselFarmingRef?.current?.prev()} />
            <img src={ArrowNext} className="arrow-next" alt="arrow-next" onClick={() => carouselFarmingRef?.current?.next()} />
          </div>
        </div>
      </div>
      <div className='farming-slide'>
        <img className='img-full' src={farming2} alt="farming" />

        <div className='farming-content farming-content2'>
          <h3 className='farming-title'>Farming Universe</h3>
          <p className='farming-description'>
          After Chick Coop, we'll immerse ourselves in a limitless creative system of farms with crops (Farming Game), fishing, cattle farming, and beyond.
          </p>
          <Button className='btn-stroke2'  padding='15px 35px' fontSize={35} type='secondary' title='Join Referral Race' onClick={joinReferralRace} />
          <div className="arrow-container arrow-container-farming">
            <img src={ArrowPrev} className="arrow-prev" alt="arrow-prev" onClick={() => carouselFarmingRef?.current?.prev()} />
            <img src={ArrowNext} className="arrow-next" alt="arrow-next" onClick={() => carouselFarmingRef?.current?.next()} />
          </div>
        </div>
      </div>
    </Carousel>
  }

  return <div className="home container">
    <div className='home-banner'>
      <img className='img-full hide-mobile' src={Banner} alt='Banner' />
      <img className='img-full only-show-mobile' src={BannerMobile} alt='Banner' />
      <div className='above-text'>
        <h1 className='text-banner text-banner1'>PLAY - TO</h1>
        <h2 className='text-banner text-banner2'>AIR DROP</h2>
        <Button className='btn-stroke2'   padding={`${mobile ? '10px 15px': '15px 35px'}`} fontSize={35} type='primary' title='Join Dual Event' onClick={joinDualEvent} />
      </div>
    </div>

    <div className='section-farming'>
      { renderFarming()}
    </div>

    <div className={`section-roadmap ${mobile ? "section-roadmap-mobile": ""}`}>
      <div className='roadmap-heading'>
        <h3 style={{ margin: 0 }}>Roadmap</h3>
        <p style={{ margin: 0, fontWeight: 400 }}>(2024-2025)</p>
      </div>
      {renderRoadmap()}
    </div>
  </div>
}

export default Home;