#!Python3
'''
CAPITALIZE WORDS
Description
Write a program which capitalizes the first letter of each word in a sentence.

INPUT SAMPLE:
 Your program should accept as its first argument a path to a filename. Input example is the following

   Hello world
   javaScript language
   a letter
   1st thing

OUTPUT SAMPLE:
 Print capitalized words in the following way.

   Hello World
   JavaScript Language
   A Letter
   1st Thing
'''

import sys
import string

with open(sys.argv[1],'r') as test_cases:
	for test in test_cases:
		res=''
		if test.strip():
			splitLine=test.split()
			for item in splitLine:
				res+=item[0].upper()+item[1:]+" "
		print(res.strip())
