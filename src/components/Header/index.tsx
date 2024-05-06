import './header.css';

import React, { useState } from "react";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { SocialIcon } from 'react-social-icons'
import OwnButton from '../Button';

function Header({}) {
  const [active, setActive] = useState(() => {
    const url = window.location.href;

    if(url.includes('/airdrop')) return '/airdrop';
    if(url.includes('/whitepaper')) return '/whitepaper';

    return '/';
  });

  const [showDrawer, setShowDrawer] = React.useState(false);
  const closeDrawer = () => setShowDrawer(false);

  const Menu = ({ isDrawer = false }) => {
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

    return <div className='main-menu'>
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
    </div>
  }

  const playNow = () => {
    console.log("Play Now...");
  }

  return (
    <header className='container main-header'>
      <Button className='only-show-mobile' type='default' onClick={() => setShowDrawer(true)}>
        <MenuOutlined />
      </Button>

      <div className="header-left">
        <a href="/" className="logo">
          <img src={Logo} alt="logo" className="img-logo" />
        </a>

        <Menu />
      </div>

      <div className='header-right'>
          <SocialIcon className='item-right' bgColor="#303647" fgColor='#fff' url="https://twitter.com/chickcoop" />
          <SocialIcon className='item-right' bgColor="#303647" fgColor='#fff' url="https://t.me/chickcoop" />
          <OwnButton className='item-right' type='primary' title='Play Now' onClick={playNow} />
      </div>

      <Drawer className='custom-drawer' destroyOnClose open={showDrawer} title="" onClose={closeDrawer}>
        <Menu isDrawer={true} />
      </Drawer>


    </header>
  );
}

export default Header;
