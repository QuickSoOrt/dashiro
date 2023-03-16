// assets
import { FileTextOutlined } from '@ant-design/icons';

// icons
const icons = {
    FileTextOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
    id: 'support',
    title: 'Support',
    type: 'group',
    children: [
        {
            id: 'documentation',
            title: 'Documentation',
            type: 'item',
            url: '/sample-page',
            icon: icons.FileTextOutlined
        }
    ]
};

export default support;
