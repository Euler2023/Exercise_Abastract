---
title: "Exercise R67: When Two Quadratic Quotients Coincide"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - quotient-rings
  - nilpotents
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §5, Ex. 5.5, printed p. 356, PDF p. 368"
created: 2026-08-27
---

# Exercise R67: When Two Quadratic Quotients Coincide

## Problem Statement

> [!question] Exercise 5.5
> Are there fields $F$ such that $F[x]/(x^2)$ and $F[x]/(x^2-1)$ are isomorphic?

## Hints

> [!hint]- Hint 1
> Compare nilpotents when $\operatorname{char}F\ne2$, and translate $x$ by $1$ when $\operatorname{char}F=2$.

## Solution

> [!success]- Solution
> In $F[x]/(x^2)$, the residue of $x$ is a nonzero nilpotent. If $\operatorname{char}F\ne2$, then
>
> $$
> x^2-1=(x-1)(x+1)
> $$
>
> has distinct coprime factors, so the second ring is $F\times F$ and has no nonzero nilpotents. Hence the rings are not isomorphic.
>
> If $\operatorname{char}F=2$, then $x^2-1=(x-1)^2$. Sending the residue of $x$ in $F[x]/(x^2)$ to the residue of $x-1$ in $F[x]/((x-1)^2)$ gives an isomorphism. Therefore such an isomorphism exists exactly in characteristic $2$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Nilpotent and Idempotent Elements|Nilpotent and Idempotent Elements]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]

## Notes

- **Source status:** The problem is from [S1, Ch. 11, §5, Ex. 5.5, printed p. 356, PDF p. 368]. The invariant and construction are independent.

