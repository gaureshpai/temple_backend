export class CreateDonationDto {


    user_name: string;
    user_mobile: string;
    amount: number;
    donation_date: string;
    purpose: string;
    status: string;
    payment_method: string;
    payment_id: string;
    is_deleted?: boolean;
}

