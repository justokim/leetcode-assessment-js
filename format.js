const formatInput = (phoneNum) => {
  let newPhone;
  const input = phoneNum.replace(/\D/g, "").substring(0, 10);

  const zip = input.substring(0, 3);
  const middle = input.substring(3, 6);
  const last = input.substring(6, 10);

  if (input.length > 6) {
    newPhone = `(${zip}) ${middle}-${last}`;
  } else if (input.length > 3) {
    newPhone = `(${zip}) ${middle}`;
  } else if (input.length > 0) {
    newPhone = zip;
  }

  return newPhone;
};

export default formatInput;
