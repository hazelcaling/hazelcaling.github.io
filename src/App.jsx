import { Navbar } from './components/Navbar'
import Footer from './components/Footer/Footer'
import { Header } from './components/Header'
import { Projects } from './components/Projects'
import './App.css'
import ContactPage from './components/ContactPage/ContactPage'


function App() {


  return (
    <div className='view'>

      {/* <div className="video-background">
        <video src="background-video.mp4" autoPlay muted loop type='video/mp4'>
        </video>
        <div className='content'>
          <Navbar />
        </div>
      </div> */}

      <Navbar />
      <Header />
      {/* <AboutMe /> */}
      <Projects />
      <ContactPage />
      <Footer />
    </div>

  )
}

export default App
