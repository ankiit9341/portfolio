// import NavBar from "./component/navBar/NavBar";
// import Introduction from "./component/Introduction/Introduction";
// import Skills from "./component/Skills/Skills";
// import Contact from "./component/Contact/Contact";
// import { BrowserRouter,Routes, Route } from "react-router-dom";
// import {
//   Browser
// }

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <NavBar/>
//         <Routes>
//            <router path='/' element={<Introduction/>} />
//            <router path='/' element={<Contact/>} />
//         <router path='/' element={<Skills/>} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import NavBar from "./component/navBar/NavBar";
import Introduction from "./component/Introduction/Introduction";
import Skills from "./component/Skills/Skills";
import Contact from "./component/Contact/Contact";
import About from "./component/Skills/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Introduction />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

