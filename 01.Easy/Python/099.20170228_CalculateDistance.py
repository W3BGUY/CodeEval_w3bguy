#!Python3
'''
Description
You have coordinates of 2 points and need to find the distance between them.

INPUT SAMPLE:
 Your program should accept as its first argument a path to a filename. Input example is the following

   (25, 4) (1, -6)
   (47, 43) (-25, -11)
 All numbers in input are integers between -100 and 100.

OUTPUT SAMPLE:
 Print results in the following way.

   26
   90
 You don't need to round the results you receive. They must be integer numbers.
'''

import sys,math

with open(sys.argv[1],'r') as test_cases:
        for test in test_cases:
                if test.strip():
                        lineList=test.replace(',','').replace('(','').replace(')','').split()
                        x1=int(lineList[0])
			x2=int(lineList[1])
			y1=int(lineList[2])
			y2=int(lineList[3])
			print(int(math.sqrt((x1-y1)**2+(x2-y2)**2)))
