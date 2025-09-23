import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Education from '../pages/Education';
import Projects from '../pages/Projects';
import NavBar from '../sections/NavBar';

const MainRouter = () => {
    return (
            <Routes>
                <Route element={<NavBar />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/projects" element={<Projects />} />
                </Route>
            </Routes>
        );
}

export default MainRouter;