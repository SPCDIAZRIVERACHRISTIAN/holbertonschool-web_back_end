#!/usr/bin/env python3
'''This function loops 10 times asynchronously wait 1 second and yield
a random number'''


import random
import asyncio
import typing


async def async_generator() -> typing.AsyncGenerator[float, None]:
    '''this loop iterates 10 times and yields a random float and waits 1 second'''
    for i in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
