/* eslint-disable */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Grid, IconButton, Typography, Stack, useMediaQuery } from '@mui/material';

// third-party
import { Carousel } from 'react-responsive-carousel';

// assets
import { IconChevronRight, IconChevronLeft, IconLink } from '@tabler/icons';

import SliderLight1 from 'assets/images/landing/pre-apps/slider-light-1.png';
import SliderDark1 from 'assets/images/landing/pre-apps/slider-dark-1.png';
import SliderLight2 from 'assets/images/landing/pre-apps/slider-light-2.png';
import SliderDark2 from 'assets/images/landing/pre-apps/slider-dark-2.png';
import SliderLight3 from 'assets/images/landing/pre-apps/slider-light-3.png';
import SliderDark3 from 'assets/images/landing/pre-apps/slider-dark-3.png';
import SliderLight4 from 'assets/images/landing/pre-apps/slider-light-4.png';
import SliderDark4 from 'assets/images/landing/pre-apps/slider-dark-4.png';
import SliderLight5 from 'assets/images/landing/pre-apps/slider-light-5.png';
import SliderDark5 from 'assets/images/landing/pre-apps/slider-dark-5.png';
import SliderLight6 from 'assets/images/landing/pre-apps/slider-light-6.png';
import SliderDark6 from 'assets/images/landing/pre-apps/slider-dark-6.png';

import A from "./thumbnails/Bhavishya.jpg"
import B from "./thumbnails/Hyderabadi Palate.jpg"
import C from "./thumbnails/Lasya Manjunath.jpg"
import D from "./thumbnails/Madhupriya.jpg"
import E from "./thumbnails/Priyanka Jain.jpg"
import F from "./thumbnails/Sri Lalitha(Ugadi).jpg"
import G from "./thumbnails/Sri lalitha(Holi).jpg"
import H from "./thumbnails/Sri lalitha(Sri Rama navami).jpg"
import I from "./thumbnails/Suma.jpg"
import J from "./thumbnails/The Hungry Indians(Sankranthi).jpg"
import K from "./thumbnails/Thindam tirugudam(Sankranthi).jpg"
import L from "./thumbnails/Thindibotu.jpg"
import M from "./thumbnails/Virajita(Ugadi).jpg"
import N from "./thumbnails/Wirally(Ugadi).jpg"

// styles
const Images = styled('img')({
    width: '100%',
    height: 'auto',
    marginBottom: 32,
    backgroundSize: 'cover',
    objectFit: 'cover'
});

function SampleNextArrow({ onClickHandler }) {
    const theme = useTheme();

    return (
        <IconButton
            onClick={onClickHandler}
            sx={{
                position: 'absolute',
                zIndex: 2,
                top: 'calc(50% - 70px)',
                cursor: 'pointer',
                background: `${theme.palette.background.paper} !important`,
                width: { xs: '40px !important', xl: '65px !important' },
                height: { xs: '40px !important', xl: '65px !important' },
                boxShadow: '0px 24px 38px rgba(9, 15, 37, 0.07)',
                '&:after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    transform: 'scale(9)'
                },
                svg: {
                    height: { md: 20, lg: 40, xl: '40px' },
                    width: { md: 20, lg: 40, xl: '40px' }
                },
                right: { xs: '50px', md: '80px', lg: '120px', xl: '220px' }
            }}
        >
            <IconChevronRight fontSize={25} color={theme.palette.grey[900]} aria-label="click to slide change left side" />
        </IconButton>
    );
}

SampleNextArrow.propTypes = {
    onClickHandler: PropTypes.func
};

function SamplePrevArrow({ onClickHandler }) {
    const theme = useTheme();
    return (
        <IconButton
            onClick={onClickHandler}
            sx={{
                position: 'absolute',
                zIndex: 2,
                top: 'calc(50% - 70px)',
                cursor: 'pointer',
                background: `${theme.palette.background.paper} !important`,
                width: { xs: '40px !important', xl: '65px !important' },
                height: { xs: '40px !important', xl: '65px !important' },
                boxShadow: '0px 24px 38px rgba(9, 15, 37, 0.07)',
                '&:after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    transform: 'scale(9)'
                },
                svg: {
                    height: { md: 20, lg: 40, xl: '40px' },
                    width: { md: 20, lg: 40, xl: '40px' }
                },
                left: { xs: '50px', md: '80px', lg: '120px', xl: '220px' }
            }}
        >
            <IconChevronLeft fontSize={25} color={theme.palette.grey[900]} aria-label="click to slide change right side" />
        </IconButton>
    );
}

SamplePrevArrow.propTypes = {
    onClickHandler: PropTypes.func
};

const Items = ({ title, caption, image, link }) => {
    const theme = useTheme();
    return (
        <>
            <Images
                src={image}
                alt="dashboard"
                sx={{
                    width: { xs: '100%', xl: 743 },
                    objectFit: 'contain',
                    direction: 'initial'
                }}
            />
            <Stack spacing={1} sx={{ pt: 1 }}>
                <a
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                    component={Link}
                    href={link}
                    target="_blank"
                    sx={{ textDecoration: 'none' }}
                >
                    <Typography variant="h3" sx={{ fontWeight: 500 }}>
                        {title}
                    </Typography>
                    <IconButton size="small">
                        <IconLink size={18} color={theme.palette.text.primary} aria-label="page redirect to this theme page" />
                    </IconButton>
                </a>
                <Typography variant="subtitle2" color="text.primary" sx={{ fontSize: { xs: '1rem', xl: '1.125rem' } }}>
                    {caption}
                </Typography>
            </Stack>
        </>
    );
};

Items.propTypes = {
    title: PropTypes.string,
    caption: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string
};

const PreBuildDashBoard = () => {
    const theme = useTheme();
    const matchUpSM = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <Grid container spacing={7.5} justifyContent="center" sx={{ px: 1.25 }}>
                <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
                    <Grid container spacing={1.5}>
                        <Grid item xs={12}>
                            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>
                                Explore InfluenceAI Collaborations
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h4" sx={{ fontWeight: 400 }} align="center">
                                InfluenceAI has InfluencerData Tracking, Campaign and Brand managments
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        className="preBuildDashBoard-slider"
                        sx={{
                            direction: 'initial',
                            '.slider': { height: { xs: 'auto' }, '& .slide:not(.selected)': { transformOrigin: 'center !important' } }
                        }}
                    >
                        <Carousel
                            showArrows
                            showThumbs={false}
                            showIndicators={false}
                            centerMode={!matchUpSM}
                            centerSlidePercentage={30}
                            infiniteLoop
                            autoFocus
                            emulateTouch
                            swipeable
                            autoPlay
                            interval={2000}
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && <SamplePrevArrow onClickHandler={onClickHandler} hasPrev={hasPrev} label={label} />
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && <SampleNextArrow onClickHandler={onClickHandler} hasNext={hasNext} label={label} />
                            }
                        >
                            <Items
                                title=""
                                image={A}
                                link={"https://www.instagram.com/p/CnQ1sYmISQ6/"}
                            />
                             <Items
                                title=""
                                image={B}
                                link={"https://www.instagram.com/p/CnRtT51qZeV/"}
                            />
                             <Items
                                title=""
                                image={C}
                                link={"https://www.instagram.com/p/CxZtrm5RRTl/"}
                            />
                             <Items
                                title=""
                                image={D}
                                link={"https://www.instagram.com/p/Cr2nwUppOfh/"}
                            />
                             <Items
                                title=""
                                image={E}
                                link={"https://www.instagram.com/p/CnQ3gwIo5CD/"}
                            />
                             <Items
                                title=""
                                image={A}
                                link={"https://www.instagram.com/p/Cp4RBkmjng7/"}
                            />
                             <Items
                                title=""
                                image={F}
                                link={"https://www.instagram.com/p/CpPEspKD3CX/"}
                            />
                             <Items
                                title=""
                                image={G}
                                link={"https://www.instagram.com/p/CqWwhDvJnJ-/"}
                            />
                             <Items
                                title=""
                                image={H}
                                link={"https://www.instagram.com/p/Cmp_bdiB7Zv/"}
                            />
                             <Items
                                title=""
                                image={I}
                                link={"https://www.instagram.com/p/CnPLm8hhSOz/"}
                            />
                             <Items
                                title=""
                                image={J}
                                link={"https://www.instagram.com/p/CnRsE8ZKDSo/"}
                            />
                             <Items
                                title=""
                                image={K}
                                link={"https://www.instagram.com/p/CnPUdqkB4Un/"}
                            />
                             <Items
                                title=""
                                image={L}
                                link={"https://www.instagram.com/p/Cp0GN4rA0dT/"}
                            />
                            <Items
                                title=""
                                image={M}
                                link={"https://www.instagram.com/p/Cp5G_Y4p_bV/"}
                            />
                        </Carousel>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default PreBuildDashBoard;
