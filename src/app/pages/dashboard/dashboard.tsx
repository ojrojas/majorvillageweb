import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import ModalComponent from "../../components/modal/modal.component";

const DashboardPage : React.FC = () => {
    const [open, setOpen] = React.useState(false);
const child = 'lorenlorenlorenlorenlorenlorenloren lorenlorenlorenlorenlore nlorenlorenlorenlor enlorenlorenlorenlorenloren lorenlorenlore nlorenlorenlo renlorenlorenlorenlorenlorenlorenlo renlorenlorenlorenlorenlorenlorenl orenlorenlorenlorenlorenlorenlo renlorenlorenlorenlorenlorenlorenl orenlorenlorenlorenlorenlorenlorenloren lorenlorenlorenlorenlorenlorenlor enlorenlorenlorenlorenlorenlorenlorenlo renlorenlorenlorenlorenlorenlorenloren lorenlorenlorenlorenlorenlorenlorenlor enlorenlorenlorenlorenlorenlorenlorenlore nlorenlorenlorenlorenlorenlorenlor enlorenlorenlorenlorenlorenlorenlorenl orenlorenlorenlorenlorenlorenlorenlorenlorenlor enlorenlorenlorenlorenlorenlorenlorenlorenl orenlorenlorenlore nlorenlorenlorenlorenlor enlorenlorenlorenlorenlorenlorenlore nlorenlorenlorenl orenlorenlorenlorenlorenl orenlorenlorenlorenlor enlorenlorenlorenloren lorenlorenlorenlorenlorenloren lorenlorenlorenlorenlorenlor enlorenlorenlorenlorenlor enlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenlorenloren'
    return (
        <React.Fragment>
            <Grid container sx={{padding:1}} gridRow={1}>
                <Grid item xs={4} md={4} lg={4} xl={4}>
                    <Typography variant={'h6'} component='h6'>
                        Dashboard
                    </Typography>
                    <Button onClick={()=> setOpen(true)}>open modal</Button>
                    <ModalComponent open={open} title='Modal' children={<p>{child}</p>} onClose={()=> setOpen(false)} />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default DashboardPage;