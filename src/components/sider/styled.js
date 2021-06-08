import styled from 'styled-components';
import { Radio } from 'antd';
import { Slider } from 'antd';

const Title = styled.h3`
  position: absolute;
  width: 270px;
  height: 33px;
  left: 89px;
  top: 114px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 33px;
  color: #000000;
`;

const Info = styled.div`
  position: absolute;
  width: 23px;
  height: 23px;
  left: 350px;
  top: 120px;
  border: 1px solid #C0C0C0;
  box-sizing: border-box;
  border-radius: 50px;
  text-align: center;
`;

const Wrapper = styled.div`
  position: absolute;
  width: 245px;
  height: 758px;
  left: 91px;
  top: 165px;
  .fullName{
  }
`;

const Label = styled.label`
  position: absolute;
  left: ${props => (props.customStyle?.left || '0%')};
  right: ${props => (props.customStyle?.right || '85.31%')};
  top: ${props => (props.customStyle?.top || '0%')};
  bottom: ${props => (props.customStyle?.bottom || '95.38%')};
  font-family: Roboto;
  font-style: normal;
  font-weight: ${props => (props.customStyle?.fontWeight || 'bold')};
  font-size: 16px;
  line-height: 220%;
  color: #000000;
`;

const Input = styled.input`
  position: absolute;
  left: 0%;
  right: ${props => (props.customStyle?.right || '7.76%')};
  top: ${props => (props.customStyle?.top || '5.41%')};
  bottom: ${props => ( props.customStyle?.bottom || '89.31%')};
  border: 1px solid #B9B9B9;
  box-sizing: border-box;
  border-radius: 4px;
`;

const RadioButton = styled(Radio)`
  position: absolute;
  left: 0%;
  word-break: keep-all;
  right: ${props => (props.customStyle?.right || '92.65%')};
  top: ${props => (props.customStyle?.top || '35.09%')};
  bottom: ${props => (props.customStyle?.bottom || '62.53%')};
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 220%;
  color: #000000;
  border-radius: 4px;
`;

const Range = styled(Slider)`
  position: absolute;
  left: 0.41%;
  right: 7.76%;
  top: ${props => (props.customStyle?.top || '69.13%')};
  bottom:  ${props => (props.customStyle?.bottom || '30.74%')};
  background: #C4C4C4;
`;

const InputRang = styled.input`
  position: absolute;
  left: ${props => (props.customStyle?.left || '11.02%')};
  right: ${props => (props.customStyle?.right || '57.96%')};
  top: ${props => (props.customStyle?.top || '60.82%')};
  bottom: ${props => (props.customStyle?.bottom || '34.96%')};
  width: 76px;
  height: 32px;
  border: 1px solid #E2E2E2;
  box-sizing: border-box;
  border-radius: 2px;
`;

const Reset = styled.button`
  position: absolute;
  width : 159px;
  height : 40px;
  left: 13.82%;
  right: 28.16%;
  top: 96.17%;
  bottom: 1.72%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #0089FF;
`;

export { Title, Info, Wrapper, Label, Input, RadioButton, Range, InputRang, Reset };