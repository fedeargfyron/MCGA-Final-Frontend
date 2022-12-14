import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../Components/Shared/Button';
import { deleteProduct, getAllProducts } from '../../Store/products/thunks' 
import styles from './products.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faAdd, faPencil, faCheck, faCancel } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import InformationModal from '../../Components/Shared/InformationModal';
import { CircularProgress } from '@mui/material';
const Products = () => {
    const [dispatchFlag, setDispatchFlag] = useState(false)
    const [modalMessage, setModalMessage] = useState('');
    const [productId, setProductId] = useState(null)
    const [openModal, setOpenModal] = useState(false);
    const { isError, isLoading, data, deleteData, deleteIsLoading, deleteIsError } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    let navigate = useNavigate();
    
    const routeChange = (id) => {
        let path = id ? `/products/form/${id}` : '/products/form'
        navigate(path);
    }
    
    const deleteProductConfirmation = (id) => {
        setModalMessage(`Are you sure you want to delete product ${id} from the list?`);
        setOpenModal(true);
        setProductId(id);
    }

    useEffect(() => {
        if(!dispatchFlag || deleteIsLoading)
            return;

        if(deleteIsError === false) return setOpenModal(false);

        setModalMessage(deleteData.Message);
        setOpenModal(true);
    }, [deleteIsLoading, deleteIsError, deleteData, dispatchFlag]);

    const confirmDelete = () => {
        dispatch(deleteProduct(productId));
        setDispatchFlag(true);
    }

    if (isLoading) return <h2><CircularProgress /></h2>

    if(isError) return <h2 className={styles.errorMessage}>Error getting products</h2>

    return (
        <div className={styles.tableContainer}>
            { openModal && 
            <InformationModal 
                Title='Delete product'
                Message={modalMessage}
                open={openModal}
                setOpen={setOpenModal}
            >
                {
                    deleteIsLoading ? <CircularProgress />
                    :   <div>
                            <Button 
                                background={'none'} 
                                color={'#28a745'} 
                                icon={<FontAwesomeIcon size='2x' icon={faCheck} />}
                                onClick={() => confirmDelete()} />
                            <Button 
                                background={'none'} 
                                color={'#F44336'} 
                                icon={<FontAwesomeIcon size='2x' icon={faCancel} />}
                                onClick={() => setOpenModal(false)} />
                        </div>
                }
                
            </InformationModal>}
            <div className={styles.table}>
                <div className={styles.tableTitle}>
                    <h2>Manage products</h2>
                    <div className={styles.buttonContainer}>
                        <Button
                            onClick={() => routeChange()}
                            background={'#28a745'} 
                            content={"Add product"} 
                            icon={<FontAwesomeIcon icon={faAdd} />}
                        ></Button>
                    </div>
                </div>
                <table className={styles.tableContent}>
                    <thead>
                        <tr className={`${styles.tableRow} ${styles.tableHeader}`}>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((product) => 
                                <tr className={styles.tableRow} key={product._id}>
                                        <td>{product._id}</td>
                                        <td>{product.name}</td>
                                        <td>${product.price}</td>
                                        <td>{product.stock}</td>
                                        <td>{product.category}</td>
                                        <td>
                                            <Button 
                                                background={'none'} 
                                                color={'#FFC107'} 
                                                icon={<FontAwesomeIcon icon={faPencil} />}
                                                onClick={() => routeChange(product._id)} />
                                            <Button 
                                                background={'none'} 
                                                color={'#F44336'} 
                                                icon={<FontAwesomeIcon icon={faTrash} />}
                                                onClick={() => deleteProductConfirmation(product._id)} />
                                        </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Products