import React, {useState} from 'react';
import './styles/index.scss';
import Appbar from '../../components/appbar';
import Sidebar from '../../components/sidebar';
import HomePart from './components/home/homePart';

export default function MainPage(props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div id="mainPage" className='full-page-pc'>
      <Appbar setIsSidebarOpen={setIsSidebarOpen}/>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen}/>
      <HomePart/>
    </div>
  );
}