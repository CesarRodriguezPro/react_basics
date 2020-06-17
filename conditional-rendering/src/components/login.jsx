import React from 'react';
import InputItem from './InputItems';


function Login(){
   return <form className="form">
   <InputItem type='text' placeholder="Username" />
   <InputItem type='password' placeholder="password" />
   <button type = "submit">Login </button> 
</form>
}

export default Login;