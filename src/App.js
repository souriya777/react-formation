
import './App.css';
import Horloge from './Horloge'
import Galery from './components/Galery'
import MyForm from './components/MyForm'
import {useState} from 'react'
import useElementWidth from './components/useElementWidth';

function App() {
  const [pageNum, changePageNum] = useState(1)

  const updatePageNum = () => {
    changePageNum(pageNum+1);
  }

  const elementWidth = useElementWidth("app")
  // console.log(elementWidth)

  return (
    <div className="App" id="app">
      <Horloge />
      <MyForm
        onSubmit={updatePageNum}
       />
      <Galery 
        pageNum={pageNum}
        />
      {elementWidth}
    </div>
  );
}

export default App;
