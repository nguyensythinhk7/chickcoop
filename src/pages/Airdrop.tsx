import { ReactNode, useEffect, useState } from 'react';
import Button from '../components/Button';
import AirdropBanner from '../images/airdrop-banner.png';
import { Avatar, Tabs, Space, Table, Tag } from 'antd';
import avatar1 from '../images/avatar_1.png';
import avatar2 from '../images/avatar_2.png';
import avatar3 from '../images/avatar_3.png';
import avatar4 from '../images/avatar_4.png';
import iconFollow from '../images/icon_follow.png';
import iconLike from '../images/icon_like.png';
import iconShare from '../images/icon_share.png';
import iconTele from '../images/icon_tele.png';
import iconChecked from '../images/icon_checked.png';
import top1 from '../images/top_1.png';
import top2 from '../images/top_2.png';
import top3 from '../images/top_3.png';

const Airdrop = () => {
  const [airdropData, setAirdropData] = useState({
    yourRef: 'http://www.labdrill.com',
    avatars: [
      {
        image: avatar1
      },
      {
        image: avatar2
      },
      {
        image: avatar3
      },
      {
        image: avatar4
      },
      {
        total: '142k+'
      },
    ]
  });

  const columns = [
    {
      title: 'Rank',
      dataIndex: 'rank',
      key: 'rank',
      render: (rank: ReactNode) => {
        if(rank === '1') {
          return <img src={top1} alt="top1" />
        } else if(rank === '2') {
          return <img src={top2} alt="top2" />
        } else if(rank === '3') {
          return <img src={top3} alt="top3" />
        }

        return <div className='col-rank'>{rank}</div>;
      },
      align: 'center' as 'center',
    },
    {
      title: 'Total Gems',
      dataIndex: 'gems',
      key: 'gems',
      align: 'center' as 'center',
    },
    {
      title: 'Total Referrals',
      dataIndex: 'referrals',
      key: 'referrals',
      align: 'center' as 'center',
    },
    {
      title: 'ID Telegram',
      dataIndex: 'id_telegram',
      key: 'id_telegram',
      render: (id_telegram: { image?: any, id?: string | number}) => <div>
        <Avatar style={{ marginRight: 4 }} src={id_telegram.image} />
        <span className='font-black'>#{id_telegram.id}</span>
      </div>,
      align: 'center' as 'center',
    },
  ];
  const data = [
    {
      key: '1',
      rank: '1',
      gems: 1000,
      referrals: '999k+',
      id_telegram: {
        image: '',
        id: 23132131232,
      }
    },
    {
      key: '2',
      rank: '2',
      gems: 900,
      referrals: '899k+',
      id_telegram: {
        image: '',
        id: 23132131232,
      }
    },
    {
      key: '3',
      rank: '3',
      gems: 800,
      referrals: '799k+',
      id_telegram: {
        image: '',
        id: 23132131232,
      }
    },
    {
      key: '4',
      rank: '4',
      gems: 750,
      referrals: '786k+',
      id_telegram: {
        image: '',
        id: 23132131232,
      }
    },
    {
      key: '5',
      rank: '5',
      gems: 700,
      referrals: '750k+',
      id_telegram: {
        image: '',
        id: 23132131232,
      }
    },
    {
      key: '6',
      rank: '6',
      gems: 600,
      referrals: '650k+',
      id_telegram: {
        image: '',
        id: 23132131232,
      }
    },
    {
      key: '7',
      rank: '7',
      gems: 500,
      referrals: '550k+',
      id_telegram: {
        image: '',
        id: 23132131232,
      }
    },
    {
      key: '8',
      rank: '8',
      gems: 400,
      referrals: '450k+',
      id_telegram: {
        image: '',
        id: 23132131232,
      }
    },
    {
      key: '9',
      rank: '9',
      gems: 300,
      referrals: '350k+',
      id_telegram: {
        image: '',
        id: 23132131232,
      }
    },
    {
      key: '25631',
      rank: '25631',
      gems: 200,
      referrals: '100k+',
      id_telegram: {
        image: '',
        id: 23132131232,
      }
    },
  ];

  useEffect(() => {
    // call Api get data airdrop
    const fakeData = {
      yourRef: 'http://www.labdrill.com',
      avatars: [
        {
          image: avatar1
        },
        {
          image: avatar2
        },
        {
          image: avatar3
        },
        {
          image: avatar4
        },
        {
          total: '142k+'
        },
      ]
    }

    setAirdropData(fakeData);
  }, []);

  const tabs = [
    {
      id: "task",
      button: <Button className='btn-task' type='3rd' padding='15px 35px' fontSize={40} title='Task' />
    },
    {
      id: "ranking",
      button: <Button className='btn-ranking' type='3rd' padding='15px 35px' fontSize={40} title='Ranking' />
    }
  ]

  const renderTabContent = (type = "task") => {
    // Ranking Content 
    if(type === "ranking") {
      return <div className='airdrop-content'>
        <Table pagination={false} columns={columns} dataSource={data} />
    </div>
    }

    // Task content
    return <div className='airdrop-content'>
      <div className='airdrop-content-top'>
        <div className='group-social-left'>
          <Avatar.Group
            maxCount={4}
            // maxPopoverTrigger="click"
            size="large"
            maxStyle={{
              color: '#fff',
              backgroundColor: '#000000',
              cursor: 'pointer',
            }}
          >
            <Avatar src={avatar1} />
            <Avatar src={avatar2} />
            <Avatar src={avatar3} />
            <Avatar src={avatar4} />
            <Avatar style={{ backgroundColor: '#000000' }}>142k+</Avatar>
          </Avatar.Group>
          <div style={{ position: 'relative', height: '40px' }} className="dividing-line-v item-left item-right"></div>
          <div style={{ display: 'inline-block', lineHeight: '40px' }}>2024/20/21-2024/03/05</div>
        </div>
        <div className='group-social-right'>
          <Button style={{ marginRight: 20 }} className='btn-connect-telegram' type='secondary' padding='10px 20px' fontSize={24} title='Connect Telegram' />
          <Button className='btn-connect-twitter' type='secondary' padding='10px 20px' fontSize={24} title='Connect Twitter' />
        </div>
      </div>

      <div style={{ fontSize: 22, marginTop: 20 }}>Your Referal Link: <a style={{ color: '#3860EA'}} className='font-black' target='_blank' href={airdropData.yourRef} rel="noreferrer">{airdropData.yourRef}</a></div>

      <div className='airdrop-content-middle'>
        <div className='follow-social follow-twitter'>
          <div className='follow-social-left'>
            <img src={iconFollow} alt='Follow twitter' />
            <span>Follow @chickcoop_io on Twitter</span>
          </div>
          <img style={{ width: 40, height: 40 }} src={iconChecked} alt='checked' />
        </div>

        <div className='follow-social follow-twitter'>
          <div className='follow-social-left'>
            <img src={iconLike} alt='Like twitter' />
            <span>Like @chickcoop_tg Tweet</span>
          </div>
          <img style={{ width: 40, height: 40 }} src={iconChecked} alt='checked' />
        </div>

        <div className='follow-social follow-twitter'>
          <div className='follow-social-left'>
            <img src={iconShare} alt='Retweet twitter' />
            <span>Retweet the Tweet</span>
          </div>
          <img style={{ width: 40, height: 40 }} src={iconChecked} alt='checked' />
        </div>

        <div className='follow-social follow-twitter'>
          <div className='follow-social-left'>
            <img src={iconTele} alt='Follow twitter' />
            <span>Join @chickcoop_announcement on Telegram</span>
          </div>
          <img style={{ width: 40, height: 40 }} src={iconChecked} alt='checked' />
        </div> 
      </div>
    </div>
  }
 
  return <div className="airdrop-container container">
    <div className='airdrop'>
      <img className='img-full' src={AirdropBanner} alt='airdrop banner' />

      <Tabs
        className='airdrop-tabs-container'
        defaultActiveKey="1"
        tabPosition={'left'}
        items={tabs.map((tab) => {
          const id = tab.id;
          return {
            label: tab.button,
            key: id,
            children: renderTabContent(tab.id),
          };
        })}
      />
    </div>
  </div>
}

export default Airdrop;