import { Grid2, TextField } from '@mui/material'
import React from 'react'


const StudentForm = ({ formId, initialValue }) => {
      const [values, setValues] = React.useState({
            name: initialValue.name || '',
            mobile: initialValue.mobile || ''
      })


      const handleChange = (event) => {
            const { name, value } = event.target;
            setValues(prevValues => ({ ...prevValues, [name]: value }))
      }

      const handleSubmit = (e) => {
            e.preventDefault();
            console.log(values)
      }

      return (
            <form id={formId} onSubmit={handleSubmit}>
                  <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 12 }}>
                              <TextField fullWidth variant='outlined' label="Name" size='small' value={values.name || ""} name='name' onChange={(e) => handleChange(e)} />
                        </Grid2>
                        <Grid2 size={{ xs: 12 }}>
                              <TextField fullWidth variant='outlined' label="mobile" size='small' value={values.mobile || ""} name='mobile' onChange={(e) => handleChange(e)} />
                        </Grid2>
                  </Grid2>
            </form>
      )
}

export default StudentForm
