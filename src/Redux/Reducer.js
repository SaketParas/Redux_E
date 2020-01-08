const ADD_COMMENTS = "ADD_COMMENTS"
const TABLE_DATA ="TABLE_DATA"

const initiState = {
    stored_data : [],
    table:[]
}
const stored_data = (state=initiState , action) => {
    
    switch(action.type){

        case ADD_COMMENTS :
            console.log(state,action)
            return{
                ...state,
                stored_data: [...state.stored_data, action.saket]
            }

            // *******************************
            
         case TABLE_DATA: 
             return {
                 ...state,
                 table: [...state.table, action.table]
             }   
            //  ************

            default:
            return state
    }
}
export default stored_data 