import { Router } from 'express';
import {
  createStudent,
  deleteStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
} from '../controllers/studentsController.js';

import {
  createStudentSchema,
  studentIdParamSchema,
  updateStudentSchema,
} from '../validations/studentsValidation.js';
import { celebrate } from 'celebrate';

const router = Router();

router.get('/students', getAllStudents);

router.get(
  '/students/:studentId',
  celebrate(studentIdParamSchema),
  getStudentById,
);
router.post('/students', celebrate(createStudentSchema), createStudent);
router.delete(
  '/students/:studentId',
  celebrate(studentIdParamSchema),
  deleteStudent,
);
router.patch(
  '/students/:studentId',
  celebrate(updateStudentSchema),
  updateStudent,
);

export default router;
