import { BrowserRouter } from "react-router-dom"
import { Navbar } from "./components/organisms"
import { Hello, About, Experience } from "./components/pages"

function App() {

  return (
    <BrowserRouter>
      <div className="realative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hello />
          <About />
          <Experience />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
