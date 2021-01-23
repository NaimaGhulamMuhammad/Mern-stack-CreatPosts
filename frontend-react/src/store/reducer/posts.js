export default (state=[], action) => {
    switch(action.type) {
        case "Fetch_All":
            return action.payload;
        case "CREATE":
            return [...state, action.payload];                        
        default:
            return state;
    }
}