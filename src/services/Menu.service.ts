import { Menu } from '../schemas/Menu.schema';
import { Types } from 'mongoose';
class MenuService {

    async createMenu(menuData: any): Promise<any> {
        try{
            const newMenu = new Menu(menuData);
            return await newMenu.save();
        }
        catch (error) {
            throw new Error(`Error creating menu: ${error.message}`);
        }
    }


    async getAllMenus(): Promise<any[]> {
        try {
            return await Menu.find();
        } catch (error) {
            throw new Error(`Error fetching menus: ${error.message}`);
        }
    }

    async getMenuById(id: string): Promise<any | null> {
        try {
            return await Menu.findById(new Types.ObjectId(id));
        } catch (error) {
            throw new Error(`Error fetching menu by id: ${error.message}`);
        }
    }

    async updateMenu(id: string, updateData: any): Promise<any | null> {
        try {
            const updatedMenu = await Menu.findByIdAndUpdate(
                new Types.ObjectId(id),
                updateData,
                { new: true }
            );

            if (!updatedMenu) {
                throw new Error('Menu not found');
            }
            return updatedMenu;
        } catch (error) {
            throw new Error(`Error updating menu: ${error.message}`);
        }
    }

    async deleteMenu(id: string): Promise<any | null> {
        try {
            return await Menu.findByIdAndDelete(new Types.ObjectId(id));
        } catch (error) {
            throw new Error(`Error deleting menu: ${error.message}`);
        }
    }
}

export default new MenuService();