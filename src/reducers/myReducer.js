// JavaScript source code

import addTxt from '../actions/addTxt';
//import maxTxt from './actions/maxTxt';
const codeTxt='```\nfunction(){ const x=5;\nfor(i=0;i<x;i++)\n{ "my Name is Nasreen"}\n```';
const item='\n\nMy Fruits:\n* Apple\n* Orange\n* Pears';
const qout='\n> This is nice chlange\n';
const myB=	'\n\n\n**Finally do it!!**'
const img='\n![logo](https://goo.gl/Umyytc)';
const intSatate={
    input:'# This is my react\n\n## FreeProj\n[Google](https://www.google.com)\n\n\nBellow is `<div></div>` code:\n'+codeTxt+item+qout+img+myB,
   txtMax:false,
       HTMLMax:false
}


const myReducer=(state=intSatate, action)=>{
    switch(action.type){
        case 'ADD':
            return   { ...state,
                    input:action.data
    }
        case 'max-txt': 

        return {...state,  
               txtMax:!state.txtMax};
        case 'max-HTML':
            return { ...state, 
                HTMLMax:!state.HTMLMax};
        default:
            return state;
    }
}
export default myReducer;