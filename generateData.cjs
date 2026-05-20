const fs = require('fs');

const beautified = fs.readFileSync('beautified.js', 'utf8');

const extractArray = (varName) => {
  const match = beautified.match(new RegExp(`const ${varName} = (\\[.*?\\]);`, 's'));
  return match ? match[1] : '[]';
};

const dataTs = `
export const BE = ${extractArray('BE')};
export const kE = ${extractArray('kE')};
export const GE = ${extractArray('GE')};
export const qE = ${extractArray('qE')};
export const Cl = ${extractArray('Cl')};
export const sy = ${extractArray('sy')};
export const Tc = ${extractArray('Tc')};
export const Ac = ${extractArray('Ac')};
`;

fs.writeFileSync('src/data.ts', dataTs);
console.log('src/data.ts created');
