let pinStatus = false;

export const getPinStatus = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { pinStatus };
};

export const updatePinStatus = async (newPinStatus: boolean) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  pinStatus = newPinStatus;
};
