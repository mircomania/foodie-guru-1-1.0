import { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/common/Navbar';
import { Cargando } from './components/utils/Cargando';
import { Footer } from './components/common/Footer';

import { ScrollToTop } from './hooks/ScrollTop';

const LandingPage = lazy(() => import('./components/pages/LandingPage'));
const NosotrosPage = lazy(() => import('./components/pages/NosotrosPage'));
const ServiciosPage = lazy(() => import('./components/pages/ServiciosPage'));

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
                    </Routes>
                </Suspense>
            )}

            <Footer />
        </BrowserRouter>
    );
}

export default App;
