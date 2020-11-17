module.exports = {
  verbose: true,
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  }
};
