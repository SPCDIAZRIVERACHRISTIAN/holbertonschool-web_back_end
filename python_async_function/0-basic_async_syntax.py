#!/usr/bin/env python3

'''this function is an asynchronous coroutine that
takes an integer as argument'''

import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    '''Awaits for a rondom delay between 0 and max_delay'''
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
