---
title: "Exercise Rep95: Associativity of the Polynomial Action of SU2"
topic: representation-theory
difficulty: beginner
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 8, Ex. 8.2, printed p. 320, PDF p. 332"
created: 2026-08-27
---

# Exercise Rep95: Associativity of the Polynomial Action of SU2

## Problem Statement

> [!question] Exercise 8.2
> Verify the associative law $[Q[Pf]]=[(QP)f]$ for the operation (10.9.3).

## Hints

> [!hint]- Hint 1
> Write the variables as a row vector and use ordinary matrix associativity.

## Solution

> [!success]- Solution
> The operation is substitution by the row-vector action:
>
> $$
> [Pf](u,v)=f((u,v)P).
> $$
>
> Therefore
>
> $$
> [Q[Pf]](u,v)=[Pf]((u,v)Q)
> =f(((u,v)Q)P)=f((u,v)(QP))=[(QP)f](u,v).
> $$
>
> This is exactly associativity of matrix multiplication, so the construction defines a representation. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]
- [[06 - Representation Theory/Concepts/SU2 Quaternions and the Spin Cover|SU2, Quaternions, and the Spin Cover]]

## Notes

- Equation (10.9.3) and the exercise were checked at [S1, Ch. 10, §8, Ex. 8.2, printed p. 320, PDF p. 332].

