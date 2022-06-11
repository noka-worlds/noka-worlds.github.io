---
title: Problem set 1
tags: [MIT,6.087,C,UNIX]
---

### Problem

Lecture notes link <a href="https://ocw.mit.edu/courses/6-087-practical-programming-in-c-january-iap-2010/resources/mit6_087iap10_lec01/" >Click me!</a><br />
Question link <a href="https://ocw.mit.edu/courses/6-087-practical-programming-in-c-january-iap-2010/resources/mit6_087iap10_assn01/" >Click me!</a><br />
Solution link <a href="https://ocw.mit.edu/courses/6-087-practical-programming-in-c-january-iap-2010/resources/mit6_087iap10_assn01_sol/" >Click me!</a>

#### 1.1 (a) What do curly braces denote in C? Why does it make sense to use curly braces to surround the body of a function?

The curly braces denote a block of code, in which variables can be declared. **Variables
declared within the block are valid only until the end of the block**, marked by the matching
right curly brace ’}’. The body of a function is one such type of block, and thus, curly braces
are used to describe the extent of that block.

#### 1.1 (b) Describe the difference between the literal values 7, "7", and ’7’.
7 is integer<br />
"7" is a a null-terminated string holds a character '7'<br />
'7' is a char<br />
#### 1.1  (c) Consider the statement
```
double ans = 10.0+2.0/3.0−2.0∗2.0;
```

** Rewrite this statement, inserting parentheses to ensure that ans = 11.0 
upon evaluation of this statement. **

double ans = 10.0+2.0/((3.0−2.0)∗2.0)

#### 1.2 Consider the statement
```
double ans = 18.0/squared(2+1)
```
**
For each of the four versions of the function macro squared() below, write the corresponding value
of ans.**
```
1. #define squared(x) x*x 
2. #define squared(x) (x*x)
3. #define squared(x) (x)*(x)
4. #define squared(x) ((x)*(x))
```

1. 18.0/2+1*2+1 = 12.0
2. 18.0/(2+1*2+1) = 3.6
3. 18.0/(2+1)*(2+1) = 18.0
4. 18.0/((2+1)*(2+1)) = 2.0

#### 1.3 Write the “Hello, 6.087 students” program described in lecture in your favorite text editor and compile and execute it. Turn in a printout or screen shot showing
```
#include <stdio.h>
int main() {
   // printf() displays the string inside quotation
   printf("Hello, World!");
   return 0;
}
```
• The command used to compile your program

```
gcc -g -O0 -Wall hello.c -o hello.o
```

• The command used to execute your program (using gdb)
```
gdb hello.o
gdb run
```

#### 1.4 The following lines of code, when arranged in the proper sequence, output the simple message “All your base are belong to us.”
```c
1. return 0;
2. const char msg[] = MSG1;
3. }
4. #define MSG1 "All your base are belong to us!"
5. int main(void) {
6. #include <stdio.h>
7. puts(msg);
```
** Write out the proper arrangement (line numbers are sufficient) of this code. **

6 -> 4 -> 5 -> 2 -> 7 -> 1 -> 3


#### 1.5 For each of the following statements, explain why it is not correct, and fix it.
```
(a) #include <stdio.h>;
```
semicolons `;` refer to termination. Pre-processor macros should not be terminated. The correct one will be `#include <stdio.h>`

```
(b) int function(void arg1)
{
return arg1-1;
}
```
void type signifies an empty variable, `void` should be replace with `int` instead.

```
(c) #define MESSAGE = "Happy new year!"
puts(MESSAGE);
```
There is not any needs of assignment operator. The correct one will be '#define MESSAGE "Happy new year!"'

## Short summary of Lecture 1

#### File structure of a .c file

```c
/* Begin with comments about file contents */
Insert #include statements and preprocessor
definitions
Function prototypes and variable declarations
Define main() function
{
Function body
}
Define other function
{
Function body
}
```

#### Preprocessor macros

Preprocessor macros begin with `#` character 
```c
1. #include <stdio.h>
2. #define msg "hello, 6.087 students"
```

#### important command

• The command used to compile your program

```
gcc -g -O0 -Wall hello.c -o hello.o
```

• The command used to execute your program (using gdb)
```
gdb hello.o
gdb run
```