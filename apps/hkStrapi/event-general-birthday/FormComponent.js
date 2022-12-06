import React, { useState } from 'react';

import axios from 'axios';

const Form = () => {
	const [formSubmitted, setFormSubmit] = useState(false);
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		message: ''
	});

	const onSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		// checking
		if (!formData?.message) {
			// do somethings
			setLoading(false);
			return;
		}

		const submitData = {
			email: 'demo@mail.com',
			firstName: formData.name,
			lastName: '',
			question: [1],
			campaignData1: formData.message,
			campaignData2: '',
			campaignData3: '',
			campaignData4: '',
			campaignData5: ''
		};

		axios({
			method: 'post',
			url: 'https://strapi.small-service.gpeastasia.org/api/responses',
			headers: {
				// Authorization: `Bearer ${token}`,
			},
			data: {
				data: submitData
			}
		})
			.then((response) => {
				setFormSubmit(true);
			})
			.catch((error) => {
				console.log('An error occurred:', error.response);
			});
	};

	const updateForm = (e) => {
		const { name, value } = e?.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
		<div className="px-4 md:px-6">
			<div className="flex items-center justify-center ">
				<div className="mx-auto w-full max-w-lg ">
					<div className="mx-auto pt-6 pb-4">
						<h2 className="my-4 flex flex-row flex-nowrap items-center">
							<span
								className="block flex-grow border-t border-[#66cc00]"
								aria-hidden="true"
								role="presentation"
							></span>
							<span className="text-md mx-2 block flex-none py-2 font-bold uppercase leading-none text-[#66cc00] md:ml-4">
								Let's Make a Wish!
							</span>
							<span
								className="block flex-grow border-t border-[#66cc00]"
								aria-hidden="true"
								role="presentation"
							></span>
						</h2>
						<span className="text-md mx-auto block flex-none rounded bg-[#66cc00] px-4 py-2 text-center font-bold uppercase leading-none text-white">
							<b>給地球許一個生日願望</b>
						</span>
						<p className="text-md py-4 text-gray-700">
							您的願望將有機會出現在「I Wish...」欄目， 甚至刊登於綠色和平年報！
						</p>
					</div>
				</div>
			</div>
			{formSubmitted && (
				<div className="text-md pb-8 text-gray-700">
					<p>
						您的願望已經傳達，請相信它會成真！再次感謝您為保護地球一齊努力。
					</p>
					<br />
					<p>
						瀏覽綠色和平
						<a
							href="https://www.greenpeace.org/hongkong/stories-victories"
							target="_blank"
							className="text-[#66cc00] underline"
						>
							「我們的成果」專頁
						</a>
						，了解更多因您成真的環保願望！
					</p>
				</div>
			)}
			{!formSubmitted && (
				<form className="w-full" onSubmit={onSubmit}>
					<div className="mb-4">
						{/* <span className="rounded px-2.5 py-0.5 text-sm">
							輸入名字 及 訊息
						</span> */}
						<input
							className="block w-full appearance-none rounded border bg-gray-100 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
							type="text"
							placeholder="我的名字"
							id="name"
							name="name"
							onChange={updateForm}
						/>
					</div>
					<div className="flex w-full flex-col items-center">
						<div className="flex w-full flex-col">
							<textarea
								rows="3"
								className="resize-none rounded-md bg-gray-100 p-4 text-gray-500 focus:outline-none"
								placeholder={'我希望地球變得...'}
								id="message"
								name="message"
								onChange={updateForm}
							/>
							<button
								className="my-8 rounded-md bg-gradient-to-r from-[#ff8100] to-orange-500 py-3 text-lg font-semibold text-white hover:opacity-75"
								type="submit"
								disabled={formSubmitted || loading}
							>
								提交
							</button>
						</div>
					</div>
				</form>
			)}
		</div>
	);
};

export default Form;
