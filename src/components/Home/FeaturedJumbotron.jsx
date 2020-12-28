import React, { useState } from 'react'
import { Jumbotron, Button, Col, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function FeaturedJumbotron({ featured }) {
    const [lgShow, setLgShow] = useState(false);

    return (
        <Col md="12">
            <Jumbotron className="jumbo" style={{
                backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8) ), url(https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/03/Spider-Man.jpg)`,
                backgroundSize: 'cover',
                backgroundRepeat: `no-repeat`,
                height: `500px`
            }}>
                <Col md="6">
                    <h4 className="text-warning">{featured.title}</h4>
                    <p>
                        <Button variant="outline-warning" onClick={() => setLgShow(true)}>More info</Button>
                    </p>
                    <Modal
                        size="lg"
                        show={lgShow}
                        onHide={() => setLgShow(false)}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>
                                {featured.title}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            The Order of the Web has to find a way to help Peter Parker! But someone is on their trail that is not going to make their quest easy!
                            <div>
                                <img src={`${featured.images[0].path}.${featured.images[0].extension}`} width="100%"/>
                            </div>  
                        </Modal.Body>
                        <Link to={`/read/${featured.id}`} className="btn btn-warning">Read</Link>
                    </Modal>
                </Col>
            </Jumbotron>
        </Col>
    )
}

export default FeaturedJumbotron
