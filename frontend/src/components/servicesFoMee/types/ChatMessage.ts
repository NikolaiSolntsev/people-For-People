import User from "../../user/type/User";

export type ChatMessage = {
    bayer_id: number;
    saler_id: number;
    myService_id: number;
    text: string;
    User: User;
    id: number;
    createdAt: string;
}