import {useState, useEffect} from 'react'
import {BsEyeFill, BsEyeSlashFill} from 'react-icons/bs'
import './Login.css'
const Login = () => {
    const [userName, setUserName] = useState(()=>localStorage.getItem('userName') || "")
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState('')
    const [visible, setVisible] = useState(false)
    function getName(e) {
      setUserName(e.target.value); 
    }
    function getPassword(e) {
      setPassword(e.target.value);
    }
    function getEmail(e) {
      setEmail(e.target.value);
    }

    useEffect(()=>{
        localStorage.setItem('userName', userName)
    },[userName])
    function handleSubmit(e) {
      e.preventDefault();
      setUserName('')
      setPassword("");
      setEmail("");
    }
      console.log(userName, password, email);
      return (
        <div className="container">
          <div className="wrapper">
            <div className="content">
              <div className="inner-content">
                <h3>Login to ColorLib</h3>
                <form onSubmit={handleSubmit}>
                  <div className="name-input">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Enter your name"
                      value={userName}
                      onChange={getName}
                    />
                  </div>
                  <div className="email-input">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={getEmail}
                    />
                  </div>
                  <div className="name-input">
                    <label htmlFor="password">Password</label>
                    <div style={{position:'relative'}}>
                      <input
                        type={visible ? "text" : "password"}
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={getPassword}
                      />
                      {visible ? (
                        <BsEyeFill onClick={() => setVisible(false)} />
                      ) : (
                        <BsEyeSlashFill onClick={() => setVisible(true)} />
                      )}
                    </div>
                  </div>

                  <input type="submit" value="Submit" id="submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }

 export default Login
