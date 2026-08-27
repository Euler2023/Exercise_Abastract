---
title: "Exercise R64: Adjoining an Existing Element"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - adjoining-elements
  - quotient-rings
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §5, Ex. 5.2, printed p. 356, PDF p. 368"
created: 2026-08-27
---

# Exercise R64: Adjoining an Existing Element

## Problem Statement

> [!question] Exercise 5.2
> Let $a\in R$. If an element $\alpha$ is adjoined with the relation $\alpha=a$, prove that the resulting ring is isomorphic to $R$.

## Hints

> [!hint]- Hint 1
> Use evaluation at $a$ on $R[x]$.

## Solution

> [!success]- Solution
> The ring obtained by adjoining $\alpha$ with $\alpha=a$ is $R[x]/(x-a)$. Evaluation
>
> $$
> \operatorname{ev}_a:R[x]\to R,
> \qquad f(x)\mapsto f(a),
> $$
>
> is surjective and has kernel $(x-a)$, because division by the monic polynomial $x-a$ gives $f=q(x-a)+f(a)$. The first isomorphism theorem yields
>
> $$
> R[x]/(x-a)\cong R.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[02 - Ring Theory/Concepts/Isomorphism Theorems for Rings|Isomorphism Theorems for Rings]]

## Notes

- **Source status:** The problem is from [S1, Ch. 11, §5, Ex. 5.2, printed p. 356, PDF p. 368]. The evaluation proof is independent.

