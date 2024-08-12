#!/usr/bin/env python3

'''This function returns values form a list'''

import typing


def element_length(
    lst: typing.Iterable[typing.Sequence]
) -> typing.List[typing.Tuple[typing.Sequence, int]]:
    '''Returns a loop for list given'''
    return [(i, len(i)) for i in lst]
