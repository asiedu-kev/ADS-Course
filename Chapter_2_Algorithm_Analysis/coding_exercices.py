# Pangram Exercise
# A pangram is a string that contains every letter of the alphabet.
# Given a sentence determine whether it is a pangram in the English alphabet. Ignore case.
# Return either pangram or not pangram as appropriate.
def pangram(s):
    #Replace space from initial sentence
    string_without_spaces = s.lower().replace(" ", "")
    # form a list of char based on string in sentence
    char_list = list(string_without_spaces)
    # from a new list by removing the repeated letter
    unique_char_list = list(set(char_list))
    # Compare the length of the final array to the number of values in alphabets
    if len(unique_char_list) == 26 :
        return 'pangram'
    else :
        return 'not pangram'



def removeKdigits(num: str, k: int) -> str:
    stack = []

    for digit in num:
        # While there are digits in the stack and the current digit is smaller
        # than the last digit in the stack, remove the last digit from the stack
        # to get the smallest possible number.
        while k > 0 and stack and stack[-1] > digit:
            stack.pop()
            k -= 1
        stack.append(digit)

    # If k is still greater than 0, remove the remaining digits from the end.
    while k > 0:
        stack.pop()
        k -= 1

    # Convert the stack back to a string and remove any leading zeros.
    result = ''.join(stack).lstrip('0')

    # If the resulting string is empty, return "0".
    return result if result else "0"



def countBit(x: int):
    result = []
    y = 0
    while(y <= x):
        result.append(bin(y).count('1'))
        y+=1


    return result
