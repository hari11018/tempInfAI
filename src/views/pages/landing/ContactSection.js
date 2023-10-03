// material-ui
/* eslint-disable */
import { useTheme, styled } from '@mui/material/styles';
import { Box, Container, Grid, IconButton, Link, Stack, Typography, Button } from '@mui/material'; // Divider

// project import
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import { IconCircleCheck } from '@tabler/icons';
import LayersTwoToneIcon from '@mui/icons-material/LayersTwoTone';

import LayerLeft from 'assets/images/landing/customization-left.png';
import LayerRight from 'assets/images/landing/customization-right.png';

// assets
// import Dribble from 'assets/images/landing/footer-dribble.png';
// import Freepik from 'assets/images/landing/footer-freepik.png';
// import Awards from 'assets/images/landing/footer-awards.png';

import PublicIcon from '@mui/icons-material/Public';
import TwitterIcon from '@mui/icons-material/Twitter';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import './ContactSection.css';
import ContactForm from './ContactForm';

// Link - custom style
const FooterLink = styled(Link)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : theme.palette.text.hint,
    '&:hover': {
        color: theme.palette.primary.main
    },
    '&:active': {
        color: theme.palette.primary.main
    }
}));

// =============================|| LANDING - FOOTER SECTION ||============================= //

const ContactSection = () => {
    const theme = useTheme();
    const listSX = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.7rem',
        padding: '10px 0',
        fontSize: '1rem',
        color: theme.palette.grey[900],
        svg: { color: theme.palette.secondary.main }
    };
    const textColor = theme.palette.mode === 'dark' ? 'text.secondary' : 'text.hint';
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState('');

    return (
        <>
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                id="contactUS"
            >
                <Grid container justifyContent="space-between" alignItems="center" spacing={{ xs: 1.5, sm: 2.5, md: 3, lg: 5 }}>
                    <Grid item xs={12}>
                        <Grid container spacing={2.5} direction={{ md: 'row' }}>
                            <Grid item xs={12} md={6}>
                                <Grid container spacing={2.5}>
                                    <Grid item xs={12} id="forInfluencers">
                                        <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' }, mb: 2 }}>
                                            Let’s Influence Together!
                                        </Typography>
                                        <Typography
                                            variant="subtitle2"
                                            color="text.primary"
                                            sx={{
                                                fontSize: '1rem',
                                                zIndex: '99',
                                                width: { xs: '100%', md: 'calc(100% - 20%)' }
                                            }}
                                        >
                                            Our efficient and effective influencer marketing campaigns help as a catalyst in your digital
                                            marketing. We are able to considerably reduce user acquisition costs and improve user retention
                                            through our content.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} md={6} sx={{ img: { width: '100%' } }}>
                            <div style ={{backgroundColor:"mediumpurple",padding:"1em",borderRadius:"30px",margin:"1em"}}>
                                <Stack sx={{ width: '70%', mx: 'auto' }}>
                                <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' },mb: 2,textAlign:"center"}}>
                                            Contact Form
                                        </Typography>
                                   <ContactForm />
                                </Stack>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default ContactSection;
