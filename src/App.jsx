
import Header from './composants/header/Header';
import Main from './composants/Main';
import Footer from './composants/footer/Footer';
import Use_kira from './Hook/use_kira'





function App() {

  return (
     
    < Use_kira>
       <div className='app bg-gray-900'>
         <Header/>
         <Main/>
         <Footer/>
       </div>
    </Use_kira>
    

  );
}

export default App;