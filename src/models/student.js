// src/models/student.js

import { Schema, model } from 'mongoose';
import { Student } from './models/student.js';

const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // прибирає пробіли на початку та в кінці
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ['male', 'female', 'other'],
    },
    avgMark: {
      type: Number,
      required: true,
    },
    onDuty: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
console.log(studentSchema);
export const Student = model('Student', studentSchema);
console.log(Student);
