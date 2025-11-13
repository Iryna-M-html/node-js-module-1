import createHttpError from 'http-errors';
import { Student } from '../models/student.js';

// export const getAllStudents = async (req, res) => {
//   const students = await Student.find();
//   res.status(200).json(students);
// };

export const getStudents = async (req, res) => {
  // Отримуємо пара метри пагінації
  const { page = 1, perPage = 10 } = req.query;

  const skip = (page - 1) * perPage;

  // Створюємо базовий запит до колекції
  const studentsQuery = Student.find();

  // Виконуємо одразу два запити паралельно
  const [totalItems, students] = await Promise.all([
    studentsQuery.clone().countDocuments(),
    studentsQuery.skip(skip).limit(perPage),
  ]);
  //skip — это метод Mongoose (и MongoDB), который указывает,
  // сколько документов нужно пропустить перед тем, как начать
  //  возвращать результаты запроса.

  //   То есть:
  // skip(N) пропускает N документов в коллекции;
  // limit(M) возвращает не более M документов после пропущенных;
  // Вместе они реализуют пагинацию (разбиение на страницы).

  //   🧭 skip в твоём коде используется, чтобы не выводить все записи
  // сразу, а показывать только нужную «страницу» данных — например,
  // вторую десятку студентов.

  // Обчислюємо загальну кількість «сторінок»
  const totalPages = Math.ceil(totalItems / perPage);

  res.status(200).json({
    page,
    perPage,
    totalItems,
    totalPages,
    students,
  });
};

export const getStudentById = async (req, res) => {
  const { studentId } = req.params;

  const student = await Student.findById(studentId);
  if (!student) {
    throw createHttpError(404, 'Student not found');
  }

  res.status(200).json(student);
};

export const createStudent = async (req, res) => {
  const student = await Student.create(req.body);
  res.status(201).json(student);
};

export const deleteStudent = async (req, res) => {
  const { studentId } = req.params;

  const student = await Student.findOneAndDelete({
    _id: studentId,
  });

  if (!student) {
    throw createHttpError(404, 'Student not found');
  }

  res.status(200).json(student);
};

export const updateStudent = async (req, res) => {
  const { studentId } = req.params;

  const student = await Student.findOneAndUpdate({ _id: studentId }, req.body, {
    new: true,
  });
  if (!student) {
    throw createHttpError(404, 'Student not found');
  }

  res.status(200).json(student);
};
