export class SumComponent {

    public sum(a: number, b: number, c?: number): number {
        return a + b + (c ?? 0);
    }


}
