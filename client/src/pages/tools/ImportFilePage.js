// material-ui
import { Typography, Box, Button, Stepper, Step, StepLabel } from '@mui/material';
import { useState } from 'react';

// assets
import { EditOutlined } from '@ant-design/icons';

// react-dropzone
import Dropzone from "react-dropzone";

// project import
import MainCard from 'components/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const steps = ['Select File', 'Save File'];

const ImportFilePage = () => {

    const [activeStep, setActiveStep] = useState(0);

    const [selectedFile, setSelectedFile] = useState(null);

    const onDrop = (acceptedFiles) => {
        setSelectedFile(acceptedFiles[0]);
    };

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
                        <Box sx={{ mt:'2rem' }}>
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
                        </Box>
                    )
                }
            </Box>
        </MainCard>
    );
};

export default ImportFilePage;
