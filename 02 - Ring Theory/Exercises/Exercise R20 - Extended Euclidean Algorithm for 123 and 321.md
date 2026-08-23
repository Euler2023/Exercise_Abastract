---
title: "Exercise R20: Extended Euclidean Algorithm for 123 and 321"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - divisibility
  - euclidean-algorithm
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 3, Ex. 3.1, printed p. 70, PDF p. 82"
created: 2026-08-23
---

# Exercise R20: Extended Euclidean Algorithm for 123 and 321

## Problem Statement

> [!question] Exercise 3.1
> Let $a=123$ and $b=321$. Compute $d=\gcd(a,b)$ and express $d$ as $ra+sb$ with integers $r,s$.

## Hints

> [!hint]- Hint 1
> Run the Euclidean algorithm, then substitute the remainders backward.

## Solution

> [!success]- Solution
> The Euclidean algorithm is
> 
> $$
> 321=2\cdot123+75,\quad123=75+48,\quad75=48+27,
> $$
> 
> $$
> 48=27+21,\quad27=21+6,\quad21=3\cdot6+3.
> $$
> 
> Thus $d=3$. Back-substitution gives
> 
> $$
> 3=47\cdot123-18\cdot321.
> $$
> 
> Hence one choice is $r=47$, $s=-18$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §3, Ex. 3.1, printed p. 70, PDF p. 82]. The solution is an independent derivation for this vault, not a solution printed in Artin.
