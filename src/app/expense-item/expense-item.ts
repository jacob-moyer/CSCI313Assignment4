import { CurrencyPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Expense } from '../models/expense';
import { ExpenseService } from '../services/expense-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-expense-item',
  imports: [CurrencyPipe],
  templateUrl: './expense-item.html',
  styleUrl: './expense-item.css',
})
export class ExpenseItem {
  @Input() expense!: Expense;
  expenseService = inject(ExpenseService);
  router = inject(Router);


  categoryColor() {
    const colors: Record<string, string> = {
      Work: '#0d6efd', Personal: '#6f42c1', Grocery: '#198754',
      Utilities: '#fd7e14', Shopping: '#e83e8c', Travel: '#0dcaf0', Food: '#ffc107'
    };
    return colors[this.expense.category] ?? '#6c757d';
  }

  onDelete() {
    this.expenseService.deleteExpense(this.expense.id);
  }

  }
