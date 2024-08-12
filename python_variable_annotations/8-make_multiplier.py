#!/usr/bin/env python3

'''function that returns a function that multiplies a float'''

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    '''this is a function that returns a function'''
    def multiplier_function(value: float) -> float:
        '''this function multiplies'''
        return value * multiplier
    return multiplier_function
