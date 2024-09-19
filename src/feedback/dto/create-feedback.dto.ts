export class CreateFeedbackDto {
    user_name: string;
    user_mobile: string;
    message: string;
    response?: string;
    status: string;
    is_deleted?: boolean;
}
