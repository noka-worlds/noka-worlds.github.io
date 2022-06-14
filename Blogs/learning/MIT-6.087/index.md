---
title: Overview
tags: [MIT,6.087,C,UNIX]
---

### COURSE DESCRIPTION
This course provides a thorough introduction to the C programming language, the workhorse of the UNIX operating system and lingua franca of embedded processors and micro-controllers. The first two weeks will cover basic syntax and grammar, and expose students to practical programming techniques. The remaining lectures will focus on more advanced concepts, such as dynamic memory allocation, concurrency and synchronization, UNIX signals and process control, library development and usage. Daily programming assignments and weekly laboratory exercises are required. Knowledge of C is highly marketable for summer internships, UROPs, and full-time positions in software and embedded systems development.

### Time Line

Problem set 1

|Problem set|Lab|Lecture|Topics|
|:----:     |:----:|:----:|:----|
|1| |1|Introduction. Writing, compiling, and debugging C programs. Hello world.|
|2| |2|Variables and datatypes, operators.|
|3|1|3|Control flow. Functions and modular programming. Variable scope. Static and global variables.|
| | |4|More control flow. Input and output.|
|4| |5|Pointers and memory addressing. Arrays and pointer arithmetic. Strings. Searching and sorting algorithms.|
|5| |6|User-defined datatypes, structs, unions, bitfields. Memory allocation. Linked lists, binary trees.|
|6|2|7|Pointers to pointers, pointer and string arrays, multidimensional arrays. Stacks and queues.|
| | |8|Void and function pointers. Hash tables.|
|7| |9|External libraries. B-trees, priority queues.|
|----|----|----|----|
| | |10|C standard library: stdio.h, ctype.h, stdlib.h, assert.h, stdarg.h, time.h|
| | |11|Dynamic memory allocation, malloc and valgrind, garbage collection.|
| | |12|Multithreading and concurrency.|
| | |13|Multithreaded programming. Sockets and asynchronous I/O.|
| | |14|Linux inter process communication.|


I skipped the Final project of building C application to leveraging one or more open-source libraries as Open-source project just are not my cup of tea. If you are interested in it, you could have a look on <a href = "https://ocw.mit.edu/courses/6-087-practical-programming-in-c-january-iap-2010/9796fe2dda5404aa9d14a49081b842d8_MIT6_087IAP10_project.pdf">this link</a>.

### Setting up the environment (Window) 
I had follow this video to set up the environment in my window machine: https://www.youtube.com/watch?time_continue=427&v=jvg4VtYEhKU&feature=emb_logo

after install minGW, u should be able to compile and run c/c++ program with g++.

To install Gdb, run the following command:

`mingw-get.exe install gdb`

To check the environment set up, the problem set 1, question 1.3 have a test about it.

### Setting up the environment (MAC) 

I use the Clang complier provided by xcode.gd

Here is how I install gdb
https://ports.macports.org/port/gdb/


### Material and Links

The course website: https://ocw.mit.edu/courses/6-087-practical-programming-in-c-january-iap-2010/

