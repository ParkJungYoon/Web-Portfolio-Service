import { Schema, model } from 'mongoose';

const EducationSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },

    school: {
      type: String,
      required: true,
    },
    major: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
      default: '설명이 아직 없습니다. 추가해 주세요.',
    },
  },
  {
    timestamps: true,
  }
);

const EducationModel = model('Education', EducationSchema);

export { EducationModel };
