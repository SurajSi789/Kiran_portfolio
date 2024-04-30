import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { Home, Experience, Contact } from "./pages"
import Footer from "./components/Footer"

const App = () => {
    return(
        <main className="bg-gray-300/20">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/experience" element={<Experience/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
                    <Footer />

            </Router>
        </main>
    )
}

export default App
