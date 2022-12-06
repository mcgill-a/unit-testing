import { User } from 'app/core/backend/types/user';
import { Observable, ReplaySubject } from 'rxjs';

export class UserService {
	private _current = new ReplaySubject<User | undefined>(1);

	public get current(): Observable<User | undefined> {
		return this._current.asObservable();
	}
}
