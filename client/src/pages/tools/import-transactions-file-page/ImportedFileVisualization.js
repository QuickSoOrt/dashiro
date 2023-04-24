import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';

// third-party
import { useSelector } from 'react-redux';

// project import
import currencySymbols from 'data/currency-symbols';

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
        align: 'right',
        disablePadding: true,
        label: 'Hour'
    },
    {
        id: 'product',
        align: 'left',
        disablePadding: true,
        label: 'Product'
    },
    {
        id: 'exchange',
        align: 'left',
        disablePadding: true,
        label: 'Exchange'
    },
    {
        id: 'quantity',
        align: 'right',
        disablePadding: true,
        label: 'Qty'
    },
    {
        id: 'price',
        align: 'right',
        disablePadding: true,
        label: 'Price'
    },
    {
        id: 'localValue',
        align: 'right',
        disablePadding: true,
        label: 'Local Value'
    },
    {
        id: 'value',
        align: 'right',
        disablePadding: true,
        label: 'Value'
    },
    {
        id: 'exchangeRate',
        align: 'right',
        disablePadding: true,
        label: 'Exchange Rate'
    },
    {
        id: 'transactionCosts',
        align: 'right',
        disablePadding: true,
        label: 'Transaction Costs'
    },
    {
        id: 'total',
        align: 'right',
        disablePadding: true,
        label: 'Total'
    },
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

export default function ImportedFileVisualization() {
    const [order] = useState('desc');

    const [orderBy] = useState('date');
    
    const [selected] = useState([]);

    const rows = useSelector(state => state.transactions.transactions);

    const [page, setPage] = useState(0);
    
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const isSelected = (trackingNo) => selected.indexOf(trackingNo) !== -1;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Box>
            <TableContainer>
                <Table aria-labelledby="tableTitle">
                    <OrderTableHead order={order} orderBy={orderBy} />
                    <TableBody>
                        {stableSort(
                            rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows,
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
                                    <TableCell align="right">{row.hour}</TableCell>
                                    <TableCell align="left">{row.product}</TableCell>
                                    <TableCell align="left">{row.exchange}</TableCell>
                                    <TableCell align="right">{row.quantity}</TableCell>
                                    <TableCell align="right">{row.price.value + currencySymbols[row.price.currency]}</TableCell>
                                    <TableCell align="right">{row.localValue.value + currencySymbols[row.localValue.currency]}</TableCell>
                                    <TableCell align="right">{row.value.value + currencySymbols[row.value.currency]}</TableCell>
                                    <TableCell align="right">{row.exchangeRate}</TableCell>
                                    <TableCell align="right">{row.transactionCosts.value + currencySymbols[row.transactionCosts.currency]}</TableCell>
                                    <TableCell align="right">{row.total.value + currencySymbols[row.total.currency]}</TableCell>
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
                count={rows.length}
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
    );
}
