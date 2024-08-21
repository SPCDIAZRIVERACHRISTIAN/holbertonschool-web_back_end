#!/usr/bin/env python3

"""This is a function named index_range that takes two integer arguments"""

import typing


def index_range(page, page_size) -> typing.Tuple:
    ''' Returns a tuple of size two containing
    a start index and an end index. '''
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)
