import { Button, Container, Grid2, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

const Form = ({ editId = null, handleChange }) => {
      return (
            <Container maxWidth='sm' component={Paper} elevation={3} sx={{ p: 3, }}>
                  {/* <Typography variant='h5' textAlign='center' gutterBottom>Add Form</Typography> */}
                  <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 12, }}>
                              <TextField type='text' name="todoName" value={editId.todoName || null} fullWidth size='small' color='primary' onChange={(e) => handleChange(e)} />
                        </Grid2>
                        <Grid2 size={{ xs: 12 }}>
                              <TextField type='date' fullWidth size='small' name='date' value={editId.date || null} onChange={(e) => handleChange(e)} />
                        </Grid2>
                  </Grid2>
            </Container>
      )
}

export default Form