import { Modal, Box } from '@mui/material'
import React from 'react'
import styles from './modal.module.css'

const InformationModal = ({Message, Title, open, setOpen, titleColor, children}) => {
    const handleClose = () => setOpen && setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#191818',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4
    };

    return (
        <Modal
            className={styles.modal}
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box className={styles.box} sx={{ ...style, width: 400 }}>
                <h2 style={{color: titleColor }} className={styles.modalTitle} id="parent-modal-title">{Title}</h2>
                <p className={styles.modalMessage} id="parent-modal-description">
                    {Message}
                </p>
                {children}
            </Box>
        </Modal>
    )
}

export default InformationModal