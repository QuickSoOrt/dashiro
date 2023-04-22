import PropTypes from 'prop-types';

// material-ui
import { Box, Chip, Grid, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assets
import { RiseOutlined, FallOutlined } from '@ant-design/icons';

// ==============================|| STATISTICS - DIVIDEND CARD  ||============================== //

const AnalyticDividend = ({ title, totals }) => (
    <MainCard contentSX={{ p: 2.25 }}>
        <Stack spacing={0.5}>
            <Typography variant="h6" color="textSecondary">
                {title}
            </Typography>
            <Box>
                {
                    totals.map((element, index) => {
                        return (
                            <Grid container alignItems="center" key={index}>
                                <Grid item>
                                    <Chip
                                        variant="combined"
                                        color='primary'
                                        label={element.currency}
                                        size="small"
                                    />
                                </Grid>
                                <Grid item sx={{ ml: 1.25, pl: 1 }}>
                                    <Typography variant="h4" color="inherit">
                                        {element.total}
                                    </Typography>
                                </Grid>
                            </Grid>
                        );
                    })
                }
            </Box>
        </Stack>
    </MainCard>
);

AnalyticDividend.propTypes = {
    totals: PropTypes.array,
    title: PropTypes.string,
};

AnalyticDividend.defaultProps = {
    color: 'primary'
};

export default AnalyticDividend;
