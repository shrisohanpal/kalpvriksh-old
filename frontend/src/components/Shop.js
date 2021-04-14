import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Shop = ({ shop }) =>
{
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/shopscreen/${shop._id}`}>
                <Card.Img src={shop.image} variant='top' />
                <Card.Body>
                    <Card.Title as='div'>
                        <strong>{shop.name}</strong>
                    </Card.Title>
                </Card.Body>
            </Link>
        </Card>
    )
}

export default Shop
