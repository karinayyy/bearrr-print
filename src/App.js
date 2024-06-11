import NavbarComponent from "./Comp/NavbarComponent";
import "bootstrap/dist/css/bootstrap.min.css"
import CarouselComponent from "./Comp/CarouselComponent";
import ContactForm from "./Comp/ContactForm";
import MarqueeComponent from "./Comp/MarqueeComponent";
import ReviewCarousel from "./Comp/ReviewCarousel";
import Benefits from "./Comp/Benefits";
import Welcome from "./Comp/Welcome";
function App() {
  return (
    <div className="App">
        <NavbarComponent/>
        <CarouselComponent/>
        <ContactForm />
        <MarqueeComponent />
        <ReviewCarousel/>
        <Benefits/>
        <Welcome/>


    </div>
  );
}

export default App;
