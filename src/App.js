import logo from './logo.svg';
import './Login.css';
import React, { useState } from 'react';
import axios from 'axios';
function Login(){
  const [username,setUsername] =useState('');
  const [password,setPassword] =useState('');
  const [error,setError] =useState('');

  const handleSubmit =async(event)=>{
    event.preventDefault();
    try{
      const response = await axios.post('/login',{ username, password });
      if (response.data.success) {
        // 可以执行各种指令
      } else {
        setError(response.data.error);//渲染错误值
      }
    } catch (error) {
      setError(error.message);
    }
  };
    
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <br/>
        
        <form onSubmit={handleSubmit}>
        <label className="Label">登录认证</label>
        <br/>
        <label className="Label">
          账号：
          <input 
            className="Input" 
            type="text" 
            id="username" 
            value={username}
            placeholder="请输入账号"
            onChange={(event) => setUsername(event.target.value)}
        />
        </label>
        <br/>

        <label className="Label">
          密码：
          <input 
            className="Input" 
            type="password" 
            id="pwd" 
            value={password}
            placeholder="请输入密码"
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        {error && (
          <div style={{ color: 'red' }}>
            {error}
          </div>
        )}
        <br/>
        <button className="Submit" type="submit">登录</button>

        <br/>
        <span className="Register">还没有账户，点击<a href="#">注册</a></span>
        </form>
      </header>
    </div>
  );
}
function App() {
  return(
    <Login/>
  )
}


export default App;
