class TransactionsFileParser {
    constructor() {}

    splitByCommas = (str) => {
        const values = [];

        let currentVal = '';

        let insideQuotes = false;

        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            if (char === ',' && !insideQuotes) {
                values.push(currentVal);
                currentVal = '';
            } else if (char === '"') {
                insideQuotes = !insideQuotes;
            } else {
                currentVal += char;
            }
        }

        values.push(currentVal);

        return values;
    };

    async parse(file) {
        const lines = file.trim().split('\n');

        const parsedLines = [];

        for (let i = 1; i < lines.length; i++) {
            const line = lines[i];

            const values = this.splitByCommas(line);

            const parsedLine = {
                date: values[0],
                hour: values[1],
                product: values[2],
                isin: values[3],
                exchange: values[4],
                quantity: values[6],
                price: {
                    value: values[7],
                    currency: values[8]
                },
                localValue: {
                    value: values[9],
                    currency: values[10]
                },
                value: {
                    value: values[11],
                    currency: values[12]
                },
                exchangeRate: values[13],
                transactionCosts: {
                    value: values[14],
                    currency: values[15]
                },
                total: {
                    value: values[16],
                    currency: values[17]
                },
                orderId: values[18]
            };

            if (parsedLine.date || parsedLine.hour || parsedLine.dateValue || parsedLine.product || parsedLine.isin || parsedLine.description) {
                parsedLines.push(parsedLine);
            }
        }

        return parsedLines;
    }
}

export default TransactionsFileParser;