import Header from './components/Header';
import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
