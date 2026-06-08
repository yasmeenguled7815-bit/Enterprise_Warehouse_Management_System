//src/pages/login.js

function Login({onLogin}){
	const [username,setUsername]=useState("");
	const [password,setPassword]=useState("");
	
	
	const handleLogin=async() =>{
		try{
			const res=await api.post("/auth/login",{
				username,password,
			});
			
			localStorage.setItem("token",res.data.token);
			onLogin();
		}catch(err){
			alert("Login failed");
		}
	};
	return(
		<div>
		<h2>Warehouse Login</h2>
		
		<input type="password" palacehoder="Password" onChange={(e) => setPassword(e.target.value)}
		/>
		<button onClick={hanldeLogin}>Login</button>
		</div>
	);
}

export default Login;