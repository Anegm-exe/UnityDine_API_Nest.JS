declare class SeatingService {
    createSeating(seatingData: any): Promise<any>;
    getAllSeatings(): Promise<any[]>;
    getSeatingById(id: string): Promise<any | null>;
    updateSeating(id: string, updateData: Partial<any>): Promise<any | null>;
    deleteSeating(id: string): Promise<any | null>;
}
declare const _default: SeatingService;
export default _default;
