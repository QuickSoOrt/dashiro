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
            id: 'import-file',
            title: 'Import File',
            type: 'item',
            url: '/tools/import-file-page',
            icon: icons.UploadOutlined
        }
    ]
};

export default tools;
