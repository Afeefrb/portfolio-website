const randomWords = require("random-words");

async function getWord() {
  return Promise.resolve(randomWords().toUpperCase())
}

exports.handler = async function(event,context) {
  try {
    const body = await getWord();
    return {statusCode: 200, body};
  } catch (error) {
    return {statusCode: 500, body: error.toString()};
  }
}