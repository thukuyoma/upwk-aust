import type { NextPage } from "next";
import React from "react";
import ActionCard from "../components/ActionCard";
import ChatCard from "../components/ChatCard";
import ChatInput from "../components/ChatInput";
import ClaimCard from "../components/ClaimCard";
import { actionTrails, chats, claims } from "../dummy";

const Home: NextPage = () => {
	return (
		<div
			className="bg-[#D6D6D6] max-w-[700px]
		 mx-auto my-0  p-4 flex flex-col "
		>
			<div
				className="mb-[18px] w-full bg-[#C4C4C4]
			 text-black text-sm font-bold
			  flex items-center px-[13px] h-[45px]"
			>
				Market Spaace
			</div>
			<div className="flex gap-[14px]">
				<div
					className="w-[166px] bg-[#C4C4C4] flex-shrink-0 
				flex flex-col"
				>
					{claims.map((claim) => (
						<ClaimCard
							id={claim.id}
							key={claim.id}
							isRead={claim.isRead}
							claimNumber={claim.claimNumber}
							text={claim.text}
						/>
					))}
				</div>
				<div className="bg-[#C4C4C4] w-full px-[22px] py-5 ">
					<div className="flex gap-4 items-start mb-8 ">
						{actionTrails.map((action) => (
							<ActionCard key={action} actionText={action} />
						))}
					</div>
					<div className="h-[60vh] overflow-y-scroll mb-6 border-b-2 border-t-2 border-gray-300">
						{chats.map((chat) => (
							<ChatCard key={chat.id} text={chat.text} sender={chat.sender} />
						))}
					</div>
					<ChatInput />
				</div>
			</div>
		</div>
	);
};

export default Home;
