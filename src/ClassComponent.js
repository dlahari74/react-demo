import React from 'react'
class ClassComponent extends React.Component{
	state={
		subjectname:"react",
		year:2013,
		inputValue:"",
		students:[
			{
		       name:"lahari",
		       age:19,
		       gender:"female",
			},
			{
				name:"kalyan",
				age:20,
				gender:"male",
			},
			{
				name:"virat",
				age:30,
				gender:"male"
			}
			]
	}
	handleClick=()=>{
		console.log(this.state.inputValue)
		this.setState({
			inputValue:"" 
		})
	}
	handleChange=(e)=>{
		//console.log(e.target.value)
     this.setState({
     	inputValue:e.target.value
     })
	}
	render(){
		return(
            <div>
            <h2> GOOD MORNING LAHARIII </h2>
                       <p>{this.state.subjectname}</p>
                       <p>{this.state.year}</p>  
                       {
                       	this.state.students.map((pos)=>(
                       	<div>
                       	    <p>{pos.name}</p>
                       	    <p>{pos.age}</p>
                       	    <p>{pos.gender}</p>
                       	</div>
                       	    ))
                       }
                       <input value={this.state.inputValue} onChange={this.handleChange}/>
            <button onClick={this.handleClick}> Submit </button>
            </div>
			)
	}
}

export default ClassComponent