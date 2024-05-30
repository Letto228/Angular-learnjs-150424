import {CanMatchFn} from '@angular/router';
import {question} from './question';

export const canMatchQuestionGuard: CanMatchFn = (_route, _segments) => {
    return question('Та ли это конфигурация, которую хотели применить?');
};
