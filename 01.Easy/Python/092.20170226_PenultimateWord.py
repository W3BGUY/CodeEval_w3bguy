#!Python3
'''
PENULTIMATE WORD
Description
Write a program which finds the next-to-last word in a string.

INPUT SAMPLE:
 Your program should accept as its first argument a path to a filename. Input example is the following

   some line with text
   another line

 Each line has more than one word.

OUTPUT SAMPLE:
 Print the next-to-last word in the following way.

   with 
   another
'''


#import fileinput
import sys

#for line in fileinput.input():
	# Check for empty lines
with open(sys.argv[1],'r') as test_cases:
	for test in test_cases:
		if test.strip():
			#Convert to a list
			lineList=test.split()			
			#Write out second to last word from string
			print(lineList[-2])
