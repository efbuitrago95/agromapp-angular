import {Languages} from './languages';
import {Classifications} from './classifications';
import {TypeMoons} from './typeMoons';
export class Moons {
  id: number;
  name: string;
  description: string;
  idLanguage: number;
  idClassification: number;
  idTypeMoon: number;
  languages: Languages;
  classifications: Classifications;
  typeMoons: TypeMoons;
}
