export type IAccount = {
	amount: number;
	description?: string;
	name: string;
	user_id: string;
};

export type ICategory = {
	user_id: string;
	name: string;
};

export type IPayee = {
	user_id: string;
	name: string;
};
export type ITransaction = {
	user_id: string;
	account_id: string;
	payee_id: number;
	category_id: number;
	amount: number;
	description: string;
	transaction_date: string;
};