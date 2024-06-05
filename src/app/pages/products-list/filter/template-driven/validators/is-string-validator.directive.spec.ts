import {FormControl, FormsModule, NgModel} from '@angular/forms';
import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed, fakeAsync, flush} from '@angular/core/testing';
import {IsStringValidatorDirective} from './is-string-validator.directive';
import {ValidatorsModule} from './validators.module';

describe('IsStringValidatorDirective Izolate', () => {
    let directive: IsStringValidatorDirective;

    beforeEach(() => {
        directive = new IsStringValidatorDirective();
    });

    it('string', () => {
        const error = directive.validate(new FormControl('String'));

        // expect(error).toEqual(null);
        expect(error).toBeNull();
    });

    it('number', () => {
        const error = directive.validate(new FormControl('123'));

        expect(error).toEqual({isStringValidator: `Is value: 123 - number`});
    });
});

@Component({
    selector: 'app-test',
    template: `
        <input #input appIsStringValidator [ngModel]="search" />
    `,
})
class TestComponent {
    @ViewChild('input', {static: true, read: NgModel})
    model: NgModel | undefined;

    search = 123;
}

describe('IsStringValidatorDirective Test Bed', () => {
    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent],
            imports: [ValidatorsModule, FormsModule],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
    });

    it('number', fakeAsync(() => {
        fixture.detectChanges();

        // tick(100);
        flush();

        const error = component.model?.errors;

        expect(error).toEqual({isStringValidator: `Is value: 123 - number`});
    }));
});
