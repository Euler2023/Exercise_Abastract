---
title: "Exercise R195: Sum of the First n Cubes"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - induction
  - finite-sums
source: "Michael Artin, Algebra, 2nd ed., Appendix, Background Material, Section A.1, About Proofs, Ex. A.2, printed p. 521, PDF p. 533"
created: 2026-08-28
---

# Exercise R195: Sum of the First n Cubes

## Problem Statement

> [!question] Exercise A.2
> Prove that $1^3+2^3+\cdots+n^3=(n(n+1))^2/4$.

## Hints

> [!hint]- Hint 1
> Add $(n+1)^3$ to the induction hypothesis and factor out $(n+1)^2$.

## Solution

> [!success]- Solution
> For $n=1$, both sides equal $1$. Suppose
>
> $$
> \sum_{k=1}^{n}k^3=\frac{n^2(n+1)^2}{4}.
> $$
>
> Then
>
> $$
> \begin{aligned}
> \sum_{k=1}^{n+1}k^3
> &=\frac{n^2(n+1)^2}{4}+(n+1)^3\\
> &=(n+1)^2\left(\frac{n^2}{4}+n+1\right)\\
> &=\frac{(n+1)^2(n+2)^2}{4}.
> \end{aligned}
> $$
>
> This is the desired formula with $n$ replaced by $n+1$, so induction proves it for every positive integer $n$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Mathematical Induction and Peano Arithmetic|Mathematical Induction and Peano Arithmetic]]

## Notes

- **Routing:** Ring Theory is the nearest primary home because this is an integer identity proved from the inductive structure of $\mathbb N$.
- **Source status:** [S1, Appendix, §A.1, Ex. A.2, printed p. 521, PDF p. 533]. The proof is independent.
