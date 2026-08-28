---
title: "Exercise R172: Four Norm Tests in Q[sqrt(-26)]"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - quadratic-norms
  - diophantine-equations
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 7, Ideal Classes, Ex. 7.3, printed p. 410, PDF p. 422"
created: 2026-08-28
---

# Exercise R172: Four Norm Tests in Q[sqrt(-26)]

## Problem Statement

> [!question] Exercise 7.3
> Let $d=-26$. With each of the following integers $n$, decide whether $n$ is the norm of an element $\alpha$ of $R$. If it is, find $\alpha$: $n=75,250,375,5^6$.

## Hints

> [!hint]- Hint 1
> Solve $a^2+26b^2=n$ and use the bound $|b|\le\sqrt{n/26}$.

## Solution

> [!success]- Solution
> Since $-26\equiv2\pmod4$,
>
> $$
> R=\mathbb Z[\sqrt{-26}],
> \qquad
> N(a+b\sqrt{-26})=a^2+26b^2.
> $$
>
> The four cases are:
>
> $$
> \begin{array}{c|c|c}
> n&\text{answer}&\text{one element }\alpha\\ \hline
> 75&\text{yes}&7+\sqrt{-26}\\
> 250&\text{yes}&4+3\sqrt{-26}\\
> 375&\text{no}&\text{none}\\
> 5^6=15625&\text{yes}&125
> \end{array}
> $$
>
> Indeed,
>
> $$
> 7^2+26=75,
> \qquad
> 4^2+26\cdot3^2=250,
> \qquad
> 125^2=5^6.
> $$
>
> For $n=375$, the bound gives $|b|\le3$. The possible values of $a^2$ for $|b|=0,1,2,3$ are
>
> $$
> 375,\quad349,\quad271,\quad141,
> $$
>
> none of which is a square. Thus $375$ is not a norm. As a nontrivial alternative in the last case, $109+12\sqrt{-26}$ also has norm $15625$.

## Related Concepts

- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]
- [[02 - Ring Theory/Concepts/Prime Splitting in Quadratic Fields|Prime Splitting in Quadratic Fields]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]

## Notes

- **Routing:** Ring Theory is primary because the quadratic norm form determines element existence.
- **Computational verification:** The finite searches use the exact bound on $b$; each displayed positive solution was checked by substitution.
- **Source status:** The problem is from [S1, Ch. 13, §13.7, Ex. 7.3, printed p. 410, PDF p. 422]. The solutions and impossibility check are independent.
