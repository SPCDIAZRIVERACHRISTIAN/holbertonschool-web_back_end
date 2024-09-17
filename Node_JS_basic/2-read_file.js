const fs = require('fs');
const parse = require('csv-parse');

function countStudents(path) {
  try {
    // Read the CSV file content synchronously
    const content = fs.readFileSync(path, { encoding: 'utf8' });

    // Parse the CSV content
    const records = parse(content, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
    });

    // Filter out empty records
    const validRecords = records.filter((record) => record.firstname && record.field);

    // Count the total number of students
    const totalStudents = validRecords.length;
    console.log(`Number of students: ${totalStudents}`);

    // Group students by field
    const fields = {};
    validRecords.forEach((record) => {
      const { field } = record;
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(record.firstname);
    });

    // Log the number of students in each field and their names
    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
