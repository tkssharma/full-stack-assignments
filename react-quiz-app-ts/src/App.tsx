import { QuizProvider } from "./context/quizscore.context";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <main className="bg-lightBlue h-screen">
      <QuizProvider>
        <MainPage />
      </QuizProvider>
    </main>
  );
}

export default App;
