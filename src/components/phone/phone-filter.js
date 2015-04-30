function phone() {
  return text => {

    if (typeof text !== 'string') {
      return '';
    }

    if (10 === text.length) {
      return `(${text.slice(0, 3)}) ${text.slice(3, 6)}-${text.slice(6)}`;
    }

    return text;
  };
}

export default phone;
