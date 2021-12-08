import React from "react";
import { SenderEnum } from "../types";

interface Props {
	text: string;
	sender: SenderEnum;
}
export default function ChatCard({ text, sender }: Props) {
	const isAdmin: boolean = sender.toLowerCase().includes("admin");

	return (
		<div
			className={`w-full flex ${
				isAdmin ? "justify-end" : "justify-start"
			} mb-5`}
		>
			<div
				className={`${
					isAdmin ? "flex-row-reverse" : ""
				} flex items-start gap-3 `}
			>
				<div className="flex-shrink-0  w-[44px] h-[44px] bg-black rounded-full" />

				<div className="">
					<p
						className="items-center flex text-xs
                     px-4 py-2 bg-black 
                     text-white w-[179px]"
					>
						{text}
					</p>
					<small
						className={`${isAdmin ? "text-right" : "text-left"}text-gray-300`}
					>
						{sender}
					</small>
				</div>
			</div>
		</div>
	);
}
