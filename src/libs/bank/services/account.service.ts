import { Account } from '@core';
import { Observable, ReplaySubject } from 'rxjs';

export class AccountService {
	private _current = new ReplaySubject<Account | undefined>(1);

	public get current(): Observable<Account | undefined> {
		return this._current.asObservable();
	}

	public login(id: string): void {
		console.log("login()", id);
	}
}
