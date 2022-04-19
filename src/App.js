import './App.css';
import Header from './Components/Header/Header';
import PaginatedItems from './Components/Pagination/PaginatedItems';
import Shop from './Components/Shop/Shop';
import { } from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu6sHK_fAAw-aFmJ-Y6LVLw6mun3USi2c",
  authDomain: "mealdb-81d71.firebaseapp.com",
  projectId: "mealdb-81d71",
  storageBucket: "mealdb-81d71.appspot.com",
  messagingSenderId: "31150395543",
  appId: "1:31150395543:web:cad2388f9088e3d71959d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <PaginatedItems></PaginatedItems>
    </div>

  );
}

export default App;
