import React from 'react';
import {Card} from 'react-bootstrap';
import '../Styles/card.css'
function CardComp(data) {
  return (
      
    <div>
        <Card style={{ width: '16.5rem' }}>
        <Card.Img variant="top" src= {`https://picsum.photos/265/150?random=${data?.data?.id}`} />
        <Card.Body>
            <Card.Title className="CardTitle">{data?.data?.title}</Card.Title>
            <Card.Text className="CardBody">
            {data?.data?.body} 
            </Card.Text>
            <div className='CardInfo'>
                <Card.Text >ID:&nbsp;
                {data?.data?.id} 
                </Card.Text>
                <Card.Text >UserID:&nbsp;
                {data?.data?.userId} 
                </Card.Text>
            </div>
        </Card.Body>
        </Card>
    </div>
  )
}

export default CardComp