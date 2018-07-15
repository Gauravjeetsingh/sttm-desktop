module.exports = {
  VerseSchema: {
    name: 'Verse',
    properties: {
      ID: 'int',
      English: 'string?',
      Gurmukhi: 'string?',
      GurmukhiBisram: 'string?',
      GurmukhiUni: 'string?',
      WriterID: 'int?',
      Punjabi: 'string?',
      PunjabiUni: 'string?',
      Spanish: 'string?',
      RaagID: 'int?',
      PageNo: 'int?',
      LineNo: 'int?',
      SourceID: 'string',
      FirstLetterStr: 'string?',
      MainLetters: 'string?',
      Bisram: 'string?',
      igurbani_bisram1: 'string?',
      igurbani_bisram2: 'string?',
      FirstLetterEng: 'string?',
      Transliteration: 'string?',
      Updated: 'string',
      FirstLetterLen: 'int',
    },
  },
};
