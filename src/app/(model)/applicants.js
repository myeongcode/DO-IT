import mongoose, { Schema } from 'mongoose';

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const applicantSchema = new Schema({
  field: String,
  name: String,
  std_id: String,
  major: String,
  phone_num: String,
  email: String,
  grade: String,
  semester: String,
  attend: String,
  question_01: String,
  question_02: String,
  question_03: String,
  question_04: String,
  question_05: String,
  createdAt: {
    type: String,
    default: Date.now,
  },
});

const Applicant =
  mongoose.models.Applicant || mongoose.model('Applicant', applicantSchema);

export default Applicant;
