// material-ui
import { Typography, Box, Button, Stepper, Step, StepLabel } from '@mui/material';
import { useEffect, useState } from 'react';

// assets
import { EditOutlined } from '@ant-design/icons';

// react-dropzone
import Dropzone from "react-dropzone";

// project import
import MainCard from 'components/MainCard';
import ImportedFileVisualization from './ImportedFileVisualization';
import FileParser from 'utils/tools/file-parser';

// ==============================|| SAMPLE PAGE ||============================== //

const steps = ['Select File', 'Save File'];

const ImportFilePage = () => {

    const [activeStep, setActiveStep] = useState(0);

    const [selectedFile, setSelectedFile] = useState(null);

    const [selectedFileContent, setSelectedFileContent] = useState('');

    const onDrop = (acceptedFiles) => {
        setSelectedFile(acceptedFiles[0]);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }

    const handleNext = () => {
        if (activeStep === 0) {
            if (selectedFile) {
                const reader = new FileReader();

                reader.onload = async (e) => {
                    const content = (e.target.result);
                    setSelectedFileContent(content);
                };

                reader.readAsText(selectedFile);

                const csvContent = `Data,Hora,Produto,ISIN,Bolsa de,Bolsa,Quantidade,Preços,,Valor local,,Valor,,Taxa de Câmbio,Custos de transação,,Total,,ID da Ordem
17-03-2023,14:43,MEDICAL PROPERTIES TRU,US58463J3041,NSY,CDED,50,8.0050,USD,-400.25,USD,-376.67,EUR,1.0626,,,-376.67,EUR,4b54e707-50ce-4536-9158-3d476b493000`;

                const fileParser = new FileParser();

                fileParser.parse(selectedFileContent);
            }
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    const getStepContent = () => {
        if (activeStep === 0) {
            return (
                <Dropzone
                    acceptedFiles=".csv"
                    multiple={false}
                    onDrop={onDrop}
                >
                    {({ getRootProps, getInputProps }) =>
                    (
                        <Box {...getRootProps()}
                            border={'2px dashed #00D5FA'}
                            p='1rem'
                            sx={{ '&:hover': { cursor: 'pointer' } }}>
                            <input {...getInputProps()} />
                            {
                                !selectedFile ?
                                    (<p>Add File Here</p>) :
                                    (
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Typography>
                                                {selectedFile.name}
                                            </Typography>
                                            <EditOutlined />
                                        </Box>
                                    )
                            }
                        </Box>
                    )}
                </Dropzone>
            )
        }
        else if (activeStep == 1) {
            return (
                <ImportedFileVisualization importedFileContent={selectedFileContent}/>
            )
        }
    }

    return (
        <MainCard title="Import File">
            <Box>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {
                    activeStep === steps.length ? (
                        <div><h1>ola</h1></div>
                    ) : (
                        <Box sx={{ mt: '2rem' }}>
                            {getStepContent()}
                            <Box sx={{ mt: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                                <Button variant="contained" disabled={activeStep === 0} onClick={handleBack}>
                                    Back
                                </Button>
                                <Button variant="contained" disabled={activeStep === 1} onClick={handleNext}>
                                    Next
                                </Button>
                            </Box>
                        </Box>
                    )
                }
            </Box>
        </MainCard>
    );
};

export default ImportFilePage;
