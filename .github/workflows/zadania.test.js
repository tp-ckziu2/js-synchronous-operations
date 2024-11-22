// Import funkcji do przetestowania
const { f1, f2, f3 } = require('../../zadanie1');
const { calculateSixthPower } = require('../../zadanie2');
const { calculateAverage } = require('../../zadanie3');

// Testy do zadania 1
describe('Zadanie 1: Callback w funkcjach', () => {
	test('f1 wywołuje funkcję callback', () => {
		const mockCallback = jest.fn();
		f1(mockCallback);
		expect(mockCallback).toHaveBeenCalled();
	});

	test('f2 wywołuje funkcję callback', () => {
		const mockCallback = jest.fn();
		f2(mockCallback);
		expect(mockCallback).toHaveBeenCalled();
	});

	test('f3 wywołuje funkcję callback', () => {
		const mockCallback = jest.fn();
		f3(mockCallback);
		expect(mockCallback).toHaveBeenCalled();
	});
});

// Testy do zadania 2
describe('Zadanie 2: Szósta potęga liczby', () => {
	test('Obliczanie szóstej potęgi liczby', () => {
		expect(calculateSixthPower(2)).toBe(64); // 2^6 = 64
		expect(calculateSixthPower(3)).toBe(729); // 3^6 = 729
		expect(calculateSixthPower(0)).toBe(0); // 0^6 = 0
		expect(calculateSixthPower(-2)).toBe(64); // (-2)^6 = 64
	});
});

// Testy do zadania 3
describe('Zadanie 3: Średnia arytmetyczna z ocen', () => {
	test('Obliczanie średniej arytmetycznej', () => {
		const grades = [4, 3, 5, 2, 5];
		const result = calculateAverage(grades, (sum, count) => sum / count);
		expect(result).toBe(3.8); // Średnia z [4, 3, 5, 2, 5]
	});

	test('Obsługa pustej tablicy', () => {
		const grades = [];
		const result = calculateAverage(grades, (sum, count) => (count === 0 ? 0 : sum / count));
		expect(result).toBe(0); // Średnia z pustej tablicy to 0
	});
});
