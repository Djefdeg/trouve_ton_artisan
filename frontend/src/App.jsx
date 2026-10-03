import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ListArtisan from './pages/ListArtisan/listArtisan';
import ArtisanForm from './pages/ArtisanForm/ArtisanForm';
import Error404 from './pages/Error404/Error404';
import LegalNotice from './pages/UnderConstruction/LegalNotice';
import Accessibility from './pages/UnderConstruction/Accessibility';
import Cookies from './pages/UnderConstruction/Cookies';
import PersonalData from './pages/UnderConstruction/PersonalData';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artisans" element={<ListArtisan />} />
        <Route path="/contact" element={<ArtisanForm />} />
        <Route path="/mentions-legales" element={<LegalNotice />} />
        <Route path="/accessibilite" element={<Accessibility />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/donnees-personnelles" element={<PersonalData />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      {/* <ListArtisan /> */}
      {/* <ArtisanForm /> */}
      {/* < Error404 /> */}
      {/* <LegalNotice/> */}
      {/* <Accessibility/> */}
      {/* <Cookies/> */}
      {/* <PersonalData/> */}
      <Footer />
    </BrowserRouter>
    
  )
}

export default App