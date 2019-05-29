import {ITranslationsStorePart} from '../translations/translations.store.interface';
import {IPlacesStorePart} from '../features/places/palces.store.interface';
// import {IAuthenticationStorePart} from '../features/authentication/authentication.store.interface';

export interface IState extends ITranslationsStorePart,
    IPlacesStorePart
   // IAuthenticationStorePart
{

}
