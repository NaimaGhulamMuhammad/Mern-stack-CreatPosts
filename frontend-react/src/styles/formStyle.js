import { makeStyles } from "@material-ui/core/styles"


export default makeStyles((theme) => ({
    color:{
        color:"white"
    },
    bgcolor: {
        backgroundColor:"black"
    },
    size:{
        width:"45%",
        position:"absolute !important",
        left:"300px !important",
        [theme.breakpoints.down('sm')]: {
            width: 400,
            left: "20% !important"
        }
    },
    hover:{
        '&:hover':{
            color: "black",
            border: "2px solid black",
            fontWeight: "700"
        }
    }
}))

