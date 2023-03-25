# Prompting copilot multiple conditions:
import datetime

def parse_expenses(expenses_string):
    """Parse the list of expenses and return the list of triples (date, value, currency).
    Ignore lines starting with #.
    Parse the date using datetime.
    """

    expenses = []
    for expense in expenses_string.splitlines():
        if expense.startswith('#') or not expense:
            continue
        date, value, currency = expense.split()
        date = datetime.datetime.strptime(date, '%Y-%m-%d')
        value = float(value)
        expenses.append((date, value, currency))
    return expenses