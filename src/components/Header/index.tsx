import './header.css';

import React, { useState } from "react";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { Button, Drawer } from 'antd';
import { SocialIcon } from 'react-social-icons'
import OwnButton from '../Button';
import buttonDrawer from '../../images/button-drawer.png';

function Header({}) {
  const [active, setActive] = useState(() => {
    const url = window.location.href;

    if(url.includes('/airdrop')) return '/airdrop';
    if(url.includes('/whitepaper')) return '/whitepaper';

    return '/';
  });

  const [showDrawer, setShowDrawer] = React.useState(false);
  const closeDrawer = () => setShowDrawer(false);

  const Menu = ({ isDrawer = false, className = '' }) => {
    const menuData = [
      {
        title: 'Home',
        path: '/',
      },
      {
        title: 'Airdrop',
        path: '/airdrop',
      },
      {
        title: 'White Paper',
        path: '/whitepaper',
      }
    ]

    return <div className={`main-menu ${className}`}>
      {
        menuData.map((item, i) => {
          return (
            <Link key={`main-menu-${i}`} to={item.path} className={`link ${active === item.path ? 'active' : ''}`} onClick={() => {
              setActive(item.path);
              isDrawer && closeDrawer();
            }}>
              <span className="headerItem">{item.title}</span>
            </Link>
          )
        })
      }

      {isDrawer && renderSocialAndPlayNow()}
    </div>
  }

  const playNow = () => {
    console.log("Play Now...");
  }

  const renderSocialAndPlayNow = () => {
    return <>
      <SocialIcon target='_blank' style={{ width: 36, height: 36 }} className='item-right' bgColor="#303647" fgColor='#fff' url="https://x.com/@chickcoop_tg" />
      <SocialIcon target='_blank' style={{ width: 36, height: 36 }} className='item-right' bgColor="#303647" fgColor='#fff' url="https://t.me/@chickcoop_announcement" />
      <OwnButton className='item-right' type='primary' title='Play Now' onClick={playNow} />
    </>
  }

  return (
    <header className='container main-header'>
      <div className="header-left">
        <a href="/" className="logo">
          <img src={Logo} alt="logo" className="img-logo" />
        </a>

        <Menu className="hide-mobile" />
      </div>

      <div className='header-right hide-mobile'>
          {renderSocialAndPlayNow()}
      </div>

      <Button className='only-show-mobile' type='text' onClick={() => setShowDrawer(true)}>
        <img src={buttonDrawer} alt="button drawer" />
      </Button>

      <Drawer className='custom-drawer' destroyOnClose open={showDrawer} title="" onClose={closeDrawer}>
        <Menu className='menu-mobile' isDrawer={true} />
      </Drawer>
    </header>
  );
}

export default Header;
