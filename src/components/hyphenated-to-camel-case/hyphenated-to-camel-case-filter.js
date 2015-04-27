function hyphenatedToCamelCaseFilter() {
  return text => {
    if (typeof text !== 'string') {
      return '';
    }
    return text.replace(/-([a-z])/g, g => g[1].toUpperCase());
  };
}

export default hyphenatedToCamelCaseFilter;
