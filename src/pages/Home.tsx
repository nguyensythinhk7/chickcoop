import Button from '../components/Button';
import Banner from '../images/banner.png';
import farming1 from '../images/farming-1.png';
import farming2 from '../images/farming-2.png';
import { Carousel } from 'antd';
import Q22024 from '../images/q2_2024.png';
import Q32024 from '../images/q3_2024.png';
import Q42024 from '../images/q4_2024.png';
import Q12025 from '../images/q1_2025.png';
import Q22025 from '../images/q2_2025.png';
import Q32025 from '../images/q3_2025.png';
import ArrowPrev from '../images/arrow-prev.png';
import ArrowNext from '../images/arrow-next.png';
import { createRef } from 'react';
import { CarouselRef } from 'antd/es/carousel';

const Home = () => {
  const carouselRoadMapRef = createRef<CarouselRef>();
  const carouselFarmingRef = createRef<CarouselRef>();

  const joinDualEvent = () => {
    console.log("Join Dual Event...");
  }

  const joinEarlyRegister = () => {
    console.log("Join Early Register...");
  }

  const joinReferralRace = () => {
    console.log("Join Referral Race...");
  }

  const numberOfSlide = 3;
  // const roadmapItems = [
  //   [
  //     {
  //       image: Q12024,
  //       alt: 'Q12024',
  //       title: <h3>Q1 2024 <br />ChickCoop Launched</h3>,
  //       content: [
  //         'Play-to-Aidrop',
  //         'Mechanism'
  //       ]
  //     },
  //     {
  //       image: Q22024,
  //       alt: 'Q22024',
  //       title: <h3>Token Airdrop<br />& Listing</h3>,
  //       content: [
  //         'Airdrop for User & Contributors',
  //         'Exchange listing'
  //       ]
  //     },
  //     {
  //       image: Q32024,
  //       alt: 'Q32024',
  //       title: <h3>Token Airdrop<br />& Listing</h3>,
  //       content: [
  //         'Airdrop for User & Contributors',
  //         'Exchange listing'
  //       ]
  //     },
  //   ],
  //   [
  //     {
  //       image: Q42024,
  //       alt: 'Q42024',
  //       title: <h3>Token Airdrop<br />& Listing</h3>,
  //       content: [
  //         'Airdrop for User & Contributors',
  //         'Exchange listing'
  //       ]
  //     },
  //     {
  //       image: Q12025,
  //       alt: 'Q12025',
  //       title: <h3>Token Airdrop<br />& Listing</h3>,
  //       content: [
  //         'Airdrop for User & Contributors',
  //         'Exchange listing'
  //       ]
  //     },
  //     {
  //       image: Q22025,
  //       alt: 'Q22025',
  //       title: <h3>Token Airdrop<br />& Listing</h3>,
  //       content: [
  //         'Airdrop for User & Contributors',
  //         'Exchange listing'
  //       ]
  //     }
  //   ]
  // ]

  return <div className="home container">
    <div className='home-banner'>
      <img className='img-full' src={Banner} alt='Banner' />
      <div className='above-text'>
        <h1 className='text-banner text-banner1'>PLAY - TO</h1>
        <h2 className='text-banner text-banner2'>AIR DROP</h2>
        <Button className='btn-stroke2'  padding='15px 35px' fontSize={40} type='primary' title='Join Dual Event' onClick={joinDualEvent} />
      </div>
    </div>

    <div className='section-farming'>
      <Carousel ref={carouselFarmingRef} arrows={false} dots={false} infinite={true}>
        <div className='farming-slide'>
          <img className='img-full' src={farming1} alt="farming" />

          <div className='farming-content'>
            <h3 className='farming-title'>Farming Universe</h3>
            <p className='farming-description'>
              Chick Coop is not just a farm game; it's the beginning of Farmverse - a promising and vibrant farming world on the Telegram platform.
            </p>
            <Button className='btn-stroke2'  padding='15px 35px' fontSize={40} type='primary' title='Join Early Register' onClick={joinEarlyRegister} />
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
            <Button className='btn-stroke2'  padding='15px 35px' fontSize={40} type='secondary' title='Join Referral Race' onClick={joinReferralRace} />
            <div className="arrow-container arrow-container-farming">
              <img src={ArrowPrev} className="arrow-prev" alt="arrow-prev" onClick={() => carouselFarmingRef?.current?.prev()} />
              <img src={ArrowNext} className="arrow-next" alt="arrow-next" onClick={() => carouselFarmingRef?.current?.next()} />
            </div>
          </div>
        </div>
      </Carousel>
    </div>

    <div className='section-roadmap'>
      <div className='roadmap-heading'>
        <h3 style={{ margin: 0 }}>Roadmap</h3>
        <p style={{ margin: 0, fontWeight: 400 }}>(2024-2025)</p>
      </div>
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
    </div>
  </div>
}

export default Home;