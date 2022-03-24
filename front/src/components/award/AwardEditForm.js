import React, { useState } from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';
import * as Api from '../../api';

function AwardEditForm({ award, setAward, setIsEditing }) {
  const { title, description, id } = award;
  const [tempAward, setTempAward] = useState({ title, description });

  const handleAwardValue = (name, value) => {
    setTempAward(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { data } = await Api.put(`awards/${id}`, tempAward);
      setAward(prev => ({
        ...prev,
        title: data.title,
        description: data.description,
      }));
      setIsEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='awardEditTitle' className='mt-3'>
          <Form.Control type='text' placeholder='수상내역' value={tempAward.title} onChange={e => handleAwardValue('title', e.target.value)} />
        </Form.Group>

        <Form.Group controlId='awardEditDescription' className='mt-3'>
          <Form.Control type='text' placeholder='상세내역' value={tempAward.description} onChange={e => handleAwardValue('description', e.target.value)} />
        </Form.Group>

        <Form.Group as={Row} className='mt-3 text-center'>
          <Col>
            <Button variant='primary' type='submit' className='me-2'>
              확인
            </Button>
            <Button variant='secondary' onClick={() => setIsEditing(false)}>
              취소
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
}

export default AwardEditForm;
