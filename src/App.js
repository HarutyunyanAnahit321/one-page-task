import { Layout } from 'antd';
import NavBar from './components/header';
import SearchStudent from './components/sider';
import MainContent from './components/content';
import 'antd/dist/antd.css';

const { Sider, Content, Header } = Layout;

function App() {

  return (
    <>
      <Layout>
        <Header style={{ backgroundColor: 'white' }}>
          <NavBar/>
        </Header>
      <div style={{display: 'flex'}}>
        <Sider style={{ backgroundColor: 'white', display: 'contents' }}>
          <SearchStudent/>
        </Sider>
        <Content style={{ backgroundColor: 'white' }}>
            <MainContent/>
        </Content>
      </div>
      </Layout>
    </>
  );
}

export default App;
