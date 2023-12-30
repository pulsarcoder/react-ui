// import logo from './logo.svg';
import './App.css';
import {Card} from './shared/components/Card/index.js'
import { Pagination } from './shared/components/Pagination/index.js';

function App() {
  return (
    <div className="App">
      <h1>Components</h1>
      <h1>card component</h1>
      <Card id ={"btn1"}className="billing-card" >
          <div className='billing-card-heading'>
            <header>Heading</header>
            <section>the content whhich is not allowed to described</section>
          </div>
        </Card>
        <Card>
          <div>hello</div>
        </Card>
        <Pagination/>
     </div>
  );
}

export default App;
