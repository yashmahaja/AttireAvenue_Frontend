import { Grid, Typography, Button } from '@mui/material'
import React from 'react'

const 
Footer = () => {
  return (
    <div >
        <Grid className='bg-black text-white text-center mt-10'  container sx = {{bgcolor:"black",color:"white",py:3}}>

            <Grid item xd={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'> Company </Typography>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom> About </Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom> Blog </Button>
                </div>
               <div>
               <Button className='pb-5' variant='h6' gutterBottom> press </Button>
               </div>
               <div>
               <Button className='pb-5' variant='h6' gutterBottom> Jobs </Button>
               </div>
               <div>
               <Button className='pb-5' variant='h6' gutterBottom> Partners </Button>
               </div>
            </Grid>
            <Grid item xd={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'> Marketing </Typography>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom> Solutions </Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom> Commerce </Button>
                </div>
               <div>
               <Button className='pb-5' variant='h6' gutterBottom> Analytics </Button>
               </div>
               <div>
               <Button className='pb-5' variant='h6' gutterBottom> Support </Button>
               </div>
               <div>
               <Button className='pb-5' variant='h6' gutterBottom> Insights </Button>
               </div>
            </Grid>
            <Grid item xd={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'> Documentation </Typography>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom> Guides </Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom> API Status </Button>
                </div>
            </Grid>
            <Grid item xd={12} sm={6} md={3}>
                <Typography className='pb-5' variant='h6'> Legal </Typography>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom> Claim </Button>
                </div>
                <div>
                <Button className='pb-5' variant='h6' gutterBottom> Privacy </Button>
                </div>
               <div>
               <Button className='pb-5' variant='h6' gutterBottom> Terms </Button>
               </div>
            </Grid>
            <Grid className='pt-20' item xs= {12}>
                <Typography variant='body2' component="p" align='center'>
                    &copy; 2023 AttireAvenue. All rights reserved.
                </Typography>
                <Typography variant='body2' component="p" align='center'>
                    Trademark Yash Mahajan &copy; 
                </Typography>
            </Grid>
        </Grid>
      
    </div>
  )
}

export default Footer
