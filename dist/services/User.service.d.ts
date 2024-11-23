declare class UserService {
    createUser(userData: any): Promise<any>;
    getAllUsers(): Promise<any[]>;
    getUserById(id: string): Promise<any | null>;
    getUserByEmail(email: string): Promise<any | null>;
    updateUser(id: string, updateData: Partial<any>): Promise<any | null>;
    deleteUser(id: string): Promise<any | null>;
}
declare const _default: UserService;
export default _default;
