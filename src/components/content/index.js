import { Area, PreviousBn, NextBn } from './styled';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function MainContent() {
  const onTabChange = () => {
    console.log('aaaa');
  };

  return (
    <>
      <Tabs defaultActiveKey="1" onChange={onTabChange}>
        <TabPane tab="1. Выбор даты" key="1">
          <Area/>
        </TabPane>
        <TabPane tab="2. Выбор студентов" key="2">
          <Area/>
        </TabPane>
        <TabPane tab="3. Выбор типа работы" key="3">
          <Area/>
        </TabPane>
      </Tabs>
      <PreviousBn disabled>Назад</PreviousBn>
      <NextBn>Далее</NextBn>
    </>
  );
}

export default MainContent;