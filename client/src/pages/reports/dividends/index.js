// material-ui
import { Typography, Box } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import { DataGrid } from '@mui/x-data-grid';

// ==============================|| SAMPLE PAGE ||============================== //

const rows = [
    {
        id: 1,
        date: '30-03-2023',
        hour: '07:36',
        dateValue: '29-03-2023',
        product: '',
        isin: '',
        description: 'Crédito de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '0,54'
        },
        balance: {
            currency: 'EUR',
            value: '53,70'
        },
        idOrdem: ''
    },
    {
        id: 2,
        date: '30-03-2023',
        hour: '07:36',
        dateValue: '29-03-2023',
        product: '',
        isin: '',
        description: 'Levantamento de divisa',
        exchangeTax: '1,0871',
        change: {
            currency: 'USD',
            value: '-0,59'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: ''
    },
    {
        id: 3,
        date: '29-03-2023',
        hour: '10:19',
        dateValue: '28-03-2023',
        product: '',
        isin: '',
        description: 'Levantamentos da sua Conta Caixa na flatexDEGIRO Bank AG: 551,15 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '53,16'
        },
        idOrdem: ''
    },
    {
        id: 4,
        date: '29-03-2023',
        hour: '10:19',
        dateValue: '28-03-2023',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '551,15'
        },
        balance: {
            currency: 'EUR',
            value: '604,31'
        },
        idOrdem: ''
    },
    {
        id: 5,
        date: '29-03-2023',
        hour: '07:32',
        dateValue: '28-03-2023',
        product: 'MAIN STREET CAPITAL CO',
        isin: 'US56035L1044',
        description: 'Dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '0,70'
        },
        balance: {
            currency: 'USD',
            value: '0,59'
        },
        idOrdem: ''
    },
    {
        id: 6,
        date: '29-03-2023',
        hour: '07:32',
        dateValue: '28-03-2023',
        product: 'MAIN STREET CAPITAL CO',
        isin: 'US56035L1044',
        description: 'Imposto sobre dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-0,11'
        },
        balance: {
            currency: 'USD',
            value: '-0,11'
        },
        idOrdem: ''
    },
    {
        id: 7,
        date: '28-03-2023',
        hour: '15:39',
        dateValue: '28-03-2023',
        product: 'GLADSTONE COMMERCIAL C',
        isin: 'US3765361080',
        description: 'Crédito de divisa',
        exchangeTax: '1,0804',
        change: {
            currency: 'USD',
            value: '533,72'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: '1869e586-c0f3-4a8d-b073-b2c14a1a6c00'
    },
    {
        id: 8,
        date: '28-03-2023',
        hour: '15:39',
        dateValue: '28-03-2023',
        product: 'GLADSTONE COMMERCIAL C',
        isin: 'US3765361080',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-494,01'
        },
        balance: {
            currency: 'EUR',
            value: '53,16'
        },
        idOrdem: '1869e586-c0f3-4a8d-b073-b2c14a1a6c00'
    },
    {
        id: 9,
        date: '28-03-2023',
        hour: '15:39',
        dateValue: '28-03-2023',
        product: 'GLADSTONE COMMERCIAL C',
        isin: 'US3765361080',
        description: 'Crédito de divisa',
        exchangeTax: '1,0804',
        change: {
            currency: 'USD',
            value: '48,52'
        },
        balance: {
            currency: 'USD',
            value: '-533,72'
        },
        idOrdem: '1869e586-c0f3-4a8d-b073-b2c14a1a6c00'
    },
    {
        id: 10,
        date: '28-03-2023',
        hour: '15:39',
        dateValue: '28-03-2023',
        product: 'GLADSTONE COMMERCIAL C',
        isin: 'US3765361080',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-44,91'
        },
        balance: {
            currency: 'EUR',
            value: '547,17'
        },
        idOrdem: '1869e586-c0f3-4a8d-b073-b2c14a1a6c00'
    },
    {
        id: 11,
        date: '28-03-2023',
        hour: '15:39',
        dateValue: '28-03-2023',
        product: 'GLADSTONE COMMERCIAL C',
        isin: 'US3765361080',
        description: 'Crédito de divisa',
        exchangeTax: '1,0804',
        change: {
            currency: 'USD',
            value: '12,13'
        },
        balance: {
            currency: 'USD',
            value: '-582,24'
        },
        idOrdem: '1869e586-c0f3-4a8d-b073-b2c14a1a6c00'
    },
    {
        id: 12,
        date: '28-03-2023',
        hour: '15:39',
        dateValue: '28-03-2023',
        product: 'GLADSTONE COMMERCIAL C',
        isin: 'US3765361080',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-11,23'
        },
        balance: {
            currency: 'EUR',
            value: '592,08'
        },
        idOrdem: '1869e586-c0f3-4a8d-b073-b2c14a1a6c00'
    },
    {
        id: 13,
        date: '28-03-2023',
        hour: '15:39',
        dateValue: '28-03-2023',
        product: 'GLADSTONE COMMERCIAL C',
        isin: 'US3765361080',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '603,31'
        },
        idOrdem: '1869e586-c0f3-4a8d-b073-b2c14a1a6c00'
    },
    {
        id: 14,
        date: '28-03-2023',
        hour: '15:39',
        dateValue: '28-03-2023',
        product: 'GLADSTONE COMMERCIAL C',
        isin: 'US3765361080',
        description: 'Compra 44 GLADSTONE COMMERCIAL C@12,13 USD (US3765361080)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-533,72'
        },
        balance: {
            currency: 'USD',
            value: '-594,37'
        },
        idOrdem: '1869e586-c0f3-4a8d-b073-b2c14a1a6c00'
    },
    {
        id: 15,
        date: '28-03-2023',
        hour: '15:39',
        dateValue: '28-03-2023',
        product: 'GLADSTONE COMMERCIAL C',
        isin: 'US3765361080',
        description: 'Compra 4 GLADSTONE COMMERCIAL C@12,13 USD (US3765361080)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-48,52'
        },
        balance: {
            currency: 'USD',
            value: '-60,65'
        },
        idOrdem: '1869e586-c0f3-4a8d-b073-b2c14a1a6c00'
    },
    {
        id: 16,
        date: '28-03-2023',
        hour: '15:39',
        dateValue: '28-03-2023',
        product: 'GLADSTONE COMMERCIAL C',
        isin: 'US3765361080',
        description: 'Compra 1 GLADSTONE COMMERCIAL C@12,13 USD (US3765361080)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-12,13'
        },
        balance: {
            currency: 'USD',
            value: '-12,13'
        },
        idOrdem: '1869e586-c0f3-4a8d-b073-b2c14a1a6c00'
    },
    {
        id: 17,
        date: '28-03-2023',
        hour: '11:21',
        dateValue: '28-03-2023',
        product: '',
        isin: '',
        description: 'flatex Deposit',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '600,00'
        },
        balance: {
            currency: 'EUR',
            value: '604,31'
        },
        idOrdem: ''
    },
    {
        id: 18,
        date: '17-03-2023',
        hour: '16:50',
        dateValue: '17-03-2023',
        product: '',
        isin: '',
        description: 'Depósitos na sua Conta Caixa na flatexDEGIRO Bank AG: 0,44 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '4,31'
        },
        idOrdem: ''
    },
    {
        id: 19,
        date: '17-03-2023',
        hour: '16:50',
        dateValue: '17-03-2023',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-0,44'
        },
        balance: {
            currency: 'EUR',
            value: '3,87'
        },
        idOrdem: ''
    },
    {
        id: 20,
        date: '17-03-2023',
        hour: '14:43',
        dateValue: '17-03-2023',
        product: 'MEDICAL PROPERTIES TRU',
        isin: 'US58463J3041',
        description: 'Crédito de divisa',
        exchangeTax: '1,0599',
        change: {
            currency: 'USD',
            value: '400,25'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: '4b54e707-50ce-4536-9158-3d476b493000'
    },
    {
        id: 21,
        date: '17-03-2023',
        hour: '14:43',
        dateValue: '17-03-2023',
        product: 'MEDICAL PROPERTIES TRU',
        isin: 'US58463J3041',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-377,61'
        },
        balance: {
            currency: 'EUR',
            value: '4,31'
        },
        idOrdem: '4b54e707-50ce-4536-9158-3d476b493000'
    },
    {
        id: 22,
        date: '17-03-2023',
        hour: '14:43',
        dateValue: '17-03-2023',
        product: 'MEDICAL PROPERTIES TRU',
        isin: 'US58463J3041',
        description: 'Crédito de divisa',
        exchangeTax: '1,0599',
        change: {
            currency: 'USD',
            value: '801,00'
        },
        balance: {
            currency: 'USD',
            value: '-400,25'
        },
        idOrdem: '4b54e707-50ce-4536-9158-3d476b493000'
    },
    {
        id: 23,
        date: '17-03-2023',
        hour: '14:43',
        dateValue: '17-03-2023',
        product: 'MEDICAL PROPERTIES TRU',
        isin: 'US58463J3041',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-755,70'
        },
        balance: {
            currency: 'EUR',
            value: '381,92'
        },
        idOrdem: '4b54e707-50ce-4536-9158-3d476b493000'
    },
    {
        id: 24,
        date: '17-03-2023',
        hour: '14:43',
        dateValue: '17-03-2023',
        product: 'MEDICAL PROPERTIES TRU',
        isin: 'US58463J3041',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '1137,62'
        },
        idOrdem: '4b54e707-50ce-4536-9158-3d476b493000'
    },
    {
        id: 25,
        date: '17-03-2023',
        hour: '14:43',
        dateValue: '17-03-2023',
        product: 'MEDICAL PROPERTIES TRU',
        isin: 'US58463J3041',
        description: 'Compra 50 MEDICAL PROPERTIES TRU@8,005 USD (US58463J3041)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-400,25'
        },
        balance: {
            currency: 'USD',
            value: '-1201,25'
        },
        idOrdem: '4b54e707-50ce-4536-9158-3d476b493000'
    },
    {
        id: 26,
        date: '17-03-2023',
        hour: '14:43',
        dateValue: '17-03-2023',
        product: 'MEDICAL PROPERTIES TRU',
        isin: 'US58463J3041',
        description: 'Compra 100 MEDICAL PROPERTIES TRU@8,01 USD (US58463J3041)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-801,00'
        },
        balance: {
            currency: 'USD',
            value: '-801,00'
        },
        idOrdem: '4b54e707-50ce-4536-9158-3d476b493000'
    },
    {
        id: 27,
        date: '17-03-2023',
        hour: '14:42',
        dateValue: '17-03-2023',
        product: 'INTEL CORPORATION - CO',
        isin: 'US4581401001',
        description: 'Levantamento de divisa',
        exchangeTax: '1,0651',
        change: {
            currency: 'USD',
            value: '-1205,20'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: '81eceda0-95c4-4141-8bd7-69a0b66eff0d'
    },
    {
        id: 28,
        date: '17-03-2023',
        hour: '14:42',
        dateValue: '17-03-2023',
        product: 'INTEL CORPORATION - CO',
        isin: 'US4581401001',
        description: 'Crédito de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '1131,58'
        },
        balance: {
            currency: 'EUR',
            value: '1138,62'
        },
        idOrdem: '81eceda0-95c4-4141-8bd7-69a0b66eff0d'
    },
    {
        id: 29,
        date: '17-03-2023',
        hour: '14:42',
        dateValue: '17-03-2023',
        product: 'INTEL CORPORATION - CO',
        isin: 'US4581401001',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '7,04'
        },
        idOrdem: '81eceda0-95c4-4141-8bd7-69a0b66eff0d'
    },
    {
        id: 30,
        date: '17-03-2023',
        hour: '14:42',
        dateValue: '17-03-2023',
        product: 'INTEL CORPORATION - CO',
        isin: 'US4581401001',
        description: 'Venda 40 INTEL CORPORATION - CO@30,13 USD (US4581401001)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '1205,20'
        },
        balance: {
            currency: 'USD',
            value: '1205,20'
        },
        idOrdem: '81eceda0-95c4-4141-8bd7-69a0b66eff0d'
    },
    {
        id: 31,
        date: '17-03-2023',
        hour: '07:40',
        dateValue: '16-03-2023',
        product: '',
        isin: '',
        description: 'Crédito de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '4,17'
        },
        balance: {
            currency: 'EUR',
            value: '8,04'
        },
        idOrdem: ''
    },
    {
        id: 32,
        date: '17-03-2023',
        hour: '07:40',
        dateValue: '16-03-2023',
        product: '',
        isin: '',
        description: 'Levantamento de divisa',
        exchangeTax: '1,0637',
        change: {
            currency: 'USD',
            value: '-4,44'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: ''
    },
    {
        id: 33,
        date: '16-03-2023',
        hour: '07:40',
        dateValue: '15-03-2023',
        product: 'MAIN STREET CAPITAL CO',
        isin: 'US56035L1044',
        description: 'Dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '0,90'
        },
        balance: {
            currency: 'USD',
            value: '4,44'
        },
        idOrdem: ''
    },
    {
        id: 34,
        date: '16-03-2023',
        hour: '07:40',
        dateValue: '15-03-2023',
        product: 'MAIN STREET CAPITAL CO',
        isin: 'US56035L1044',
        description: 'Imposto sobre dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-0,14'
        },
        balance: {
            currency: 'USD',
            value: '3,54'
        },
        idOrdem: ''
    },
    {
        id: 35,
        date: '16-03-2023',
        hour: '07:29',
        dateValue: '15-03-2023',
        product: 'REALTY INCOME CORPORAT',
        isin: 'US7561091049',
        description: 'Dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '4,33'
        },
        balance: {
            currency: 'USD',
            value: '3,68'
        },
        idOrdem: ''
    },
    {
        id: 36,
        date: '16-03-2023',
        hour: '07:29',
        dateValue: '15-03-2023',
        product: 'REALTY INCOME CORPORAT',
        isin: 'US7561091049',
        description: 'Imposto sobre dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-0,65'
        },
        balance: {
            currency: 'USD',
            value: '-0,65'
        },
        idOrdem: ''
    },
    {
        id: 37,
        date: '14-03-2023',
        hour: '16:49',
        dateValue: '14-03-2023',
        product: '',
        isin: '',
        description: 'Depósitos na sua Conta Caixa na flatexDEGIRO Bank AG: 0,01 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '3,87'
        },
        idOrdem: ''
    },
    {
        id: 38,
        date: '14-03-2023',
        hour: '16:49',
        dateValue: '14-03-2023',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-0,01'
        },
        balance: {
            currency: 'EUR',
            value: '3,86'
        },
        idOrdem: ''
    },
    {
        id: 39,
        date: '14-03-2023',
        hour: '10:34',
        dateValue: '13-03-2023',
        product: '',
        isin: '',
        description: 'Levantamentos da sua Conta Caixa na flatexDEGIRO Bank AG: 25,35 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '3,87'
        },
        idOrdem: ''
    },
    {
        id: 40,
        date: '14-03-2023',
        hour: '10:34',
        dateValue: '13-03-2023',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '25,35'
        },
        balance: {
            currency: 'EUR',
            value: '29,22'
        },
        idOrdem: ''
    },
    {
        id: 41,
        date: '14-03-2023',
        hour: '07:37',
        dateValue: '13-03-2023',
        product: '',
        isin: '',
        description: 'Crédito de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '0,01'
        },
        balance: {
            currency: 'EUR',
            value: '3,87'
        },
        idOrdem: ''
    },
    {
        id: 42,
        date: '14-03-2023',
        hour: '07:37',
        dateValue: '13-03-2023',
        product: '',
        isin: '',
        description: 'Levantamento de divisa',
        exchangeTax: '1,0758',
        change: {
            currency: 'USD',
            value: '-0,01'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: ''
    },
    {
        id: 43,
        date: '13-03-2023',
        hour: '16:45',
        dateValue: '13-03-2023',
        product: 'MEDICAL PROPERTIES TRU',
        isin: 'US58463J3041',
        description: 'Crédito de divisa',
        exchangeTax: '1,0688',
        change: {
            currency: 'USD',
            value: '26,03'
        },
        balance: {
            currency: 'USD',
            value: '0,01'
        },
        idOrdem: 'd1185b1a-9983-41cb-a901-6e13242f139e'
    },
    {
        id: 44,
        date: '13-03-2023',
        hour: '16:45',
        dateValue: '13-03-2023',
        product: 'MEDICAL PROPERTIES TRU',
        isin: 'US58463J3041',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-24,35'
        },
        balance: {
            currency: 'EUR',
            value: '3,86'
        },
        idOrdem: 'd1185b1a-9983-41cb-a901-6e13242f139e'
    },
    {
        id: 45,
        date: '13-03-2023',
        hour: '16:45',
        dateValue: '13-03-2023',
        product: 'MEDICAL PROPERTIES TRU',
        isin: 'US58463J3041',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '28,21'
        },
        idOrdem: 'd1185b1a-9983-41cb-a901-6e13242f139e'
    },
    {
        id: 46,
        date: '13-03-2023',
        hour: '16:45',
        dateValue: '13-03-2023',
        product: 'MEDICAL PROPERTIES TRU',
        isin: 'US58463J3041',
        description: 'Compra 3 MEDICAL PROPERTIES TRU@8,675 USD (US58463J3041)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-26,02'
        },
        balance: {
            currency: 'USD',
            value: '-26,02'
        },
        idOrdem: 'd1185b1a-9983-41cb-a901-6e13242f139e'
    },
    {
        id: 47,
        date: '10-03-2023',
        hour: '17:49',
        dateValue: '10-03-2023',
        product: '',
        isin: '',
        description: 'Depósitos na sua Conta Caixa na flatexDEGIRO Bank AG: 1,63 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '29,21'
        },
        idOrdem: ''
    },
    {
        id: 48,
        date: '10-03-2023',
        hour: '17:49',
        dateValue: '10-03-2023',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,63'
        },
        balance: {
            currency: 'EUR',
            value: '27,58'
        },
        idOrdem: ''
    },
    {
        id: 49,
        date: '10-03-2023',
        hour: '07:38',
        dateValue: '09-03-2023',
        product: '',
        isin: '',
        description: 'Crédito de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '1,63'
        },
        balance: {
            currency: 'EUR',
            value: '29,21'
        },
        idOrdem: ''
    },
    {
        id: 50,
        date: '10-03-2023',
        hour: '07:38',
        dateValue: '09-03-2023',
        product: '',
        isin: '',
        description: 'Levantamento de divisa',
        exchangeTax: '1,0607',
        change: {
            currency: 'USD',
            value: '-1,73'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: ''
    },
    {
        id: 51,
        date: '10-03-2023',
        hour: '06:29',
        dateValue: '09-03-2023',
        product: 'AGNC INVESTMENT CORP',
        isin: 'US00123Q1040',
        description: 'Dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '2,04'
        },
        balance: {
            currency: 'USD',
            value: '1,73'
        },
        idOrdem: ''
    },
    {
        id: 52,
        date: '10-03-2023',
        hour: '06:29',
        dateValue: '09-03-2023',
        product: 'AGNC INVESTMENT CORP',
        isin: 'US00123Q1040',
        description: 'Imposto sobre dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-0,31'
        },
        balance: {
            currency: 'USD',
            value: '-0,31'
        },
        idOrdem: ''
    },
    {
        id: 53,
        date: '07-03-2023',
        hour: '09:49',
        dateValue: '06-03-2023',
        product: '',
        isin: '',
        description: 'Levantamentos da sua Conta Caixa na flatexDEGIRO Bank AG: 14,94 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '27,58'
        },
        idOrdem: ''
    },
    {
        id: 54,
        date: '07-03-2023',
        hour: '09:49',
        dateValue: '06-03-2023',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '14,94'
        },
        balance: {
            currency: 'EUR',
            value: '42,52'
        },
        idOrdem: ''
    },
    {
        id: 55,
        date: '07-03-2023',
        hour: '07:52',
        dateValue: '15-02-2023',
        product: 'MAIN STREET CAPITAL CO',
        isin: 'US56035L1044',
        description: 'Dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '0,90'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: ''
    },
    {
        id: 56,
        date: '07-03-2023',
        hour: '07:52',
        dateValue: '15-02-2023',
        product: 'MAIN STREET CAPITAL CO',
        isin: 'US56035L1044',
        description: 'Imposto sobre dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-0,14'
        },
        balance: {
            currency: 'USD',
            value: '-0,90'
        },
        idOrdem: ''
    },
    {
        id: 57,
        date: '07-03-2023',
        hour: '07:52',
        dateValue: '15-02-2023',
        product: 'MAIN STREET CAPITAL CO',
        isin: 'US56035L1044',
        description: 'Dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-0,90'
        },
        balance: {
            currency: 'USD',
            value: '-0,76'
        },
        idOrdem: ''
    },
    {
        id: 58,
        date: '07-03-2023',
        hour: '07:52',
        dateValue: '15-02-2023',
        product: 'MAIN STREET CAPITAL CO',
        isin: 'US56035L1044',
        description: 'Imposto sobre dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '0,14'
        },
        balance: {
            currency: 'USD',
            value: '0,14'
        },
        idOrdem: ''
    },
    {
        id: 59,
        date: '06-03-2023',
        hour: '17:41',
        dateValue: '06-03-2023',
        product: 'TESLA MOTORS INC. - C',
        isin: 'US88160R1014',
        description: 'Crédito de divisa',
        exchangeTax: '1,0655',
        change: {
            currency: 'USD',
            value: '2541,50'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: '20e4e707-fd7b-41f0-9818-ed8c5653125e'
    },
    {
        id: 60,
        date: '06-03-2023',
        hour: '17:41',
        dateValue: '06-03-2023',
        product: 'TESLA MOTORS INC. - C',
        isin: 'US88160R1014',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-2385,20'
        },
        balance: {
            currency: 'EUR',
            value: '27,58'
        },
        idOrdem: '20e4e707-fd7b-41f0-9818-ed8c5653125e'
    },
    {
        id: 61,
        date: '06-03-2023',
        hour: '17:41',
        dateValue: '06-03-2023',
        product: 'TESLA MOTORS INC. - C',
        isin: 'US88160R1014',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '2412,78'
        },
        idOrdem: '20e4e707-fd7b-41f0-9818-ed8c5653125e'
    },
    {
        id: 62,
        date: '06-03-2023',
        hour: '17:41',
        dateValue: '06-03-2023',
        product: 'TESLA MOTORS INC. - C',
        isin: 'US88160R1014',
        description: 'Compra 13 TESLA MOTORS INC. - C@195,5 USD (US88160R1014)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-2541,50'
        },
        balance: {
            currency: 'USD',
            value: '-2541,50'
        },
        idOrdem: '20e4e707-fd7b-41f0-9818-ed8c5653125e'
    },
    {
        id: 63,
        date: '06-03-2023',
        hour: '17:36',
        dateValue: '06-03-2023',
        product: 'UBER TECHNOLOGIES INC. COMMON STOCK',
        isin: 'US90353T1007',
        description: 'Levantamento de divisa',
        exchangeTax: '1,0706',
        change: {
            currency: 'USD',
            value: '-2539,67'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: '29b809c7-d824-4bd8-ac25-16f3c6a02a46'
    },
    {
        id: 64,
        date: '06-03-2023',
        hour: '17:36',
        dateValue: '06-03-2023',
        product: 'UBER TECHNOLOGIES INC. COMMON STOCK',
        isin: 'US90353T1007',
        description: 'Crédito de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '2372,26'
        },
        balance: {
            currency: 'EUR',
            value: '2413,78'
        },
        idOrdem: '29b809c7-d824-4bd8-ac25-16f3c6a02a46'
    },
    {
        id: 65,
        date: '06-03-2023',
        hour: '17:36',
        dateValue: '06-03-2023',
        product: 'UBER TECHNOLOGIES INC. COMMON STOCK',
        isin: 'US90353T1007',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '41,52'
        },
        idOrdem: '29b809c7-d824-4bd8-ac25-16f3c6a02a46'
    },
    {
        id: 66,
        date: '06-03-2023',
        hour: '17:36',
        dateValue: '06-03-2023',
        product: 'UBER TECHNOLOGIES INC. COMMON STOCK',
        isin: 'US90353T1007',
        description: 'Venda 73 UBER TECHNOLOGIES INC. COMMON STOCK@34,79 USD (US90353T1007)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '2539,67'
        },
        balance: {
            currency: 'USD',
            value: '2539,67'
        },
        idOrdem: '29b809c7-d824-4bd8-ac25-16f3c6a02a46'
    },
    {
        id: 67,
        date: '03-03-2023',
        hour: '17:19',
        dateValue: '03-03-2023',
        product: '',
        isin: '',
        description: 'Depósitos na sua Conta Caixa na flatexDEGIRO Bank AG: 11,68 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '42,52'
        },
        idOrdem: ''
    },
    {
        id: 68,
        date: '03-03-2023',
        hour: '17:19',
        dateValue: '03-03-2023',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-11,68'
        },
        balance: {
            currency: 'EUR',
            value: '30,84'
        },
        idOrdem: ''
    },
    {
        id: 69,
        date: '03-03-2023',
        hour: '10:49',
        dateValue: '02-03-2023',
        product: '',
        isin: '',
        description: 'Levantamentos da sua Conta Caixa na flatexDEGIRO Bank AG: 473,73 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '42,52'
        },
        idOrdem: ''
    },
    {
        id: 70,
        date: '03-03-2023',
        hour: '10:49',
        dateValue: '02-03-2023',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '473,73'
        },
        balance: {
            currency: 'EUR',
            value: '516,25'
        },
        idOrdem: ''
    },
    {
        id: 71,
        date: '03-03-2023',
        hour: '07:40',
        dateValue: '02-03-2023',
        product: '',
        isin: '',
        description: 'Crédito de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '11,68'
        },
        balance: {
            currency: 'EUR',
            value: '42,52'
        },
        idOrdem: ''
    },
    {
        id: 72,
        date: '03-03-2023',
        hour: '07:40',
        dateValue: '02-03-2023',
        product: '',
        isin: '',
        description: 'Levantamento de divisa',
        exchangeTax: '1,0624',
        change: {
            currency: 'USD',
            value: '-12,41'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: ''
    },
    {
        id: 73,
        date: '02-03-2023',
        hour: '16:49',
        dateValue: '02-03-2023',
        product: '',
        isin: '',
        description: 'Depósitos na sua Conta Caixa na flatexDEGIRO Bank AG: 1,75 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '30,84'
        },
        idOrdem: ''
    },
    {
        id: 74,
        date: '02-03-2023',
        hour: '16:49',
        dateValue: '02-03-2023',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,75'
        },
        balance: {
            currency: 'EUR',
            value: '29,09'
        },
        idOrdem: ''
    },
    {
        id: 75,
        date: '02-03-2023',
        hour: '15:30',
        dateValue: '02-03-2023',
        product: 'DIGITAL REALTY TRUST',
        isin: 'US2538681030',
        description: 'Crédito de divisa',
        exchangeTax: '1,0571',
        change: {
            currency: 'USD',
            value: '499,70'
        },
        balance: {
            currency: 'USD',
            value: '12,41'
        },
        idOrdem: '1641acd5-1fc6-44db-b2a5-6e6958ef7a70'
    },
    {
        id: 76,
        date: '02-03-2023',
        hour: '15:30',
        dateValue: '02-03-2023',
        product: 'DIGITAL REALTY TRUST',
        isin: 'US2538681030',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-472,73'
        },
        balance: {
            currency: 'EUR',
            value: '30,84'
        },
        idOrdem: '1641acd5-1fc6-44db-b2a5-6e6958ef7a70'
    },
    {
        id: 77,
        date: '02-03-2023',
        hour: '15:30',
        dateValue: '02-03-2023',
        product: 'DIGITAL REALTY TRUST',
        isin: 'US2538681030',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '503,57'
        },
        idOrdem: '1641acd5-1fc6-44db-b2a5-6e6958ef7a70'
    },
    {
        id: 78,
        date: '02-03-2023',
        hour: '15:30',
        dateValue: '02-03-2023',
        product: 'DIGITAL REALTY TRUST',
        isin: 'US2538681030',
        description: 'Compra 5 DIGITAL REALTY TRUST@99,94 USD (US2538681030)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-499,70'
        },
        balance: {
            currency: 'USD',
            value: '-487,29'
        },
        idOrdem: '1641acd5-1fc6-44db-b2a5-6e6958ef7a70'
    },
    {
        id: 79,
        date: '02-03-2023',
        hour: '11:32',
        dateValue: '02-03-2023',
        product: '',
        isin: '',
        description: 'flatex Deposit',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '500,00'
        },
        balance: {
            currency: 'EUR',
            value: '504,57'
        },
        idOrdem: ''
    },
    {
        id: 80,
        date: '02-03-2023',
        hour: '07:38',
        dateValue: '01-03-2023',
        product: '',
        isin: '',
        description: 'Crédito de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '1,75'
        },
        balance: {
            currency: 'EUR',
            value: '4,57'
        },
        idOrdem: ''
    },
    {
        id: 81,
        date: '02-03-2023',
        hour: '07:38',
        dateValue: '01-03-2023',
        product: '',
        isin: '',
        description: 'Levantamento de divisa',
        exchangeTax: '1,0694',
        change: {
            currency: 'USD',
            value: '-1,87'
        },
        balance: {
            currency: 'USD',
            value: '12,41'
        },
        idOrdem: ''
    },
    {
        id: 82,
        date: '02-03-2023',
        hour: '07:22',
        dateValue: '01-03-2023',
        product: 'INTEL CORPORATION - CO',
        isin: 'US4581401001',
        description: 'Dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '14,60'
        },
        balance: {
            currency: 'USD',
            value: '14,28'
        },
        idOrdem: ''
    },
    {
        id: 83,
        date: '02-03-2023',
        hour: '07:22',
        dateValue: '01-03-2023',
        product: 'INTEL CORPORATION - CO',
        isin: 'US4581401001',
        description: 'Imposto sobre dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-2,19'
        },
        balance: {
            currency: 'USD',
            value: '-0,32'
        },
        idOrdem: ''
    },
    {
        id: 84,
        date: '01-03-2023',
        hour: '07:48',
        dateValue: '28-02-2023',
        product: 'GLADSTONE COMMERCIAL C',
        isin: 'US3765361080',
        description: 'Dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '2,20'
        },
        balance: {
            currency: 'USD',
            value: '1,87'
        },
        idOrdem: ''
    },
    {
        id: 85,
        date: '01-03-2023',
        hour: '07:48',
        dateValue: '28-02-2023',
        product: 'GLADSTONE COMMERCIAL C',
        isin: 'US3765361080',
        description: 'Imposto sobre dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-0,33'
        },
        balance: {
            currency: 'USD',
            value: '-0,33'
        },
        idOrdem: ''
    },
    {
        id: 86,
        date: '27-02-2023',
        hour: '10:49',
        dateValue: '24-02-2023',
        product: '',
        isin: '',
        description: 'Levantamentos da sua Conta Caixa na flatexDEGIRO Bank AG: 2.024,64 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '2,82'
        },
        idOrdem: ''
    },
    {
        id: 87,
        date: '27-02-2023',
        hour: '10:49',
        dateValue: '24-02-2023',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '2024,64'
        },
        balance: {
            currency: 'EUR',
            value: '2027,46'
        },
        idOrdem: ''
    },
    {
        id: 88,
        date: '24-02-2023',
        hour: '15:34',
        dateValue: '24-02-2023',
        product: 'UBER TECHNOLOGIES INC. COMMON STOCK',
        isin: 'US90353T1007',
        description: 'Crédito de divisa',
        exchangeTax: '1,0523',
        change: {
            currency: 'USD',
            value: '1250,60'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: 'f8080626-cbde-49b9-8c02-f6d5f0b31f47'
    },
    {
        id: 89,
        date: '24-02-2023',
        hour: '15:34',
        dateValue: '24-02-2023',
        product: 'UBER TECHNOLOGIES INC. COMMON STOCK',
        isin: 'US90353T1007',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1188,49'
        },
        balance: {
            currency: 'EUR',
            value: '2,82'
        },
        idOrdem: 'f8080626-cbde-49b9-8c02-f6d5f0b31f47'
    },
    {
        id: 90,
        date: '24-02-2023',
        hour: '15:34',
        dateValue: '24-02-2023',
        product: 'UBER TECHNOLOGIES INC. COMMON STOCK',
        isin: 'US90353T1007',
        description: 'Crédito de divisa',
        exchangeTax: '1,0523',
        change: {
            currency: 'USD',
            value: '878,80'
        },
        balance: {
            currency: 'USD',
            value: '-1250,60'
        },
        idOrdem: 'f8080626-cbde-49b9-8c02-f6d5f0b31f47'
    },
    {
        id: 91,
        date: '24-02-2023',
        hour: '15:34',
        dateValue: '24-02-2023',
        product: 'UBER TECHNOLOGIES INC. COMMON STOCK',
        isin: 'US90353T1007',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-835,15'
        },
        balance: {
            currency: 'EUR',
            value: '1191,31'
        },
        idOrdem: 'f8080626-cbde-49b9-8c02-f6d5f0b31f47'
    },
    {
        id: 92,
        date: '24-02-2023',
        hour: '15:34',
        dateValue: '24-02-2023',
        product: 'UBER TECHNOLOGIES INC. COMMON STOCK',
        isin: 'US90353T1007',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '2026,46'
        },
        idOrdem: 'f8080626-cbde-49b9-8c02-f6d5f0b31f47'
    },
    {
        id: 93,
        date: '24-02-2023',
        hour: '15:34',
        dateValue: '24-02-2023',
        product: 'UBER TECHNOLOGIES INC. COMMON STOCK',
        isin: 'US90353T1007',
        description: 'Compra 37 UBER TECHNOLOGIES INC. COMMON STOCK@33,8 USD (US90353T1007)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-1250,60'
        },
        balance: {
            currency: 'USD',
            value: '-2129,40'
        },
        idOrdem: 'f8080626-cbde-49b9-8c02-f6d5f0b31f47'
    },
    {
        id: 94,
        date: '24-02-2023',
        hour: '15:34',
        dateValue: '24-02-2023',
        product: 'UBER TECHNOLOGIES INC. COMMON STOCK',
        isin: 'US90353T1007',
        description: 'Compra 26 UBER TECHNOLOGIES INC. COMMON STOCK@33,8 USD (US90353T1007)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-878,80'
        },
        balance: {
            currency: 'USD',
            value: '-878,80'
        },
        idOrdem: 'f8080626-cbde-49b9-8c02-f6d5f0b31f47'
    },
    {
        id: 95,
        date: '24-02-2023',
        hour: '11:02',
        dateValue: '24-02-2023',
        product: '',
        isin: '',
        description: 'flatex Deposit',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '2000,00'
        },
        balance: {
            currency: 'EUR',
            value: '2027,46'
        },
        idOrdem: ''
    },
    {
        id: 96,
        date: '22-02-2023',
        hour: '10:09',
        dateValue: '21-02-2023',
        product: '',
        isin: '',
        description: 'Levantamentos da sua Conta Caixa na flatexDEGIRO Bank AG: 315,86 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '27,46'
        },
        idOrdem: ''
    },
    {
        id: 97,
        date: '22-02-2023',
        hour: '10:09',
        dateValue: '21-02-2023',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '315,86'
        },
        balance: {
            currency: 'EUR',
            value: '343,32'
        },
        idOrdem: ''
    },
    {
        id: 98,
        date: '21-02-2023',
        hour: '15:30',
        dateValue: '21-02-2023',
        product: 'UBER TECHNOLOGIES INC. COMMON STOCK',
        isin: 'US90353T1007',
        description: 'Crédito de divisa',
        exchangeTax: '1,0636',
        change: {
            currency: 'USD',
            value: '334,90'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: '83a743b5-594d-4a80-9ab2-6599af709dda'
    },
    {
        id: 99,
        date: '21-02-2023',
        hour: '15:30',
        dateValue: '21-02-2023',
        product: 'UBER TECHNOLOGIES INC. COMMON STOCK',
        isin: 'US90353T1007',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-314,86'
        },
        balance: {
            currency: 'EUR',
            value: '27,46'
        },
        idOrdem: '83a743b5-594d-4a80-9ab2-6599af709dda'
    },
    {
        id: 100,
        date: '21-02-2023',
        hour: '15:30',
        dateValue: '21-02-2023',
        product: 'UBER TECHNOLOGIES INC. COMMON STOCK',
        isin: 'US90353T1007',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '342,32'
        },
        idOrdem: '83a743b5-594d-4a80-9ab2-6599af709dda'
    },
    {
        id: 101,
        date: '21-02-2023',
        hour: '15:30',
        dateValue: '21-02-2023',
        product: 'UBER TECHNOLOGIES INC. COMMON STOCK',
        isin: 'US90353T1007',
        description: 'Compra 10 UBER TECHNOLOGIES INC. COMMON STOCK@33,49 USD (US90353T1007)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-334,90'
        },
        balance: {
            currency: 'USD',
            value: '-334,90'
        },
        idOrdem: '83a743b5-594d-4a80-9ab2-6599af709dda'
    },
    {
        id: 102,
        date: '17-02-2023',
        hour: '16:49',
        dateValue: '17-02-2023',
        product: '',
        isin: '',
        description: 'Depósitos na sua Conta Caixa na flatexDEGIRO Bank AG: 1,11 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '343,32'
        },
        idOrdem: ''
    },
    {
        id: 103,
        date: '17-02-2023',
        hour: '16:49',
        dateValue: '17-02-2023',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,11'
        },
        balance: {
            currency: 'EUR',
            value: '342,21'
        },
        idOrdem: ''
    },
    {
        id: 104,
        date: '17-02-2023',
        hour: '11:49',
        dateValue: '16-02-2023',
        product: '',
        isin: '',
        description: 'Depósitos na sua Conta Caixa na flatexDEGIRO Bank AG: 339,89 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '343,32'
        },
        idOrdem: ''
    },
    {
        id: 105,
        date: '17-02-2023',
        hour: '11:49',
        dateValue: '16-02-2023',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-339,89'
        },
        balance: {
            currency: 'EUR',
            value: '3,43'
        },
        idOrdem: ''
    },
    {
        id: 106,
        date: '17-02-2023',
        hour: '07:36',
        dateValue: '16-02-2023',
        product: '',
        isin: '',
        description: 'Crédito de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '1,11'
        },
        balance: {
            currency: 'EUR',
            value: '343,32'
        },
        idOrdem: ''
    },
    {
        id: 107,
        date: '17-02-2023',
        hour: '07:36',
        dateValue: '16-02-2023',
        product: '',
        isin: '',
        description: 'Levantamento de divisa',
        exchangeTax: '1,0700',
        change: {
            currency: 'USD',
            value: '-1,19'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: ''
    },
    {
        id: 108,
        date: '16-02-2023',
        hour: '17:19',
        dateValue: '16-02-2023',
        product: 'UBER TECHNOLOGIES INC. COMMON STOCK',
        isin: 'US90353T1007',
        description: 'Levantamento de divisa',
        exchangeTax: '1,0699',
        change: {
            currency: 'USD',
            value: '-364,71'
        },
        balance: {
            currency: 'USD',
            value: '1,19'
        },
        idOrdem: 'acb34e5e-045b-467a-9ed2-8471534751ea'
    },
    {
        id: 109,
        date: '16-02-2023',
        hour: '17:19',
        dateValue: '16-02-2023',
        product: 'UBER TECHNOLOGIES INC. COMMON STOCK',
        isin: 'US90353T1007',
        description: 'Crédito de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '340,89'
        },
        balance: {
            currency: 'EUR',
            value: '342,21'
        },
        idOrdem: 'acb34e5e-045b-467a-9ed2-8471534751ea'
    },
    {
        id: 110,
        date: '16-02-2023',
        hour: '17:19',
        dateValue: '16-02-2023',
        product: 'UBER TECHNOLOGIES INC. COMMON STOCK',
        isin: 'US90353T1007',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '1,32'
        },
        idOrdem: 'acb34e5e-045b-467a-9ed2-8471534751ea'
    },
    {
        id: 111,
        date: '16-02-2023',
        hour: '17:19',
        dateValue: '16-02-2023',
        product: 'UBER TECHNOLOGIES INC. COMMON STOCK',
        isin: 'US90353T1007',
        description: 'Venda 10 UBER TECHNOLOGIES INC. COMMON STOCK@36,471 USD (US90353T1007)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '364,71'
        },
        balance: {
            currency: 'USD',
            value: '365,90'
        },
        idOrdem: 'acb34e5e-045b-467a-9ed2-8471534751ea'
    },
    {
        id: 112,
        date: '16-02-2023',
        hour: '07:38',
        dateValue: '15-02-2023',
        product: 'MAIN STREET CAPITAL CO',
        isin: 'US56035L1044',
        description: 'Dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '0,90'
        },
        balance: {
            currency: 'USD',
            value: '1,19'
        },
        idOrdem: ''
    },
    {
        id: 113,
        date: '16-02-2023',
        hour: '07:38',
        dateValue: '15-02-2023',
        product: 'MAIN STREET CAPITAL CO',
        isin: 'US56035L1044',
        description: 'Imposto sobre dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-0,14'
        },
        balance: {
            currency: 'USD',
            value: '0,29'
        },
        idOrdem: ''
    },
    {
        id: 114,
        date: '16-02-2023',
        hour: '07:24',
        dateValue: '15-02-2023',
        product: 'REALTY INCOME CORPORAT',
        isin: 'US7561091049',
        description: 'Dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '0,50'
        },
        balance: {
            currency: 'USD',
            value: '0,43'
        },
        idOrdem: ''
    },
    {
        id: 115,
        date: '16-02-2023',
        hour: '07:24',
        dateValue: '15-02-2023',
        product: 'REALTY INCOME CORPORAT',
        isin: 'US7561091049',
        description: 'Imposto sobre dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-0,07'
        },
        balance: {
            currency: 'USD',
            value: '-0,07'
        },
        idOrdem: ''
    },
    {
        id: 116,
        date: '15-02-2023',
        hour: '11:04',
        dateValue: '14-02-2023',
        product: '',
        isin: '',
        description: 'Levantamentos da sua Conta Caixa na flatexDEGIRO Bank AG: 31,58 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '2,32'
        },
        idOrdem: ''
    },
    {
        id: 117,
        date: '15-02-2023',
        hour: '11:04',
        dateValue: '14-02-2023',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '31,58'
        },
        balance: {
            currency: 'EUR',
            value: '33,90'
        },
        idOrdem: ''
    },
    {
        id: 118,
        date: '14-02-2023',
        hour: '16:29',
        dateValue: '14-02-2023',
        product: 'GLADSTONE COMMERCIAL C',
        isin: 'US3765361080',
        description: 'Crédito de divisa',
        exchangeTax: '1,0726',
        change: {
            currency: 'USD',
            value: '32,80'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: '657c02f6-fe2c-407b-8130-7c94d5d80b5c'
    },
    {
        id: 119,
        date: '14-02-2023',
        hour: '16:29',
        dateValue: '14-02-2023',
        product: 'GLADSTONE COMMERCIAL C',
        isin: 'US3765361080',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-30,58'
        },
        balance: {
            currency: 'EUR',
            value: '2,32'
        },
        idOrdem: '657c02f6-fe2c-407b-8130-7c94d5d80b5c'
    },
    {
        id: 120,
        date: '14-02-2023',
        hour: '16:29',
        dateValue: '14-02-2023',
        product: 'GLADSTONE COMMERCIAL C',
        isin: 'US3765361080',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '32,90'
        },
        idOrdem: '657c02f6-fe2c-407b-8130-7c94d5d80b5c'
    },
    {
        id: 121,
        date: '14-02-2023',
        hour: '16:29',
        dateValue: '14-02-2023',
        product: 'GLADSTONE COMMERCIAL C',
        isin: 'US3765361080',
        description: 'Compra 2 GLADSTONE COMMERCIAL C@16,4 USD (US3765361080)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-32,80'
        },
        balance: {
            currency: 'USD',
            value: '-32,80'
        },
        idOrdem: '657c02f6-fe2c-407b-8130-7c94d5d80b5c'
    },
    {
        id: 122,
        date: '14-02-2023',
        hour: '16:19',
        dateValue: '14-02-2023',
        product: '',
        isin: '',
        description: 'Depósitos na sua Conta Caixa na flatexDEGIRO Bank AG: 1,49 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '33,90'
        },
        idOrdem: ''
    },
    {
        id: 123,
        date: '14-02-2023',
        hour: '16:19',
        dateValue: '14-02-2023',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,49'
        },
        balance: {
            currency: 'EUR',
            value: '32,41'
        },
        idOrdem: ''
    },
    {
        id: 124,
        date: '14-02-2023',
        hour: '07:34',
        dateValue: '13-02-2023',
        product: '',
        isin: '',
        description: 'Crédito de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '1,49'
        },
        balance: {
            currency: 'EUR',
            value: '33,90'
        },
        idOrdem: ''
    },
    {
        id: 125,
        date: '14-02-2023',
        hour: '07:34',
        dateValue: '13-02-2023',
        product: '',
        isin: '',
        description: 'Levantamento de divisa',
        exchangeTax: '1,0750',
        change: {
            currency: 'USD',
            value: '-1,60'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: ''
    },
    {
        id: 126,
        date: '13-02-2023',
        hour: '16:34',
        dateValue: '13-02-2023',
        product: '',
        isin: '',
        description: 'Depósitos na sua Conta Caixa na flatexDEGIRO Bank AG: 1,62 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '32,41'
        },
        idOrdem: ''
    },
    {
        id: 127,
        date: '13-02-2023',
        hour: '16:34',
        dateValue: '13-02-2023',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,62'
        },
        balance: {
            currency: 'EUR',
            value: '30,79'
        },
        idOrdem: ''
    },
    {
        id: 128,
        date: '13-02-2023',
        hour: '07:15',
        dateValue: '10-02-2023',
        product: 'VORNADO REALTY TRUST C',
        isin: 'US9290421091',
        description: 'Dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '1,88'
        },
        balance: {
            currency: 'USD',
            value: '1,60'
        },
        idOrdem: ''
    },
    {
        id: 129,
        date: '13-02-2023',
        hour: '07:15',
        dateValue: '10-02-2023',
        product: 'VORNADO REALTY TRUST C',
        isin: 'US9290421091',
        description: 'Imposto sobre dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-0,28'
        },
        balance: {
            currency: 'USD',
            value: '-0,28'
        },
        idOrdem: ''
    },
    {
        id: 130,
        date: '11-02-2023',
        hour: '07:33',
        dateValue: '10-02-2023',
        product: '',
        isin: '',
        description: 'Crédito de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '1,62'
        },
        balance: {
            currency: 'EUR',
            value: '32,41'
        },
        idOrdem: ''
    },
    {
        id: 131,
        date: '11-02-2023',
        hour: '07:33',
        dateValue: '10-02-2023',
        product: '',
        isin: '',
        description: 'Levantamento de divisa',
        exchangeTax: '1,0705',
        change: {
            currency: 'USD',
            value: '-1,73'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: ''
    },
    {
        id: 132,
        date: '10-02-2023',
        hour: '07:25',
        dateValue: '09-02-2023',
        product: 'AGNC INVESTMENT CORP',
        isin: 'US00123Q1040',
        description: 'Dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '2,04'
        },
        balance: {
            currency: 'USD',
            value: '1,73'
        },
        idOrdem: ''
    },
    {
        id: 133,
        date: '10-02-2023',
        hour: '07:25',
        dateValue: '09-02-2023',
        product: 'AGNC INVESTMENT CORP',
        isin: 'US00123Q1040',
        description: 'Imposto sobre dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-0,31'
        },
        balance: {
            currency: 'USD',
            value: '-0,31'
        },
        idOrdem: ''
    },
    {
        id: 134,
        date: '08-02-2023',
        hour: '11:20',
        dateValue: '07-02-2023',
        product: '',
        isin: '',
        description: 'Levantamentos da sua Conta Caixa na flatexDEGIRO Bank AG: 1.932,56 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '30,79'
        },
        idOrdem: ''
    },
    {
        id: 135,
        date: '08-02-2023',
        hour: '11:20',
        dateValue: '07-02-2023',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '1932,56'
        },
        balance: {
            currency: 'EUR',
            value: '1963,35'
        },
        idOrdem: ''
    },
    {
        id: 136,
        date: '07-02-2023',
        hour: '16:49',
        dateValue: '07-02-2023',
        product: '',
        isin: '',
        description: 'Depósitos na sua Conta Caixa na flatexDEGIRO Bank AG: 1.906,83 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '30,79'
        },
        idOrdem: ''
    },
    {
        id: 137,
        date: '07-02-2023',
        hour: '16:49',
        dateValue: '07-02-2023',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1906,83'
        },
        balance: {
            currency: 'EUR',
            value: '-1876,04'
        },
        idOrdem: ''
    },
    {
        id: 138,
        date: '07-02-2023',
        hour: '15:35',
        dateValue: '07-02-2023',
        product: 'VICI PROPERTIES INC. C',
        isin: 'US9256521090',
        description: 'Crédito de divisa',
        exchangeTax: '1,0664',
        change: {
            currency: 'USD',
            value: '377,08'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: '81de8c2a-3b2e-455b-8abd-b93cd6e0fa65'
    },
    {
        id: 139,
        date: '07-02-2023',
        hour: '15:35',
        dateValue: '07-02-2023',
        product: 'VICI PROPERTIES INC. C',
        isin: 'US9256521090',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-353,59'
        },
        balance: {
            currency: 'EUR',
            value: '30,79'
        },
        idOrdem: '81de8c2a-3b2e-455b-8abd-b93cd6e0fa65'
    },
    {
        id: 140,
        date: '07-02-2023',
        hour: '15:35',
        dateValue: '07-02-2023',
        product: 'VICI PROPERTIES INC. C',
        isin: 'US9256521090',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '384,38'
        },
        idOrdem: '81de8c2a-3b2e-455b-8abd-b93cd6e0fa65'
    },
    {
        id: 141,
        date: '07-02-2023',
        hour: '15:35',
        dateValue: '07-02-2023',
        product: 'VICI PROPERTIES INC. C',
        isin: 'US9256521090',
        description: 'Compra 11 VICI PROPERTIES INC. C@34,28 USD (US9256521090)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-377,08'
        },
        balance: {
            currency: 'USD',
            value: '-377,08'
        },
        idOrdem: '81de8c2a-3b2e-455b-8abd-b93cd6e0fa65'
    },
    {
        id: 142,
        date: '07-02-2023',
        hour: '15:32',
        dateValue: '07-02-2023',
        product: 'UBER TECHNOLOGIES INC. COMMON STOCK',
        isin: 'US90353T1007',
        description: 'Crédito de divisa',
        exchangeTax: '1,0666',
        change: {
            currency: 'USD',
            value: '336,30'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: '60adf6f2-40d4-40cc-8052-e1b0bdca1116'
    },
    {
        id: 143,
        date: '07-02-2023',
        hour: '15:32',
        dateValue: '07-02-2023',
        product: 'UBER TECHNOLOGIES INC. COMMON STOCK',
        isin: 'US90353T1007',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-315,29'
        },
        balance: {
            currency: 'EUR',
            value: '385,38'
        },
        idOrdem: '60adf6f2-40d4-40cc-8052-e1b0bdca1116'
    },
    {
        id: 144,
        date: '07-02-2023',
        hour: '15:32',
        dateValue: '07-02-2023',
        product: 'UBER TECHNOLOGIES INC. COMMON STOCK',
        isin: 'US90353T1007',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '700,67'
        },
        idOrdem: '60adf6f2-40d4-40cc-8052-e1b0bdca1116'
    },
    {
        id: 145,
        date: '07-02-2023',
        hour: '15:32',
        dateValue: '07-02-2023',
        product: 'UBER TECHNOLOGIES INC. COMMON STOCK',
        isin: 'US90353T1007',
        description: 'Compra 10 UBER TECHNOLOGIES INC. COMMON STOCK@33,63 USD (US90353T1007)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-336,30'
        },
        balance: {
            currency: 'USD',
            value: '-336,30'
        },
        idOrdem: '60adf6f2-40d4-40cc-8052-e1b0bdca1116'
    },
    {
        id: 146,
        date: '07-02-2023',
        hour: '15:31',
        dateValue: '07-02-2023',
        product: 'GLADSTONE COMMERCIAL C',
        isin: 'US3765361080',
        description: 'Crédito de divisa',
        exchangeTax: '1,0667',
        change: {
            currency: 'USD',
            value: '334,20'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: '6bde0e0f-c8a6-46eb-9fdf-6d3107e57c64'
    },
    {
        id: 147,
        date: '07-02-2023',
        hour: '15:31',
        dateValue: '07-02-2023',
        product: 'GLADSTONE COMMERCIAL C',
        isin: 'US3765361080',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-313,29'
        },
        balance: {
            currency: 'EUR',
            value: '701,67'
        },
        idOrdem: '6bde0e0f-c8a6-46eb-9fdf-6d3107e57c64'
    },
    {
        id: 148,
        date: '07-02-2023',
        hour: '15:31',
        dateValue: '07-02-2023',
        product: 'GLADSTONE COMMERCIAL C',
        isin: 'US3765361080',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '1014,96'
        },
        idOrdem: '6bde0e0f-c8a6-46eb-9fdf-6d3107e57c64'
    },
    {
        id: 149,
        date: '07-02-2023',
        hour: '15:31',
        dateValue: '07-02-2023',
        product: 'GLADSTONE COMMERCIAL C',
        isin: 'US3765361080',
        description: 'Compra 20 GLADSTONE COMMERCIAL C@16,71 USD (US3765361080)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-334,20'
        },
        balance: {
            currency: 'USD',
            value: '-334,20'
        },
        idOrdem: '6bde0e0f-c8a6-46eb-9fdf-6d3107e57c64'
    },
    {
        id: 150,
        date: '07-02-2023',
        hour: '15:30',
        dateValue: '07-02-2023',
        product: 'REALTY INCOME CORPORAT',
        isin: 'US7561091049',
        description: 'Crédito de divisa',
        exchangeTax: '1,0665',
        change: {
            currency: 'USD',
            value: '1009,35'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: '0358332c-f42a-4ce4-b62e-234f50c82bce'
    },
    {
        id: 151,
        date: '07-02-2023',
        hour: '15:30',
        dateValue: '07-02-2023',
        product: 'REALTY INCOME CORPORAT',
        isin: 'US7561091049',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-946,39'
        },
        balance: {
            currency: 'EUR',
            value: '1015,96'
        },
        idOrdem: '0358332c-f42a-4ce4-b62e-234f50c82bce'
    },
    {
        id: 152,
        date: '07-02-2023',
        hour: '15:30',
        dateValue: '07-02-2023',
        product: 'REALTY INCOME CORPORAT',
        isin: 'US7561091049',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '1962,35'
        },
        idOrdem: '0358332c-f42a-4ce4-b62e-234f50c82bce'
    },
    {
        id: 153,
        date: '07-02-2023',
        hour: '15:30',
        dateValue: '07-02-2023',
        product: 'REALTY INCOME CORPORAT',
        isin: 'US7561091049',
        description: 'Compra 15 REALTY INCOME CORPORAT@67,29 USD (US7561091049)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-1009,35'
        },
        balance: {
            currency: 'USD',
            value: '-1009,35'
        },
        idOrdem: '0358332c-f42a-4ce4-b62e-234f50c82bce'
    },
    {
        id: 154,
        date: '07-02-2023',
        hour: '10:49',
        dateValue: '06-02-2023',
        product: '',
        isin: '',
        description: 'Depósitos na sua Conta Caixa na flatexDEGIRO Bank AG: 49,55 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '1963,35'
        },
        idOrdem: ''
    },
    {
        id: 155,
        date: '07-02-2023',
        hour: '10:49',
        dateValue: '06-02-2023',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-49,55'
        },
        balance: {
            currency: 'EUR',
            value: '1913,80'
        },
        idOrdem: ''
    },
    {
        id: 156,
        date: '07-02-2023',
        hour: '10:26',
        dateValue: '07-02-2023',
        product: 'ISHARES HEALTHCARE INNOVATION UCITS E...',
        isin: 'IE00BYZK4776',
        description: 'Venda 51 iShares Healthcare Innovation UCITS ETF USD (Acc)@7,146 EUR (IE00BYZK4776)',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '364,45'
        },
        balance: {
            currency: 'EUR',
            value: '1963,35'
        },
        idOrdem: '2f1845bf-c882-4e91-b633-f002b94be744'
    },
    {
        id: 157,
        date: '07-02-2023',
        hour: '10:26',
        dateValue: '07-02-2023',
        product: 'ISHARES HEALTHCARE INNOVATION UCITS E...',
        isin: 'IE00BYZK4776',
        description: 'Venda 7 iShares Healthcare Innovation UCITS ETF USD (Acc)@7,15 EUR (IE00BYZK4776)',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '50,05'
        },
        balance: {
            currency: 'EUR',
            value: '1598,90'
        },
        idOrdem: '2f1845bf-c882-4e91-b633-f002b94be744'
    },
    {
        id: 158,
        date: '07-02-2023',
        hour: '10:25',
        dateValue: '07-02-2023',
        product: 'VANGUARD S&P 500 UCITS ETF USD',
        isin: 'IE00BFMXXD54',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '1548,85'
        },
        idOrdem: 'f68de76d-2d90-44c6-ae47-354e8d9e5c2d'
    },
    {
        id: 159,
        date: '07-02-2023',
        hour: '10:25',
        dateValue: '07-02-2023',
        product: 'VANGUARD S&P 500 UCITS ETF USD',
        isin: 'IE00BFMXXD54',
        description: 'Venda 5 Vanguard S&P 500 UCITS ETF USD@71,292 EUR (IE00BFMXXD54)',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '356,46'
        },
        balance: {
            currency: 'EUR',
            value: '1549,85'
        },
        idOrdem: 'f68de76d-2d90-44c6-ae47-354e8d9e5c2d'
    },
    {
        id: 160,
        date: '07-02-2023',
        hour: '09:05',
        dateValue: '07-02-2023',
        product: 'ISHARES MSCI WOR A',
        isin: 'IE00B4L5Y983',
        description: 'Venda 11 ISHARES MSCI WOR A@73,425 EUR (IE00B4L5Y983)',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '807,68'
        },
        balance: {
            currency: 'EUR',
            value: '1193,39'
        },
        idOrdem: 'dbfb79e7-b65d-44e9-9d63-bad716a4de42'
    },
    {
        id: 161,
        date: '07-02-2023',
        hour: '09:04',
        dateValue: '07-02-2023',
        product: 'ISHARES S&P 500 INF TECH SECTOR UCITS...',
        isin: 'IE00B3WJKG14',
        description: 'Venda 20 iShares S&P 500 Inf Tech Sector UCITS ETF USD(Acc)@16,46 EUR (IE00B3WJKG14)',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '329,20'
        },
        balance: {
            currency: 'EUR',
            value: '385,72'
        },
        idOrdem: 'bf984705-5db2-4ec2-9fc4-de4b570fedd4'
    },
    {
        id: 162,
        date: '06-02-2023',
        hour: '15:30',
        dateValue: '06-02-2023',
        product: 'DIGITAL REALTY TRUST',
        isin: 'US2538681030',
        description: 'Crédito de divisa',
        exchangeTax: '1,0727',
        change: {
            currency: 'USD',
            value: '225,92'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: 'ebd07224-ca6d-4829-8b9b-524cf9c8590b'
    },
    {
        id: 163,
        date: '06-02-2023',
        hour: '15:30',
        dateValue: '06-02-2023',
        product: 'DIGITAL REALTY TRUST',
        isin: 'US2538681030',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-210,61'
        },
        balance: {
            currency: 'EUR',
            value: '56,52'
        },
        idOrdem: 'ebd07224-ca6d-4829-8b9b-524cf9c8590b'
    },
    {
        id: 164,
        date: '06-02-2023',
        hour: '15:30',
        dateValue: '06-02-2023',
        product: 'DIGITAL REALTY TRUST',
        isin: 'US2538681030',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '267,13'
        },
        idOrdem: 'ebd07224-ca6d-4829-8b9b-524cf9c8590b'
    },
    {
        id: 165,
        date: '06-02-2023',
        hour: '15:30',
        dateValue: '06-02-2023',
        product: 'DIGITAL REALTY TRUST',
        isin: 'US2538681030',
        description: 'Compra 2 DIGITAL REALTY TRUST@112,96 USD (US2538681030)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-225,92'
        },
        balance: {
            currency: 'USD',
            value: '-225,92'
        },
        idOrdem: 'ebd07224-ca6d-4829-8b9b-524cf9c8590b'
    },
    {
        id: 166,
        date: '06-02-2023',
        hour: '15:17',
        dateValue: '06-02-2023',
        product: 'ISHARES EL VEHICLES AND DRIVTECH UCIT...',
        isin: 'IE00BGL86Z12',
        description: 'Venda 40 iShares El Vehicles and DrivTech UCITS ETF USD Acc@6,529 EUR (IE00BGL86Z12)',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '261,16'
        },
        balance: {
            currency: 'EUR',
            value: '268,13'
        },
        idOrdem: '5767a64b-0495-4f3f-a307-3857670a7b5b'
    },
    {
        id: 167,
        date: '06-02-2023',
        hour: '11:21',
        dateValue: '03-02-2023',
        product: '',
        isin: '',
        description: 'Levantamentos da sua Conta Caixa na flatexDEGIRO Bank AG: 622,73 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '6,97'
        },
        idOrdem: ''
    },
    {
        id: 168,
        date: '06-02-2023',
        hour: '11:21',
        dateValue: '03-02-2023',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '622,73'
        },
        balance: {
            currency: 'EUR',
            value: '629,70'
        },
        idOrdem: ''
    },
    {
        id: 169,
        date: '03-02-2023',
        hour: '18:08',
        dateValue: '03-02-2023',
        product: 'ARES CAPITAL CORPORATI',
        isin: 'US04010L1035',
        description: 'Crédito de divisa',
        exchangeTax: '1,0806',
        change: {
            currency: 'USD',
            value: '671,84'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: 'f364ea3b-e049-477c-835a-4368ec728712'
    },
    {
        id: 170,
        date: '03-02-2023',
        hour: '18:08',
        dateValue: '03-02-2023',
        product: 'ARES CAPITAL CORPORATI',
        isin: 'US04010L1035',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-621,73'
        },
        balance: {
            currency: 'EUR',
            value: '6,97'
        },
        idOrdem: 'f364ea3b-e049-477c-835a-4368ec728712'
    },
    {
        id: 171,
        date: '03-02-2023',
        hour: '18:08',
        dateValue: '03-02-2023',
        product: 'ARES CAPITAL CORPORATI',
        isin: 'US04010L1035',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '628,70'
        },
        idOrdem: 'f364ea3b-e049-477c-'
    },
    {
        id: 173,
        date: '03-02-2023',
        hour: '18:08',
        dateValue: '03-02-2023',
        product: 'ARES CAPITAL CORPORATI',
        isin: 'US04010L1035',
        description: 'Compra 34 ARES CAPITAL CORPORATI@19,76 USD (US04010L1035)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-671,84'
        },
        balance: {
            currency: 'USD',
            value: '-671,84'
        },
        idOrdem: 'f364ea3b-e049-477c-835a-4368ec728712'
    },
    {
        id: 174,
        date: '03-02-2023',
        hour: '17:49',
        dateValue: '03-02-2023',
        product: '',
        isin: '',
        description: 'Depósitos na sua Conta Caixa na flatexDEGIRO Bank AG: 28,53 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '629,70'
        },
        idOrdem: ''
    },
    {
        id: 175,
        date: '03-02-2023',
        hour: '17:49',
        dateValue: '03-02-2023',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-28,53'
        },
        balance: {
            currency: 'EUR',
            value: '601,17'
        },
        idOrdem: ''
    },
    {
        id: 176,
        date: '03-02-2023',
        hour: '07:36',
        dateValue: '02-02-2023',
        product: '',
        isin: '',
        description: 'Crédito de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '28,53'
        },
        balance: {
            currency: 'EUR',
            value: '629,70'
        },
        idOrdem: ''
    },
    {
        id: 177,
        date: '03-02-2023',
        hour: '07:36',
        dateValue: '02-02-2023',
        product: '',
        isin: '',
        description: 'Levantamento de divisa',
        exchangeTax: '1,0937',
        change: {
            currency: 'USD',
            value: '-31,20'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: ''
    },
    {
        id: 178,
        date: '02-02-2023',
        hour: '07:41',
        dateValue: '01-02-2023',
        product: 'AT&T INC.',
        isin: 'US00206R1023',
        description: 'Dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '15,54'
        },
        balance: {
            currency: 'USD',
            value: '31,20'
        },
        idOrdem: ''
    },
    {
        id: 179,
        date: '02-02-2023',
        hour: '07:41',
        dateValue: '01-02-2023',
        product: 'AT&T INC.',
        isin: 'US00206R1023',
        description: 'Imposto sobre dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-2,33'
        },
        balance: {
            currency: 'USD',
            value: '15,66'
        },
        idOrdem: ''
    },
    {
        id: 180,
        date: '02-02-2023',
        hour: '07:27',
        dateValue: '01-02-2023',
        product: 'VERIZON COMMUNICATIONS',
        isin: 'US92343V1044',
        description: 'Dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '18,92'
        },
        balance: {
            currency: 'USD',
            value: '17,99'
        },
        idOrdem: ''
    },
    {
        id: 181,
        date: '02-02-2023',
        hour: '07:27',
        dateValue: '01-02-2023',
        product: 'VERIZON COMMUNICATIONS',
        isin: 'US92343V1044',
        description: 'Imposto sobre dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-2,84'
        },
        balance: {
            currency: 'USD',
            value: '-0,93'
        },
        idOrdem: ''
    },
    {
        id: 182,
        date: '02-02-2023',
        hour: '07:25',
        dateValue: '01-02-2023',
        product: 'LINCOLN NATIONAL CORPO',
        isin: 'US5341871094',
        description: 'Dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '2,25'
        },
        balance: {
            currency: 'USD',
            value: '1,91'
        },
        idOrdem: ''
    },
    {
        id: 183,
        date: '02-02-2023',
        hour: '07:25',
        dateValue: '01-02-2023',
        product: 'LINCOLN NATIONAL CORPO',
        isin: 'US5341871094',
        description: 'Imposto sobre dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-0,34'
        },
        balance: {
            currency: 'USD',
            value: '-0,34'
        },
        idOrdem: ''
    },
    {
        id: 184,
        date: '31-01-2023',
        hour: '11:31',
        dateValue: '31-01-2023',
        product: '',
        isin: '',
        description: 'flatex Deposit',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '569,00'
        },
        balance: {
            currency: 'EUR',
            value: '601,17'
        },
        idOrdem: ''
    },
    {
        id: 185,
        date: '18-01-2023',
        hour: '11:19',
        dateValue: '17-01-2023',
        product: '',
        isin: '',
        description: 'Levantamentos da sua Conta Caixa na flatexDEGIRO Bank AG: 299,86 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '32,17'
        },
        idOrdem: ''
    },
    {
        id: 186,
        date: '18-01-2023',
        hour: '11:19',
        dateValue: '17-01-2023',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '299,86'
        },
        balance: {
            currency: 'EUR',
            value: '332,03'
        },
        idOrdem: ''
    },
    {
        id: 187,
        date: '17-01-2023',
        hour: '18:56',
        dateValue: '17-01-2023',
        product: 'ARES CAPITAL CORPORATI',
        isin: 'US04010L1035',
        description: 'Crédito de divisa',
        exchangeTax: '1,0748',
        change: {
            currency: 'USD',
            value: '56,97'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: '300ca6b9-2f81-4469-b298-e4aa195dbea5'
    },
    {
        id: 188,
        date: '17-01-2023',
        hour: '18:56',
        dateValue: '17-01-2023',
        product: 'ARES CAPITAL CORPORATI',
        isin: 'US04010L1035',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-53,00'
        },
        balance: {
            currency: 'EUR',
            value: '32,17'
        },
        idOrdem: '300ca6b9-2f81-4469-b298-e4aa195dbea5'
    },
    {
        id: 189,
        date: '17-01-2023',
        hour: '18:56',
        dateValue: '17-01-2023',
        product: 'ARES CAPITAL CORPORATI',
        isin: 'US04010L1035',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '85,17'
        },
        idOrdem: '300ca6b9-2f81-4469-b298-e4aa195dbea5'
    },
    {
        id: 190,
        date: '17-01-2023',
        hour: '18:56',
        dateValue: '17-01-2023',
        product: 'ARES CAPITAL CORPORATI',
        isin: 'US04010L1035',
        description: 'Compra 3 ARES CAPITAL CORPORATI@18,99 USD (US04010L1035)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-56,97'
        },
        balance: {
            currency: 'USD',
            value: '-56,97'
        },
        idOrdem: '300ca6b9-2f81-4469-b298-e4aa195dbea5'
    },
    {
        id: 191,
        date: '17-01-2023',
        hour: '17:19',
        dateValue: '17-01-2023',
        product: '',
        isin: '',
        description: 'Depósitos na sua Conta Caixa na flatexDEGIRO Bank AG: 1,1 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '86,17'
        },
        idOrdem: ''
    },
    {
        id: 192,
        date: '17-01-2023',
        hour: '17:19',
        dateValue: '17-01-2023',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,10'
        },
        balance: {
            currency: 'EUR',
            value: '85,07'
        },
        idOrdem: ''
    },
    {
        id: 193,
        date: '17-01-2023',
        hour: '15:30',
        dateValue: '17-01-2023',
        product: 'ARES CAPITAL CORPORATI',
        isin: 'US04010L1035',
        description: 'Crédito de divisa',
        exchangeTax: '1,0835',
        change: {
            currency: 'USD',
            value: '265,30'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: '16933ffd-4762-47bb-a9aa-32ab59203284'
    },
    {
        id: 194,
        date: '17-01-2023',
        hour: '15:30',
        dateValue: '17-01-2023',
        product: 'ARES CAPITAL CORPORATI',
        isin: 'US04010L1035',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-244,86'
        },
        balance: {
            currency: 'EUR',
            value: '86,17'
        },
        idOrdem: '16933ffd-4762-47bb-a9aa-32ab59203284'
    },
    {
        id: 195,
        date: '17-01-2023',
        hour: '15:30',
        dateValue: '17-01-2023',
        product: 'ARES CAPITAL CORPORATI',
        isin: 'US04010L1035',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '331,03'
        },
        idOrdem: '16933ffd-4762-47bb-a9aa-32ab59203284'
    },
    {
        id: 196,
        date: '17-01-2023',
        hour: '15:30',
        dateValue: '17-01-2023',
        product: 'ARES CAPITAL CORPORATI',
        isin: 'US04010L1035',
        description: 'Compra 14 ARES CAPITAL CORPORATI@18,95 USD (US04010L1035)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-265,30'
        },
        balance: {
            currency: 'USD',
            value: '-265,30'
        },
        idOrdem: '16933ffd-4762-47bb-a9aa-32ab59203284'
    },
    {
        id: 197,
        date: '17-01-2023',
        hour: '07:35',
        dateValue: '16-01-2023',
        product: '',
        isin: '',
        description: 'Crédito de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '1,10'
        },
        balance: {
            currency: 'EUR',
            value: '332,03'
        },
        idOrdem: ''
    },
    {
        id: 198,
        date: '17-01-2023',
        hour: '07:35',
        dateValue: '16-01-2023',
        product: '',
        isin: '',
        description: 'Levantamento de divisa',
        exchangeTax: '1,0848',
        change: {
            currency: 'USD',
            value: '-1,19'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: ''
    },
    {
        id: 199,
        date: '16-01-2023',
        hour: '17:19',
        dateValue: '16-01-2023',
        product: '',
        isin: '',
        description: 'Depósitos na sua Conta Caixa na flatexDEGIRO Bank AG: 21,57 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '330,93'
        },
        idOrdem: ''
    },
    {
        id: 200,
        date: '16-01-2023',
        hour: '17:19',
        dateValue: '16-01-2023',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-21,57'
        },
        balance: {
            currency: 'EUR',
            value: '309,36'
        },
        idOrdem: ''
    },
    {
        id: 201,
        date: '16-01-2023',
        hour: '07:17',
        dateValue: '13-01-2023',
        product: 'REALTY INCOME CORPORAT',
        isin: 'US7561091049',
        description: 'Dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '0,50'
        },
        balance: {
            currency: 'USD',
            value: '1,19'
        },
        idOrdem: ''
    },
    {
        id: 202,
        date: '16-01-2023',
        hour: '07:17',
        dateValue: '13-01-2023',
        product: 'REALTY INCOME CORPORAT',
        isin: 'US7561091049',
        description: 'Imposto sobre dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-0,07'
        },
        balance: {
            currency: 'USD',
            value: '0,69'
        },
        idOrdem: ''
    },
    {
        id: 203,
        date: '16-01-2023',
        hour: '07:10',
        dateValue: '13-01-2023',
        product: 'MAIN STREET CAPITAL CO',
        isin: 'US56035L1044',
        description: 'Dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '0,90'
        },
        balance: {
            currency: 'USD',
            value: '0,76'
        },
        idOrdem: ''
    },
    {
        id: 204,
        date: '16-01-2023',
        hour: '07:10',
        dateValue: '13-01-2023',
        product: 'MAIN STREET CAPITAL CO',
        isin: 'US56035L1044',
        description: 'Imposto sobre dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-0,14'
        },
        balance: {
            currency: 'USD',
            value: '-0,14'
        },
        idOrdem: ''
    },
    {
        id: 205,
        date: '14-01-2023',
        hour: '08:31',
        dateValue: '13-01-2023',
        product: '',
        isin: '',
        description: 'Crédito de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '21,57'
        },
        balance: {
            currency: 'EUR',
            value: '330,93'
        },
        idOrdem: ''
    },
    {
        id: 206,
        date: '14-01-2023',
        hour: '08:31',
        dateValue: '13-01-2023',
        product: '',
        isin: '',
        description: 'Levantamento de divisa',
        exchangeTax: '1,0858',
        change: {
            currency: 'USD',
            value: '-23,42'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: ''
    },
    {
        id: 207,
        date: '13-01-2023',
        hour: '17:19',
        dateValue: '13-01-2023',
        product: '',
        isin: '',
        description: 'Depósitos na sua Conta Caixa na flatexDEGIRO Bank AG: 0,94 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '309,36'
        },
        idOrdem: ''
    },
    {
        id: 208,
        date: '13-01-2023',
        hour: '17:19',
        dateValue: '13-01-2023',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-0,94'
        },
        balance: {
            currency: 'EUR',
            value: '308,42'
        },
        idOrdem: ''
    },
    {
        id: 209,
        date: '13-01-2023',
        hour: '07:34',
        dateValue: '12-01-2023',
        product: '',
        isin: '',
        description: 'Crédito de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '0,94'
        },
        balance: {
            currency: 'EUR',
            value: '309,36'
        },
        idOrdem: ''
    },
    {
        id: 210,
        date: '13-01-2023',
        hour: '07:34',
        dateValue: '12-01-2023',
        product: '',
        isin: '',
        description: 'Levantamento de divisa',
        exchangeTax: '1,0880',
        change: {
            currency: 'USD',
            value: '-1,02'
        },
        balance: {
            currency: 'USD',
            value: '23,42'
        },
        idOrdem: ''
    },
    {
        id: 211,
        date: '13-01-2023',
        hour: '07:24',
        dateValue: '12-01-2023',
        product: 'MEDICAL PROPERTIES TRU',
        isin: 'US58463J3041',
        description: 'Dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '27,55'
        },
        balance: {
            currency: 'USD',
            value: '24,44'
        },
        idOrdem: ''
    },
    {
        id: 212,
        date: '13-01-2023',
        hour: '07:24',
        dateValue: '12-01-2023',
        product: 'MEDICAL PROPERTIES TRU',
        isin: 'US58463J3041',
        description: 'Imposto sobre dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-4,13'
        },
        balance: {
            currency: 'USD',
            value: '-3,11'
        },
        idOrdem: ''
    },
    {
        id: 213,
        date: '12-01-2023',
        hour: '18:19',
        dateValue: '12-01-2023',
        product: '',
        isin: '',
        description: 'Depósitos na sua Conta Caixa na flatexDEGIRO Bank AG: 298,24 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '308,42'
        },
        idOrdem: ''
    },
    {
        id: 214,
        date: '12-01-2023',
        hour: '18:19',
        dateValue: '12-01-2023',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-298,24'
        },
        balance: {
            currency: 'EUR',
            value: '10,18'
        },
        idOrdem: ''
    },
    {
        id: 215,
        date: '12-01-2023',
        hour: '10:39',
        dateValue: '12-01-2023',
        product: 'COVESTRO AG',
        isin: 'DE0006062144',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-4,90'
        },
        balance: {
            currency: 'EUR',
            value: '308,42'
        },
        idOrdem: '0c2dacb3-dbe8-4ff2-bf54-100b13c2d734'
    },
    {
        id: 216,
        date: '12-01-2023',
        hour: '10:39',
        dateValue: '12-01-2023',
        product: 'COVESTRO AG',
        isin: 'DE0006062144',
        description: 'Venda 7 Covestro AG@40,66 EUR (DE0006062144)',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '284,62'
        },
        balance: {
            currency: 'EUR',
            value: '313,32'
        },
        idOrdem: '0c2dacb3-dbe8-4ff2-bf54-100b13c2d734'
    },
    {
        id: 217,
        date: '12-01-2023',
        hour: '07:34',
        dateValue: '11-01-2023',
        product: '',
        isin: '',
        description: 'Crédito de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '18,52'
        },
        balance: {
            currency: 'EUR',
            value: '28,70'
        },
        idOrdem: ''
    },
    {
        id: 218,
        date: '12-01-2023',
        hour: '07:34',
        dateValue: '11-01-2023',
        product: '',
        isin: '',
        description: 'Levantamento de divisa',
        exchangeTax: '1,0784',
        change: {
            currency: 'USD',
            value: '-19,97'
        },
        balance: {
            currency: 'USD',
            value: '1,02'
        },
        idOrdem: ''
    },
    {
        id: 219,
        date: '12-01-2023',
        hour: '07:20',
        dateValue: '11-01-2023',
        product: 'AGNC INVESTMENT CORP',
        isin: 'US00123Q1040',
        description: 'Dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '1,20'
        },
        balance: {
            currency: 'USD',
            value: '20,99'
        },
        idOrdem: ''
    },
    {
        id: 220,
        date: '12-01-2023',
        hour: '07:20',
        dateValue: '11-01-2023',
        product: 'AGNC INVESTMENT CORP',
        isin: 'US00123Q1040',
        description: 'Imposto sobre dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-0,18'
        },
        balance: {
            currency: 'USD',
            value: '19,79'
        },
        idOrdem: ''
    },
    {
        id: 221,
        date: '11-01-2023',
        hour: '07:02',
        dateValue: '10-01-2023',
        product: 'ALTRIA GROUP INC.',
        isin: 'US02209S1033',
        description: 'Dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '23,50'
        },
        balance: {
            currency: 'USD',
            value: '19,97'
        },
        idOrdem: ''
    },
    {
        id: 222,
        date: '11-01-2023',
        hour: '07:02',
        dateValue: '10-01-2023',
        product: 'ALTRIA GROUP INC.',
        isin: 'US02209S1033',
        description: 'Imposto sobre dividendo',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-3,53'
        },
        balance: {
            currency: 'USD',
            value: '-3,53'
        },
        idOrdem: ''
    },
    {
        id: 223,
        date: '04-01-2023',
        hour: '17:19',
        dateValue: '04-01-2023',
        product: '',
        isin: '',
        description: 'Levantamentos da sua Conta Caixa na flatexDEGIRO Bank AG: 70,3 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '10,18'
        },
        idOrdem: ''
    },
    {
        id: 224,
        date: '04-01-2023',
        hour: '17:19',
        dateValue: '04-01-2023',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '70,30'
        },
        balance: {
            currency: 'EUR',
            value: '80,48'
        },
        idOrdem: ''
    },
    {
        id: 225,
        date: '04-01-2023',
        hour: '05:36',
        dateValue: '03-01-2023',
        product: '',
        isin: '',
        description: 'Levantamentos da sua Conta Caixa na flatexDEGIRO Bank AG: 10 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '10,18'
        },
        idOrdem: ''
    },
    {
        id: 226,
        date: '04-01-2023',
        hour: '05:36',
        dateValue: '03-01-2023',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '10,00'
        },
        balance: {
            currency: 'EUR',
            value: '20,18'
        },
        idOrdem: ''
    },
    {
        id: 227,
        date: '03-01-2023',
        hour: '15:30',
        dateValue: '03-01-2023',
        product: 'AGNC INVESTMENT CORP',
        isin: 'US00123Q1040',
        description: 'Crédito de divisa',
        exchangeTax: '1,0546',
        change: {
            currency: 'USD',
            value: '73,08'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: '3a506063-b894-4040-bd00-11e6c56296e6'
    },
    {
        id: 228,
        date: '03-01-2023',
        hour: '15:30',
        dateValue: '03-01-2023',
        product: 'AGNC INVESTMENT CORP',
        isin: 'US00123Q1040',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-69,30'
        },
        balance: {
            currency: 'EUR',
            value: '10,18'
        },
        idOrdem: '3a506063-b894-4040-bd00-11e6c56296e6'
    },
    {
        id: 229,
        date: '03-01-2023',
        hour: '15:30',
        dateValue: '03-01-2023',
        product: 'AGNC INVESTMENT CORP',
        isin: 'US00123Q1040',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '79,48'
        },
        idOrdem: '3a506063-b894-4040-bd00-11e6c56296e6'
    },
    {
        id: 230,
        date: '03-01-2023',
        hour: '15:30',
        dateValue: '03-01-2023',
        product: 'AGNC INVESTMENT CORP',
        isin: 'US00123Q1040',
        description: 'Compra 7 AGNC INVESTMENT CORP@10,44 USD (US00123Q1040)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-73,08'
        },
        balance: {
            currency: 'USD',
            value: '-73,08'
        },
        idOrdem: '3a506063-b894-4040-bd00-11e6c56296e6'
    },
    {
        id: 231,
        date: '03-01-2023',
        hour: '14:04',
        dateValue: '31-12-2022',
        product: '',
        isin: '',
        description: 'Custo de Conectividade DEGIRO 2023 (New York Stock Exchange - NSY)',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-2,50'
        },
        balance: {
            currency: 'EUR',
            value: '80,48'
        },
        idOrdem: ''
    },
    {
        id: 232,
        date: '03-01-2023',
        hour: '14:04',
        dateValue: '31-12-2022',
        product: '',
        isin: '',
        description: 'Custo de Conectividade DEGIRO 2023 (NASDAQ - NDQ)',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-2,50'
        },
        balance: {
            currency: 'EUR',
            value: '82,98'
        },
        idOrdem: ''
    },
    {
        id: 233,
        date: '03-01-2023',
        hour: '14:04',
        dateValue: '31-12-2022',
        product: '',
        isin: '',
        description: 'Custo de Conectividade DEGIRO 2023 (Euronext Amsterdam - EAM)',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-2,50'
        },
        balance: {
            currency: 'EUR',
            value: '85,48'
        },
        idOrdem: ''
    },
    {
        id: 234,
        date: '03-01-2023',
        hour: '14:04',
        dateValue: '31-12-2022',
        product: '',
        isin: '',
        description: 'Custo de Conectividade DEGIRO 2023 (Xetra - XET)',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-2,50'
        },
        balance: {
            currency: 'EUR',
            value: '87,98'
        },
        idOrdem: ''
    },
    {
        id: 235,
        date: '03-01-2023',
        hour: '06:31',
        dateValue: '02-01-2023',
        product: '',
        isin: '',
        description: 'Flatex Interest Income',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '0,00'
        },
        balance: {
            currency: 'EUR',
            value: '90,48'
        },
        idOrdem: ''
    },
    {
        id: 236,
        date: '03-01-2023',
        hour: '00:33',
        dateValue: '02-01-2023',
        product: '',
        isin: '',
        description: 'Levantamentos da sua Conta Caixa na flatexDEGIRO Bank AG: 264,65 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '90,48'
        },
        idOrdem: ''
    },
    {
        id: 237,
        date: '03-01-2023',
        hour: '00:33',
        dateValue: '02-01-2023',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '264,65'
        },
        balance: {
            currency: 'EUR',
            value: '355,13'
        },
        idOrdem: ''
    },
    {
        id: 238,
        date: '02-01-2023',
        hour: '09:00',
        dateValue: '02-01-2023',
        product: 'COVESTRO AG',
        isin: 'DE0006062144',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-4,90'
        },
        balance: {
            currency: 'EUR',
            value: '90,48'
        },
        idOrdem: '60598b9b-b314-4095-828a-c51d03356f60'
    },
    {
        id: 239,
        date: '02-01-2023',
        hour: '09:00',
        dateValue: '02-01-2023',
        product: 'COVESTRO AG',
        isin: 'DE0006062144',
        description: 'Compra 7 Covestro AG@36,75 EUR (DE0006062144)',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-257,25'
        },
        balance: {
            currency: 'EUR',
            value: '95,38'
        },
        idOrdem: '60598b9b-b314-4095-828a-c51d03356f60'
    },
    {
        id: 240,
        date: '30-12-2022',
        hour: '15:17',
        dateValue: '30-12-2022',
        product: '',
        isin: '',
        description: 'Custo de Conectividade DEGIRO 2022 (NASDAQ - NDQ)',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-2,50'
        },
        balance: {
            currency: 'EUR',
            value: '352,63'
        },
        idOrdem: ''
    },
    {
        id: 241,
        date: '29-12-2022',
        hour: '10:48',
        dateValue: '28-12-2022',
        product: '',
        isin: '',
        description: 'Levantamentos da sua Conta Caixa na flatexDEGIRO Bank AG: 606,3 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '355,13'
        },
        idOrdem: ''
    },
    {
        id: 242,
        date: '29-12-2022',
        hour: '10:48',
        dateValue: '28-12-2022',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '606,30'
        },
        balance: {
            currency: 'EUR',
            value: '961,43'
        },
        idOrdem: ''
    },
    {
        id: 243,
        date: '28-12-2022',
        hour: '15:30',
        dateValue: '28-12-2022',
        product: 'AGNC INVESTMENT CORP',
        isin: 'US00123Q1040',
        description: 'Crédito de divisa',
        exchangeTax: '1,0628',
        change: {
            currency: 'USD',
            value: '106,80'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: 'a84e2fb1-ad13-4ede-943b-ff6c00f7438b'
    },
    {
        id: 244,
        date: '28-12-2022',
        hour: '15:30',
        dateValue: '28-12-2022',
        product: 'AGNC INVESTMENT CORP',
        isin: 'US00123Q1040',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-100,49'
        },
        balance: {
            currency: 'EUR',
            value: '355,13'
        },
        idOrdem: 'a84e2fb1-ad13-4ede-943b-ff6c00f7438b'
    },
    {
        id: 245,
        date: '28-12-2022',
        hour: '15:30',
        dateValue: '28-12-2022',
        product: 'AGNC INVESTMENT CORP',
        isin: 'US00123Q1040',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '455,62'
        },
        idOrdem: 'a84e2fb1-ad13-4ede-943b-ff6c00f7438b'
    },
    {
        id: 246,
        date: '28-12-2022',
        hour: '15:30',
        dateValue: '28-12-2022',
        product: 'VORNADO REALTY TRUST C',
        isin: 'US9290421091',
        description: 'Crédito de divisa',
        exchangeTax: '1,0628',
        change: {
            currency: 'USD',
            value: '21,50'
        },
        balance: {
            currency: 'USD',
            value: '-106,80'
        },
        idOrdem: '60c182d4-df11-4b47-a15a-223d2e67e5f0'
    },
    {
        id: 247,
        date: '28-12-2022',
        hour: '15:30',
        dateValue: '28-12-2022',
        product: 'VORNADO REALTY TRUST C',
        isin: 'US9290421091',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-20,23'
        },
        balance: {
            currency: 'EUR',
            value: '456,62'
        },
        idOrdem: '60c182d4-df11-4b47-a15a-223d2e67e5f0'
    },
    {
        id: 248,
        date: '28-12-2022',
        hour: '15:30',
        dateValue: '28-12-2022',
        product: 'VORNADO REALTY TRUST C',
        isin: 'US9290421091',
        description: 'Crédito de divisa',
        exchangeTax: '1,0628',
        change: {
            currency: 'USD',
            value: '21,50'
        },
        balance: {
            currency: 'USD',
            value: '-128,30'
        },
        idOrdem: '60c182d4-df11-4b47-a15a-223d2e67e5f0'
    },
    {
        id: 249,
        date: '28-12-2022',
        hour: '15:30',
        dateValue: '28-12-2022',
        product: 'VORNADO REALTY TRUST C',
        isin: 'US9290421091',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-20,23'
        },
        balance: {
            currency: 'EUR',
            value: '476,85'
        },
        idOrdem: '60c182d4-df11-4b47-a15a-223d2e67e5f0'
    },
    {
        id: 250,
        date: '28-12-2022',
        hour: '15:30',
        dateValue: '28-12-2022',
        product: 'VORNADO REALTY TRUST C',
        isin: 'US9290421091',
        description: 'Crédito de divisa',
        exchangeTax: '1,0628',
        change: {
            currency: 'USD',
            value: '64,50'
        },
        balance: {
            currency: 'USD',
            value: '-149,80'
        },
        idOrdem: '60c182d4-df11-4b47-a15a-223d2e67e5f0'
    },
    {
        id: 251,
        date: '28-12-2022',
        hour: '15:30',
        dateValue: '28-12-2022',
        product: 'VORNADO REALTY TRUST C',
        isin: 'US9290421091',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-60,69'
        },
        balance: {
            currency: 'EUR',
            value: '497,08'
        },
        idOrdem: '60c182d4-df11-4b47-a15a-223d2e67e5f0'
    },
    {
        id: 252,
        date: '28-12-2022',
        hour: '15:30',
        dateValue: '28-12-2022',
        product: 'VORNADO REALTY TRUST C',
        isin: 'US9290421091',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '557,77'
        },
        idOrdem: '60c182d4-df11-4b47-a15a-223d2e67e5f0'
    },
    {
        id: 253,
        date: '28-12-2022',
        hour: '15:30',
        dateValue: '28-12-2022',
        product: 'REALTY INCOME CORPORAT',
        isin: 'US7561091049',
        description: 'Crédito de divisa',
        exchangeTax: '1,0628',
        change: {
            currency: 'USD',
            value: '128,34'
        },
        balance: {
            currency: 'USD',
            value: '-214,30'
        },
        idOrdem: '45a944f1-e54d-4505-a8a3-88b347bd117d'
    },
    {
        id: 254,
        date: '28-12-2022',
        hour: '15:30',
        dateValue: '28-12-2022',
        product: 'REALTY INCOME CORPORAT',
        isin: 'US7561091049',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-120,75'
        },
        balance: {
            currency: 'EUR',
            value: '558,77'
        },
        idOrdem: '45a944f1-e54d-4505-a8a3-88b347bd117d'
    },
    {
        id: 255,
        date: '28-12-2022',
        hour: '15:30',
        dateValue: '28-12-2022',
        product: 'REALTY INCOME CORPORAT',
        isin: 'US7561091049',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '679,52'
        },
        idOrdem: '45a944f1-e54d-4505-a8a3-88b347bd117d'
    },
    {
        id: 256,
        date: '28-12-2022',
        hour: '15:30',
        dateValue: '28-12-2022',
        product: 'AGNC INVESTMENT CORP',
        isin: 'US00123Q1040',
        description: 'Compra 10 AGNC INVESTMENT CORP@10,68 USD (US00123Q1040)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-106,80'
        },
        balance: {
            currency: 'USD',
            value: '-342,64'
        },
        idOrdem: 'a84e2fb1-ad13-4ede-943b-ff6c00f7438b'
    },
    {
        id: 257,
        date: '28-12-2022',
        hour: '15:30',
        dateValue: '28-12-2022',
        product: 'VORNADO REALTY TRUST C',
        isin: 'US9290421091',
        description: 'Compra 1 VORNADO REALTY TRUST C@21,5 USD (US9290421091)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-21,50'
        },
        balance: {
            currency: 'USD',
            value: '-235,84'
        },
        idOrdem: '60c182d4-df11-4b47-a15a-223d2e67e5f0'
    },
    {
        id: 258,
        date: '28-12-2022',
        hour: '15:30',
        dateValue: '28-12-2022',
        product: 'VORNADO REALTY TRUST C',
        isin: 'US9290421091',
        description: 'Compra 1 VORNADO REALTY TRUST C@21,5 USD (US9290421091)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-21,50'
        },
        balance: {
            currency: 'USD',
            value: '-214,34'
        },
        idOrdem: '60c182d4-df11-4b47-a15a-223d2e67e5f0'
    },
    {
        id: 259,
        date: '28-12-2022',
        hour: '15:30',
        dateValue: '28-12-2022',
        product: 'VORNADO REALTY TRUST C',
        isin: 'US9290421091',
        description: 'Compra 3 VORNADO REALTY TRUST C@21,5 USD (US9290421091)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-64,50'
        },
        balance: {
            currency: 'USD',
            value: '-192,84'
        },
        idOrdem: '60c182d4-df11-4b47-a15a-223d2e67e5f0'
    },
    {
        id: 260,
        date: '28-12-2022',
        hour: '15:30',
        dateValue: '28-12-2022',
        product: 'REALTY INCOME CORPORAT',
        isin: 'US7561091049',
        description: 'Compra 2 REALTY INCOME CORPORAT@64,17 USD (US7561091049)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-128,34'
        },
        balance: {
            currency: 'USD',
            value: '-128,34'
        },
        idOrdem: '45a944f1-e54d-4505-a8a3-88b347bd117d'
    },
    {
        id: 261,
        date: '28-12-2022',
        hour: '15:30',
        dateValue: '28-12-2022',
        product: 'LINCOLN NATIONAL CORPO',
        isin: 'US5341871094',
        description: 'Crédito de divisa',
        exchangeTax: '1,0628',
        change: {
            currency: 'USD',
            value: '119,60'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: 'f2b918fe-2cb6-419e-8255-65ba5aff60a4'
    },
    {
        id: 262,
        date: '28-12-2022',
        hour: '15:30',
        dateValue: '28-12-2022',
        product: 'LINCOLN NATIONAL CORPO',
        isin: 'US5341871094',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-112,53'
        },
        balance: {
            currency: 'EUR',
            value: '680,52'
        },
        idOrdem: 'f2b918fe-2cb6-419e-8255-65ba5aff60a4'
    },
    {
        id: 263,
        date: '28-12-2022',
        hour: '15:30',
        dateValue: '28-12-2022',
        product: 'LINCOLN NATIONAL CORPO',
        isin: 'US5341871094',
        description: 'Crédito de divisa',
        exchangeTax: '1,0628',
        change: {
            currency: 'USD',
            value: '29,90'
        },
        balance: {
            currency: 'USD',
            value: '-119,60'
        },
        idOrdem: 'f2b918fe-2cb6-419e-8255-65ba5aff60a4'
    },
    {
        id: 264,
        date: '28-12-2022',
        hour: '15:30',
        dateValue: '28-12-2022',
        product: 'LINCOLN NATIONAL CORPO',
        isin: 'US5341871094',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-28,13'
        },
        balance: {
            currency: 'EUR',
            value: '793,05'
        },
        idOrdem: 'f2b918fe-2cb6-419e-8255-65ba5aff60a4'
    },
    {
        id: 265,
        date: '28-12-2022',
        hour: '15:30',
        dateValue: '28-12-2022',
        product: 'LINCOLN NATIONAL CORPO',
        isin: 'US5341871094',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '821,18'
        },
        idOrdem: 'f2b918fe-2cb6-419e-8255-65ba5aff60a4'
    },
    {
        id: 266,
        date: '28-12-2022',
        hour: '15:30',
        dateValue: '28-12-2022',
        product: 'LINCOLN NATIONAL CORPO',
        isin: 'US5341871094',
        description: 'Compra 4 LINCOLN NATIONAL CORPO@29,9 USD (US5341871094)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-119,60'
        },
        balance: {
            currency: 'USD',
            value: '-149,50'
        },
        idOrdem: 'f2b918fe-2cb6-419e-8255-65ba5aff60a4'
    },
    {
        id: 267,
        date: '28-12-2022',
        hour: '15:30',
        dateValue: '28-12-2022',
        product: 'LINCOLN NATIONAL CORPO',
        isin: 'US5341871094',
        description: 'Compra 1 LINCOLN NATIONAL CORPO@29,9 USD (US5341871094)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-29,90'
        },
        balance: {
            currency: 'USD',
            value: '-29,90'
        },
        idOrdem: 'f2b918fe-2cb6-419e-8255-65ba5aff60a4'
    },
    {
        id: 268,
        date: '28-12-2022',
        hour: '15:30',
        dateValue: '28-12-2022',
        product: 'MAIN STREET CAPITAL CO',
        isin: 'US56035L1044',
        description: 'Crédito de divisa',
        exchangeTax: '1,0627',
        change: {
            currency: 'USD',
            value: '146,92'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: 'd03db92c-f19b-4dc6-9905-7b0f793e69e1'
    },
    {
        id: 269,
        date: '28-12-2022',
        hour: '15:30',
        dateValue: '28-12-2022',
        product: 'MAIN STREET CAPITAL CO',
        isin: 'US56035L1044',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-138,25'
        },
        balance: {
            currency: 'EUR',
            value: '822,18'
        },
        idOrdem: 'd03db92c-f19b-4dc6-9905-7b0f793e69e1'
    },
    {
        id: 270,
        date: '28-12-2022',
        hour: '15:30',
        dateValue: '28-12-2022',
        product: 'MAIN STREET CAPITAL CO',
        isin: 'US56035L1044',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '960,43'
        },
        idOrdem: 'd03db92c-f19b-4dc6-9905-7b0f793e69e1'
    },
    {
        id: 271,
        date: '28-12-2022',
        hour: '15:30',
        dateValue: '28-12-2022',
        product: 'MAIN STREET CAPITAL CO',
        isin: 'US56035L1044',
        description: 'Compra 4 MAIN STREET CAPITAL CO@36,73 USD (US56035L1044)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-146,92'
        },
        balance: {
            currency: 'USD',
            value: '-146,92'
        },
        idOrdem: 'd03db92c-f19b-4dc6-9905-7b0f793e69e1'
    },
    {
        id: 272,
        date: '28-12-2022',
        hour: '11:21',
        dateValue: '28-12-2022',
        product: '',
        isin: '',
        description: 'flatex Deposit',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '950,00'
        },
        balance: {
            currency: 'EUR',
            value: '961,43'
        },
        idOrdem: ''
    },
    {
        id: 273,
        date: '07-12-2022',
        hour: '10:48',
        dateValue: '06-12-2022',
        product: '',
        isin: '',
        description: 'Levantamentos da sua Conta Caixa na flatexDEGIRO Bank AG: 1.134,68 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '11,43'
        },
        idOrdem: ''
    },
    {
        id: 274,
        date: '07-12-2022',
        hour: '10:48',
        dateValue: '06-12-2022',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '1134,68'
        },
        balance: {
            currency: 'EUR',
            value: '1146,11'
        },
        idOrdem: ''
    },
    {
        id: 275,
        date: '06-12-2022',
        hour: '16:54',
        dateValue: '06-12-2022',
        product: 'MEDICAL PROPERTIES TRU',
        isin: 'US58463J3041',
        description: 'Crédito de divisa',
        exchangeTax: '1,0475',
        change: {
            currency: 'USD',
            value: '1187,50'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: '752af0aa-8b91-4e90-'
    },
    {
        id: 277,
        date: '06-12-2022',
        hour: '16:54',
        dateValue: '06-12-2022',
        product: 'MEDICAL PROPERTIES TRU',
        isin: 'US58463J3041',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1133,68'
        },
        balance: {
            currency: 'EUR',
            value: '11,43'
        },
        idOrdem: '752af0aa-8b91-4e90-b86d-2fe6ade9da61'
    },
    {
        id: 278,
        date: '06-12-2022',
        hour: '16:54',
        dateValue: '06-12-2022',
        product: 'MEDICAL PROPERTIES TRU',
        isin: 'US58463J3041',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '1145,11'
        },
        idOrdem: '752af0aa-8b91-4e90-b86d-2fe6ade9da61'
    },
    {
        id: 279,
        date: '06-12-2022',
        hour: '16:54',
        dateValue: '06-12-2022',
        product: 'MEDICAL PROPERTIES TRU',
        isin: 'US58463J3041',
        description: 'Compra 95 MEDICAL PROPERTIES TRU@12,5 USD (US58463J3041)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-1187,50'
        },
        balance: {
            currency: 'USD',
            value: '-1187,50'
        },
        idOrdem: '752af0aa-8b91-4e90-b86d-2fe6ade9da61'
    },
    {
        id: 280,
        date: '05-12-2022',
        hour: '10:48',
        dateValue: '02-12-2022',
        product: '',
        isin: '',
        description: 'Levantamentos da sua Conta Caixa na flatexDEGIRO Bank AG: 1.110,75 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '1146,11'
        },
        idOrdem: ''
    },
    {
        id: 281,
        date: '05-12-2022',
        hour: '10:48',
        dateValue: '02-12-2022',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '1110,75'
        },
        balance: {
            currency: 'EUR',
            value: '2256,86'
        },
        idOrdem: ''
    },
    {
        id: 282,
        date: '02-12-2022',
        hour: '16:49',
        dateValue: '02-12-2022',
        product: '',
        isin: '',
        description: 'Levantamentos da sua Conta Caixa na flatexDEGIRO Bank AG: 725 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '1146,11'
        },
        idOrdem: ''
    },
    {
        id: 283,
        date: '02-12-2022',
        hour: '16:49',
        dateValue: '02-12-2022',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '725,00'
        },
        balance: {
            currency: 'EUR',
            value: '1871,11'
        },
        idOrdem: ''
    },
    {
        id: 284,
        date: '02-12-2022',
        hour: '15:43',
        dateValue: '02-12-2022',
        product: 'INTEL CORPORATION - CO',
        isin: 'US4581401001',
        description: 'Crédito de divisa',
        exchangeTax: '1,0453',
        change: {
            currency: 'USD',
            value: '1160,00'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: 'cc9ce28f-0813-49d7-935f-103c99332729'
    },
    {
        id: 285,
        date: '02-12-2022',
        hour: '15:43',
        dateValue: '02-12-2022',
        product: 'INTEL CORPORATION - CO',
        isin: 'US4581401001',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1109,75'
        },
        balance: {
            currency: 'EUR',
            value: '1146,11'
        },
        idOrdem: 'cc9ce28f-0813-49d7-935f-103c99332729'
    },
    {
        id: 286,
        date: '02-12-2022',
        hour: '15:43',
        dateValue: '02-12-2022',
        product: 'INTEL CORPORATION - CO',
        isin: 'US4581401001',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '2255,86'
        },
        idOrdem: 'cc9ce28f-0813-49d7-935f-103c99332729'
    },
    {
        id: 287,
        date: '02-12-2022',
        hour: '15:43',
        dateValue: '02-12-2022',
        product: 'INTEL CORPORATION - CO',
        isin: 'US4581401001',
        description: 'Compra 40 INTEL CORPORATION - CO@29 USD (US4581401001)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-1160,00'
        },
        balance: {
            currency: 'USD',
            value: '-1160,00'
        },
        idOrdem: 'cc9ce28f-0813-49d7-935f-103c99332729'
    },
    {
        id: 288,
        date: '02-12-2022',
        hour: '14:30',
        dateValue: '02-12-2022',
        product: 'ISHARES MSCI WOR A',
        isin: 'IE00B4L5Y983',
        description: 'Compra 10 ISHARES MSCI WOR A@72,5 EUR (IE00B4L5Y983)',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-725,00'
        },
        balance: {
            currency: 'EUR',
            value: '2256,86'
        },
        idOrdem: 'd4b48c9f-9537-4353-b23a-f9e85bb52d25'
    },
    {
        id: 289,
        date: '02-12-2022',
        hour: '11:49',
        dateValue: '01-12-2022',
        product: '',
        isin: '',
        description: 'Levantamentos da sua Conta Caixa na flatexDEGIRO Bank AG: 1.445,47 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '2981,86'
        },
        idOrdem: ''
    },
    {
        id: 290,
        date: '02-12-2022',
        hour: '11:49',
        dateValue: '01-12-2022',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '1445,47'
        },
        balance: {
            currency: 'EUR',
            value: '4427,33'
        },
        idOrdem: ''
    },
    {
        id: 291,
        date: '01-12-2022',
        hour: '15:59',
        dateValue: '01-12-2022',
        product: 'VERIZON COMMUNICATIONS',
        isin: 'US92343V1044',
        description: 'Crédito de divisa',
        exchangeTax: '1,0496',
        change: {
            currency: 'USD',
            value: '1130,57'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: '8788cec3-3d49-437a-90e7-888952292d4b'
    },
    {
        id: 292,
        date: '01-12-2022',
        hour: '15:59',
        dateValue: '01-12-2022',
        product: 'VERIZON COMMUNICATIONS',
        isin: 'US92343V1044',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1077,17'
        },
        balance: {
            currency: 'EUR',
            value: '2981,86'
        },
        idOrdem: '8788cec3-3d49-437a-90e7-888952292d4b'
    },
    {
        id: 293,
        date: '01-12-2022',
        hour: '15:59',
        dateValue: '01-12-2022',
        product: 'VERIZON COMMUNICATIONS',
        isin: 'US92343V1044',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '4059,03'
        },
        idOrdem: '8788cec3-3d49-437a-90e7-888952292d4b'
    },
    {
        id: 294,
        date: '01-12-2022',
        hour: '15:59',
        dateValue: '01-12-2022',
        product: 'VERIZON COMMUNICATIONS',
        isin: 'US92343V1044',
        description: 'Compra 29 VERIZON COMMUNICATIONS@38,985 USD (US92343V1044)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-1130,56'
        },
        balance: {
            currency: 'USD',
            value: '-1130,57'
        },
        idOrdem: '8788cec3-3d49-437a-90e7-888952292d4b'
    },
    {
        id: 295,
        date: '01-12-2022',
        hour: '15:52',
        dateValue: '01-12-2022',
        product: 'ISHARES HEALTHCARE INNOVATION UCITS E...',
        isin: 'IE00BYZK4776',
        description: 'Compra 50 iShares Healthcare Innovation UCITS ETF USD (Acc)@7,346 EUR (IE00BYZK4776)',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-367,30'
        },
        balance: {
            currency: 'EUR',
            value: '4060,03'
        },
        idOrdem: '746dd9b2-9c27-4afd-a147-dc75ef9a2d39'
    },
    {
        id: 296,
        date: '01-12-2022',
        hour: '11:40',
        dateValue: '01-12-2022',
        product: '',
        isin: '',
        description: 'flatex Deposit',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '4400,00'
        },
        balance: {
            currency: 'EUR',
            value: '4427,33'
        },
        idOrdem: ''
    },
    {
        id: 297,
        date: '14-11-2022',
        hour: '17:49',
        dateValue: '14-11-2022',
        product: '',
        isin: '',
        description: 'Depósitos na sua Conta Caixa na flatexDEGIRO Bank AG: 0,01 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '27,33'
        },
        idOrdem: ''
    },
    {
        id: 298,
        date: '14-11-2022',
        hour: '17:49',
        dateValue: '14-11-2022',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-0,01'
        },
        balance: {
            currency: 'EUR',
            value: '27,32'
        },
        idOrdem: ''
    },
    {
        id: 299,
        date: '14-11-2022',
        hour: '11:51',
        dateValue: '11-11-2022',
        product: '',
        isin: '',
        description: 'Levantamentos da sua Conta Caixa na flatexDEGIRO Bank AG: 129,37 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '27,33'
        },
        idOrdem: ''
    },
    {
        id: 300,
        date: '14-11-2022',
        hour: '11:51',
        dateValue: '11-11-2022',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '129,37'
        },
        balance: {
            currency: 'EUR',
            value: '156,70'
        },
        idOrdem: ''
    },
    {
        id: 301,
        date: '12-11-2022',
        hour: '07:42',
        dateValue: '11-11-2022',
        product: '',
        isin: '',
        description: 'Crédito de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '0,01'
        },
        balance: {
            currency: 'EUR',
            value: '27,33'
        },
        idOrdem: ''
    },
    {
        id: 302,
        date: '12-11-2022',
        hour: '07:42',
        dateValue: '11-11-2022',
        product: '',
        isin: '',
        description: 'Levantamento de divisa',
        exchangeTax: '1,0374',
        change: {
            currency: 'USD',
            value: '-0,01'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: ''
    },
    {
        id: 303,
        date: '11-11-2022',
        hour: '20:56',
        dateValue: '11-11-2022',
        product: 'ALTRIA GROUP INC.',
        isin: 'US02209S1033',
        description: 'Crédito de divisa',
        exchangeTax: '1,0333',
        change: {
            currency: 'USD',
            value: '132,65'
        },
        balance: {
            currency: 'USD',
            value: '0,01'
        },
        idOrdem: 'fb096132-9439-4603-8736-9669b94adf6d'
    },
    {
        id: 304,
        date: '11-11-2022',
        hour: '20:56',
        dateValue: '11-11-2022',
        product: 'ALTRIA GROUP INC.',
        isin: 'US02209S1033',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-128,37'
        },
        balance: {
            currency: 'EUR',
            value: '27,32'
        },
        idOrdem: 'fb096132-9439-4603-8736-9669b94adf6d'
    },
    {
        id: 305,
        date: '11-11-2022',
        hour: '20:56',
        dateValue: '11-11-2022',
        product: 'ALTRIA GROUP INC.',
        isin: 'US02209S1033',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '155,69'
        },
        idOrdem: 'fb096132-9439-4603-8736-9669b94adf6d'
    },
    {
        id: 306,
        date: '11-11-2022',
        hour: '20:56',
        dateValue: '11-11-2022',
        product: 'ALTRIA GROUP INC.',
        isin: 'US02209S1033',
        description: 'Compra 3 ALTRIA GROUP INC.@44,215 USD (US02209S1033)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-132,64'
        },
        balance: {
            currency: 'USD',
            value: '-132,64'
        },
        idOrdem: 'fb096132-9439-4603-8736-9669b94adf6d'
    },
    {
        id: 307,
        date: '03-11-2022',
        hour: '17:49',
        dateValue: '03-11-2022',
        product: '',
        isin: '',
        description: 'Levantamentos da sua Conta Caixa na flatexDEGIRO Bank AG: 552,92 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '156,69'
        },
        idOrdem: ''
    },
    {
        id: 308,
        date: '03-11-2022',
        hour: '17:49',
        dateValue: '03-11-2022',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '552,92'
        },
        balance: {
            currency: 'EUR',
            value: '709,61'
        },
        idOrdem: ''
    },
    {
        id: 309,
        date: '03-11-2022',
        hour: '10:04',
        dateValue: '02-11-2022',
        product: '',
        isin: '',
        description: 'Levantamentos da sua Conta Caixa na flatexDEGIRO Bank AG: 1.058,11 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '156,69'
        },
        idOrdem: ''
    },
    {
        id: 310,
        date: '03-11-2022',
        hour: '10:04',
        dateValue: '02-11-2022',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '1058,11'
        },
        balance: {
            currency: 'EUR',
            value: '1214,80'
        },
        idOrdem: ''
    },
    {
        id: 311,
        date: '03-11-2022',
        hour: '09:04',
        dateValue: '03-11-2022',
        product: 'ISHARES EL VEHICLES AND DRIVTECH UCIT...',
        isin: 'IE00BGL86Z12',
        description: 'Compra 40 iShares El Vehicles and DrivTech UCITS ETF USD Acc@5,954 EUR (IE00BGL86Z12)',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-238,16'
        },
        balance: {
            currency: 'EUR',
            value: '156,69'
        },
        idOrdem: 'a4fd22fa-d998-4afa-9b8d-3193af820f76'
    },
    {
        id: 312,
        date: '03-11-2022',
        hour: '09:04',
        dateValue: '03-11-2022',
        product: 'ISHARES S&P 500 INF TECH SECTOR UCITS...',
        isin: 'IE00B3WJKG14',
        description: 'Compra 20 iShares S&P 500 Inf Tech Sector UCITS ETF USD(Acc)@15,738 EUR (IE00B3WJKG14)',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-314,76'
        },
        balance: {
            currency: 'EUR',
            value: '394,85'
        },
        idOrdem: '0b057022-55cb-4f0a-b97a-3e8bf4d39b19'
    },
    {
        id: 313,
        date: '02-11-2022',
        hour: '17:50',
        dateValue: '02-11-2022',
        product: 'AT&T INC.',
        isin: 'US00206R1023',
        description: 'Crédito de divisa',
        exchangeTax: '0,9837',
        change: {
            currency: 'USD',
            value: '1039,92'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: '54cc960b-fefc-42e2-ae40-388cebe70cce'
    },
    {
        id: 314,
        date: '02-11-2022',
        hour: '17:50',
        dateValue: '02-11-2022',
        product: 'AT&T INC.',
        isin: 'US00206R1023',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1057,11'
        },
        balance: {
            currency: 'EUR',
            value: '709,61'
        },
        idOrdem: '54cc960b-fefc-42e2-ae40-388cebe70cce'
    },
    {
        id: 315,
        date: '02-11-2022',
        hour: '17:50',
        dateValue: '02-11-2022',
        product: 'AT&T INC.',
        isin: 'US00206R1023',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '1766,72'
        },
        idOrdem: '54cc960b-fefc-42e2-ae40-388cebe70cce'
    },
    {
        id: 316,
        date: '02-11-2022',
        hour: '17:50',
        dateValue: '02-11-2022',
        product: 'AT&T INC.',
        isin: 'US00206R1023',
        description: 'Compra 56 AT&T INC.@18,57 USD (US00206R1023)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-1039,92'
        },
        balance: {
            currency: 'USD',
            value: '-1039,92'
        },
        idOrdem: '54cc960b-fefc-42e2-ae40-388cebe70cce'
    },
    {
        id: 317,
        date: '02-11-2022',
        hour: '16:49',
        dateValue: '02-11-2022',
        product: '',
        isin: '',
        description: 'Levantamentos da sua Conta Caixa na flatexDEGIRO Bank AG: 7,3 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '1767,72'
        },
        idOrdem: ''
    },
    {
        id: 318,
        date: '02-11-2022',
        hour: '16:49',
        dateValue: '02-11-2022',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '7,30'
        },
        balance: {
            currency: 'EUR',
            value: '1775,02'
        },
        idOrdem: ''
    },
    {
        id: 319,
        date: '02-11-2022',
        hour: '08:05',
        dateValue: '31-10-2022',
        product: '',
        isin: '',
        description: 'Custo de Conectividade DEGIRO 2022 (New York Stock Exchange - NSY)',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-2,50'
        },
        balance: {
            currency: 'EUR',
            value: '1767,72'
        },
        idOrdem: ''
    },
    {
        id: 320,
        date: '02-11-2022',
        hour: '08:05',
        dateValue: '31-10-2022',
        product: '',
        isin: '',
        description: 'Custo de Conectividade DEGIRO 2022 (Euronext Amsterdam - EAM)',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-2,30'
        },
        balance: {
            currency: 'EUR',
            value: '1770,22'
        },
        idOrdem: ''
    },
    {
        id: 321,
        date: '02-11-2022',
        hour: '08:05',
        dateValue: '31-10-2022',
        product: '',
        isin: '',
        description: 'Custo de Conectividade DEGIRO 2022 (Xetra - XET)',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-2,50'
        },
        balance: {
            currency: 'EUR',
            value: '1772,52'
        },
        idOrdem: ''
    },
    {
        id: 322,
        date: '01-11-2022',
        hour: '10:19',
        dateValue: '31-10-2022',
        product: '',
        isin: '',
        description: 'Levantamentos da sua Conta Caixa na flatexDEGIRO Bank AG: 1.026,72 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '1775,02'
        },
        idOrdem: ''
    },
    {
        id: 323,
        date: '01-11-2022',
        hour: '10:19',
        dateValue: '31-10-2022',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '1026,72'
        },
        balance: {
            currency: 'EUR',
            value: '2801,74'
        },
        idOrdem: ''
    },
    {
        id: 324,
        date: '31-10-2022',
        hour: '15:47',
        dateValue: '31-10-2022',
        product: 'ALTRIA GROUP INC.',
        isin: 'US02209S1033',
        description: 'Crédito de divisa',
        exchangeTax: '0,9866',
        change: {
            currency: 'USD',
            value: '1012,00'
        },
        balance: {
            currency: 'USD',
            value: '0,00'
        },
        idOrdem: '55c414dd-a070-4e25-a276-0d45ebaecb5c'
    },
    {
        id: 325,
        date: '31-10-2022',
        hour: '15:47',
        dateValue: '31-10-2022',
        product: 'ALTRIA GROUP INC.',
        isin: 'US02209S1033',
        description: 'Levantamento de divisa',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1025,72'
        },
        balance: {
            currency: 'EUR',
            value: '1775,02'
        },
        idOrdem: '55c414dd-a070-4e25-a276-0d45ebaecb5c'
    },
    {
        id: 326,
        date: '31-10-2022',
        hour: '15:47',
        dateValue: '31-10-2022',
        product: 'ALTRIA GROUP INC.',
        isin: 'US02209S1033',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '2800,74'
        },
        idOrdem: '55c414dd-a070-4e25-a276-0d45ebaecb5c'
    },
    {
        id: 327,
        date: '31-10-2022',
        hour: '15:47',
        dateValue: '31-10-2022',
        product: 'ALTRIA GROUP INC.',
        isin: 'US02209S1033',
        description: 'Compra 22 ALTRIA GROUP INC.@46 USD (US02209S1033)',
        exchangeTax: '',
        change: {
            currency: 'USD',
            value: '-1012,00'
        },
        balance: {
            currency: 'USD',
            value: '-1012,00'
        },
        idOrdem: '55c414dd-a070-4e25-a276-0d45ebaecb5c'
    },
    {
        id: 328,
        date: '31-10-2022',
        hour: '11:11',
        dateValue: '31-10-2022',
        product: '',
        isin: '',
        description: 'flatex Deposit',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '2800,00'
        },
        balance: {
            currency: 'EUR',
            value: '2801,74'
        },
        idOrdem: ''
    },
    {
        id: 329,
        date: '06-10-2022',
        hour: '17:19',
        dateValue: '06-10-2022',
        product: '',
        isin: '',
        description: 'Levantamentos da sua Conta Caixa na flatexDEGIRO Bank AG: 999,14 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '1,74'
        },
        idOrdem: ''
    },
    {
        id: 330,
        date: '06-10-2022',
        hour: '17:19',
        dateValue: '06-10-2022',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '999,14'
        },
        balance: {
            currency: 'EUR',
            value: '1000,88'
        },
        idOrdem: ''
    },
    {
        id: 331,
        date: '06-10-2022',
        hour: '11:51',
        dateValue: '06-10-2022',
        product: 'NOS, SGPS',
        isin: 'PTZON0AM0006',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '1,74'
        },
        idOrdem: '7492bb7f-5ff4-4a38-9fd7-fd44be95afbb'
    },
    {
        id: 332,
        date: '06-10-2022',
        hour: '11:51',
        dateValue: '06-10-2022',
        product: 'NOS, SGPS',
        isin: 'PTZON0AM0006',
        description: 'Compra 286 NOS, SGPS@3,49 EUR (PTZON0AM0006)',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-998,14'
        },
        balance: {
            currency: 'EUR',
            value: '2,74'
        },
        idOrdem: '7492bb7f-5ff4-4a38-9fd7-fd44be95afbb'
    },
    {
        id: 333,
        date: '06-10-2022',
        hour: '10:50',
        dateValue: '06-10-2022',
        product: '',
        isin: '',
        description: 'flatex Deposit',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '1000,00'
        },
        balance: {
            currency: 'EUR',
            value: '1000,88'
        },
        idOrdem: ''
    },
    {
        id: 334,
        date: '05-10-2022',
        hour: '20:03',
        dateValue: '05-10-2022',
        product: '',
        isin: '',
        description: 'Levantamentos da sua Conta Caixa na flatexDEGIRO Bank AG: 408,65 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '0,88'
        },
        idOrdem: ''
    },
    {
        id: 335,
        date: '05-10-2022',
        hour: '20:03',
        dateValue: '05-10-2022',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '408,65'
        },
        balance: {
            currency: 'EUR',
            value: '409,53'
        },
        idOrdem: ''
    },
    {
        id: 336,
        date: '05-10-2022',
        hour: '10:07',
        dateValue: '05-10-2022',
        product: 'ISHARES HEALTHCARE INNOVATION UCITS E...',
        isin: 'IE00BYZK4776',
        description: 'Compra 8 iShares Healthcare Innovation UCITS ETF USD (Acc)@7,099 EUR (IE00BYZK4776)',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-56,79'
        },
        balance: {
            currency: 'EUR',
            value: '0,88'
        },
        idOrdem: '6d894aab-5ed7-4075-935a-c717b514a3c8'
    },
    {
        id: 337,
        date: '05-10-2022',
        hour: '09:49',
        dateValue: '05-10-2022',
        product: 'VANGUARD S&P 500 UCITS ETF USD',
        isin: 'IE00BFMXXD54',
        description: 'Comissões de transação DEGIRO e/ou taxas de terceiros',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-1,00'
        },
        balance: {
            currency: 'EUR',
            value: '57,67'
        },
        idOrdem: 'e5ae6220-1a5b-4b5a-aeff-7ee5284d1acc'
    },
    {
        id: 338,
        date: '05-10-2022',
        hour: '09:49',
        dateValue: '05-10-2022',
        product: 'VANGUARD S&P 500 UCITS ETF USD',
        isin: 'IE00BFMXXD54',
        description: 'Compra 5 Vanguard S&P 500 UCITS ETF USD@70,172 EUR (IE00BFMXXD54)',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-350,86'
        },
        balance: {
            currency: 'EUR',
            value: '58,67'
        },
        idOrdem: 'e5ae6220-1a5b-4b5a-aeff-7ee5284d1acc'
    },
    {
        id: 339,
        date: '03-10-2022',
        hour: '17:49',
        dateValue: '03-10-2022',
        product: '',
        isin: '',
        description: 'Levantamentos da sua Conta Caixa na flatexDEGIRO Bank AG: 0,2 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '409,53'
        },
        idOrdem: ''
    },
    {
        id: 340,
        date: '03-10-2022',
        hour: '17:49',
        dateValue: '03-10-2022',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '0,20'
        },
        balance: {
            currency: 'EUR',
            value: '409,73'
        },
        idOrdem: ''
    },
    {
        id: 341,
        date: '03-10-2022',
        hour: '10:50',
        dateValue: '03-10-2022',
        product: '',
        isin: '',
        description: 'flatex Deposit',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '400,00'
        },
        balance: {
            currency: 'EUR',
            value: '409,53'
        },
        idOrdem: ''
    },
    {
        id: 342,
        date: '03-10-2022',
        hour: '09:03',
        dateValue: '30-09-2022',
        product: '',
        isin: '',
        description: 'Custo de Conectividade DEGIRO 2022 (Euronext Amsterdam - EAM)',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-0,20'
        },
        balance: {
            currency: 'EUR',
            value: '9,53'
        },
        idOrdem: ''
    },
    {
        id: 343,
        date: '02-10-2022',
        hour: '20:31',
        dateValue: '30-09-2022',
        product: '',
        isin: '',
        description: 'Flatex Interest Income',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '0,00'
        },
        balance: {
            currency: 'EUR',
            value: '9,73'
        },
        idOrdem: ''
    },
    {
        id: 344,
        date: '28-09-2022',
        hour: '17:19',
        dateValue: '28-09-2022',
        product: '',
        isin: '',
        description: 'Levantamentos da sua Conta Caixa na flatexDEGIRO Bank AG: 70,27 EUR',
        exchangeTax: '',
        change: {
            currency: '',
            value: ''
        },
        balance: {
            currency: 'EUR',
            value: '9,73'
        },
        idOrdem: ''
    },
    {
        id: 345,
        date: '28-09-2022',
        hour: '17:19',
        dateValue: '28-09-2022',
        product: 'FLATEX EURO BANKACCOUNT',
        isin: 'NLFLATEXACNT',
        description: 'Degiro Cash Sweep Transfer',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '70,27'
        },
        balance: {
            currency: 'EUR',
            value: '80,00'
        },
        idOrdem: ''
    },
    {
        id: 346,
        date: '28-09-2022',
        hour: '14:50',
        dateValue: '28-09-2022',
        product: 'ISHARES MSCI WOR A',
        isin: 'IE00B4L5Y983',
        description: 'Compra 1 ISHARES MSCI WOR A@70,27 EUR (IE00B4L5Y983)',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '-70,27'
        },
        balance: {
            currency: 'EUR',
            value: '9,73'
        },
        idOrdem: '05a783b9-fde0-4397-88f7-ff597bdeb140'
    },
    {
        id: 347,
        date: '28-09-2022',
        hour: '10:50',
        dateValue: '28-09-2022',
        product: '',
        isin: '',
        description: 'flatex Deposit',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '80,00'
        },
        balance: {
            currency: 'EUR',
            value: '80,00'
        },
        idOrdem: ''
    },
    {
        id: 348,
        date: '03-07-2022',
        hour: '13:11',
        dateValue: '30-06-2022',
        product: '',
        isin: '',
        description: 'Flatex Interest Income',
        exchangeTax: '',
        change: {
            currency: 'EUR',
            value: '0,00'
        },
        balance: {
            currency: 'EUR',
            value: '0,00'
        },
        idOrdem: ''
    }
];

const columns = [
    { field: 'date', headerName: 'DATE', flex: 1 },
    { field: 'dateValue', headerName: 'DATE VALUE', flex: 1 },
    { field: 'product', headerName: 'PRODUCT', flex: 1 },
    { field: 'isin', headerName: 'ISIN', flex: 1 },
    { field: 'description', headerName: 'DESCRIPTION', flex: 1 },
    { field: 'exchangeTax', headerName: 'TAX', flex: 1 },
    { field: 'change.value', headerName: 'CHANGE', flex: 1 },
    { field: 'balance.value', headerName: 'BALANCE', flex: 1 },
];

const DividendsPage = () => (
    <MainCard>
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5
                        }
                    }
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    </MainCard>
);

export default DividendsPage;
