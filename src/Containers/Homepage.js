import React, { Component } from 'react';
import {Button, Icon} from 'react-materialize';
import './index.css';
import image1 from './splash4.png';
import image2 from './splash.png';

class Homepage extends Component {
  
    constructor(){
        super();
        
        this.state={
          amount1:0,
          amount2:0,
          isSlider2:false,
          isSlider1:false,
          isImage2:false
          }
     }

    onPressButton= ()=> {
        this.setState({
            isImage2:true,
            isSlider1:true,
            isSlider2:true,
        })
    }


    onChangeSlider2=(event)=> {
        this.setState({
            amount2:event.target.value,
            amount1:event.target.value/8
        })
    }

    
    render(){
        
        let slider2=null, pic2=null;
        let content1=(
            <Button floating node="button" className="button" waves="light" onClick={this.onPressButton} icon={<Icon>add</Icon>} />    
        )
        let content2=null;
        
        if(this.state.isSlider2 && this.state.isImage2){
           
            slider2=(
                <div>
                <h6 className="bold">They Spend</h6>
                <h5 className="color">{this.state.amount2} $</h5>
                <input type="range" class="custom-range" min="0" max="3000" step="1000" value={this.state.amount2} onChange={this.onChangeSlider2}/>
                </div>
            );
            pic2=(
                <img src={image2} class="rounded-circle image" height="200" width="200"/>
            );
            content1=(
                <p className="text">
                <span>Level 1</span>
                <hr className="hr"/>
                <span>12.5%</span>
                </p>
            );
            content2=(
                <Button floating node="button" className="button" waves="light" icon={<Icon>add</Icon>} />    
            );
        }
        
         
    return (
        <div className="container margin center"> 
        <h4 className="color">Refer & Win</h4><br/>
        
        <div className="row">
        
        <div className="col-md-3">
        <img src={image1} class="rounded-circle image" height="200" width="200"/>
        <h6 className="bold">You Get</h6>
        <h5 className="color">{this.state.amount1} $</h5>
        </div>
          
        <div className="col-md-2">
          {content1}
        </div>
    
        <div className="col-md-3">
          {pic2}
          {slider2}
        </div>
        
        <div className="col-md-2">
          {content2}
        </div>
        
        <div className="col-md-2">
        </div>
        
        </div>
        </div>
    );
  }
}

export default Homepage;

