import { Menu } from 'antd';
import { useState } from 'react';
import { Circle, Author, CloseBn, LogoutBn, NavMenu } from './styled';

const { SubMenu } = Menu;

function NavBar() {
  const [current, setCurrent] = useState('performance');

  const handleClick = event => {
    setCurrent(event.key);
  };



  return (
    <>
    <Circle />
      <NavMenu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="performance">
          Успеваемость студентов
        </Menu.Item>
        <Menu.Item key="points">
          Поставить баллы
        </Menu.Item>
        <SubMenu key="info" title="Информация">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
        </SubMenu>
        <CloseBn>Закрыть семестр</CloseBn>
        <Author>Бекаури И. В.</Author>
        <LogoutBn>Выход</LogoutBn>
      </NavMenu>
      </>
  );
}

export default NavBar;
