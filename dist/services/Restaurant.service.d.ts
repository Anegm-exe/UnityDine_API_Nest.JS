import { Model } from 'mongoose';
import { Restaurant, RestaurantDocument } from '../schemas/Restaurant.schema';
export declare class RestaurantService {
    private restaurantModel;
    constructor(restaurantModel: Model<RestaurantDocument>);
    create(restaurant: Restaurant): Promise<Restaurant>;
    findAll(): Promise<Restaurant[]>;
    findOne(id: number): Promise<Restaurant>;
    update(id: number, updateData: Partial<Restaurant>): Promise<Restaurant>;
    delete(id: number): Promise<void>;
}
