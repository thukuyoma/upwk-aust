import React, { useState } from "react";
import { AddIconWhite } from "../assets";

export default function ChatInput() {
	const [text, setText] = useState<string>("");

	const handleSend = () => {
		alert(text);
		setText("");
	};
	return (
		<div className="flex items-start text-white h-[36px]">
			<div className="bg-black px-5 w-full h-full flex items-center justify-center">
				<AddIconWhite />
			</div>
			<textarea
				onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
					setText(e.target.value)
				}
				value={text}
				className="mx-3  outline-none h-full w-[280px] flex-shrink-0 bg-black"
			/>
			<button onClick={handleSend} className="bg-black h-full px-4 w-full">
				Send
			</button>
		</div>
	);
}
