function checkForError(data) {
  try {
    if (data.length === 0) {
      throw new Error();
    }
    return;
  } catch (e) {
    return response
      .status(404)
      .send("Unable to find any Cottages or Cottages don't exist");
  }
}

module.exports = checkForError;
