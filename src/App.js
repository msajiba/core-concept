import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(()=> {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, [])
 
  return (
    <div className="App">
      <header className="App-header">
      {
        products.map(pd => <li> <Product product={pd} key={pd.id}> </Product> </li>)
      }
      <LoadData> </LoadData>
      <MovieCounter> </MovieCounter>

      </header>
    </div>
  );
};


function Product (props){
    const {name, email} = props.product;
    // console.log(props.key)
  return (
    <div style={{border:'1px solid gray', borderRadius:'20px', padding:"10px"}}> 
      <h4> Name : {name}</h4>
      <h5> Email : {email} </h5>
    </div>
  )
}


function MovieCounter (){
  const [count, setCount] = useState(10);
  return (
    <div> 
      <button onClick={()=> setCount(count + 1)}> Add Movie </button>
      <h4> Number of Movie : {count} </h4>
      <MovieDisplay movie={count -1}> </MovieDisplay>
    </div>
  )
}


function MovieDisplay (props){
  return (
    <div>
      <h1> total Movie : {props.movie}</h1>
    </div>
  )
}
function LoadData (){
  const [users, setUsers] = useState([]);

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  // console.log(users)
  return (
    <div> 
      <h3> Total: {users.length} </h3>

      <ul>
        {
          users.map ( user => <li> {user.name} </li>)
        }
      
        </ul>
    </div>
  )
}


export default App;
