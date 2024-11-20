import React, { Fragment } from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { Fade } from 'react-awesome-reveal';

const Home = () => {
  const kimsImageUrl = ''; // KIMS hospital image URL

  return (
    <Fragment>
      <Box sx={{ padding: 2, backgroundColor: '#f4f6f9', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Grid container sx={{ maxWidth: '1200px', margin: 'auto', display: 'flex', alignItems: 'center' }}>
          {/* Text Section */}
          <Grid item xs={12} md={6} sx={{ marginRight: 4, flex: 1 }}>
            <Fade delay={500} triggerOnce>
              <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                Welcome to KIMS Hospital Bhubaneswar
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                KIMS Hospital Bhubaneswar is a premier healthcare facility offering a wide range of medical services with state-of-the-art technology. 
                Our team of experienced doctors, nurses, and staff are committed to providing the highest level of care in a compassionate and patient-centered environment. 
                We offer advanced treatment options for a variety of conditions, ensuring the best outcomes for our patients.
              </Typography>
            </Fade>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6} sx={{ flex: 1 }}>
            <Fade delay={500} triggerOnce>
              <Paper elevation={3}>
                <img src={kimsImageUrl} alt="KIMS Hospital" sx={{ width: '100%', borderRadius: '10px' }} />
              </Paper>
            </Fade>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Home;
