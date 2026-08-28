---
title: "Exercise R174: Norms Predicted by Class Relations"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - class-groups
  - quadratic-norms
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 8, Computing the Class Group, Ex. 8.1, printed p. 410, PDF p. 422"
created: 2026-08-28
---

# Exercise R174: Norms Predicted by Class Relations

## Problem Statement

> [!question] Exercise 8.1
> With reference to Example 13.8.6, since $[P]=[S]^3$ and $[Q]=[S]^2$, Lemma 13.8.7 predicts that there are elements whose norms are $2\cdot5^3$ and $3^2\cdot5^2$. Find such elements.

## Hints

> [!hint]- Hint 1
> In $R=\mathbb Z[\sqrt{-26}]$, solve $a^2+26b^2=250$ and $a^2+26b^2=225$.

## Solution

> [!success]- Solution
> Put $\delta=\sqrt{-26}$. The norm is
>
> $$
> N(a+b\delta)=a^2+26b^2.
> $$
>
> Two required elements are
>
> $$
> \boxed{4+3\delta}
> \qquad\text{and}\qquad
> \boxed{11+2\delta},
> $$
>
> because
>
> $$
> N(4+3\delta)=4^2+26\cdot3^2=250=2\cdot5^3
> $$
>
> and
>
> $$
> N(11+2\delta)=11^2+26\cdot2^2=225=3^2\cdot5^2.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]
- [[02 - Ring Theory/Exercises/Exercise R172 - Four Norm Tests in Q Square Root Minus Twenty-Six|Four Norm Tests in Q[sqrt(-26)]]]

## Notes

- **Routing:** Ring Theory is primary because the requested norms arise from relations in the ideal class group.
- **Source status:** The problem is from [S1, Ch. 13, §13.8, Ex. 8.1, printed p. 410, PDF p. 422]. The two elements and norm checks are independent computations.
