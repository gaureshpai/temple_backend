export class CreateRoomDto {
    room_number: string;
    room_type: string;
    capacity: number;
    status: string;
    is_deleted?: boolean;
}
