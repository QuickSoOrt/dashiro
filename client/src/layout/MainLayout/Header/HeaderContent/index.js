// material-ui
import { Box, IconButton, Link, useMediaQuery } from '@mui/material';
import { QuestionCircleOutlined } from '@ant-design/icons';

// project import
import Search from './Search';
import Profile from './Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
    const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

    return (
        <>
            {!matchesXs && <Search />}
            {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}

            <IconButton
                component={Link}
                href="https://brunomeira.online"
                target="_blank"
                disableRipple
                color="secondary"
                title="Author"
                sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
            >
                <QuestionCircleOutlined />
            </IconButton>

            {/* <Notification /> */}
            {/* {!matchesXs && <Profile />} */}
            {matchesXs && <MobileSection />}
        </>
    );
};

export default HeaderContent;
