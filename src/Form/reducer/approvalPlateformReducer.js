export default function approvalPlateformReducer(state,action){

	let newState={};
    switch (action.type){
        case "QUERYCONDITION_DATA":
            newState=$.extend(true,{},state);
            newState.queryConditionData=action.data;
            return newState;

        default:return state
    }
	

	
	
}
