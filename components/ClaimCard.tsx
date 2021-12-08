import React from "react";
import { ClaimI } from "../dummy";
import textShortener from "../utils/textShortener";

export default function ClaimCard({ isRead, claimNumber, text }: ClaimI) {
	return (
		<div className=" border-b-[1px] border-black flex items-center p-4 cursor-pointer">
			<div className="relative ">
				<div className="w-[27px] h-[27px] bg-yellow-200 rounded-full" />
				<div className="w-[27px] h-[27px] bg-purple-50 rounded-full absolute top-2 left-2" />
			</div>
			<div className={`${isRead && "border-black font-bold"} text-xs ml-4`}>
				{text}
				{claimNumber} {text.length ? `${textShortener(text, 10).length}` : null}
			</div>
		</div>
	);
}
