import {useState, useEffect}from 'react'
import './NavBar.css'
const Navbar = () => {
    const [getUserName, setGetUserName] = useState("");
    useEffect(() => {
      const name = localStorage.getItem("userName");
      setGetUserName(name);
    }, []);
    //['Niyi' 'DontSleep']
    const initials = getUserName
      .split(" ")
      .map((item) => {
        return item.charAt(0);
      })
      .join("")
      .toUpperCase();
    console.log(initials);
  return (
    <div>Navbar</div>
  )
}

export default Navbar