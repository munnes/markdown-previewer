// JavaScript source code
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Button } from 'react-bootstrap';
import { i } from 'react-bootstrap';
import Markdown from 'react-markdown';
import addTxt from './actions/addTxt';
import maxTxt from './actions/maxTxt';
import maxHTML from './actions/maxHTML';
import $ from 'jquery';

class InTxt extends Component {
    componentDidMount() {
        $(".b1").click(function(){
            if( $(".b1").find("i").hasClass("fas fa-arrows-alt")){
                $(this).find("i").removeClass("fas fa-arrows-alt").addClass("fas fa-arrows-alt-v");}
            else if( $(".b1").find("i").hasClass("fas fa-arrows-alt-v")){
                $(this).find("i").removeClass("fas fa-arrows-alt-v").addClass("fas fa-arrows-alt");
            }
        });
        $(".b2").click(function(){
            if( $(".b2").find("i").hasClass("fas fa-arrows-alt")){
                $(this).find("i").removeClass("fas fa-arrows-alt").addClass("fas fa-arrows-alt-v");}
            else if( $(".b2").find("i").hasClass("fas fa-arrows-alt-v")){
                $(this).find("i").removeClass("fas fa-arrows-alt-v").addClass("fas fa-arrows-alt");
            }
        });
      
    }
    handleChange = (e)  => {
        this.props.addNew(e.target.value);
            }
    
        handleOnClickTxt = () =>{
          
            this.props.myTxt(this.props.MaxTxt) ;
            if (this.props.MaxTxt == true){
                document.getElementById("prvBox").style.display = "block";
                document.getElementById("editBox").style.height='40vh';
                document.getElementById("editor").style.height="40vh";}
            else{  
                document.getElementById("prvBox").style.display = "none";
                document.getElementById("editBox").style.height="90vh";
                document.getElementById("editor").style.height="90vh";
            }
         
        }

        handleOnClickHTML = () =>{
          
            this.props.myHTML(this.props.MaxHTML) ;
            if (this.props.MaxHTML == true){
                document.getElementById("editBox").style.display = "block";
            }
            else{  
                document.getElementById("editBox").style.display = "none";
            }
         
        }
  
        render(){
            return(
                <div className="container-fluid">
             <div id="editBox" className="box">
                <div className="head"><strong>Editer</strong>
                    <Button className="btn b1" onClick={this.handleOnClickTxt}><i className='fas fa-arrows-alt'></i></Button>
                    </div>
                <textarea id="editor" className="form-control z-depth-1" rows="10" 
            value={this.props.input} onChange={this.handleChange}  ></textarea>
</div>
            
<div id="prvBox" className="box">
          <div className="head "><strong>Preview</strong>
              <Button className="btn b2" onClick={this.handleOnClickHTML}><i className='fas fa-arrows-alt' ></i></Button></div>
           <div id="preview" className="well"> 
              
          <Markdown 
            escapeHtml={true}
            source={this.props.input}
        />
        
        </div>
                    </div>
                     </div>
         );
        }
    }

const txt=()=>{

    document.getElementById("prvBox").style.display = "none";
    document.getElementById("editBox").style.width="100%";
    document.getElementById("editBox").style.height="100%";
}
    const mapStateToProps = (state) => {
        return {
            input: state.input,
            MaxTxt:state.txtMax,
            MaxHTML:state.HTMLMax
        }
    };
    const mapDispatchToProps = (dispatch) => 
    { 
        return { 
        addNew:(inp) => {dispatch(addTxt(inp))},
        myTxt: (togel) =>{ dispatch(maxTxt(togel)) },
        myHTML: (togel) =>{ dispatch(maxHTML(togel)) }
    }
    };
  
export default connect (mapStateToProps, mapDispatchToProps)(InTxt);

