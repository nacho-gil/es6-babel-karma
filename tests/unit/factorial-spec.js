import factorial, {recursive, iterative} from '../../src/factorial';

describe('factorial', () => {
    // We have multiple factorial solutions to test, so loop through them
    [factorial, recursive, iterative].forEach((solution, index) => {
        // Use the name as part of the assertion name
        it(`Solution ${index} returns factorials`, () => {
            // Bunch of simple assertions we know to be true
            expect(solution(1)).toBe(1);
            expect(solution(2)).toBe(2);
            expect(solution(3)).toBe(6);
            expect(solution(4)).toBe(24);
            expect(solution(5)).toBe(120);
            expect(solution(6)).toBe(720);
            expect(solution(7)).toBe(5040);
            expect(solution(8)).toBe(40320);
            expect(solution(9)).toBe(362880);
            expect(solution(10)).toBe(3628800);
            expect(solution(11)).toBe(39916800);
            expect(solution(12)).toBe(479001600);
            expect(solution(13)).toBe(6227020800);
            expect(solution(14)).toBe(87178291200);
            expect(solution(15)).toBe(1307674368000);
            expect(solution(16)).toBe(20922789888000);
            expect(solution(17)).toBe(355687428096000);
            expect(solution(18)).toBe(6402373705728000);
            expect(solution(19)).toBe(121645100408832000);
            expect(solution(20)).toBe(2432902008176640000);
        });
    });
});
