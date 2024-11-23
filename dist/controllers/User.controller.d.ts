import { Request, Response } from 'express';
declare class UserController {
    login(req: Request, res: Response): Promise<Response>;
    register(req: Request, res: Response): Promise<Response>;
    getID(req: Request, res: Response): Promise<Response>;
    getName(req: Request, res: Response): Promise<Response>;
    getContact(req: Request, res: Response): Promise<Response>;
    getEmail(req: Request, res: Response): Promise<Response>;
    getDateOfBirth(req: Request, res: Response): Promise<Response>;
    getRole(req: Request, res: Response): Promise<Response>;
    setName(req: Request, res: Response): Promise<Response>;
    setContact(req: Request, res: Response): Promise<Response>;
    setEmail(req: Request, res: Response): Promise<Response>;
    setDateOfBirth(req: Request, res: Response): Promise<Response>;
    setRole(req: Request, res: Response): Promise<Response>;
    viewMenu(req: Request, res: Response): Promise<Response>;
}
export declare const userController: UserController;
export {};
