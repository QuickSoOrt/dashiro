import PropTypes from 'prop-types';

// material-ui
import { Box, Chip, Grid, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assets
import { RiseOutlined, FallOutlined } from '@ant-design/icons';
import currencySymbols from 'data/currency-symbols';

// ==============================|| STATISTICS - ANALYTIC PER CURRENCY CARD  ||============================== //

const Analytic = ({ title, total }) => (
    <MainCard contentSX={{ p: 2.25 }}>
        <Stack spacing={0.5}>
            <Typography variant="h6" color="textSecondary">
                {title}
            </Typography>
            <Box>
                <Grid container alignItems="center">
                    <Grid item>
                        <Chip variant="combined" color="primary" label={total.currency} size="small" />
                    </Grid>
                    <Grid item sx={{ ml: 1.25, pl: 1 }}>
                        <Typography variant="h4" color="inherit">
                            {total.total + currencySymbols[total.currency]}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Stack>
    </MainCard>
);

Analytic.propTypes = {
    total: PropTypes.object,
    title: PropTypes.string
};

Analytic.defaultProps = {
    color: 'primary'
};

export default Analytic;
