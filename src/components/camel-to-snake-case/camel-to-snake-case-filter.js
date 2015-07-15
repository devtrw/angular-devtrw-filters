function camelToSnakeCaseFilter() {
  return (text, capitalize=false) => {
    if (typeof text !== 'string') {
      return '';
    }

    let filtered = text.replace(/([A-Z])/g, function ($1) {return '_' + $1.toLowerCase();});

    return capitalize ? filtered.toUpperCase() : filtered;
  };
}

export default camelToSnakeCaseFilter;
