import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';

describe('AppComponent', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [AppComponent],
        }),
    );

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;

        expect(app).toBeTruthy();
    });

    it(`should have as title 'Angular-learnjs-150424'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;

        expect(app.title).toEqual('Angular-learnjs-150424');
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(AppComponent);

        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;

        expect(compiled.querySelector('.content span')?.textContent).toContain(
            'Angular-learnjs-150424 app is running!',
        );
    });
});
