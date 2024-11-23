import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';

@Module({
    imports: [
        // Connect to MongoDB 
        MongooseModule.forRoot('mongodb+srv://dbUser:ClRDnHMGCWJu8JpO@unitydine.jnzpu.mongodb.net/UnityDine'),

        MongooseModule.forFeature([
            { name: 'User', schema: UserSchema },                               // Register The UserSchema
        ]),
    ],
})
export class DatabaseModule { }