import { BackendService } from 'app/core/backend/backend.service';
import { Account } from 'app/core/backend/types/account';
import { Subject } from 'rxjs';
import { AccountService } from './account.service';
import { BankService } from './bank.service';

describe('BankService', () => {
	let service: BankService;
	let accountSubject: Subject<Account | undefined>;
	let backendService: Partial<BackendService>;
	let accountService: Partial<AccountService>;

	beforeEach(() => {
		accountSubject = new Subject();

		accountService = {
			get current() {
				return accountSubject.asObservable();
			},
		};
		backendService = {
			bank: { deposit: jest.fn(), withdraw: jest.fn() },
		};

		service = new BankService(
			<BackendService>backendService,
			<AccountService>accountService
		);
	});

	it('should call backend deposit if account is defined', () => {
		const amount = 100;
		const account = <Account>{ balance: 100 };
		accountSubject.next(account);

		service.deposit(amount);

		expect(backendService.bank?.deposit).toHaveBeenCalledWith(amount, account);
	});

	it('should throw on deposit if account is undefined', () => {
		expect(() => {
			service.deposit(100);
		}).toThrow();

		expect(backendService.bank?.deposit).not.toHaveBeenCalled();
	});

	it('should call backend withdraw if account is defined', () => {
		const amount = 100;
		const account = <Account>{ balance: 100 };
		accountSubject.next(account);

		service.withdraw(amount);

		expect(backendService.bank?.withdraw).toHaveBeenCalledWith(amount, account);
	});

	it('should throw on withdraw if account is undefined', () => {
		expect(() => {
			service.withdraw(100);
		}).toThrow();

		expect(backendService.bank?.withdraw).not.toHaveBeenCalled();
	});
});
