import Button from '../components/Button';
import Banner from '../images/banner.png';
const Home = () => {
  const joinDualEvent = () => {
    console.log("Join Dual Event...");
  }


  return <div className="home">
    <div className='home-banner'>
      <img className='img-full' src={Banner} alt='Banner' />
      <div className='above-text'>
        <h1 className='text-banner text-banner1'>PLAY - TO</h1>
        <h2 className='text-banner text-banner2'>AIR DROP</h2>
        <Button className='btn-stroke2'  padding='15px 35px' fontSize={40} type='primary' title='Join Dual Event' onClick={joinDualEvent} />
      </div>
    </div>
    
  </div>
}

export default Home;