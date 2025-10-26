import mongoose, { Schema, Model, models } from 'mongoose';

export interface IResume {
  user: mongoose.Types.ObjectId; // ref: USer
  hilink: mongoose.Types.ObjectId; // ref: Hilink
  pdfUrl: string; // link to PDF file
}

const ResumeSchema = new Schema<IResume>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    hilink: { type: Schema.Types.ObjectId, ref: 'Hilink', required: true },
    pdfUrl: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

ResumeSchema.index({ hilink: 1 });

const Resume: Model<IResume> = (models.Resume as Model<IResume>) || mongoose.model<IResume>('Resume', ResumeSchema);

export default Resume;

