
import './App.css';
// import fakeDb from "../public/fakedb.json";
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';



function App() {

  return (
    <>
      <div className='container'>
        {/* {console.log(fakeDb)} */}
        <Header />
        <hr />
        <Blogs />
      </div>
    </>
  )
}

export default App
