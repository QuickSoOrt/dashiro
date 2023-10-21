import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

// material-ui
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, IconButton } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// third-party
import { SearchOutlined } from '@ant-design/icons';

// project import
import { FormControl, Grid, InputLabel, MenuItem, Select, TableFooter } from '../../../../node_modules/@mui/material/index';
import MainCard from 'components/MainCard';
import AnalyticPerCurrency from 'components/cards/statistics/AnalyticPerCurrency';
import DateParser from 'utils/tools/date-parser';
import currencySymbols from 'data/currency-symbols';
import mockData from 'data/mock-data';
import { useSelector } from '../../../../node_modules/react-redux/es/exports';

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
    {
        id: 'date',
        align: 'left',
        disablePadding: true,
        label: 'Date'
    },
    {
        id: 'hour',
        align: 'left',
        disablePadding: true,
        label: 'Hour'
    },
    {
        id: 'description',
        align: 'left',
        disablePadding: true,
        label: 'Description'
    },
    {
        id: 'change',
        align: 'right',
        disablePadding: true,
        label: 'Change'
    }
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function OrderTableHead({ order, orderBy }) {
    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.align}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

OrderTableHead.propTypes = {
    order: PropTypes.string,
    orderBy: PropTypes.string
};

// ==============================|| ORDER TABLE ||============================== //

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const ProductsMenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 7 + ITEM_PADDING_TOP,
            width: 300
        }
    }
};

const CurrenciesMenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 7 + ITEM_PADDING_TOP,
            width: 110
        }
    }
};

export default function DepositsPage(props) {
    const [order] = useState('desc');

    const [orderBy] = useState('date');

    const [selected] = useState([]);

    const rows = useSelector(state => state.portfolioSummary.portfolioSummary);

    const [data, setData] = useState(() => {
        if (rows) {
            return rows.filter((r) => r.description.includes('flatex Deposit'));
        } else {
            return [];
        }
    });

    const [filteredData, setFilteredData] = useState(() => {
        if (rows) {
            return rows.filter((r) => r.description.includes('flatex Deposit'));
        } else {
            return [];
        }
    });

    const [currencies, setCurrencies] = useState(() => {
        if (data) {
            return data
                .map((r) => r.change.currency)
                .filter((value, index, self) => {
                    return self.indexOf(value) === index && value.length !== 0;
                });
        } else {
            return [];
        }
    });

    const [totalMoneyDepositedPerCurrency, setTotalMoneyDepositedPerCurrency] = useState([]);

    const [page, setPage] = useState(0);

    const [rowsPerPage, setRowsPerPage] = useState(10);

    const [selectedCurrencies, setSelectedCurrencies] = useState([]);

    const [startDate, setStartDate] = useState(null);

    const [endDate, setEndDate] = useState(null);

    const isSelected = (trackingNo) => selected.indexOf(trackingNo) !== -1;

    useEffect(() => {
        calculateTotals();
    }, [filteredData]);

    const calculateTotals = () => {
        const totalMoneyDepositedPerCurrencyAux = calculateTotalMoneyDepositedPerCurrency();
        setTotalMoneyDepositedPerCurrency(totalMoneyDepositedPerCurrencyAux);
    };

    const calculateTotalMoneyDepositedPerCurrency = () => {
        let totals = {};

        currencies.forEach((c) => {
            totals[c] = 0;
        });

        if (filteredData) {
            filteredData
                .forEach((r) => {
                    if (r.change.value) {
                        const number = parseFloat(r.change.value.replace(',', '.'));
                        if (isNaN(number)) {
                            console.log(r.change.value);
                        } else {
                            totals[r.change.currency] += number;
                        }
                    }
                });
        }

        let totalsAux = [];

        currencies.forEach((c) => {
            totals[c] = Math.abs(totals[c]);
            totalsAux.push({
                currency: c,
                total: totals[c]
            });
        });

        return totalsAux;
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleSelectedCurrencyChange = (event) => {
        setSelectedCurrencies(typeof value === 'string' ? value.split(',') : event.target.value);
    };

    const handleStartDateChange = (value) => {
        setStartDate(value);
    };

    const handleEndDateChange = (value) => {
        setEndDate(value);
    };

    const search = () => {
        let filteredDataAux = data;

        if (selectedCurrencies && selectedCurrencies.length > 0) {
            filteredDataAux = filteredDataAux.filter((r) => selectedCurrencies.includes(r.change.currency));
        }

        if (startDate) {
            filteredDataAux = filteredDataAux.filter((r) => DateParser.parseDate(r.date) >= startDate.toDate());
        }

        if (endDate) {
            filteredDataAux = filteredDataAux.filter((r) => DateParser.parseDate(r.date) <= endDate.toDate());
        }

        setFilteredData(filteredDataAux);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Grid container rowSpacing={4.5} columnSpacing={2.75}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <AnalyticPerCurrency
                        title="Total Money Deposited Per Currency"
                        totals={totalMoneyDepositedPerCurrency}
                    />
                </Grid>
            </Grid>
            <MainCard>
                <Grid container rowSpacing={4.5} columnSpacing={2.75}>
                    <Grid item xs={12} sm={6} md={2} lg={2}>
                        <DatePicker format="DD-MM-YYYY" sx={{width: '100%'}} label="Start Date" value={startDate} onChange={handleStartDateChange}></DatePicker>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2}>
                        <DatePicker format="DD-MM-YYYY" sx={{width: '100%'}} label="End Date" value={endDate} onChange={handleEndDateChange}></DatePicker>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2}>
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel id="currency-select-label">Currency</InputLabel>
                            <Select
                                labelId="currency-select-label"
                                value={selectedCurrencies}
                                label="Currency"
                                multiple
                                MenuProps={CurrenciesMenuProps}
                                onChange={handleSelectedCurrencyChange}
                            >
                                {currencies.map((element, index) => {
                                    return (
                                        <MenuItem value={element} key={index}>
                                            {element}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <IconButton sx={{float: 'right'}} aria-label="search" size="large" onClick={search}>
                            <SearchOutlined />
                        </IconButton>
                    </Grid>
                </Grid>
            </MainCard>
            <MainCard>
                <Box>
                    <TableContainer>
                        <Table aria-labelledby="tableTitle">
                            <OrderTableHead order={order} orderBy={orderBy} />
                            <TableBody>
                                {stableSort(
                                    rowsPerPage > 0 ? filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : filteredData,
                                    getComparator(order, orderBy)
                                ).map((row, index) => {
                                    const isItemSelected = isSelected(row.trackingNo);

                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.trackingNo}
                                            selected={isItemSelected}
                                        >
                                            <TableCell align="left">{row.date}</TableCell>
                                            <TableCell align="left">{row.hour}</TableCell>
                                            <TableCell align="left">{row.description}</TableCell>
                                            <TableCell align="right">{row.change.value + currencySymbols[row.change.currency]}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                        colSpan={3}
                        component="div"
                        count={filteredData.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        SelectProps={{
                            inputProps: {
                                'aria-label': 'rows per page'
                            },
                            native: true
                        }}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Box>
            </MainCard>
        </Box>
    );
}
