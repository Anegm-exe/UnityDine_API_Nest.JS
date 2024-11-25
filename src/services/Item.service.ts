import { Item } from '../schemas/Item.schema';
import { Types } from 'mongoose';
class ItemService {

    async createItem(itemData: any): Promise<any> {
        try{
            const newItem = new Item(itemData);
            return await newItem.save();
        }
        catch (error) {
            throw new Error(`Error creating Item: ${error.message}`);
        }
    }

    async getAllItems(): Promise<any[]> {
        try {
            return await Item.find();
        } catch (error) {
            throw new Error(`Error fetching Items: ${error.message}`);
        }
    }
    
    // Added this so I can use it in controller to get items by restaurant ID
    async getItemsByRestaurantId(restaurantId: string): Promise<any[]> {
        try {
          return await Item.findById({_Rid: restaurantId}); 
        } catch (error) {
          throw new Error(`Error fetching items by restaurantId: ${error.message}`);
        }
      }

    async getItemById(id: string): Promise<any | null> {
        try {
            return await Item.findById(new Types.ObjectId(id));
        } catch (error) {
            throw new Error(`Error fetching Item by id: ${error.message}`);
        }
    }

    async updateItem(id: string, updateData: any): Promise<any | null> {
        try {
            const updatedMenu = await Item.findByIdAndUpdate(
                new Types.ObjectId(id),
                updateData,
                { new: true }
            );

            if (!updatedMenu) {
                throw new Error('Item not found');
            }
            return updatedMenu;
        } catch (error) {
            throw new Error(`Error updating Item: ${error.message}`);
        }
    }

    async deleteItem(id: string): Promise<any | null> {
        try {
            return await Item.findByIdAndDelete(new Types.ObjectId(id));
        } catch (error) {
            throw new Error(`Error deleting Item: ${error.message}`);
        }
    }
}

export default new ItemService();