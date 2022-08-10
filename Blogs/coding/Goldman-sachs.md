---
title: Goldman Sachs virtual engineering program experience
tags: [virtual internship]
---

# Goldman Sachs virtual engineering program experience

## Introduction

A short virtual internship program related to cryptography offered by Goldman Sachs which could complete in a hour on [Forage](https://www.theforage.com/) platform.

## Material provided

- [Password cracking explained (techniques described in 2013 still haven’t changed)](https://arstechnica.com/information-technology/2013/05/how-crackers-make-minced-meat-out-of-your-passwords/)
- [Password salting](https://en.wikipedia.org/wiki/Salt_(cryptography))
- [Hash functions](https://en.wikipedia.org/wiki/Cryptographic_hash_function)
- [Password cracking tools](https://en.wikipedia.org/wiki/Password_cracking#Software)
- [Password strength checker](https://howsecureismypassword.net/)
- and a leaked password file.

## Work to do / submission file

I need to construct a report with answer to the fellow question and include the original password found in the hash.

- What type of hashing algorithm was used to protect passwords?
- What level of protection does the mechanism offer for passwords?
- What controls could be implemented to make cracking much harder for the hacker in the event of a password database leaking again?
- What can you tell about the organization’s password policy (e.g. password length, key space, etc.)?
- What would you change in the password policy to make breaking the passwords harder?

## Expectation on Learning outcome

Learn something related to cryptography, encryption ,decryption, read some paper and explore a bit on it.

## Actual Learning Outcome

I had read the material provided, [Salt (cryptography) - Wikipedia](https://en.wikipedia.org/wiki/Salt_(cryptography)) , but find out this is not useful at all during the program.

To sum up what is a Salt in cryptography, basically is to add random string after your original password before process your password through hashing function. This is to prevent the use of rainbow table for getting common password. 

[Rainbow table - Wikipedia](https://en.wikipedia.org/wiki/Rainbow_table)

Learn a bit on MD5 algorithm, read a bit on SHA. 

[https://en.wikipedia.org/wiki/MD5](https://en.wikipedia.org/wiki/MD5)

Here is the paper about two Chinese professor, Tao Xie, Dengguo Feng, cracking MD5 hashing method in 2009.

[https://eprint.iacr.org/2009/223.pdf](https://eprint.iacr.org/2009/223.pdf)

## Recommendations for beginners

Something good to play with if you are free at night for 1 hour and got nothing to do

## Approach:

I read all the material provided first, and search related page of hashing method mentioned in the material. MD5, SHA1,SHA2 . I believe the password are encrypted in such ways, so I find an online tool to crack it. 

[MD5 Decrypter - Password Hash Cipher (+Salt) - Online Decoder (dcode.fr)](https://www.dcode.fr/md5-hash)

Funny enough, this are all password in the common password bank like qwerty,123456, so I could find the password out easily.