// assets
import { ChromeOutlined } from '@ant-design/icons';

// icons
const icons = {
    ChromeOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    id: 'pages',
    title: 'Pages',
    type: 'group',
    children: [
        {
            id: 'sample-page',
            title: 'Sample Page',
            type: 'item',
            url: '/sample-page',
            icon: icons.ChromeOutlined
        }
    ]
};

export default pages;
