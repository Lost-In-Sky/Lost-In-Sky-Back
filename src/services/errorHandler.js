async function checkForError(data) {
  if (!data || data.length === 0) {
    throw new Error('What you were looking for was not found');
  }
}

module.exports = checkForError;
