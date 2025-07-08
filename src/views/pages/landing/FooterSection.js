// material-ui
/* eslint-disable */
import { useTheme, styled } from '@mui/material/styles';
import { Box, Container, Grid, IconButton, Link, Stack, Typography } from '@mui/material'; // Divider

// project import
import Chip from 'ui-component/extended/Chip';
import { frameworks } from './FrameworkSection';

// assets
// import Dribble from 'assets/images/landing/footer-dribble.png';
// import Freepik from 'assets/images/landing/footer-freepik.png';
// import Awards from 'assets/images/landing/footer-awards.png';

import PublicIcon from '@mui/icons-material/Public';
import TwitterIcon from '@mui/icons-material/Twitter';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

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

const FooterSection = () => {
    const theme = useTheme();
    const textColor = theme.palette.mode === 'dark' ? 'text.secondary' : 'text.hint';

    // const dividerSX = {
    //     borderImageSlice: 1,
    //     borderImageSource: `linear-gradient(90deg, rgba(255, 255, 255, 0) -0.01%, rgba(255, 255, 255, 0.56) 51.97%, rgba(255, 255, 255, 0.03) 99.99%)`,
    //     opacity: 0.5
    // };

    return (
        <>
            <Container sx={{ mb: 15 }}>
                <Grid container>
                    {/* <Grid item xs={12}>
                        <Stack spacing={4.25}>
                            <Divider sx={dividerSX} />
                            <Stack
                                direction="row"
                                justifyContent="center"
                                spacing={{ xs: 1.5, sm: 6, md: 10, lg: 12 }}
                                sx={{ overflow: 'hidden' }}
                            >
                                <img src={Dribble} alt="dribble" />
                                <img src={Freepik} alt="freepik" />
                                <img src={Awards} alt="awards" />
                            </Stack>
                            <Divider sx={dividerSX} />
                        </Stack>
                    </Grid> */}
                    <Grid item>
                        <Grid container spacing={8}>
                            <Grid item >
                                <Stack >
                                    <Typography variant="h4" color={textColor} sx={{ fontWeight: 500 }}>
                                        About InfluenceAI
                                    </Typography>
                                    <Typography variant="body2" color={textColor}>
                                        InfluencerAI is a data driven influencer networking platform focussed on high quality campaigns
                                        suitable for growing business through social media networking platforms Through InfuenceAI we are
                                        creating a win-win-win situation for brands ,influencers & customers . Web Stories
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Grid container spacing={{ xs: 5, md: 2 }}>
                                    {/* <Grid item xs={6} sm={3}>
                                        <Stack spacing={{ xs: 3, md: 5 }}>
                                            <Typography variant="h4" color={textColor} sx={{ fontWeight: 500 }}>
                                                Help
                                            </Typography>
                                            <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                                                <FooterLink href="" target="_blank" underline="none">
                                                    Blog
                                                </FooterLink>
                                                <FooterLink href="" target="_blank" underline="none">
                                                    Documentation
                                                </FooterLink>
                                                <FooterLink href="" target="_blank" underline="none">
                                                    Change Log
                                                </FooterLink>
                                                <FooterLink href="" target="_blank" underline="none">
                                                    Support
                                                </FooterLink>
                                            </Stack>
                                        </Stack>
                                    </Grid> */}
                                    {/* <Grid item xs={6} sm={3}>
                                        <Stack spacing={{ xs: 3, md: 5 }}>
                                            <Typography variant="h4" color={textColor} sx={{ fontWeight: 500 }}>
                                                INFLUENCER MARKETING SOLUTIONS
                                            </Typography>
                                            <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                                                <FooterLink href="" target="_blank" underline="none">
                                                    Youtube Marketing
                                                </FooterLink>
                                                <FooterLink href="" target="_blank" underline="none">
                                                    Instagram marketing
                                                </FooterLink>
                                                <FooterLink href="" target="_blank" underline="none">
                                                    Does Influencer Marketing Really pay ?
                                                </FooterLink>
                                                <FooterLink href="" target="_blank" underline="none">
                                                    Celebrity Marketing
                                                </FooterLink>
                                                <FooterLink href="" target="_blank" underline="none">
                                                    Meme Marketing
                                                </FooterLink>
                                                <FooterLink href="" target="_blank" underline="none">
                                                    Micro Influencer
                                                </FooterLink>
                                            </Stack>
                                        </Stack>
                                    </Grid> */}
                                    {/* <Grid item xs={6} sm={3}>
                                        <Stack spacing={{ xs: 3, md: 5 }}>
                                            <Typography variant="h4" color={textColor} sx={{ fontWeight: 500 }}>
                                            RESOURCES
                                            </Typography>
                                            <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                                                {frameworks.map((item, index) => (
                                                    <FooterLink href={item.link} target="_blank" underline="none" key={index}>
                                                        {item.title}
                                                        {item.isUpcoming && (
                                                            <Chip variant="outlined" size="small" label="Upcoming" sx={{ ml: 0.5 }} />
                                                        )}
                                                    </FooterLink>
                                                ))}
                                            </Stack>
                                        </Stack>
                                    </Grid> */}
                                    {/* <Grid item xs={6} sm={3}>
                                        <Stack spacing={{ xs: 3, md: 5 }}>
                                            <Typography variant="h4" color={textColor} sx={{ fontWeight: 500 }}>
                                                RESOURCES
                                            </Typography>
                                            <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                                                <FooterLink href="" target="_blank" underline="none">
                                                    Top 10 Global Instagram Influencers
                                                </FooterLink>
                                                <FooterLink href="" target="_blank" underline="none">
                                                    why should Fintech Brand Invests in Influencer Marketing ?
                                                </FooterLink>
                                                <FooterLink href="" target="_blank" underline="none">
                                                    Youtube SEO - Things you should know
                                                </FooterLink>
                                                <FooterLink href="" target="_blank" underline="none">
                                                    Does Influencer Marketing Really pay ?
                                                </FooterLink>
                                            </Stack>
                                        </Stack>
                                    </Grid> */}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
<Box sx={{ bgcolor: 'dark.dark', py: { xs: 3, sm: 1.5 } }}>
  <Container>
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      alignItems="center"
      justifyContent="space-between"
      spacing={{ xs: 1.5, sm: 1, md: 3 }}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography color="text.secondary">
          © InfluenceAI is managed by{' '}
          <Link href="" target="_blank" underline="hover">
            Citta-Marketing-Agency
          </Link>
        </Typography>
        <Link
          href="https://docs.google.com/document/d/14xatNfA1shOnMiP45EZg02vezqhQbSb3v4sJTmY7zCc/edit?tab=t.0#heading=h.9owyqccpmkk"
          target="_blank"
          underline="hover"
          color="text.secondary"
        >
          Terms & Conditions
        </Link>
        <Link
          href="https://docs.google.com/document/d/1P-ivc6htNROzjYMSSKyCFpBxG80VpIdxHdUqzwerDN8/edit?tab=t.0#heading=h.l4acmuqbn4yq"
          target="_blank"
          underline="hover"
          color="text.secondary"
        >
          Privacy Policy
        </Link>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={{ xs: 3, sm: 1.5, md: 2 }}>
        <IconButton size="small" component={Link} href="" target="_blank" aria-label="blog">
          <PublicIcon sx={{ color: 'text.secondary', '&:hover': { color: 'error.main' } }} />
        </IconButton>
        <IconButton size="small" component={Link} href="" target="_blank" aria-label="twitter">
          <TwitterIcon sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }} />
        </IconButton>
        <IconButton size="small" component={Link} href="" target="_blank" aria-label="dribble">
          <SportsBasketballIcon sx={{ color: 'text.secondary', '&:hover': { color: 'warning.main' } }} />
        </IconButton>
      </Stack>
    </Stack>
  </Container>
</Box>

        </>
    );
};

export default FooterSection;
