"use client";
import { useState } from "react";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/components/ui/input-otp";

const Dashboard = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false); // Success modal state
	const [value, setValue] = useState("");
	const [amount, setAmount] = useState("");
	const [username, setUsername] = useState("");
	const [memo, setMemo] = useState("");
	const [isVipTransferEnabled, setIsVipTransferEnabled] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
	};

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setValue("");
		setIsModalOpen(false);
	};

	const openSuccessModal = () => {
		setIsModalOpen(false); // Close the security code modal
		setIsSuccessModalOpen(true); // Open the success modal
	};

	const closeSuccessModal = () => {
		setIsSuccessModalOpen(false);
	};

	const handleVipTransferToggle = () => {
		setIsVipTransferEnabled(!isVipTransferEnabled);
	};

	return (
		<div className="min-h-screen bg-[#121212] text-white flex flex-col items-center p-6 pt-50 relative">
			{/* Asset Section */}
			<div className="bg-[#1F1F1F] w-full max-w-xl p-6 rounded-lg mb-8">
				<h2 className="text-3xl font-semibold mb-4">My Asset</h2>
				<div className="flex justify-between items-center">
					<span className="text-xl">50,000</span>
					<span className="text-lg">USDT</span>
				</div>
				<div className="mt-4 text-sm text-gray-400">
					Available Balance: VIP 3
				</div>
			</div>

			{/* Direct Withdraw Section */}
			<div className="bg-[#1F1F1F] w-full max-w-xl p-6 rounded-lg mb-8">
				<h2 className="text-3xl font-semibold mb-4">Direct Withdraw</h2>
				<form onSubmit={handleSubmit}>
					<div className="flex items-center justify-between mb-4">
						<label className="text-lg">VIP Transfer</label>
						<label className="inline-flex items-center cursor-pointer">
							<input
								title="VIP Transfer"
								type="checkbox"
								checked={isVipTransferEnabled}
								onChange={handleVipTransferToggle}
								className="toggle-checkbox hidden"
							/>
							<span className="toggle-label block w-14 h-8 bg-[#ccc] rounded-full"></span>
						</label>
					</div>

					<div className="mb-4">
						<label className="block text-sm mb-2">Amount</label>
						<input
							type="text"
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
							className="w-full p-3 bg-transparent border border-gray-700 text-white rounded-lg"
							placeholder="Enter amount"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-sm mb-2">
							{isVipTransferEnabled ? "Recipient VIP Username" : "TRC20 Wallet Address"}
						</label>
						<input
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className="w-full p-3 bg-transparent border border-gray-700 text-white rounded-lg"
							placeholder={isVipTransferEnabled ? "Enter recipient username" : "Enter Wallet Address"}
						/>
					</div>
					<div className="mb-4">
						<label className="block text-sm mb-2">{isVipTransferEnabled ? "Network" : "Memo"}</label>
						<input
							type="text"
							value={memo}
							onChange={(e) => setMemo(e.target.value)}
							className="w-full p-3 bg-transparent border border-gray-700 text-white rounded-lg"
							placeholder={isVipTransferEnabled ? "Write" : "TRC20 Recommended"}
						/>
					</div>
					<div className="flex justify-between mt-6">
						<button
							type="button"
							onClick={openModal}
							className="bg-[#FF5722] px-6 py-3 text-white rounded-lg"
						>
							VIP Transfer
						</button>
						<button
							type="button"
							className="bg-[#22262F] px-6 py-3 text-white rounded-lg"
						>
							Cancel
						</button>
					</div>
				</form>
			</div>

			{/* Transaction History Section */}
			<div className="bg-[#1F1F1F] w-full max-w-xl p-6 rounded-lg">
				<h2 className="text-3xl font-semibold mb-4">
					Transaction history
				</h2>
				<table className="w-full text-sm text-gray-400">
					<thead>
						<tr className="border-b border-gray-700">
							<th className="py-2 px-4 text-left">Transaction</th>
							<th className="py-2 px-4 text-end">Amount</th>
						</tr>
					</thead>
					<tbody>
						<tr className="border-b border-gray-700">
							<td className="py-2 px-4">VIP Transfer</td>
							<td className="py-2 text-end px-4 text-green-500">
								+ $4.50 USDT
							</td>
						</tr>
						<tr className="border-b border-gray-700">
							<td className="py-2 px-4">Withdrawal</td>
							<td className="py-2 text-end px-4 text-red-500">
								- $88.00 USDT
							</td>
						</tr>
						<tr className="border-b border-gray-700">
							<td className="py-2 px-4">VIP Transfer</td>
							<td className="py-2 text-end px-4 text-green-500">
								+ $15.00 USDT
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			{/* Modal for Security Code */}
			{isModalOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
					<div
						style={{ zIndex: -2 }}
						className="bg-[#1F1F1F] p-6 rounded-lg w-[500px] relative"
					>
						<button
							className="absolute top-2 right-2 text-white"
							onClick={closeModal}
						>
							&times;
						</button>
						<div className="h-56 flex flex-col justify-end">
							<img
								src="/bg-pattern.png"
								alt="background pattern"
								className="w-full h-full absolute top-0 left-0 object-cover"
								style={{ zIndex: -1 }}
							/>
							<h2 className="text-3xl text-center text-white mb-4">
								Please input your security code to process the
								withdrawal.
							</h2>
						</div>

						<div className="text-center mb-6">
							<div className="flex justify-center gap-4 mb-4">
								<InputOTP
									maxLength={4}
									value={value}
									onChange={(value) => setValue(value)}
								>
									<InputOTPGroup>
										<InputOTPSlot
											index={0}
											className="w-16 h-16 text-2xl font-bold text-white border-2 border-orange-500 rounded-lg text-center"
										/>
									</InputOTPGroup>

									<InputOTPGroup>
										<InputOTPSlot
											index={1}
											className="w-16 h-16 text-2xl font-bold text-white border-2 border-orange-500 rounded-lg text-center"
										/>
									</InputOTPGroup>

									<InputOTPGroup>
										<InputOTPSlot
											index={2}
											className="w-16 h-16 text-2xl font-bold text-white border-2 border-orange-500 rounded-lg text-center"
										/>
									</InputOTPGroup>

									<InputOTPGroup>
										<InputOTPSlot
											index={3}
											className="w-16 h-16 text-2xl font-bold text-white border-2 border-orange-500 rounded-lg text-center"
										/>
									</InputOTPGroup>
								</InputOTP>
							</div>
						</div>

						<div className="flex justify-between items-center">
							<button
								className="w-1/3 p-3 text-white border border-orange-500 rounded-md"
								onClick={closeModal}
							>
								Cancel
							</button>
							<button
								type="submit"
								className="w-1/3 p-3 bg-[#FF5722] text-white rounded-md"
								onClick={openSuccessModal}
							>
								Verify
							</button>
						</div>
					</div>
				</div>
			)}

			{/* Success Modal */}
			{isSuccessModalOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
					<div
						style={{ zIndex: -2 }}
						className="bg-[#1F1F1F] p-6 rounded-lg w-[400px] relative"
					>
						<div className="h-40 flex flex-col justify-end">
							<img
								src="/bg-trash-pattern.png"
								alt="background pattern"
								className="w-[50%] h-[80%] absolute top-2 left-5 object-cover"
								style={{ zIndex: -1 }}
							/>
							<h2 className="text-3xl text-left text-white mb-4">
								Transaction Failed!
							</h2>
							<p className="font-normal text-sm text-left text-[#94979C]">
								Sorry! We could not process your transaction at
								this moment
							</p>
						</div>

						<div className="flex justify-between items-center pt-10">
							<button
								className="w-1/3 p-3 text-white border border-orange-500 rounded-md"
								onClick={closeSuccessModal}
							>
								Cancel
							</button>
							<button
								type="submit"
								className="w-1/3 p-3 bg-[#FF5722] text-white rounded-md"
								onClick={closeSuccessModal}
							>
								Go Back
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Dashboard;
