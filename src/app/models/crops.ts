import {Languages} from './languages';

export class Crops {
  id: number;
  scientificName: string;
  otherScientificNames: string;
  authors: number;
  commonName: number;
  otherCommonNames: number;
  taxonomicFamily: number;
  picture: string;
  video: number;
  record: number;
  idlanguage: number;
  idClassification: number;
  languages: Languages;
}
