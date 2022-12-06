import { BackendService } from 'app/core/backend/backend.service';
import { Account } from 'app/core/backend/types/account';
import { AccountService } from './account.service';

export class BankService {
	private account?: Account;

	constructor(
		private backendService: BackendService,
		private accountService: AccountService
	) {
		this.accountService.current.subscribe((account) => (this.account = account));
	}

	public deposit(amount: number) {
		if (!this.account) {
			throw new Error('Cannot deposit - account is undefined');
		}
		this.backendService.bank.deposit(amount, this.account);
	}

	public withdraw(amount: number) {
		if (!this.account) {
			throw new Error('Cannot withdraw - account is undefined');
		}
		this.backendService.bank.withdraw(amount, this.account);
	}
}
