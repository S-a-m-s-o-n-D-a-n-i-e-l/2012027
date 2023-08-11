import Header from './Header';
import mockTrains from "./trainData"; 
import TrainTable from './Traintable';
function App() {
  return (
    <>
      <Header></Header>
      <div className="container mt-4">
        <h2>Train Schedule</h2>
        <TrainTable trains={mockTrains} />
      </div>
    </>
  );
}

export default App;
