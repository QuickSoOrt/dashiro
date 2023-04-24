class PortfolioSummaryFileParser {
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

    parse(file) {
        const lines = file.trim().split('\n');

        const parsedLines = [];

        for (let i = 1; i < lines.length; i++) {
            const line = lines[i];

            const values = this.splitByCommas(line);

            const parsedLine = {
                date: values[0],
                hour: values[1],
                dateValue: values[2],
                product: values[3],
                isin: values[4],
                description: values[5],
                exchangeRate: values[6],
                change: {
                    currency: values[7],
                    value: values[8]
                },
                balance: {
                    currency: values[9],
                    value: values[10]
                },
                orderId: values[11]
            };

            if (parsedLine.date || parsedLine.hour || parsedLine.dateValue || parsedLine.product || parsedLine.isin || parsedLine.description) {
                parsedLines.push(parsedLine);
            }
        }

        return parsedLines;
    }
}

export default PortfolioSummaryFileParser;