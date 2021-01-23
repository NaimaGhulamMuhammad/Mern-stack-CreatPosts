import { makeStyles } from "@material-ui/core/styles"

export default makeStyles((theme) => ({
    
    appBar: {
        backgroundColor: "black",
        width:"100%"
    },
    logo: {
        flexGrow: 1
    },
    barBtn: {
        color: "white",
        fontWeight:700,
        '&:hover': {
            backgroundColor: "white",
            color:"black"
        }
    }

}));
