import {Languages} from './languages';

export class Crops {
  id: number;
  scientificName: string;
  otherScientificNames: string;
  authors: number;
  commonName: number;
  otherCommonNames: number;
  taxonomicFamily: number;
  classification: number;
  picture: number;
  video: number;
  record: number;
  idlanguage: number
  languages: Languages;
}
