import is from '@sindresorhus/is';
import { Router } from 'express';
import { EducationService } from '../services/educationService';
import { login_required } from '../middlewares/login_required';

const educationRouter = Router();

educationRouter.post('/education/create', login_required, async (req, res, next) => {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error('headers의 Content-Type을 application/json으로 설정해주세요');
    }

    const user_id = req.body.user_id;
    const school = req.body.school;
    const major = req.body.major;
    const position = req.body.position;

    const newEducation = await EducationService.addEducation({
      user_id,
      school,
      major,
      position,
    });

    if (newEducation.errorMessage) {
      throw new Error(newEducation.errorMessage);
    }

    res.status(201).json(newEducation);
  } catch (error) {
    next(error);
  }
});

educationRouter.get('/educations/:id', login_required, async (req, res, next) => {
  try {
    const education_id = req.params.id;
    const currentEducationInfo = await EducationService.getEducationInfo({
      education_id,
    });

    if (currentEducationInfo.errorMessage) {
      throw new Error(currentEducationInfo.errorMessage);
    }
    res.status(200).send(currentEducationInfo);
  } catch (error) {
    next(error);
  }
});

educationRouter.put('/educations/:id', login_required, async (req, res, next) => {
  try {
    const education_id = req.params.id;
    const school = req.body.school ?? null;
    const major = req.body.major ?? null;
    const position = req.body.position ?? null;

    const toUpdate = { school, major, position };

    const updatedEducation = await EducationService.setEducation({ education_id, toUpdate });

    if (updatedEducation.errorMessage) {
      throw new Error(updatedEducation.errorMessage);
    }

    res.status(200).json(updatedEducation);
  } catch (error) {
    next(error);
  }
});

export { educationRouter };
