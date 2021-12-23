
import About from './components/about';
import Card from './components/card';
import Skills from './components/skills';
import Footer from './components/footer';
function App() {
  return (
    <div className="py-10 bg-gray-100 dm:px-5 min-h-screen">
      <Card />
      <About />
      <Skills />
      <Footer />
    </div>

  );
}

export default App;
