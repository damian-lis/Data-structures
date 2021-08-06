1. Arrays
- insertion in order is kept
- element acces via index
- iterable
- size adjust dynamically
- duplicate values are allowed
- deletion and finding elements can require "extra work"

2. Sets
- insertion order is not stored/memorized
- element access and exraction via method
- iterable
- size adjust dynamically
- duplicate values are not allowed (i.e. unique values only)
- deletion and finding elements is trivial and fast

RECAP: Arrays vs Sets:
Arrays:
- you can always use arrays
- must-use if order matters and/or duplicates are wanted
Sets:
- only usable if order does not matter and you only need unique values
- can simplify data access (e.g. finding, deletion) - better performance in this case compared to array

---------------------------------------------------------------

3. Objects:
- unordered key-value pairs of data
- element access via key (property name)
- not iterable (only with for in)
- keys are unique, values are not
- keys have to be strings, numbers, symbols
- can store data & "functionality" (methods)

4. Maps:
- ordered key-value pairs of data
- element access via key
- iterable
- keys are unique, values are not
- keys can be anything (incl. reference values like arrays)
- pure data storage optimized for data access (without extra ability to write methods)
- we cant access keys like in the way of objects (only by proper methods)
- we can delete key object only through reference not by same object with proper key value pairs

RECAP: Objects vs Maps:
Objects:
- very versatile construct and data storage in js
- must use if you want to add extra functionality
Maps:
- Focused on data storage and access
- can simplify and improve data access compared to objects 
