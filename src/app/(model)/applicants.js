import mongoose, { Schema } from 'mongoose';

const applicantSchema = new Schema(
  {
    field: String,
    category: String,
    name: String,
    stdID: String,
    major: String,
    phone: String,
    email: String,
    grade: String,
    semester: String,
    attend: Boolean,
    q1: String,
    q2: String,
    q3: String,
    q4Exp: Boolean,
    q4: String,
    q5: String,
    q6Link: String,
    q6File: String,
    informTerm: Boolean,
    portfolioTerm: Boolean,
    createdAt: {
      type: String,
      default: Date.now,
    },
  },
  { collection: 'applicants' }
);

const Applicant =
  mongoose.models.Applicant || mongoose.model('Applicant', applicantSchema);

export default Applicant;
