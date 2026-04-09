import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from '../services/expense-service';
import { Router } from '@angular/router';
import { ExpenseCategory } from '../models/expense';


@Component({
  selector: 'app-add-expense',
  imports: [FormsModule],
  templateUrl: './add-expense.html',
  styleUrl: './add-expense.css',
})
export class AddExpense {
    expenseService = inject(ExpenseService);
    router = inject(Router);

    title = '';
    amount = 0;
    category: ExpenseCategory = 'Food';
    getcategories() {
        return this.expenseService.categories();
    }

    onSubmit() {
      if(!this.title || this.amount <= 0) return;
      this.expenseService.addExpense(this.title, this.amount, this.category);
      this.title = '';
      this.amount = 0;
      this.category = 'Food';
    }

}
