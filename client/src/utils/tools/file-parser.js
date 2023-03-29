const expectedHeaders = [
    'Data',
    'Hora',
    'Produto',
    'ISIN',
    'Bolsa de',
    'Bolsa',
    'Quantidade',
    'Preços',
    '',
    'Valor local',
    '',
    'Valor',
    '',
    'Taxa de Câmbio',
    'Custos de transação',
    '',
    'Total',
    '',
    'ID da Ordem'
];

export default class FileParser {
    constructor() {

    }

    parse(file) {
        const rows = file.split('\n');

        const headers = rows[0].split(',');

        if (!headers.every((header, i) => header === expectedHeaders[i])) {
            console.log('Headers are not in the correct order');
            return;
        }

        const data = [];

        for (let i = 1; i < rows.length; i++) {
            const row = rows[i].split(',');

            // Check if the row has the correct number of columns
            if (row.length !== headers.length) {
                console.log(`Row ${i} has the wrong number of columns`);
                continue;
            }

            const obj = {};

            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = row[j];
            }

            // Check if the data types of certain columns are correct
            if (typeof obj['Quantidade'] !== 'number') {
                console.log(`Row ${i}: Quantidade is not a number`);
                continue;
            }

            if (typeof obj['Preços'] !== 'number') {
                console.log(`Row ${i}: Preços is not a number`);
                continue;
            }

            if (typeof obj['Valor local'] !== 'number') {
                console.log(`Row ${i}: Valor local is not a number`);
                continue;
            }

            if (typeof obj['Valor'] !== 'number') {
                console.log(`Row ${i}: Valor is not a number`);
                continue;
            }

            if (typeof obj['Taxa de Câmbio'] !== 'number') {
                console.log(`Row ${i}: Taxa de Câmbio is not a number`);
                continue;
            }

            data.push(obj);

            console.log(data);
        }
    }
}