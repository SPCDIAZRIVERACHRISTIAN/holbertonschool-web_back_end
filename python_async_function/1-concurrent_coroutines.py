#!/usr/bin/env python3

'''This function returns a list of all delays'''

import typing


wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> typing.List[float]:
    '''This function returns all delays'''
    delays = [await wait_random(max_delay) for _ in range(n)]


    for i in range(len(delays)):
        for j in range(0, len(delays) - i - 1):
            if delays[j] > delays[j + 1]:
                delays[j], delays[j + 1] = delays[j + 1], delays[j]

    return delays
