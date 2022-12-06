import { BankService } from 'app/services/bank.service';
import { ATM } from './atm';

describe('ATM', () => {
	let atm: ATM;
	let bankService: Partial<BankService>;

	beforeEach(() => {
		bankService = { deposit: jest.fn(), withdraw: jest.fn() };
		atm = new ATM(<BankService>bankService);
	});

	it('should call bank service deposit', () => {
		const amount = 100;

		atm.deposit(amount);

		expect(bankService.deposit).toHaveBeenCalledWith(amount);
	});

	it('should call bank service withdraw', () => {
		const amount = 100;

		atm.withdraw(amount);

		expect(bankService.withdraw).toHaveBeenCalledWith(amount);
	});
});
