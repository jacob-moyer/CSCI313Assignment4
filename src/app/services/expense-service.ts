import{ Injectable, signal, computed } from '@angular/core';
import { Expense, ExpenseCategory } from '../models/expense';

@Injectable({providedIn: 'root'})
export class ExpenseService {
    expenses = signal<Expense[]>([]);
    categories = signal<ExpenseCategory[]>(['Work', 'Personal', 'Grocery', 'Utilities', 'Shopping', 'Travel', 'Food']);

    totalExpenses = computed(() => this.expenses().reduce((total, expense) => total + expense.amount, 0));
    highestExpense = computed(() => this.expenses().length ? Math.max(...this.expenses().map(e => e.amount)) : 0);
    averageExpense = computed(() => this.expenses().length ? this.totalExpenses() / this.expenses().length : 0);

    transactionCount = computed(() => this.expenses().length);

    addExpense(expenseName: string, cost: number, type: ExpenseCategory) {
        const newExpense: Expense = {
            id: this.generateId(),
            title: expenseName,
            amount: cost,
            category: type
        }
        this.expenses.update(expenses => [...expenses, newExpense]);
        }
    
    private generateId(): string {
        return 'transaction-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
    }

    deleteExpense(id: string) {
        this.expenses.update(expenses => expenses.filter(expense => expense.id !== id));
    }

}