import { BankService } from 'app/services/bank.service';

export class ATM {
	constructor(private bankService: BankService) {}

	public deposit(amount: number): void {
		this.bankService.deposit(amount);
	}

	public withdraw(amount: number): void {
		this.bankService.withdraw(amount);
	}
}
