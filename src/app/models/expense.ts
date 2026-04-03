interface Expense{
    id: string;
    title: string;
    amount: number;
    category: ExpenseCategory;
}

type ExpenseCategory = 'Work' | 'Personal' | 'Grocery' | 'Utilities' | 'Shopping' | 'Travel' | 'Food';