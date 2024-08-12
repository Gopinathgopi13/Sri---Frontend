// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            {/* <Route index element={<AgencyModern />} />
          <Route path='service' element={<ServiceV4 />} />
          <Route path='mpeoples' element={<Mpeoples />} />
          <Route path='courses' element={<Courses />} />
          <Route path='aboutUs' element={<AboutUs />} />
          <Route path='contact' element={<Contact />} />
          <Route path='cryptoCurrency' element={<Crypto />} />
          <Route path='studentdetail' element={<StudentDetail />} />
          <Route path='login' element={<LogIn />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='404' element={<NotFound />} />
          <Route path='*' element={<NotFound />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
