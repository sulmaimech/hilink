import mongoose, { Schema, Model, models } from 'mongoose';

export interface IVideo {
  user: mongoose.Types.ObjectId;
  hilink: mongoose.Types.ObjectId; // ref: Hilink
  url: string; // link to video file
}

const VideoSchema = new Schema<IVideo>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    hilink: { type: Schema.Types.ObjectId, ref: 'Hilink', required: true },
    url: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

VideoSchema.index({ hilink: 1 });

const Video: Model<IVideo> = (models.Video as Model<IVideo>) || mongoose.model<IVideo>('Video', VideoSchema);

export default Video;

