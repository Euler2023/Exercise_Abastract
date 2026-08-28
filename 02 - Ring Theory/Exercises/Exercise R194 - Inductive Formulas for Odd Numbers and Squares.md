---
title: "Exercise R194: Inductive Formulas for Odd Numbers and Squares"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - induction
  - finite-sums
source: "Michael Artin, Algebra, 2nd ed., Appendix, Background Material, Section A.1, About Proofs, Ex. A.1, printed p. 521, PDF p. 533"
created: 2026-08-28
---

# Exercise R194: Inductive Formulas for Odd Numbers and Squares

## Problem Statement

> [!question] Exercise A.1
> Use induction to find a closed form for each of the following expressions.
>
> **(a)** $1+3+5+\cdots+(2n+1)$
>
> **(b)** $1^2+2^2+3^2+\cdots+n^2$

## Hints

> [!hint]- Hint 1
> Guess the formulas from the first few values, then compare the $n$th and $(n+1)$st partial sums.

## Solution

> [!success]- Solution
> **(a)** The closed form is
>
> $$
> \boxed{1+3+\cdots+(2n+1)=(n+1)^2.}
> $$
>
> For $n=0$ this is $1=1^2$. If it holds for $n$, then adjoining the next odd number gives
>
> $$
> (n+1)^2+(2n+3)=(n+2)^2,
> $$
>
> which is the formula with $n$ replaced by $n+1$.
>
> **(b)** The closed form is
>
> $$
> \boxed{1^2+2^2+\cdots+n^2=\frac{n(n+1)(2n+1)}6.}
> $$
>
> The formula is true for $n=1$. Assuming it for $n$, the next partial sum is
>
> $$
> \frac{n(n+1)(2n+1)}6+(n+1)^2
> =\frac{(n+1)(n+2)(2n+3)}6,
> $$
>
> exactly the required expression for $n+1$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Mathematical Induction and Peano Arithmetic|Mathematical Induction and Peano Arithmetic]]

## Notes

- **Routing:** Ring Theory is the nearest primary home because the identities concern the arithmetic structure of the integers; induction is the computational tool.
- **Source status:** [S1, Appendix, §A.1, Ex. A.1, printed p. 521, PDF p. 533]. Both formulas and induction proofs are independent.
