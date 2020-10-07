import * as constants from './constants';

export const parseCode = async (code) => {
  const response = await fetch(constants.PARSER_URI, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code }),
  });
  const codeParsed = await response.json();

  return codeParsed.code;
};
