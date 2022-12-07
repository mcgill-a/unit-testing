import { AccountService, BankService } from '@bank';
import { ATM } from './atm';

describe('ATM', () => {
	let atm: ATM;
	let bankService: Partial<BankService>;
	let accountService: Partial<AccountService>;

	beforeEach(() => {
		bankService = { deposit: jest.fn(), withdraw: jest.fn() };
		accountService = { login: jest.fn() };
		atm = new ATM(<BankService>bankService, <AccountService>accountService);
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

	it('should call account service login', () => {
		const id = 'foo';
		atm.login(id);

		expect(accountService.login).toHaveBeenCalledWith(id);
	});
});
