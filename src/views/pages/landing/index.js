// material-ui
/* eslint-disable */
import { useTheme, styled } from '@mui/material/styles';

// project imports
import Customization from 'layout/Customization';
import AppBar from 'ui-component/extended/AppBar';
import HeaderSection from './HeaderSection';
import CardSection from './CardSection';
import FeatureSection from './FeatureSection';
import PeopleSection from './PeopleSection';
import FrameworkSection from './FrameworkSection';
import FooterSection from './FooterSection';
import CustomizeSection from './CustomizeSection';
import PreBuildDashBoard from './PreBuildDashBoard';
import StartupProjectSection from './StartupProjectSection';
import ResourceSection from './ResourceSection';
import ContactSection from './ContactSection';
import IncludeSection from './IncludeSection';
import RtlInfoSection from './RtlInfoSection';

// custom stlye
const HeaderWrapper = styled('div')(({ theme }) => ({
    overflowX: 'hidden',
    overflowY: 'clip',
    background:
        theme.palette.mode === 'dark'
            ? theme.palette.background.default
            : `linear-gradient(360deg, ${theme.palette.grey[100]} 1.09%, ${theme.palette.background.paper} 100%)`,
    [theme.breakpoints.down('md')]: {}
}));

const SectionWrapper = styled('div')({
    paddingTop: 100,
    paddingBottom: 100
});

// =============================|| LANDING MAIN ||============================= //

const Landing = () => {
    const theme = useTheme();

    return (
        <>
            {/* 1. header and hero section */}
            <HeaderWrapper id="home">
                <AppBar />
                <div id="findInfluencers">
                    <HeaderSection />
                </div>
            </HeaderWrapper>

            {/* 2. card section */}
            <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default' }}>
                <CardSection />
            </SectionWrapper>

            {/* 9. framework section */}
            <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default' }}>
                <FrameworkSection />
            </SectionWrapper>

            {/* 4. Apps */}
            <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'grey.100' }}>
                <PreBuildDashBoard />
            </SectionWrapper>

            {/* 4. developer experience section */}
            <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'grey.100' }}>
                <CustomizeSection />
            </SectionWrapper>

                        {/* 6. startup section */}
                        {/* <SectionWrapper sx={{ py: 0 }}>
                <StartupProjectSection />
            </SectionWrapper> */}

            {/* 3. about section */}
            <div id="influenceAI">
                <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default' }}>
                    <FeatureSection />
                </SectionWrapper>
            </div>

            {/* 3. Resource section */}
            {/* <div id="infAIResources">
                <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default' }}>
                    <ResourceSection />
                </SectionWrapper>
            </div> */}

          <div id="contactUS">
                <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'dark.900', pb: 0 }}>
                    <ContactSection />
                </SectionWrapper>
            </div>

            {/* 5. people section */}

            <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default' }}>
                <PeopleSection />
            </SectionWrapper>

            {/* 7. inculde section */}
            {/* <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default' }}>
                <IncludeSection />
            </SectionWrapper> */}

            {/* 8. multi-language section */}
            {/* <SectionWrapper sx={{ py: 0 }}>
                <RtlInfoSection />
            </SectionWrapper> */}

            {/* 10. footer section */}
            <div id="aboutUS">
                <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'dark.900', pb: 0 }}>
                    <FooterSection />
                </SectionWrapper>
            </div>
            {/* <Customization /> */}
        </>
    );
};

export default Landing;
