import React from 'react';
import { Box, Text, Stack, Image, Center } from '@chakra-ui/react';
import { connect } from 'react-redux';
import Option from './option';
import * as formActions from 'store/actions/action-types/form-actions';

import R310 from '../../images/202204_EarthDayPush_R3-10.svg';
import R311 from '../../images/202204_EarthDayPush_R3-11.svg';
import R312 from '../../images/202204_EarthDayPush_R3-12.svg';

const OPTIONS = [
  { label: '食素', content: '1星期食3餐素', value: 0, image: R310 },
  { label: '回收', content: '1星期不用即棄餐具', value: 1, image: R312 },
  {
    label: '走塑',
    content: '1星期做好垃圾資源回收分類',
    value: 2,
    image: R311,
  },
];

const TypePicker = ({
  formData,
  setForm,
  selectedOption,
  handleSelectOption,
}) => {
  return (
    <Stack w="100%" direction={{ base: 'column' }} spacing={'20px'}>
      {OPTIONS.map((d) => (
        <Option
          key={d.value}
          text={d.content}
          image={d.image}
          value={d.value}
          selectedOption={selectedOption}
          handleSelectOption={handleSelectOption}
        />
      ))}
    </Stack>
  );
};

const mapStateToProps = ({ form }) => {
  return {
    formData: form.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setForm: (data) => {
      dispatch({ type: formActions.SET_FORM_DATA, data });
    },
  };
};

function propsAreEqual(prevFormData, nextFormData) {
  return prevFormData === nextFormData;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(React.memo(TypePicker, propsAreEqual));
