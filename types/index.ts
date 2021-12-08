export enum SenderEnum {
	customer = "customer",
	admin = " admin",
	seller = "seller",
}

export type ChatI = { id: string | number; sender: SenderEnum; text: string }[];
