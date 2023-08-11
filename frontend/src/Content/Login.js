import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const data = {
      username: username,
      password: password
    };

    try {
      const response = await fetch('http://localhost/project/webdev/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const responseData = await response.json();
      console.log(responseData);
      const login = responseData['message'];
      if (login === 'success') {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('username', username);
        navigate('/dashboard'); // Redirect after successful login
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const checkLoginStatus = () => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    return isLoggedIn === 'true';
  };


  return (
    <div>
       {checkLoginStatus() ? (
        <p>User is logged in</p>
      ) : (
        <p>User is not logged in</p>
      )}
        <div className='row justify-content-center mt-5'>
            <div className="col-lg-5 col-sm-12">
                <div className='mt-5'>

                </div>
                <div className='container'>
                    <div className="card">
                        <div className="card-title bg-primary text-light p-2">
                            Login
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Username</span>
                                    <input type="text" name="username" value={username} onChange={handleUsernameChange} className="form-control" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text pe-3">Password</span>
                                    <input type="password" name="password" value={password} onChange={handlePasswordChange} className="form-control" />
                                </div>
                                <div className="input-group mb-3 text-end ">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Login;
