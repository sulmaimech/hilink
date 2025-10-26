import mongoose, { Schema, Model, models } from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  username: string;
  avatarUrl?: string;
  bio?: string;
  socials: {
    twitter: string;
    instagram: string;
    github: string;
    linkedin: string;
    youtube: string;
    website: string;
  };
  hilinks: string[];
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    username: { type: String, required: true, unique: true, lowercase: true, trim: true },
    avatarUrl: { type: String },
    bio: { type: String, maxlength: 500 },
    socials: {
      twitter: { type: String, trim: true },
      instagram: { type: String, trim: true },
      github: { type: String, trim: true },
      linkedin: { type: String, trim: true },
      youtube: { type: String, trim: true },
      website: { type: String, trim: true }
    }
  },
  { timestamps: true }
);

const User: Model<IUser> = (models.User as Model<IUser>) || mongoose.model<IUser>('User', UserSchema);

export default User;

