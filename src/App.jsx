
import Header from './composants/header/Header';
import Footer from './composants/footer/Footer';
import Use_kira from './hook/use_kira'
import { BrowserRouter as Router, Route , Routes  } from 'react-router-dom';
import Home from './page/Home';
import AllProjets from './page/AllProjets';
import Detail_projet from './page/Detail_projet';
import Contact from './page/Contact';
import NotFound from './page/NotFound';





function App() {

  return (
     

     <Router>

        < Use_kira>
          <div className='app  bg-gray-900'>
            <Header/>

              <Routes >
                  <Route path='/' element={<Home/>}/>
                  <Route path='/projets' element={<AllProjets/>}/>
                  <Route path='/projet/:id' element={<Detail_projet/>}/>
                  <Route path='/contact' element={<Contact/>}/>
                  <Route path='*' element={<NotFound/>}/>
              </Routes>

            <Footer/>
          </div>
        </Use_kira>

        </Router>
      


   

  );
}

export default App;