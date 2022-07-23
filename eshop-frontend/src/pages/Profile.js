import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';

function Profile({isLoggedIn, setIsLoggedIn}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('eshop_jwt');
    axios.get('https://eshop.reskimulud.my.id/user', {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    }).then((res) => {
      console.log(res);
      setName(res.data.data.user.name);
      setEmail(res.data.data.user.email);
    });
  }, []);

  if (!isLoggedIn) {
    return (
      <Navigate to='/auth/login' replace/>
    );
  }

  const onLogout = (e) => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate('/auth/login');
  };

  return (
    <Container>
      <Card className='m-3 p-3'>
        <Card.Title className='m-3'>Name : {name}</Card.Title>
        <Card.Subtitle className='m-3'>Email : {email}</Card.Subtitle>
        <Button onClick={onLogout} variant='danger'>Logout</Button>
      </Card>
    </Container>
  )
}

export default Profile;