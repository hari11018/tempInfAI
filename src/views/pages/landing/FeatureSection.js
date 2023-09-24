import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Typography, Stack, CardMedia } from '@mui/material';

// project imports
import FadeInWhenVisible from './Animation';
import SubCard from 'ui-component/cards/SubCard';
import Avatar from 'ui-component/extended/Avatar';

// assets
import Offer1 from 'assets/images/landing/offer/offer-1.png';
import Offer2 from 'assets/images/landing/offer/offer-2.png';
import Offer3 from 'assets/images/landing/offer/offer-3.png';
import Offer4 from 'assets/images/landing/offer/offer-4.png';
import Offer5 from 'assets/images/landing/offer/offer-5.png';
import Offer6 from 'assets/images/landing/offer/offer-6.png';

const OfferCard = ({ title, caption, image }) => {
    const theme = useTheme();
    const AvaterSx = { background: 'transparent', color: theme.palette.secondary.main, width: 56, height: 56 };
    return (
        <FadeInWhenVisible>
            <SubCard
                sx={{
                    bgcolor: theme.palette.mode === 'dark' ? 'dark.800' : 'grey.100',
                    borderColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.divider,
                    '&:hover': { boxShadow: 'none' },
                    height: '100%'
                }}
            >
                <Stack spacing={4}>
                    <Avatar variant="rounded" sx={AvaterSx}>
                        <CardMedia component="img" src={image} alt="Beautiful User Interface" />
                    </Avatar>
                    <Stack spacing={2}>
                        <Typography variant="h3" sx={{ fontWeight: 500 }}>
                            {title}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: '1rem' }}>
                            {caption}
                        </Typography>
                    </Stack>
                </Stack>
            </SubCard>
        </FadeInWhenVisible>
    );
};

OfferCard.propTypes = {
    title: PropTypes.string,
    caption: PropTypes.string,
    image: PropTypes.string
};
// =============================|| LANDING - FEATURE PAGE ||============================= //

const ResourceSection = () => (
    <Container>
        <Grid container spacing={7.5} justifyContent="center">
            <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
                <Grid container spacing={1.5}>
                    <Grid item xs={12}>
                        <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' } }}>
                            What does InfluenceAI offer?
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2" sx={{ fontSize: '1rem' }}>
                            Influencer Selection, Campaign Strategy, Tracking & Results
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={5} sx={{ '&> .MuiGrid-root > div': { height: '100%' } }}>
                    <Grid item md={4} sm={6}>
                        <OfferCard
                            title="Influencer Discovery and Selection"
                            caption="We have a robust influencer database powered by AI algorithms that enable us to identify the perfect influencers for your brand. Whether you're looking for macro-influencers, micro-influencers, or nano-influencers, we've got you covered."
                            image={Offer1}
                        />
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <OfferCard
                            title="(Influencer) Campaign Strategy"
                            caption="Crafting a successful influencer marketing campaign is an art. Our team of experts will work closely with you to create a customized strategy that aligns with your brand's goals and target audience."
                            image={Offer2}
                        />
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <OfferCard
                            title="Content Creation and Management"
                            caption="We understand that compelling content is at the heart of influencer marketing. Our content creators and managers collaborate with influencers to ensure your brand message is conveyed effectively and authentically."
                            image={Offer3}
                        />
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <OfferCard
                            title="Influencer Outreach and Engagement"
                            caption="Building strong relationships with influencers is key to long-term success. We manage all aspects of influencer communication, negotiations, and partnerships on your behalf"
                            image={Offer4}
                        />
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <OfferCard
                            title="Performance Analytics and Reporting"
                            caption="Measuring the impact of your influencer campaigns is essential. Our analytics team provides detailed insights into campaign performance, helping you understand ROI and areas for improvement"
                            image={Offer5}
                        />
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <OfferCard
                            title="AI-Powered Insights"
                            caption="Leverage the latest AI technology to gain valuable insights into influencer trends, audience behavior, and competitive analysis"
                            image={Offer6}
                        />
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <OfferCard
                            title="Campaign Optimization"
                            caption="We continuously monitor and optimize your campaigns to ensure they are delivering the best possible results"
                            image={Offer6}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Container>
);

export default ResourceSection;
