import {
  BarChartOutlined,
  DropboxOutlined,
  MailOutlined,
  PieChartOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {  Menu } from 'antd';
import { LogoIcon } from '../assets/icons';
import { Context } from '../context/Context';
import { useContext } from 'react';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: '1', icon: <PieChartOutlined />, label: ' Stacks' },
  { key: '2', icon: <BarChartOutlined />, label: ' Group' },
  { key: '3', icon: <UserOutlined />, label: 'Teachers' },
  { key: '4', icon: <UsergroupAddOutlined />, label: 'Students' },
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <MailOutlined />,
    children: [
      { key: '5', icon: <DropboxOutlined />, label: 'Rooms' },
      { key: '6', label: 'Option 6' },
      { key: '7', label: 'Option 7' },
      { key: '8', label: 'Option 8' },
    ],
  },
  
];

const Sitebar: React.FC = () => {
    const {collapse} =useContext(Context)
  return (
    <div className={`bg-[#8f5c28]! duration-300 h-screen ${collapse ? "w-[6.5%]": "w-[22%]" }`}>
      <div className='p-5 flex items-center text-white gap-3 border-b border-white'>
        <LogoIcon/>
        {!collapse && <strong className='text-[20px]'> Najot Ta'lim</strong> }
        
      </div>
      <Menu
        className='bg-[#8f5c28]!'
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapse}
        items={items}
      />
    </div>
  );
};

export default Sitebar;