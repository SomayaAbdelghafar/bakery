import logo from './logo.svg';
import './App.css';
// import {createBrowserRouter } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Testymonials from './components/Testymonials';
import Work from './components/Work';
// import Loading from './components/Loading';


// const router=createBrowserRouter([
//   {path:'/',element:<Layout />}
// ])
// const router=createBrowserRouter([
//   {path:'/',element:<Layout />,children:[
//     {path:'*',element:< Error />},
//     {path:'about',element:<About />},
//     {path:'button',element:<Button />},
//     {path:'contact',element:<Contact />},
//     {path:'footer',element:<Footer />},
//     {path:'header',element:<Header />},
//     {path:'recipes',element:<Recipes />},
//     {path:'testymonials',element:<Testymonials />},
//     {path:'work',element:<Work />}
//   ]}
 
// ])
function App() {
  return <>

   <Header />
   <Work />
   <About />
   <Recipes />
   <Testymonials />
   <Contact />
   <Footer />
   
  
  </>;
}

export default App;
