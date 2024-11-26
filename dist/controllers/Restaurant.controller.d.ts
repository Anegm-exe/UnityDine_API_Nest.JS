import { RestaurantService } from '../services/Restaurant.service';
import { Restaurant } from '../schemas/Restaurant.schema';
export declare class RestaurantController {
    private readonly restaurantService;
    constructor(restaurantService: RestaurantService);
    create(createRestaurantDto: Restaurant): Promise<Restaurant>;
    findAll(): Promise<Restaurant[]>;
    findOne(id: number): Promise<Restaurant>;
    update(id: number, updateRestaurantDto: Partial<Restaurant>): Promise<Restaurant>;
    delete(id: number): Promise<void>;
}
