---
title: "Exercise R196: A Telescoping Reciprocal Sum"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - induction
  - telescoping-sums
source: "Michael Artin, Algebra, 2nd ed., Appendix, Background Material, Section A.1, About Proofs, Ex. A.3, printed p. 521, PDF p. 533"
created: 2026-08-28
---

# Exercise R196: A Telescoping Reciprocal Sum

## Problem Statement

> [!question] Exercise A.3
> Prove that $1/(1\cdot2)+1/(2\cdot3)+\cdots+1/(n(n+1))=n/(n+1)$.

## Hints

> [!hint]- Hint 1
> Use $1/(k(k+1))=1/k-1/(k+1)$, or add the final term in an induction.

## Solution

> [!success]- Solution
> The partial-fraction identity
>
> $$
> \frac1{k(k+1)}=\frac1k-\frac1{k+1}
> $$
>
> makes the sum telescope:
>
> $$
> \sum_{k=1}^n\frac1{k(k+1)}
> =\left(1-\frac12\right)+\left(\frac12-\frac13\right)+\cdots+left(\frac1n-\frac1{n+1}\right)
> =1-\frac1{n+1}
> =\boxed{\frac n{n+1}}.
> $$
>
> This also gives the requested induction: after the formula for $n$, adding $1/((n+1)(n+2))$ produces $(n+1)/(n+2)$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Mathematical Induction and Peano Arithmetic|Mathematical Induction and Peano Arithmetic]]
- [[02 - Ring Theory/Concepts/Partial Fraction Decomposition|Partial Fraction Decomposition]]

## Notes

- **Routing:** Ring Theory is the nearest primary home because the proof is an exact rational identity organized by induction.
- **Source status:** [S1, Appendix, §A.1, Ex. A.3, printed p. 521, PDF p. 533]. The proof is independent.
