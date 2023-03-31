const { NotFoundError } = require('rxjs');

async function checkForError(data) {
  if (!data || data.length === 0) {
    throw new NotFoundError('What you were looking for was not found');
  }

}

module.exports = checkForError;
