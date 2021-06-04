import './App.css';
import AnimalZoo from './components/AnimalZoo/AnimalZoo';

function App() {
  return (
    <main className="main-bg-color">
      <div>
         <h1 className="text-center mb-4 pt-4 cat-zoo">Animal Zoo <i class="fas fa-color fa-paw"></i></h1>
      </div>
      <div>
        <AnimalZoo></AnimalZoo>
      </div>
    </main>
  );
}

export default App;
