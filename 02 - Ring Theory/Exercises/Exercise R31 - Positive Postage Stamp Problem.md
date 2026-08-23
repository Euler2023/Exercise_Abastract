---
title: "Exercise R31: Positive Postage-Stamp Problem"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - bezout-identity
  - frobenius-problem
  - coprime-integers
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Miscellaneous Problems, Ex. M.12, printed p. 76, PDF p. 88"
created: 2026-08-23
---

# Exercise R31: Positive Postage-Stamp Problem

## Problem Statement

> [!question] Exercise M.12
> Let $a,b$ be positive relatively prime integers.
> 
> **(a)** Prove that every sufficiently large positive integer $n$ can be written $n=ra+sb$, where $r,s$ are positive integers.
> 
> **(b)** Determine the largest integer not of this form.

## Hints

> [!hint]- Hint 1
> Choose $r\in\{1,\ldots,b\}$ so that $ra\equiv n\pmod b$.

> [!hint]- Hint 2
> Show directly that $ab$ has no representation with both coefficients positive.

## Solution

> [!success]- Solution
> For any $n>ab$, multiplication by $a$ permutes the residue classes modulo $b$, so there is a unique $r\in\{1,\ldots,b\}$ with $ra\equiv n\pmod b$. Then
> 
> $$
> s=\frac{n-ra}{b}
> $$
> 
> is an integer, and $n-ra>n-ab>0$, so $s>0$. Thus every $n>ab$ has the required form.
> 
> The integer $ab$ does not. If $ab=ra+sb$ with $r,s>0$, reducing modulo $a$ gives $a\mid s$. Hence $s\ge a$, so $sb\ge ab$, leaving $ra\le0$, a contradiction. Therefore the largest nonrepresentable integer, under Artin's requirement that both coefficients be positive, is
> 
> $$
> ab.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, Misc. Problems, Ex. M.12, printed p. 76, PDF p. 88]. The solution is an independent derivation for this vault, not a solution printed in Artin.
- **Convention warning:** With nonnegative coefficients the usual Frobenius number is $ab-a-b$; Artin explicitly requires $r,s>0$, which shifts the answer to $ab$.
