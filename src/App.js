
import './App.css';
import Horloge from './Horloge'
import Galery from './components/Galery'
import MyForm from './components/MyForm'
import {useState} from 'react'

function App() {
  const [pageNum, changePageNum] = useState(1)

  const updatePageNum = () => {
    changePageNum(pageNum+1);
  }

  return (
    <div className="App">
      <Horloge />
      <MyForm
        onSubmit={updatePageNum}
       />
      <Galery 
        pageNum={pageNum}
        />
    </div>
  );
}

export default App;
