import { SumComponent } from './sum.component';

describe('SumComponent', () => {
    let component: SumComponent;

    beforeEach(() => {
        component = new SumComponent();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should correctly add two numbers', () => {
        expect(component.sum(1,2)).toBe(3);
    });

    it('should correctly add three numbers', () => {
        expect(component.sum(6,5,4)).toBe(15);
    })
});
