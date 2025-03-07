import mongoose, { mongo, Schema } from 'mongoose';

const adminSchema = new Schema(
  {
    id: String,
    password: String,
  },
  { collection: 'admins' }
);

const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);

export default Admin;
