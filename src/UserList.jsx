import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col } from 'react-bootstrap';


const DEFAULT_AVATAR = 'https://via.placeholder.com/150';
const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <Container className="my-4">
      <Row>
        {users.map(user => (
          <Col md={4} lg={3} key={user.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={user.avatar || DEFAULT_AVATAR} />
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                  <strong>Email:</strong> {user.email}
                </Card.Text>
                <Card.Text>
                  <strong>Role:</strong> {user.role}
                </Card.Text>
                <Card.Text>
                  <strong>Created At:</strong> {new Date(user.createdAt).toLocaleDateString()}
                </Card.Text>
                <Card.Text>
                  <strong>Updated At:</strong> {new Date(user.updatedAt).toLocaleDateString()}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserList;
