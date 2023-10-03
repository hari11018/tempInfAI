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

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendData = async (data) => {
    try {
      const response = await fetch('http://localhost:3001/sendData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log('Server response:', result);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simple validation
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = true;
    }
    if (!formData.email.trim()) {
      errors.email = true;
    }
    if (!formData.phone.trim()) {
      errors.phone = true;
    }

    setFormErrors(errors);

    // Check if there are any validation errors
    if (Object.values(errors).some((error) => error)) {
      console.error('Form has errors. Cannot submit.');
      return;
    }

    // Continue with form submission logic
    console.log(formData);
      // Replace these values with your actual email settings
      var recipient = 'team@influenceai.in';
      var subject = 'Contacting InfluenceAI';
      var body = `
      name:${formData.name}
      email:${formData.email}
      phone:${formData.phone}
      company:${formData.company}
      launchData:${formData.launchDate}
      budget:${formData.budget}
      `
  
      // Create a mailto link with the recipient, subject, and body
      var mailtoLink = 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  
      // Open the user's default email client with the mailto link
      window.location.href = mailtoLink;
        // Clear form after submission (optional)
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      launchDate: '',
      budget: '',
    });
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
              error={formErrors.name}
              helperText={formErrors.name ? 'Name is required' : ''}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Email"
              name="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              error={formErrors.email}
              helperText={formErrors.email ? 'Email is required' : ''}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Phone Number"
              name="phone"
              fullWidth
              value={formData.phone}
              onChange={handleChange}
              error={formErrors.phone}
              helperText={formErrors.phone ? 'Phone is required' : ''}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Company Name (optional)"
              name="company"
              fullWidth
              value={formData.company}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                When do you want to launch the campaign (optional)
              </FormLabel>
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
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Tentative Budget (optional)</FormLabel>
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
              className="genericButton"
              
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
