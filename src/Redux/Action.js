const ADD_COMMENTS = 'ADD_COMMENTS';
const TABLE_DATA ="TABLE_DATA"

const company_data = (action_data) => {
    console.log(action_data)
    return{
        type: ADD_COMMENTS,
          saket:action_data 
        }
}

 const table_data = (e) => {
     console.log(e)
     return {
        type:TABLE_DATA,
        table:e
     }
 }
 
export {company_data, table_data}