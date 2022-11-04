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
			firstName: '您的稱呼',
			lastName: '',
			campaignData1: formData.message,
			campaignData2: '',
			campaignData3: '',
			campaignData4: '',
			campaignData5: ''
		};

		axios({
			method: 'post',
			url: 'https://strapi.small-service.gpeastasia.org/api/thoughts',
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
		<div>
			<div className="flex items-center justify-center">
				<div className="mx-auto w-full max-w-lg ">
					<div className="mx-auto max-w-md">
						<h2 className="my-4 flex flex-row flex-nowrap items-center">
							<span
								className="block flex-grow border-t border-[#66cc00]"
								aria-hidden="true"
								role="presentation"
							></span>
							<span className="mx-2 block flex-none py-2.5 text-xs font-bold uppercase leading-none text-[#66cc00] md:ml-4 md:text-[16px]">
								Let’s Make a Wish!
							</span>
							<span className="mx-2 block flex-none bg-[#66cc00] px-2 py-2.5 text-xs font-bold uppercase leading-none text-white md:mr-4 md:text-[16px] rounded-lg">
								<b>給地球許一個生日願望</b>
							</span>
							<span
								className="block flex-grow border-t border-[#66cc00]"
								aria-hidden="true"
								role="presentation"
							></span>
						</h2>
					</div>
				</div>
			</div>
			{formSubmitted && <div className="thanksMessage px-6 text-gray-700 text-md pb-4">
			您的願望已經傳達，請相信它會成真 :)<br/>
			感謝您為保護地球一齊努力 <br/>

			瀏覽 <a href="https://www.greenpeace.org/hongkong/stories-victories" target="_blank" className="text-[#66cc00] underline">綠色和平「我們的成果」專頁</a>，了解更多因您成真的環保願望！

			</div>}
			{!formSubmitted && (<form className="w-full" onSubmit={onSubmit}>
				<div className="mb-4 px-6">
					<span className="mr-2 rounded bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-200 dark:text-green-900">
						您的名字
					</span>
					{/* <input
						className="mb-3 block w-full appearance-none rounded border bg-gray-100 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
						id="grid-first-name"
						type="text"
						placeholder="預設"
						name="name"
						onChange={updateForm}
					/> */}
				</div>
				<div className="flex w-full flex-col items-center px-6">
					<div className="flex w-full flex-col">
						<textarea
							rows="3"
							className="resize-none rounded-xl bg-gray-100 p-4 text-gray-500 focus:outline-none"
							placeholder={'e.g. 我希望地球變得……'}
							id="message"
							name="message"
							onChange={updateForm}
						/>
						<span className="py-2 text-xs text-gray-500">
							<sup>**</sup>您的願望將有機會出現在「I
							Wish…」欄目，甚至刊登於綠色和平年報！
						</span>
						<button
							className="my-8 rounded-xl bg-gradient-to-r from-[#66cc00] to-green-400 py-3 text-lg font-semibold text-white hover:opacity-75"
							type="submit"
							disabled={formSubmitted||loading}
						>
							提交
						</button>
					</div>
				</div>
			</form>)}
		</div>
	);
};

export default Form;
