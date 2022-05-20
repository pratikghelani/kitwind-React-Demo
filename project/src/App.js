import './App.css';
import './index.css';
import Nav from './components/Nav';
import Header from './components//Header';
import Content from './components/Content';
import Step from './components/Step';
import Feature from './components/Feature';
import Service from './components/Service';
import Statistic from './components/Statistic';
import Blog from './components/Blog';
import Footer from './components/Footer';
function App() {
  return (
   <>
      <Nav />
      <Header />
      <Content />
      <Step />
      <Service />
      {/* <Feature /> */}
      <Statistic />
      <Blog />
      <Footer />
  </>
  );
}

export default App;
