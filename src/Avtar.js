import React,{Component} from 'react';
import './Avtar.css';
import 'tachyons';
import Avtarlist from './Avtarlist';

class Avtar extends Component {
    constructor(){
        super();
        this.state={
            name:"Welcome"
        }
    }
    namechange(){
        this.setState({
            name:"Bye!"
        })
    }
    render(){ 
        const Arraylist=[
            {
                id:"1",
                name:"AA",
                work:"web developer"
            },
            {
                id:"2",
                name:"BB",
                work:"web developer"
            },
            {
                id:"3",
                name:"CC",
                work:"web developer"
            },
            {
                id:"4",
                name:"DD",
                work:"web developer"
            }
        ]

   
    const Avatarcard = Arraylist.map( (avtarcard,i) => {
        return <Avtarlist id={Arraylist[i].id}
        name={Arraylist[i].name}
        work={Arraylist[i].work}
        />
    })
        return ( 
        <div className="mainpage">
        <h1>{this.state.name}</h1>
        {Avatarcard}
        <button onClick={()=> this.namechange() }> Subscribe</button>
        </div>
    )
}
}
export default Avtar;
