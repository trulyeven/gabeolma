import { Link } from 'react-router-dom';
import './App.css';
import Router from './router/Router';
// Required for side-effects
import "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from 'react';
import { db } from "./firebase-config";

function App() {

  
  useEffect(async () => {
    // db 뒤에 "techInfo"는 정보를 가져올 컬렉션 이름이다.
      const query = await getDocs(collection(db, "users")); 
      query.forEach((doc) => {
        console.log(doc.id, doc.data())
      });
    }, [])

  
  return (<Router />,
    <div className="App">
      <Link to='/'>홈</Link>

      <hr />
      APP
      
    </div>
  );
}

export default App;