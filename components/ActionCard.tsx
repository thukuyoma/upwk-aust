import React from "react";
interface Props {
	actionText: string;
}
export default function ActionCard({ actionText }: Props) {
	return (
		<div className="bg-black py-2 px-4 flex items-start h-full text-white text-[10px]">
			<div>{actionText}</div>
		</div>
	);
}
