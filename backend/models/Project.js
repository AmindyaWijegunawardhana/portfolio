import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  tags: [String],
  role: String,
  impact: String,
  featured: {
    type: Boolean,
    default: false
  },
  caseStudy: {
    problem: String,
    research: String,
    insights: [String],
    wireframes: String,
    finalScreens: [String],
    metrics: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Project', projectSchema);
