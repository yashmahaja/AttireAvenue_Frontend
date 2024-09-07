import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Box, Button, Grid, TextField } from '@mui/material'

const DeliveryAdd = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    const data = new FormData(e.currentTarget);

    const address = {
        firstName:data.get("firstName"),
        lastName:data.get("lastName"),
        streetAddress:data.get("address"),
        city:data.get("city"),
        state:data.get("state"),
        zipcode:data.get("zip"),
        mobile:data.get("mobile")
    }
    console.log(address)
    }

    return (
        <div>
            <Grid container spacing={4}>
                <Grid xs={12} lg={5} className='border rounded-md shadow-md h-[30.5rem] overflow-y-scroll'>
                    <div className='p-5 py-7 border-b cursor-pointer'>
                        <AddressCard />
                        <Button sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }} size='large' variant='contained'>Deliver Here</Button>
                    </div>
                </Grid>
                <Grid item xs={12} lg={7}>
                    <Box className="border rounded-s-md shadow-md p-5">

                        <form onSubmit={(e) => handleSubmit(e)}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>

                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="FirstName"
                                        fullWidth
                                        autoComplete='given-name' />


                                </Grid>
                                <Grid item xs={12} sm={6}>

                                    <TextField
                                        required
                                        id="lastName"
                                        name="lastName"
                                        label="LastName"
                                        fullWidth
                                        autoComplete='given-name' />
                                </Grid>
                                <Grid item xs={12}>

                                    <TextField
                                        required
                                        id="Address"
                                        name="address"
                                        label="Address"
                                        fullWidth
                                        autoComplete='given-address'
                                        multiline
                                        rows={4} />
                                </Grid>
                                <Grid item xs={12} sm={6}>

                                    <TextField
                                        required
                                        id="city"
                                        name="city"
                                        label="City"
                                        fullWidth
                                        autoComplete='given-city' />


                                </Grid>
                                <Grid item xs={12} sm={6}>

                                    <TextField
                                        required
                                        id="state"
                                        name="state"
                                        label="State"
                                        fullWidth
                                        autoComplete='given-state' />
                                </Grid>
                                <Grid item xs={12} sm={6}>

                                    <TextField
                                        required
                                        id="zip"
                                        name="zip"
                                        label="ZipCode"
                                        fullWidth
                                        autoComplete='given-zip' />
                                </Grid>



                       
                            <Grid item xs={12} sm={6}>

                                <TextField
                                    required
                                    id="mobile"
                                    name="mobile"
                                    label="Phone Number"
                                    fullWidth
                                    autoComplete='given-mobile' />
                            </Grid>
                            
                            <Grid item xs={12} sm={6}>
                            <Button sx={{ py:1.5, mt: 1, bgcolor: "RGB(145 85 253)" }} size='large' variant='contained' type='submit'>Submit</Button>
                            </Grid>
                           

                        </Grid>


                    </form>
                </Box>
            </Grid>
        </Grid>
        </div >
    )
}

export default DeliveryAdd
