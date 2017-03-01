#!Python3
'''
Description
EVEN NUMBERS

Write a program which checks input numbers and determines whether a number is even or not.

INPUT SAMPLE:
 Your program should accept as its first argument a path to a filename. Input example is the following
   701
   4123
   2936

OUTPUT SAMPLE:
 Print 1 if the number is even or 0 if the number is odd.
   0
   0
   1
 All numbers in input are integers > 0 and < 5000.
'''

import sys

with open(sys.argv[1],'r') as test_cases:
        for test in test_cases:
                if test.strip():
			print(0 if (int(test)%2) else 1)
