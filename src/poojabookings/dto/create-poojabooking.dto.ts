export class CreatePoojabookingDto {
    id: number;
    name: string;
    mobile: string;
    address: string;
    description?: string;
    pooja_seva_id: number;
    booking_date: string;
    status: string;
    is_deleted?: boolean;
}
