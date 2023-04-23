// assets
import { UploadOutlined } from '@ant-design/icons';

// icons
const icons = {
    UploadOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const tools = {
    id: 'tools',
    title: 'Tools',
    type: 'group',
    children: [
        {
            id: 'import-portfolio-summary-file',
            title: 'Import Portfolio Summary',
            type: 'item',
            url: '/tools/import-portfolio-summary-file',
            icon: icons.UploadOutlined
        },
        {
            id: 'import-transactions-file',
            title: 'Import Transactions',
            type: 'item',
            url: '/tools/import-transactions-file',
            icon: icons.UploadOutlined
        }
    ]
};

export default tools;
