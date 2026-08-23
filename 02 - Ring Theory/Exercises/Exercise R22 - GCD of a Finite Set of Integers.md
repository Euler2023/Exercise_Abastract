---
title: "Exercise R22: GCD of a Finite Set of Integers"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - divisibility
  - bezout-identity
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 3, Ex. 3.3, printed p. 70, PDF p. 82"
created: 2026-08-23
---

# Exercise R22: GCD of a Finite Set of Integers

## Problem Statement

> [!question] Exercise 3.3
> **(a)** Define and prove existence of $\gcd(a_1,\ldots,a_n)$, and prove it is an integer linear combination of the $a_i$.
> 
> **(b)** If the gcd is $d$, prove that $\gcd(a_1/d,\ldots,a_n/d)=1$.

## Hints

> [!hint]- Hint 1
> Consider the subgroup $a_1\mathbb Z+\cdots+a_n\mathbb Z$ of $\mathbb Z$.

## Solution

> [!success]- Solution
> Let
> 
> $$
> I=a_1\mathbb Z+\cdots+a_n\mathbb Z.
> $$
> 
> Every subgroup of $\mathbb Z$ is $d\mathbb Z$ for a unique $d\ge0$. This $d$ divides every $a_i$, and every common divisor of the $a_i$ divides every element of $I$, hence divides $d$. Thus $d$ is the gcd. Since $d\in I$, there are integers $r_i$ with
> 
> $$
> d=r_1a_1+\cdots+r_na_n.
> $$
> 
> If $d\ne0$, divide by $d$ to obtain
> 
> $$
> 1=r_1(a_1/d)+\cdots+r_n(a_n/d).
> $$
> 
> Any common divisor of the normalized integers divides $1$, so their gcd is $1$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Euclidean Domains|Euclidean Domains]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §3, Ex. 3.3, printed p. 70, PDF p. 82]. The solution is an independent derivation for this vault, not a solution printed in Artin.
