class BankAccount:
    def __init__(self,acc_no,balance):
        self.acc_no = acc_no
        self.balance = balance
        
    def deposite(self,amount):
        self.balance += amount
        print(f" Deposited {amount}. Balance {self.balance}")
    
    def withdraw(self,amount):
        if amount > self.balance:
            print("Insufficient funds")
        else:
            self.balance -= amount
            print(f"Withdrawn {amount}. Balance {self.balance}")
    
    def get_balance(self):
        print(f"Balance {self.balance}")
    
account1 = BankAccount(123,100)
account2 = BankAccount(124,200)

account1.deposite(100)
account2.withdraw(100)