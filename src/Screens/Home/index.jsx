import { Card, CardActionArea, CardContent, CircularProgress, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllProducts } from '../../Store/products/thunks';
import styles from './home.module.css'
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const { isError, isLoading, data} = useSelector((state) => state.products);

  return (
      <div className={styles.home}>
          <h2 className={styles.title}>Start buying on our website!</h2>

          <h3 className={styles.subTitle}>Arrón Final</h3>

          <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

          <div className={styles.cardContainer}>
            { isLoading ? <CircularProgress />
            : isError ? <h2 className={styles.errorMessage}>Error getting products</h2>
            : data.slice(0, 3).map(x => 
              <Card className={styles.cardStyle} key={x._id}>
                <CardActionArea onClick={() => navigate('/products')}>
                    <CardContent>
                        <Typography className={styles.cardHeader} gutterBottom variant="h5" component="div">
                            {x.name}
                        </Typography>
                        <Typography className={styles.cardDescription} variant="body2" color="text.secondary">
                          {x.description}
                        </Typography>
                    </CardContent>
                    <div className={styles.cardBottom}>
                      <div>
                        ${x.price}
                      </div>
                      <div>
                        {x.stock} Units
                      </div>
                    </div>
                </CardActionArea>
              </Card>)}
          </div>
      </div>
  )
}

export default Home