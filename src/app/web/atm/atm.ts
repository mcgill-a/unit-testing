import { AccountService, BankService } from "@bank";

export class ATM {
	constructor(private bankService: BankService, private accountService: AccountService) {}

	public login(id: string): void {
		this.accountService.login(id);
	}

	public deposit(amount: number): void {
		this.bankService.deposit(amount);
	}

	public withdraw(amount: number): void {
		this.bankService.withdraw(amount);
	}
}
