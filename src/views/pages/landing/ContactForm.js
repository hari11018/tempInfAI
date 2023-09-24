/* eslint-disable */
import React, { useState } from 'react';
import {
  Container,
  TextField,
  Grid,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Button,
} from '@mui/material';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    launchDate: '',
    budget: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to a server
    console.log(formData);
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              name="name"
              fullWidth
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Email"
              name="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Phone Number"
              name="phone"
              fullWidth
              value={formData.phone}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Company Name"
              name="company"
              fullWidth
              value={formData.company}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} >
            <FormControl component="fieldset">
              <FormLabel component="legend">When do you want to launch the campaign</FormLabel>
              <RadioGroup
                name="launchDate"
                value={formData.launchDate}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="option1"
                  control={<Radio />}
                  label="This week"
                />
                <FormControlLabel
                  value="option2"
                  control={<Radio />}
                  label="This month"
                />
                <FormControlLabel
                  value="option3"
                  control={<Radio />}
                  label="Not yet decided"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} >
            <FormControl component="fieldset">
              <FormLabel component="legend">Tentative Budget</FormLabel>
              <RadioGroup
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="budget1"
                  control={<Radio />}
                  label="under 1 Lakh"
                />
                <FormControlLabel
                  value="budget2"
                  control={<Radio />}
                  label="1 Lakh - 5 Lakhs"
                />
                <FormControlLabel
                  value="budget3"
                  control={<Radio />}
                  label="5 Lakh - 10 Lakhs"
                />
                 <FormControlLabel
                  value="budget4"
                  control={<Radio />}
                  label="Above 10 Lakhs"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className='genericButton'
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ContactForm;
