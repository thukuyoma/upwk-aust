import { ChatI, SenderEnum } from "../types";

export const chats: ChatI = [
	{
		id: 1,
		sender: SenderEnum.customer,
		text: "Poor quality",
	},
	{ id: 2, sender: SenderEnum.seller, text: "Let me replace" },
	{
		id: 3,
		sender: SenderEnum.seller,
		text: "No, give me refund",
	},
	{
		id: 4,
		sender: SenderEnum.customer,
		text: "No, give me refund",
	},
	{
		id: 5,
		sender: SenderEnum.admin,
		text: "Hi buyer, please attach a photo to show the poor quality",
	},
	{ id: 6, sender: SenderEnum.customer, text: "Photo image attachment" },
	{
		id: 7,
		sender: SenderEnum.admin,
		text: "Okay this is poor quality we will be refunding this order. Case closed.",
	},
];

export interface ClaimI {
	id: number | string;
	isRead: boolean;
	claimNumber: number | string;
	text: string;
}

export const claims: ClaimI[] = [
	{ id: 1, isRead: false, claimNumber: "Claim 1", text: "God and Kim" },
	{ id: 2, isRead: true, claimNumber: "Claim 2", text: "Ricky 512 and God" },
	{
		id: 3,
		isRead: false,
		claimNumber: "Claim 3",
		text: "Justin 387 and Ricky 512",
	},
	{ id: 4, isRead: true, claimNumber: "Claim 4", text: "" },
	{ id: 5, isRead: true, claimNumber: "Claim 5", text: "" },
	{ id: 6, isRead: true, claimNumber: "Claim 6", text: "" },
];

export const actionTrails: string[] = [
	"Redund",
	"Release Fund",
	"Extend Protection",
	"Complete Order",
];
