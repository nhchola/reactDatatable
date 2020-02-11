import "./css/jquery.dataTables.css"
import React,{Component} from 'react'
const $ = require('jquery');
$.DataTable = require('datatables.net');

export class Tbl extends Component 
{
 dt=null;
    componentDidUpdate()
    {
        console.log("Child update")  
        console.log(this.el)
        console.log(this.props.data)
      
        //this.$el.DataTable.;        
    }
    componentDidMount()
    {
        console.log(this.el)
        console.log(this.props.data)
        this.$el=$(this.el)
        this.dt=this.$el.DataTable(
            {
                data: this.props.data,
                columns: [
                    { title: "Name" },
                    { title: "Position" },
                    { title: "Office" },
                    { title: "Extn." },
                    { title: "Start date" },
                    { title: "Salary" }
                ] 
                
                
            }
           
        )
    }
    componentWillUnmount()
    {
        this.$el.DataTable.destroy(true)
    }

    showAlert() {
        alert('Hello World');
    }

    render() {
        return(
            <div>
                <table className="display" width="100%" ref={el=>this.el=el}>

                </table>
            </div>
        )
    }

    
}
export default Tbl;
