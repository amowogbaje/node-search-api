import mongoose, { Document, Schema } from 'mongoose';

interface IGrade {
  date: Date;
  grade: string;
  score: number;
}

interface IAddress {
  building: string;
  street: string;
}

interface IRestaurant extends Document {
  address: IAddress;
  cuisine: string;
  grades: IGrade[];
  name: string;
  restaurant_id: string;
}

const GradeSchema: Schema = new Schema({
  date: { type: Date, required: true },
  grade: { type: String, required: true },
  score: { type: Number, required: true }
});

const AddressSchema: Schema = new Schema({
  building: { type: String, required: true },
  street: { type: String, required: true }
});

const RestaurantSchema: Schema = new Schema({
  address: { type: AddressSchema, required: true },
  cuisine: { type: String, required: true },
  grades: { type: [GradeSchema], required: true },
  name: { type: String, required: true },
  restaurant_id: { type: String, required: true }
});

const Restaurant = mongoose.model<IRestaurant>('Restaurant', RestaurantSchema);

export default Restaurant;
