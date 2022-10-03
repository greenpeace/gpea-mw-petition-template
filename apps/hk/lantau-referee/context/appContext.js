import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import * as formActions from 'store/actions/action-types/form-actions';
import axios from 'axios';

const AppContext = createContext();

function ThemeContext({ children, setFormData }) {
	const router = useRouter();
	const [hasToken, setHasToken] = useState(undefined);
	const [isValid, setIsValid] = useState(undefined);
	const [isFull, setIsFull] = useState(false);
	const [total, setTotal] = useState(undefined);

	useEffect(async () => {
		if (router.isReady) {
			const { token } = router.query;
			if (token === undefined) {
				setHasToken(false);
				return;
			}

			if (token) {
				const auth = await authToken(token);
				setHasToken(true);
				setIsValid(auth.isValid);
				setTotal(auth.totalCount);
				// Set IsFull if signup number larger than or equal Two
				setIsFull(auth.totalCount >= 2);
				setFormData({ token: token });
			}
		}
	}, [router.isReady, router.query]);

	return (
		<AppContext.Provider
			value={{
				isValid: isValid,
				isFull: isFull,
				total: total,
				hasToken: hasToken
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

const mapDispatchToProps = (dispatch) => {
	return {
		setFormData: (data) => {
			dispatch({ type: formActions.SET_FORM_DATA, data });
		}
	};
};

export default connect(null, mapDispatchToProps)(ThemeContext);

const authToken = async (token) => {
	let promises = [
		`https://gsheet-toolkit.small-service.gpeastasia.org/v1/db/referral-token?q={"referral_id": ${JSON.stringify(
			token
		)}}`,
		`https://gsheet-toolkit.small-service.gpeastasia.org/v1/db/referee-registration?q={"referral_id": ${JSON.stringify(
			token
		)}}`
	];

	const data = await axios
		.all(promises.map((promise) => axios.get(promise)))
		.then(
			axios.spread((isValid, totalCount) => {
				return {
					isValid: isValid.data?.totalCount > 0,
					totalCount: totalCount.data.totalCount,
					token: JSON.stringify(token)
				};
			})
		);
	return data;
};

const AppConsumer = AppContext.Consumer;

export { AppConsumer, AppContext };
