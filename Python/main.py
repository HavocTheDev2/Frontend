''' We will make an advanced bank account system.'''
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
    acc_name = input("Enter your name: ")
    acc = BankAccount(acc_name)
    while True:
        print("1. Deposit")
        print("2. Withdraw")
        print("3. Check balance")
        print("4. Exit")
        choice = int(input("Enter your choice: "))
        if choice == 1:
            amount = float(input("Enter amount to deposit: "))
            acc.deposit(amount)
        elif choice == 2:
            amount = float(input("Enter amount to withdraw: "))
            acc.withdraw(amount)
        elif choice == 3:
            acc.check_balance()
        elif choice == 4:
            break
        else:
            print("Invalid choice!")

    SystemExit(0)

# Call main function
main()

# To run this program, open terminal/cmd and type: python main.py