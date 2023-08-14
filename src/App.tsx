import { BrowserRouter } from "react-router-dom"
import { Navbar, Stars } from "./components/organisms"
import { Hello, About, Experience, Tech, Contact } from "./components/pages"
import { isAndroid } from "./utils/isAndroid"

function App() {
  const isAndroidPhone = isAndroid()

  return (
    <BrowserRouter>
      <div className="realative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hello />
          <About />
          <Experience />
          <div className="relative z-0">
            {isAndroidPhone || <Tech />}
            <Contact />
            <Stars />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
