import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Navbar } from './components/common/Navbar';
import { Cargando } from './components/utils/Cargando';
import { Footer } from './components/common/Footer';

import { ScrollToTop } from './hooks/ScrollTop';

const LandingPage = lazy(() => import('./components/pages/LandingPage'));
const NosotrosPage = lazy(() => import('./components/pages/NosotrosPage'));
const ServiciosPage = lazy(() => import('./components/pages/ServiciosPage'));
const ContactoPage = lazy(() => import('./components/pages/ContactoPage'));
const PoliticasPage = lazy(() => import('./components/pages/PoliticasPage'));
const TerminosPage = lazy(() => import('./components/pages/TerminosPage'));
const FaqPage = lazy(() => import('./components/pages/FaqPage'));
const ErrorPage = lazy(() => import('./components/pages/ErrorPage'));

function App() {
    return (
        <>
            <ScrollToTop />

            <Navbar />

            <Suspense
                fallback={
                    <main className="cargando">
                        <Cargando />
                    </main>
                }
            >
                <Routes>
                    <Route path="/" element={<LandingPage />}></Route>
                    <Route path="/nosotros" element={<NosotrosPage />}></Route>
                    <Route path="/servicios" element={<ServiciosPage />}></Route>
                    <Route path="/contacto" element={<ContactoPage />}></Route>
                    <Route path="/faq" element={<FaqPage />}></Route>
                    <Route path="/politica-privacidad" element={<PoliticasPage />}></Route>
                    <Route path="/terminos-condiciones" element={<TerminosPage />}></Route>
                    <Route path="*" element={<ErrorPage />}></Route>
                </Routes>
            </Suspense>

            <Footer />
        </>
    );
}

export default App;
