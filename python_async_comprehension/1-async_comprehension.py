#!/usr/bin/env python3

'''A coroutine called async_comprehension that takes no arguments.'''


import typing

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> typing.List[float]:
    '''Collects 10 random numbers and returns 10 random numbers'''
    return [i async for i in async_generator()][:10]
