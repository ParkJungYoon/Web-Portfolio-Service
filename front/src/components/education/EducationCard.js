import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

function EducationCard({ education, setIsEditing, isEditable, handleDeleteClick }) {
  return (
    <Row className='align-items-center'>
      <Col>
        <Card.Text className='mb-2 mt-3'>{education.school}</Card.Text>
        <Card.Subtitle className='text-muted'>{`${education.major} (${education.position})`}</Card.Subtitle>
      </Col>
      {isEditable && (
        <>
          <Col xs='auto' lg='1'>
            <Button className='mr-3' variant='outline-info' size='sm' onClick={() => setIsEditing(edit => !edit)}>
              편집
            </Button>
          </Col>
          <Col xs='auto' lg='1'>
            <Button className='mr-3' variant='outline-danger' size='sm' onClick={() => handleDeleteClick(education._id)}>
              삭제
            </Button>
          </Col>
        </>
      )}
    </Row>
  );
}
export default EducationCard;
