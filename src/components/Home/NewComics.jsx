import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NewComics({ newComics }) {
    return (
        <>
            <Col md="3" className="bg-dark mt-2">
                <Card className="bg-dark">
                    <Card.Img variant="top" src={`${newComics.images[0].path}.${newComics.images[0].extension}`} className="img-thumbnail"/>
                    <Card.Body className="bg-dark text-warning">
                    <Link to={`/read/${newComics.id}`} className="h6 text-warning">{newComics.title}</Link>
                    </Card.Body>
                    
                </Card>
            </Col>
        </>
    )
}

export default NewComics
