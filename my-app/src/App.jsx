import { useReducer } from "react";
const reducer=(state,action)=>{
  switch (action.type){
    case '+':
      return{conut:state.conut+1};
      case '-':
        return{conut:state.count-1};
        case 'reset':
          return{count:0};
          default:
            return state;
  }


};
function Count(){
count[state,dispatch]=useReducer(reducer,{count:0});
return(
<div style={{textAlign:'center',marginTop:'50px'}}>
  <h2>useReducer to Count</h2>
  <p>Count : {state.conut}</p>
  <button onClick={()=>dispatch({
    type:'+'
  })}>'++'</button>
   <button onClick={()=>dispatch({
    type:'-'
  })}>'--'</button>
   <button onClick={()=>dispatch({
    type:'reset'
  })}>Reset</button>
</div>

);
}
export default Count;
