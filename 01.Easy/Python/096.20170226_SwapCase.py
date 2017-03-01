#!Python3
'''
SWAP CASE
Description
Write a program which swaps letters' case in a sentence. All non-letter characters should remain the same.

INPUT SAMPLE:
 Your program should accept as its first argument a path to a filename. Input example is the following

   Hello world!
   JavaScript language 1.8
   A letter

OUTPUT SAMPLE:
 Print results in the following way.

   hELLO WORLD!
   jAVAsCRIPT LANGUAGE 1.8
   a LETTER
'''

import sys

with open(sys.argv[1],'r') as test_cases:
	for test in test_cases:
		res=''
		if test.strip():
			splitLine=test.split()
			for W in splitLine:
				for L in W:
					res+=L.swapcase()
				res+=' '
			print(res.strip())
