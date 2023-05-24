// material-ui
import { Typography, Box, Button, Stepper, Step, StepLabel } from '@mui/material';
import { useEffect, useState } from 'react';

// assets
import { EditOutlined } from '@ant-design/icons';

// react-dropzone
import Dropzone from 'react-dropzone';

// project import
import MainCard from 'components/MainCard';
import ImportedFileVisualization from './ImportedFileVisualization';
import PortfolioSummaryFileParser from 'utils/tools/portfolio-summary-file-parser';
import { Alert, AlertTitle, Snackbar } from '../../../../node_modules/@mui/material/index';
import { setPortfolioSummary } from 'store/reducers/portfolioSummary';
import { useDispatch } from '../../../../node_modules/react-redux/es/exports';

// ==============================|| SAMPLE PAGE ||============================== //

const steps = ['Select File', 'Save File', 'Finish'];

const ImportPortfolioSummaryFilePage = () => {
    const [activeStep, setActiveStep] = useState(0);

    const [selectedFile, setSelectedFile] = useState(null);

    const [parsedRows, setParsedRows] = useState(null);

    const [isMessagesSnackBackOpen, setIsMessagesSnackBackOpen] = useState(false);

    const dispatch = useDispatch();

    const handleCloseMessagesSnackBack = () => {
        setIsMessagesSnackBackOpen(false);
    };

    const onDrop = (acceptedFiles) => {
        setSelectedFile(acceptedFiles[0]);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleNext = () => {
        if (activeStep === 0) {
            if (selectedFile) {
                const reader = new FileReader();

                reader.onloadend = async () => {
                    const content = reader.result;
                    
                    const fileParser = new PortfolioSummaryFileParser();

                    const parsedRowsAux = fileParser.parse(content);

                    setParsedRows(parsedRowsAux);

                    setActiveStep((prevActiveStep) => prevActiveStep + 1);
                };

                reader.readAsText(selectedFile);
            } else {
                setIsMessagesSnackBackOpen(true);
            }
        }
        else if (activeStep === 1) {
            dispatch(setPortfolioSummary({ portfolioSummary: parsedRows }));

            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const getStepContent = () => {
        if (activeStep === 0) {
            return (
                <Dropzone acceptedFiles=".csv" multiple={false} onDrop={onDrop}>
                    {({ getRootProps, getInputProps }) => (
                        <Box {...getRootProps()} border={'2px dashed #00D5FA'} p="1rem" sx={{ '&:hover': { cursor: 'pointer' } }}>
                            <input {...getInputProps()} />
                            {!selectedFile ? (
                                <p>Add File Here</p>
                            ) : (
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography>{selectedFile.name}</Typography>
                                    <EditOutlined />
                                </Box>
                            )}
                        </Box>
                    )}
                </Dropzone>
            );
        } else if (activeStep === 1) {
            return <ImportedFileVisualization rows={parsedRows} />;
        } else if (activeStep === 2) {
            return <p>Import completed successfully.</p>
        }
    };

    return (
        <MainCard>
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
                {activeStep === steps.length ? (
                    <div>
                        <h1>ola</h1>
                    </div>
                ) : (
                    <Box sx={{ mt: '2rem' }}>
                        {getStepContent()}
                        <Box sx={{ mt: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                            <Button variant="contained" disabled={activeStep === 0} onClick={handleBack}>
                                Back
                            </Button>
                            {
                                activeStep === 0 &&
                                <Button variant="contained" onClick={handleNext}>
                                    Import
                                </Button>
                            }
                            {
                                activeStep === 1 &&
                                <Button variant="contained" onClick={handleNext}>
                                    Save
                                </Button>
                            }
                        </Box>
                    </Box>
                )}

                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    open={isMessagesSnackBackOpen}
                    autoHideDuration={6000}
                    onClose={handleCloseMessagesSnackBack}
                >
                    <Alert variant="filled" onClose={handleCloseMessagesSnackBack} severity="warning">
                        <AlertTitle>Warning</AlertTitle>
                        It is necessary to select the file to import!
                    </Alert>
                </Snackbar>
            </Box>
        </MainCard>
    );
};

export default ImportPortfolioSummaryFilePage;
