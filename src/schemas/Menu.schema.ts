import { Schema, model } from 'mongoose';

// Enum for Item Types
enum ItemType {
  food = 'food',
  drink = 'drink',
  dessert = 'dessert',
}

const MenuSchema = new Schema(
  {
    _id: { type: Number, required: true }, 
    name : { type: [String], required: true }, 
    type: { 
        type: [String], 
        enum: Object.values(ItemType), 
        required: true 
      },  
    description: { type: [String], required: true }, 
    price: { type: [Number], required: true },
    available: { type: [Boolean], required: true }, 
  },
  {
    timestamps: true, 
  }
);
export const Menu = model('Menu', MenuSchema);
