const AuthReducer=(state,action)=>{
          if(action.type==="login"){
              return {
                loggedin: true,
                userid: action.payload,
              }
          }
    }


export default  AuthReducer;