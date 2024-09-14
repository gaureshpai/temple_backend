import Role from "../entities/role.enum";

export class CreateUserDto {

    id: number;
    name: string;
    email: string;
    phone_number: string
    password: string
    role: Role
    user_status: boolean

}
