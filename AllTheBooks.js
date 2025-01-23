import { Card, Col, Row } from "react-bootstrap";
import Books from '../Dati/horror.json'

const AllTheBooks = () => {
return (
<Row> 
    {Books.map((book) => ( 
    <Col key={book.asin} xs={10} s={8} md={4} lg={3}>

        <Card className="miacard" style={{margin: '10px', boxshadow: '0 4px 8px rgba(0, 0, 0, 0.1)', height: '450px', overflow: 'hidden', border: '2px solid fuchsia'}}>
            
            <Card.Img variant="top" style={{maxwidth: '100%', objectfit: 'cover', overflow: 'hidden', borderradius: '8px'}} src={book.img}/>
        
            <Card.Title className="cardtext" > {book.title.substring(0,50)} ... </Card.Title>
            <Card.Text className="cardtext" style={{fontWeight:"bold"}}> {book.category.toUpperCase()}</Card.Text>
            <Card.Text className="cardtext" style={{color:"fuchsia", fontWeight: 'bold'}}> {book.price} € </Card.Text>            
                        </Card>  
    
    
    </Col>))}
</Row>
)
}

export default AllTheBooks;