const  calculateCommissionFunction  = require('../CalculateComission');

describe('calculateCommissionFunction', () => {
    test('commission for total sales less than or equal to 1000', () => {
        const [totalSales, commission] = calculateCommissionFunction(10, 10, 10);

        expect(totalSales).toBe(1000);
        expect(commission).toBe(95.5);

    })

    test('commission for total sales less than or equal to 1000', () => {
        const [totalSales, commission] = calculateCommissionFunction(10, 20, 30);
        
        expect(totalSales).toBe(1800);
        expect(commission).toBe(263.25);
    })

    test('commission for total sales less than or equal to 1000', () => {
        const [totalSales, commission] = calculateCommissionFunction(50, 50, 50);
        
        expect(totalSales).toBe(5000);
        expect(commission).toBe(991);
    })

    test('commission for total sales less than or equal to 1000', () => {
        expect(calculateCommissionFunction(100, 150, 200)).toBe("Sales quantities exceed maximum limits.");
    })

    test('commission for total sales less than or equal to 1000', () => {
        expect(calculateCommissionFunction(100, 150, 200)).toBe("Sales quantities exceed maximum limits.");
    })

    test('commission for total sales less than or equal to 1000', () => {
        expect(calculateCommissionFunction(100, 150, 200)).toBe("Sales quantities exceed maximum limits.");
    })

    test('commission for total sales less than or equal to 1000', () => {
        expect(calculateCommissionFunction(100, 150, 200)).toBe("Sales quantities exceed maximum limits.");
    })

    test('commission for total sales less than or equal to 1000', () => {
        expect(calculateCommissionFunction(100, 150, 200)).toBe("Sales quantities exceed maximum limits.");
    })

    test('commission for total sales less than or equal to 1000', () => {
        expect(calculateCommissionFunction(100, 150, 200)).toBe("Sales quantities exceed maximum limits.");
    })

    test('commission for total sales less than or equal to 1000', () => {
        expect(calculateCommissionFunction(100, 150, 200)).toBe("Sales quantities exceed maximum limits.");
    })
});
