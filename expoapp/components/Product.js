import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Product = ({ product }) =>
{
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.images[0]} variant='top' />

                <Card.Body>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                    <Card.Text as='h3'>₹ {product.price}</Card.Text>
                </Card.Body>
            </Link>
        </Card>
    )
}

export default Product
