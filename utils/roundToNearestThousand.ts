const roundToNearestThousand = (num: number) => {
  if (num < 1000) {
    return num;
  }

  const roundedNumber = Math.round((num / 1000) * 10) / 10;

  if (Number.isInteger(roundedNumber)) {
    return roundedNumber + 'k';
  } else {
    return roundedNumber.toFixed(1) + 'k';
  }
};

export default roundToNearestThousand;
