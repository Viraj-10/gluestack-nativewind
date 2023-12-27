import {
  Button,
  ButtonText,
  Box,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalBody,
  Heading,
  ModalCloseButton,
  ModalHeader,
  ModalFooter,
  Text,
} from "@gluestack-ui/nativewind";

import { X } from "lucide-react-native";
import React from "react";

export const Home = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Box className="flex-1 items-center justify-center">
      <Button
        onPress={() => {
          setIsOpen(true);
        }}
        className="bg-blue-600 flex-row px-5 h-10 rounded-lg items-center justify-center hover:bg-blue-700 active:bg-blue-800 focus:outline-blue-800 "
      >
        <ButtonText className="text-white">Button</ButtonText>
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        className="w-full h-full justify-center items-center"
        pointerEvents="box-none"
      >
        <ModalBackdrop className="absolute left-0 right-0 bottom-0 top-0 bg-neutral-900 opacity-20 cursor-default" />
        <ModalContent className="w-[80%] max-w-[510px] shadow-md bg-white rounded-lg overflow-hidden leading-16">
          <ModalHeader className="px-4 pt-4 pb-2 justify-between items-center flex-row">
            <Heading className="w-[80%]">Engage with Modals</Heading>
            <ModalCloseButton className="p-2 rounded-sm outline-0 cursor-pointer focus:bg-slate-200 focus:outline-1 active:bg-slate-200">
              <X size={18} color="black" />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody className="px-4 pt-0 pb-2">
            <Text className="text-sm">
              Elevate user interactions with our versatile modals. Seamlessly
              integrate notifications, forms, and media displays. Make an impact
              effortlessly.
            </Text>
          </ModalBody>
          <ModalFooter className="p-4 flex-row justify-end items-center flex-wrap gap-3">
            <Button
              onPress={() => {
                handleClose();
              }}
              className="border-2 border-blue-500 flex-row px-4 py-2 rounded-lg items-center justify-center hover:border-blue-700 active:border-blue-800"
            >
              <ButtonText className="text-black">Cancel</ButtonText>
            </Button>
            <Button
              className=" bg-blue-600 flex-row px-4 py-2 rounded-lg items-center justify-center hover:bg-blue-700 active:bg-blue-800"
              onPress={() => {
                handleClose();
              }}
            >
              <ButtonText className="text-white">Explore</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
