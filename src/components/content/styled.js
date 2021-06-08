import styled from 'styled-components';

const Area = styled.div`
  height: 864px;
  width: 958px;
  left: 392px;
  top: 160px;
  border-radius: 0px;
  background: #F1F1F1;
  position: absolute;
`;

const PreviousBn = styled.button`
  height: 40px;
  width: 77px;
  left: 1178px;
  top: 111px;
  border-radius: 4px;
  position: absolute;

`;

const NextBn = styled.button`
  height: 40px;
  width: 77px;
  left: 1272px;
  top: 111px;
  border-radius: 4px;
  border: 1px solid #0089FF;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #0089FF;
  position: absolute;

`;

export { Area, PreviousBn, NextBn };