import About from '../pages/About';
import Contact from '../pages/Contact';
import Education from '../pages/Education';
import Home from '../pages/Home';
import NavBar from '../sections/NavBar';
import Projects from '../pages/Projects';
import { Routes, Route } from 'react-router-dom';

export default function MainRouter() {
    return (
            <Routes>
                <Route element={<NavBar />}>
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/education" element={<Education />} />
                    <Route index element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                </Route>
            </Routes>
        );
}