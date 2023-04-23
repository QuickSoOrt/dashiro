import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import DividendsPage from 'pages/reports/dividends/index';
import TransactionsPage from 'pages/reports/transactions/index';
import DepositsPage from 'pages/reports/deposits/index';
import ImportTransactionsFilePage from 'pages/tools/import-transactions-file-page/index';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - tools
const ImportPortfolioSummaryFilePage = Loadable(lazy(() => import('pages/tools/import-portfolio-summary-file-page/index')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'documentation',
            element: <SamplePage />
        },
        {
            path: 'reports/dividends',
            element: <DividendsPage />
        },
        {
            path: 'reports/transactions',
            element: <TransactionsPage />
        },
        {
            path: 'reports/deposits',
            element: <DepositsPage />
        },
        {
            path: 'tools/import-portfolio-summary-file',
            element: <ImportPortfolioSummaryFilePage />
        },
        {
            path: 'tools/import-transactions-file',
            element: <ImportTransactionsFilePage />
        }
    ]
};

export default MainRoutes;
