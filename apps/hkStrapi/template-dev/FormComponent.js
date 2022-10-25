import React, { useState } from 'react';

import axios from 'axios';

const Form = () => {
	const [formSubmitted, setFormSubmit] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		message: ''
	});

	const onSubmit = (e) => {
		e.preventDefault();
		// checking
		if (!formData?.message) {
			// do somethings
			return;
		}

		const submitData = {
			email: 'demo@mail.com',
			firstName: formData.name,
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
		<div className="px-4 py-6">
			<div className="thoughts">
				<h1 className="">Gather your birthday wishes</h1>
			</div>
			<form className="w-full" onSubmit={onSubmit}>
				<div className="mb-6 flex flex-wrap">
					<div className="mb-6 w-full md:mb-0">
						<label
							className="text-md mb-2 block font-bold uppercase tracking-wide"
							htmlFor="grid-first-name"
						>
							名字
						</label>
						<input
							className="mb-3 block w-full appearance-none rounded border bg-gray-100 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
							id="grid-first-name"
							type="text"
							placeholder="預設"
							name="name"
							onChange={updateForm}
						/>
					</div>
				</div>
				<div className="mb-6 flex flex-wrap">
					<div className="w-full">
						<label
							className="text-md mb-2 block font-bold uppercase tracking-wide"
							htmlFor="grid-password"
						>
							留言
						</label>
						<textarea
							className="mb-3 block h-[100px] w-full appearance-none rounded border border-gray-200 bg-gray-100 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
							id="grid-password"
							style={{ resize: 'none' }}
							name="message"
							onChange={updateForm}
						/>
						<p className="text-xs italic text-gray-600">寫上祝福的句語 xxx</p>
					</div>
				</div>
				<div className="flex justify-end">
					{!formSubmitted ? (
						<button
							className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-[#FFF] hover:bg-blue-700 focus:outline-none"
							type="submit"
							disabled={formSubmitted}
						>
							提交
						</button>
					) : (
						<span>已提交</span>
					)}
				</div>
			</form>
		</div>
	);
};

export default Form;
