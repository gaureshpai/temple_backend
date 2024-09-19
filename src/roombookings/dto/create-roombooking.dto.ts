export class CreateRoombookingDto {
    user_name: string;
    user_mobile: string;
    address: string;
    room_id: number;
    booking_start_date: string;
    booking_end_date: string;
    status: string;
    is_deleted?: boolean;
}
