export const DataReducer=(state,action)=>{

                     
                      if(action.type==="load"){
                       
                        return {
                            ...state,
                            products: action.payload,
                        }
                      }
                      else if(action.type==="sort"){
                           return {
                            ...state,
                               sortBy: action.sortBy,

                           }
                      }
                      else if(action.type==="addToCart"){
                          return{
                            ...state,
                               cart: [...state.cart,action.payload]
                          }

                      }
                      else if(action.type==="removeFromCart"){
                        const id=action.id;
                        const list=state.cart.filter(each=>each.id!==id);
                        return {
                          ...state,
                             cart: list,
                        }

                      }

    }
