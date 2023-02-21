 import axios from "axios"
 function Contact ( ) {
 	function create(){
 		axios.post("https://reqres.in/api/users",{
 			usernamee:"ravi@gmail.com",
 			password:"ravi@123"
 		})
 		 .then((res)=>{
	 		console.log(res.data)
	 	})
 	}
   
	return(
		<div>
		      <h2>Contact component</h2>
		      <button onClick={create}>Send </button>
		</div>
		)
}
export default Contact