import mongoose, { Schema, Model, models } from 'mongoose';

export interface ILinkItem {
  label: string;
  url: string;
  icon?: string;
  order?: number;
  enabled?: boolean;
}

export interface ITheme {
  primaryColor?: string;
  accentColor?: string;
  background?: string;
}

export interface IHilink {
  slug: string;
  title?: string;
  description?: string;
  owner: mongoose.Types.ObjectId; // ref: User
  theme?: ITheme;
  links?: ILinkItem[];
  video?: mongoose.Types.ObjectId; // ref: Video
  resume?: mongoose.Types.ObjectId; // ref: Resume
  published?: boolean;
  views?: number;
}

const LinkItemSchema = new Schema<ILinkItem>(
  {
    label: { type: String, required: true, trim: true },
    url: { type: String, required: true, trim: true },
    icon: { type: String },
    order: { type: Number, default: 0 },
    enabled: { type: Boolean, default: true },
  },
  { _id: true, timestamps: false }
);

const ThemeSchema = new Schema<ITheme>(
  {
    primaryColor: { type: String },
    accentColor: { type: String },
    background: { type: String },
  },
  { _id: false }
);

const HilinkSchema = new Schema<IHilink>(
  {
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    title: { type: String, trim: true },
    description: { type: String },
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    theme: { type: ThemeSchema, default: {} },
    links: { type: [LinkItemSchema], default: [] },
    video: { type: Schema.Types.ObjectId, ref: 'Video' },
    resume: { type: Schema.Types.ObjectId, ref: 'Resume' },
    published: { type: Boolean, default: true },
    views: { type: Number, default: 0 },
  },
  { timestamps: true }
);

HilinkSchema.index({ slug: 1 }, { unique: true });
HilinkSchema.index({ owner: 1, createdAt: -1 });

const Hilink: Model<IHilink> = (models.Hilink as Model<IHilink>) || mongoose.model<IHilink>('Hilink', HilinkSchema);

export default Hilink;

