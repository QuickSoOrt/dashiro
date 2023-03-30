class FileParser {
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

        console.log(lines.length);

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
                exchangeTax: values[6],
                change: {
                    currency: values[7],
                    value: values[8]
                },
                balance: {
                    currency: values[9],
                    value: values[10]
                },
                idOrdem: values[11]
            };

            parsedLines.push(parsedLine);
        }

        return parsedLines;
    }
}

export default FileParser;