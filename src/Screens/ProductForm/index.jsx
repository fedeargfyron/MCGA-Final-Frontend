import React, { useEffect, useState } from 'react'
import styles from './productForm.module.css'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Input from '../../Components/Shared/Input'
import InputContainer from '../../Components/Shared/InputContainer'
import Button from '../../Components/Shared/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faCancel } from '@fortawesome/free-solid-svg-icons'
import { getProductById, postProduct, updateProduct } from '../../Store/products/thunks'
import InformationModal from '../../Components/Shared/InformationModal'
const ProductForm = () => {
    const [openModal, setOpenModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [formTitle, setFormTitle] = useState('Add product');
    const [editForm, setEditForm] = useState(false);
    const [titleColor, setTitleColor] = useState('#F44336');
    const [dispatchPostFlag, setDispatchPostFlag] = useState(false);
    const [dispatchPutFlag, setDispatchPutFlag] = useState(false);
    const params = useParams();
    const dispatch = useDispatch();
    
    const { 
        getByIdIsLoading, 
        product, 
        getByIdIserror, 
        postIsLoading,
        postIserror, 
        postData,
        putIsLoading, 
        putIserror,
        putData
      } = useSelector((state) => state.products);
    const id = params.id;
    const { register, setValue, handleSubmit, formState: { errors } } = useForm();

    let navigate = useNavigate();

    useEffect(() => {
        if (id) dispatch(getProductById(id));
    }, [id, dispatch]);

    useEffect(() => {
        if(!dispatchPostFlag || postIsLoading) return;

        if(postIserror){
            setOpenModal(true);
            setModalMessage(postData.Message);
            setTitleColor('#F44336');
            return;
        }

        if(postData) navigate('/products');
         
    }, [postIsLoading, postIserror, postData, dispatchPostFlag, navigate]);

    useEffect(() => {
        if(!dispatchPutFlag || putIsLoading) return;
        
        if(putIserror){
            setOpenModal(true);
            setModalMessage(putData.Message);
            setTitleColor('#F44336');
            return;
        }

        if(putData) navigate('/products');
         
    }, [putIsLoading, putIserror, putData, dispatchPutFlag, navigate]);

    useEffect(() => {
        if(!id || getByIdIsLoading) return;
        
        if(getByIdIserror){
            setOpenModal(true);
            setModalMessage(product.Message);
            setTitleColor('#F44336');
            return;
        }

        if(!product) return;

        setOpenModal(false);
        setEditForm(true);
        setFormTitle("Edit product");
        setValue("name", product.name);
        setValue("description", product.description);
        setValue("price", product.price);
        setValue("stock", product.stock);
        setValue("category", product.category);
    }, [id, product, setValue, getByIdIsLoading, getByIdIserror]);

    const onSubmit = (e) => {
        let body = {
            "name": e.name,
            "description": e.description,
            "price": e.price,
            "stock": e.stock,
            "category": e.category
        };

        if(editForm){
            dispatch(updateProduct(id, body));
            setDispatchPutFlag(true);
        }
        else{
            dispatch(postProduct(body));
            setDispatchPostFlag(true);
        }
    }


    if(id && getByIdIsLoading) return <h2>Loading....</h2>;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            { openModal && 
            <InformationModal 
                Title={formTitle}
                Message={modalMessage}
                open={openModal}
                setOpen={setOpenModal}
                titleColor={titleColor}
            />
            }
            <h2 className={styles.formTitle}>{formTitle}</h2>
            <InputContainer label={'Name'}>
                <Input
                    register={register}
                    inputName={'name'}
                    requiredTags={{ required: true, maxLength: 20, minLength: 3, pattern: /(^$)|[a-zA-Z0-9]/ }}
                    placeholder={'Name'}
                    errors={errors.name}
                />
            </InputContainer>
            <InputContainer label={'Description'}>
                <Input
                    register={register}
                    inputName={'description'}
                    requiredTags={{ required: true }}
                    placeholder={'Description'}
                    errors={errors.description}
                />
            </InputContainer>
            <InputContainer label={'Price'}>
                <Input
                    register={register}
                    inputName={'price'}
                    type="number"
                    requiredTags={{ required: true, min: 1 }}
                    placeholder={'Price'}
                    errors={errors.price}
                />
            </InputContainer>
            <InputContainer label={'Stock'}>
                <Input
                    register={register}
                    inputName={'stock'}
                    type="number"
                    requiredTags={{ required: true, min: 1 }}
                    placeholder={'Stock'}
                    errors={errors.stock}
                />
            </InputContainer>
            <InputContainer label={'Category'}>
                <Input
                    register={register}
                    inputName={'category'}
                    requiredTags={{ required: true, maxLength: 50, pattern: /(^$)|[a-zA-Z0-9]/ }}
                    placeholder={'Category'}
                    errors={errors.category}
                />
            </InputContainer>
            <div className={styles.buttonContainer}>
                <Button 
                content='Add' 
                background={'#28a745'} 
                type='submit'
                icon={<FontAwesomeIcon icon={faAdd}/>} 
                />
                <Button
                onClick={() => navigate('/products')}
                content='Cancel' 
                background={'#F44336'} 
                type='button'
                icon={<FontAwesomeIcon icon={faCancel}/>}
                 />
            </div>
        </form>
    )
}

export default ProductForm