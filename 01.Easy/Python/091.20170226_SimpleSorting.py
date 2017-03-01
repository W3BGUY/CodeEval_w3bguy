#!Python3
'''
Description
 Write a program which sorts numbers.
INPUT SAMPLE:
Your program should accept as its first argument a path to a filename. Input example is the following

 70.920 -38.797 14.354 99.323 90.374 7.581
 -37.507 -3.263 40.079 27.999 65.213 -55.552

OUTPUT SAMPLE:
Print sorted numbers in the following way. Please note, that you need to print the numbers till the 3rd digit after the dot including trailing zeros.

 -38.797 7.581 14.354 70.920 90.374 99.323
 -55.552 -37.507 -3.263 27.999 40.079 65.213
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
                        #Sort list as Float
                        lineList.sort(key=float)
                        #Convert back string
                        lineString=' '.join(map(str,lineList))
                        #Write out new line
                        print(lineString)


