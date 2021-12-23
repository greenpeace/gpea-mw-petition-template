import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Box, Icon, Button } from '@chakra-ui/react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';

const Popup = ({ theme, popupType, msg, isOpen, setIsOpen, setClearForm }) => {
  //const [isOpen, setIsOpen] = useState(open)
  const onClose = () => {
    setClearForm(false);
    setIsOpen(false);
  };
  const cancelRef = React.useRef();
  const themeInterests = theme.interests;
  const clearForm = () => {
    setClearForm(true);
    setIsOpen(false);
  };

  // useEffect(() => {
  //   setIsOpen(open)
  // }, [open])
  return (
    <>
      {/* <Button colorScheme='red' onClick={() => setIsOpen(true)}>
        Delete Customer
      </Button> */}

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader
              fontSize="lg"
              fontWeight="bold"
            ></AlertDialogHeader>
            {popupType === 'OK' && (
              <AlertDialogBody textAlign={'center'}>
                <Box>
                  <CheckIcon
                    w={'10'}
                    h={'10'}
                    color={'white'}
                    bgColor={'brand.500'}
                    borderRadius={'50%'}
                    px={'2'}
                    py={'2'}
                  />
                </Box>

                {`${msg.LastName}${msg.FirstName}登記成功`}
              </AlertDialogBody>
            )}
            {popupType === 'FAIL' && (
              <AlertDialogBody textAlign={'center'}>
                <Box>
                  <CloseIcon
                    w={'10'}
                    h={'10'}
                    color={'white'}
                    bgColor={'red'}
                    borderRadius={'50%'}
                    px={'2'}
                    py={'2'}
                  />
                </Box>

                {`${msg.LastName}${msg.FirstName}登記失敗`}
              </AlertDialogBody>
            )}

            {popupType === 'OK' && (
              <AlertDialogFooter justifyContent={'center'}>
                <Button
                  onClick={onClose}
                  bgColor={'orange.500'}
                  color={'white'}
                >
                  登記下一筆
                </Button>
              </AlertDialogFooter>
            )}
            {popupType === 'FAIL' && (
              <AlertDialogFooter justifyContent={'center'}>
                <Button
                  mx="1"
                  onClick={clearForm}
                  bgColor={'white'}
                  borderColor={'orange.500'}
                  color={'orange.500'}
                >
                  清空表格
                </Button>
                <Button
                  mx="1"
                  onClick={onClose}
                  bgColor={'orange.500'}
                  color={'white'}
                >
                  修改此筆資料
                </Button>
              </AlertDialogFooter>
            )}
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

const mapStateToProps = ({ status, theme, form }) => {
  return { status, theme: theme.data, formContent: form.content };
};

export default connect(mapStateToProps)(Popup);
