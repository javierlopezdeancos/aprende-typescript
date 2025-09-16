//////////////////////////////////////////////////
// 1. Choose a data structure for your dictionary
//////////////////////////////////////////////////

type Entry = string;

type EntryLength = number;

type Definition = string;

type Dictionary = Record<Entry, Definition>;

type GroupedDictionaryEntriesByLength = Record<EntryLength, Entry[]>;

const dictionary: Dictionary = {};

//////////////////////////////////////////////////
// 2. Implement the addEntry function to store
//    items in the dictionary.
//////////////////////////////////////////////////

const addEntry = (entry: Entry, definition: Definition): void => {
  if (!entry || !definition) {
    return;
  }

  dictionary[entry] = definition;
};

addEntry('boat', 'goes on the sea');
addEntry('cat', 'cute animal');
addEntry('Bruno', 'person name');
addEntry('pen', 'thing to write');
addEntry('bike', 'two-wheel vehicle');
addEntry('car', 'four-wheel vehicle');

console.log(dictionary);

//////////////////////////////////////////////////
// 3. Implement a new function getEntry to return
//    and entry given a new word
//    It should return both the word and
//    definition.
//////////////////////////////////////////////////

const getEntry = (entry: Entry): [Entry, Definition] | undefined => {
  if (!entry) {
    return;
  }

  const definition = dictionary[entry];

  if (!definition) {
    console.error(`Entry "${entry}" not found in the dictionary.`);
    return;
  }

  return [entry, definition];
};

console.log(getEntry('boat'));

//////////////////////////////////////////////////
// 4. Implement a new function startsWith to
//    return a new dictionary containing all the
//    entries with the word starting with that
//    string. It must be case insensitive.
//////////////////////////////////////////////////

const startsWith = (str: string): Dictionary => {
  if (!str) {
    return {};
  }

  const dictionaryEntriesStartsWithStr: Dictionary = {};
  const entries = Object.keys(dictionary);

  for (let e = 0; e < entries.length; e++) {
    const entry = entries[e];
    const entryStartWithStr = entry.toLowerCase().startsWith(str.toLowerCase());

    if (entryStartWithStr) {
      dictionaryEntriesStartsWithStr[entry] = dictionary[entry];
    }
  }

  return dictionaryEntriesStartsWithStr;
};

console.log(startsWith('b'));

//////////////////////////////////////////////////
// 5. Implement a new function groupByLength
//    to return the words of the dictionary
//    grouped by the length.
//
//    i.e.:
//
//    {
//       "3": ["cat", "pen", "car"],
//       "4": ["boat", "bike"],
//       "5": ["Bruno"],
//    }
//////////////////////////////////////////////////

const groupByLength = (): GroupedDictionaryEntriesByLength => {
  const groupedDictionaryEntriesByLength: GroupedDictionaryEntriesByLength = {};

  for (const entry in dictionary) {
    const length = entry.length;

    const lengthIsAlreadyInGroupedDictionaryEntriesByLength = groupedDictionaryEntriesByLength[length];

    if (!lengthIsAlreadyInGroupedDictionaryEntriesByLength) {
      groupedDictionaryEntriesByLength[length] = [entry];
      continue;
    }

    groupedDictionaryEntriesByLength[length].push(entry);
  }

  return groupedDictionaryEntriesByLength;
};

console.log(groupByLength());
