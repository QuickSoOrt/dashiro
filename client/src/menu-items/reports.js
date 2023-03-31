// assets
import { DollarOutlined } from '@ant-design/icons';

// icons
const icons = {
    DollarOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const reports = {
    id: 'reports',
    title: 'Reports',
    type: 'group',
    children: [
        {
            id: 'dividends',
            title: 'Dividends',
            type: 'item',
            url: '/reports/dividends',
            icon: icons.DollarOutlined
        },
        {
            id: 'transactions',
            title: 'Transactions',
            type: 'item',
            url: '/reports/transactions',
            icon: icons.DollarOutlined
        }
    ]
};

export default reports;
