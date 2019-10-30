import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const TrmSchema = new mongoose.Schema(
  {
    source: {
      type: String,
      required: true,
    },
    target: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    time: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

TrmSchema.plugin(mongoosePaginate);

export default mongoose.model('Trm', TrmSchema);
