import { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3700);

        return () => clearTimeout(timer);
    }, []);

    return (
        <BrowserRouter basename="foodie-guru-1-1.0">
            <ScrollToTop />

            <Navbar />

            {loading ? (
                <main className="cargando">
                    <Cargando />
                </main>
            ) : (
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
                    </Routes>
                </Suspense>
            )}

            <Footer />
        </BrowserRouter>
    );
}

export default App;
