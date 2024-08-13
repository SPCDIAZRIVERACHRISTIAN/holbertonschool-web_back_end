#!/usr/bin/env python3

'''this function calls task_wait_random'''

import typing


task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> typing.List[float]:
    '''This function returns all delays'''
    delays = [await task_wait_random(max_delay) for _ in range(n)]

    for i in range(len(delays)):
        for j in range(0, len(delays) - i - 1):
            if delays[j] > delays[j + 1]:
                delays[j], delays[j + 1] = delays[j + 1], delays[j]

    return delays
