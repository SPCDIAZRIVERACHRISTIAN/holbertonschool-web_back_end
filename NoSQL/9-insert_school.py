#!/usr/bin/env python3

'''inserts new document in collection'''


def insert_school(mongo_collection, **kwargs):
    collection = mongo_collection.insert_one(kwargs)
    return collection.inserted_id
