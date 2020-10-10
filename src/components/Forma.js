import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const Forma = () => {
    return (
        <Grid id="Form" container spacing={3}>
            <TextField label="Nombre" />
            <Grid item xs={12} sm={6} md={3}>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
            <TextField label="Edad" />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
            <TextField label="Ocupación" />
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
            <TextField label="Mensaje" />
            </Grid>

        </Grid>
    )
}
export default Forma