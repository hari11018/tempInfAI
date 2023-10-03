// material-ui
/* eslint-disable */
import { useTheme } from '@mui/material/styles';
import { Button, CardMedia, Container, Grid, Link, Stack, Typography } from '@mui/material';

// project import
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import { IconCircleCheck } from '@tabler/icons';
import LayersTwoToneIcon from '@mui/icons-material/LayersTwoTone';

import LayerLeft from './images/brand.jpg';
import LayerRight from './images/influencer.avif';

// ==============================|| LANDING - CUSTOMIZE ||============================== //

const CustomizeSection = () => {
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

    const listSY = {
        ...listSX,
        marginLeft: '2em'
    };

    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Grid container justifyContent="space-between" alignItems="center" spacing={{ xs: 1.5, sm: 2.5, md: 3, lg: 5 }}>
                <Grid item xs={12} md={6} sx={{ img: { width: '100%',borderRadius: "100px" } }}>
                    <Stack sx={{ width: '75%', mb: 5, mx: 'auto',borderRadius:"100px" }}>
                        <CardMedia component="img" image={LayerLeft} alt="Layer" />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6} id="forBrands">
                    <Grid container spacing={2.5}>
                        <Grid item xs={12}>
                            <Typography variant="h5" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' }, mb: 2 }}>
                                FOR BRANDS
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                color="text.primary"
                                sx={{
                                    fontSize: '1rem',
                                    zIndex: '99',
                                    width: { xs: '100%', sm: '100%', md: 'calc(100% - 20%)' }
                                }}
                            >
                                Discover Influencers that fit for brand.
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={listSX}>
                                <IconCircleCheck size={20} />
                                Find Influencers whose audience matches your niche type.
                            </Typography>
                            <Typography sx={listSY}>
                                {/* <IconCircleCheck size={20} /> */}
                                Our data shows that your brand’s existing influential customers are 7 times more likely to accept a
                                collaboration.
                            </Typography>
                            <Typography sx={listSX}>
                                <IconCircleCheck size={20} />
                                Influencer Analysis based on 20+ parameters.
                            </Typography>
                            <Typography sx={listSY}>
                                {/* <IconCircleCheck size={20} /> */}
                                Find truly complimentary creators based off of data, content, and performance to fit your brands.
                            </Typography>
                            <Typography sx={listSX}>
                                <IconCircleCheck size={20} />
                                Technology driven tracking which is real time.
                            </Typography>
                            <Typography sx={listSY}>
                                {/* <IconCircleCheck size={20} /> */}
                                Make smarter decisions with InfluenceAI data-rich influencer profiles. Measure, optimize and iterate your
                                campaigns to reach double digit ROI.
                            </Typography>
                            <div style={{display:"flex",gap:"0.3em"}}>
                            <Stack direction="row">
                                <AnimateButton>
                                    <Button
                                        startIcon={<LayersTwoToneIcon />}
                                        sx={{ boxShadow: 'none', my: 4 }}
                                        variant="contained"
                                        // component={''}
                                        href="#forInfluencers"
                                        target="_self"
                                    >
                                        Influencers
                                    </Button>
                                </AnimateButton>
                            </Stack>
                            <Stack direction="row">
                                <AnimateButton>
                                    <Button
                                        startIcon={<LayersTwoToneIcon />}
                                        sx={{ boxShadow: 'none', my: 4 }}
                                        variant="contained"
                                        // component={''}
                                        href="#contactUS"
                                        target="_self"
                                    >
                                        Contact Us
                                    </Button>
                                </AnimateButton>
                            </Stack>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2.5} direction={{ xs: 'column-reverse', md: 'row' }}>
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={2.5}>
                                <Grid item xs={12} id="forInfluencers">
                                    <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' }, mb: 2 }}>
                                        FOR INFLUENCERS
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
                                        Save time on Brand management.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography sx={listSX}>
                                        <IconCircleCheck size={20} />
                                        Enhance the potential of Brand collaborations.
                                    </Typography>
                                    <Typography sx={listSY}>
                                        {/* <IconCircleCheck size={20} /> */}
                                        Manage your influencer campaigns in a snap with a complete, automated and customized workflow tool.
                                        See all creators hired, drafts submitted, sales generated, and payments issued in one place.
                                    </Typography>
                                    <Typography sx={listSX}>
                                        <IconCircleCheck size={20} />
                                        InfluenceAI offers smooth workflow with Brands.
                                    </Typography>
                                    <Typography sx={listSY}>
                                        {/* <IconCircleCheck size={20} /> */}
                                        Hire the best influencers for fruitful and long-term collaborations with your brand. InfluenceAI
                                        provides influencer contract templates and influencer outreach email templates to make your life
                                        easier and streamline the hiring process..
                                    </Typography>
                                    <Typography sx={listSX}>
                                        <IconCircleCheck size={20} />
                                        More Collaborations with less time.
                                    </Typography>
                                    <Typography sx={listSY}>
                                        {/* <IconCircleCheck size={20} /> */}
                                        Simplify promo code generation for affiliate campaigns. Create unique, custom promotion codes from
                                        within InfluenceAI.
                                    </Typography>
                                    <div style={{display:"flex",gap:"0.3em"}}>
                                    <Stack direction="row">
                                        <AnimateButton>
                                            <Button
                                                startIcon={<LayersTwoToneIcon />}
                                                sx={{ boxShadow: 'none', my: 4 }}
                                                variant="contained"
                                                href="#forBrands"
                                                // href="https://www.figma.com/file/2u2TmauA6lanVMYiywzS1o/berry-figma-v3.0?node-id=0%3A1"
                                                target="_self"
                                            >
                                                Brands
                                            </Button>
                                        </AnimateButton>
                                    </Stack>
                                    <Stack direction="row">
                                <AnimateButton>
                                    <Button
                                        startIcon={<LayersTwoToneIcon />}
                                        sx={{ boxShadow: 'none', my: 4 }}
                                        variant="contained"
                                        // component={''}
                                        href="#contactUS"
                                        target="_self"
                                    >
                                        Contact Us
                                    </Button>
                                </AnimateButton>
                            </Stack>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ img: { width: '100%',borderRadius:"100px" } }}>
                            <Stack sx={{ width: '70%', mx: 'auto' }}>
                                <CardMedia component="img" image={LayerRight} alt="Layer" />
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default CustomizeSection;
