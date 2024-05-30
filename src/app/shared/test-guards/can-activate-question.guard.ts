import {CanActivateFn} from '@angular/router';
import {question} from './question';

export const canActivateQuestionGuard: CanActivateFn = (_route, _state) => {
    return question('Можно ли посетить данную навигацию?');
};
