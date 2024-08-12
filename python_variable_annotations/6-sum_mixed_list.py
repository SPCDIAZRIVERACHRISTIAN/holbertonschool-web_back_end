#!/usr/bin/env python3

'''Takes a list of integers and floats and returns their sum as float'''

from typing import Union


def sum_mixed_list(mxd_list: Union[int, float]) -> float:
    '''Returns a sum of list in floats'''
    return sum(mxd_list)
