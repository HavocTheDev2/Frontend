''' We will make an advanced bank account system.'''

# Main class

class BankAccount:
    ''' This is the main bank account class.'''
    # Constructor
    def __init__(self, name, balance=0.0):
        self.log("Account created!")
        self.name = name
        self.balance = balance

    # Log function
    def log(self, message):
        print(message)

    # Deposit function
    def deposit(self, amount):
        self.log("Deposited: " + str(amount))
        self.balance += amount

    # Withdraw function
    def withdraw(self, amount):
        self.log("Withdrawn: " + str(amount))
        self.balance -= amount

    # Check balance function
    def check_balance(self):
        self.log("Balance: " + str(self.balance))
        
# Main function
def main():
    # Create a new bank account
    account = BankAccount("John Doe", 1000.0)

    # Deposit 500
    account.deposit(500)

    # Withdraw 250
    account.withdraw(250)

    # Check balance
    account.check_balance()

# Call main function
main()