import { RestaurantService } from './restaurant.service';
import { Restaurant } from '../schemas/restaurant.schema';
export declare class RestaurantController {
    private readonly restaurantService;
    constructor(restaurantService: RestaurantService);
    create(createRestaurantDto: Restaurant): Promise<Restaurant>;
    findAll(): Promise<Restaurant[]>;
    findOne(id: number): Promise<Restaurant>;
    update(id: number, updateRestaurantDto: Partial<Restaurant>): Promise<Restaurant>;
    delete(id: number): Promise<void>;
}
