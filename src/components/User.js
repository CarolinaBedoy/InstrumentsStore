import Register from './Register';
import LogIn from './LogIn';
import Bar from './Bar';
import {useState, useEffect} from 'react';

function User() {
  const [data, setData] = useState(null);
  

  useEffect(() => {
    fetch("http://localhost:8081/api")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  })

  return (
    <>
    <Bar/>
    <div style={{display:'inline-flex', marginLeft:'180px', marginTop:'30px'}}>
     <Register/>
     <LogIn/>
    </div>
    </>
  );
}

export default User;