const string = (input) => {
  let text = input.split(" ");
  if (text.length >= 2) {
    const string = text.slice(1).join(" ");
    return string;
  }
};

const command = (input, prefix, str) => {
    return input.startsWith(prefix + str);
};

module.exports = { string, command };
