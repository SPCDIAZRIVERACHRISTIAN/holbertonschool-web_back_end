const fs = require('fs');

async function readDatabase(path) {
  try {
    const data = await fs.promises.readFile(path, 'utf8');
    const rows = data.trim().split('\n');
    const listCS = [];
    const listSWE = [];

    for (let i = 1; i < rows.length; i += 1) {
      const row = rows[i].split(',');

      if (row[3] === 'CS') listCS.push(row[0]);
      else if (row[3] === 'SWE') listSWE.push(row[0]);
    }

    return { listCS, listSWE };
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

export default readDatabase;
