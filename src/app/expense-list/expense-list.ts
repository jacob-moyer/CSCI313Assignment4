import { Component, inject } from '@angular/core';
import { ExpenseItem } from '../expense-item/expense-item';
import { ExpenseService } from '../services/expense-service';

@Component({
  selector: 'app-expense-list',
  imports: [ExpenseItem],
  templateUrl: './expense-list.html',
  styleUrl: './expense-list.css',
})
export class ExpenseList {
  expenseService = inject(ExpenseService);
}
