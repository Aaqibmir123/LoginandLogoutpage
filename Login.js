import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [logined,setLogined]=useState(false);
  const [error,setError]=useState(false);
    const Username=(e)=>{
        setUsername(e.target.value);
    }

    const Password=(e)=>{
        setPassword(e.target.value);
        
    }

    const Formdata=(e)=>{
      
        e.preventDefault();
        if(username.trim().length > 6 && password.trim().length > 5){
           setLogined(true);

           //when logout is succes than input box remains empty
           setUsername("");
           setPassword("");
        }
        else{
           
          setError("invalid");
        }
    }
    const Logout=()=>{
        setLogined(false);
        setError(false);
    }
   

  return (
    <div>
        {logined ?
        <div>
            <button onClick={Logout}>logout</button>
    
        </div>
      : <form onSubmit={Formdata}>
          <p>{error}</p>
        <input type="text"
        onChange={Username}/>
        <input type="password"
          onChange={Password} />
        <button>submit</button>
      </form>  
}

    </div>
        
  );
};

export default Login;
