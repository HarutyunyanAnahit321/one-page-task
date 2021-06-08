import { Menu } from 'antd';
import styled from 'styled-components';

const CloseBn = styled.button`
  position: absolute;
  left: 68.8%;
  right: 27.81%;
  top: 2.53%;
  bottom: 53.12%;
  border: 1px solid #FF5630;
  box-sizing: border-box;
  border-radius: 4px;
  height: 35px;
  width: 161px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #FF5630;
  &:focus {
    outline: none;
  }
`;

const Author = styled.p`
  height: 19px;
  width: 100px;
  position: absolute;
  left: 83.74%;
  right: 16.05%;
  top: 3.8%;
  bottom: 60.16%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

const LogoutBn = styled.p`
  height: 14px;
  width: 37px;
  position: absolute;
  left: 92.89%;
  right: 17.19%;
  top: 4.2%;
  bottom: 62.5%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
`;

const Circle = styled.div`
  height: 57px;
  width: 57px;
  border-radius: 50px;
  position: absolute;
  left: 6%;
  right: 79.84%;
  top: 0.72%;
  bottom: 43.75%;
  border: 10px solid #000000;
  box-sizing: border-box;

`;

const NavMenu = styled(Menu)`
  margin-left: 130px;
  .ant-menu-item-selected, .ant-menu-submenu-selected {
    border-bottom: none!important;
  }
`;
export { CloseBn, Author, LogoutBn, Circle, NavMenu };