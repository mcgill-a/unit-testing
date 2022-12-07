import { User } from '../types/user';
import { delay, of } from 'rxjs';
import { Account } from '../types/account';

export class BackendService {
	public readonly user = {
		get: () =>
			of(<User>{
				id: 'foo',
				name: 'Bar',
				phone: '123',
				email: 'foo@bar.com',
				dob: '1990-10-10',
			}).pipe(delay(500)),
	};

	public readonly bank = {
		deposit: (amount: number, account: Account) =>
			console.log('BackendService', 'deposit()', { amount, account }),
		withdraw: (amount: number, account: Account) =>
			console.log('BackendService', 'withdraw()', { amount, account }),
	};
}
