import React, { useState, useRef } from 'react';
import './styles/index.scss';
import Appbar from '../../components/appbar';
import Sidebar from '../../components/sidebar';
import HomePart from './components/home/homePart';

export default function MainPage(props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAppbarCollapsed, setIsAppbarCollapsed] = useState(false);
  const mainPageRef = useRef();

  const appbarScrollCollapse = () => {
    let scrollTop = mainPageRef.current.scrollTop;
    if(scrollTop > 50 && !isAppbarCollapsed) {
      setIsAppbarCollapsed(true);
      console.log('collapsed')
    }
    else if(scrollTop <= 50 && isAppbarCollapsed){
      setIsAppbarCollapsed(false);
      console.log('not-collapsed')
    }
  };

  // window.addEventListener('scroll', appbarScrollCollapse, true);

  return (
    <div id="mainPage" ref={mainPageRef} onScroll={appbarScrollCollapse}>
      <Appbar setIsSidebarOpen={setIsSidebarOpen} isAppbarCollapsed={isAppbarCollapsed} />
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <HomePart />
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ab deleniti quaerat velit? Illum quidem velit necessitatibus officiis libero totam vero, maiores cupiditate, tempora expedita culpa quisquam. Deleniti, architecto error?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ab deleniti quaerat velit? Illum quidem velit necessitatibus officiis libero totam vero, maiores cupiditate, tempora expedita culpa quisquam. Deleniti, architecto error?</div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ab deleniti quaerat velit? Illum quidem velit necessitatibus officiis libero totam vero, maiores cupiditate, tempora expedita culpa quisquam. Deleniti, architecto error?</div>

    </div>
  );
}