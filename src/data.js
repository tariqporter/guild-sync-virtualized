import loremIpsum from 'lorem-ipsum';

export const getData = (columnCount, rowCount) => {
  const rows = [];
  for (let i = 0; i < rowCount; i++) {
    const column = [];
    for (let j = 0; j < columnCount; j++) {
      column.push(loremIpsum({ count: 3 }));
    }
    rows.push(column);
  }
  console.log(JSON.stringify(rows));
  return rows;
};
