---
title: "Exercise F44: No Sum of Squares Equals Minus One in a Cubic Field"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - embeddings
  - sums-of-squares
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Fields, Section 2, Algebraic and Transcendental Elements, Ex. 2.3, printed p. 472, PDF p. 484"
created: 2026-08-28
---

# Exercise F44: No Sum of Squares Equals Minus One in a Cubic Field

## Problem Statement

> [!question] Exercise 2.3
> Let $\beta=\omega\sqrt[3]{2}$, where $\omega=e^{2\pi i/3}$, and let $K=\mathbb Q(\beta)$. Prove that the equation $x_1^2+\cdots+x_k^2=-1$ has no solution with $x_i$ in $K$.

## Hints

> [!hint]- Hint 1
> Although the displayed generator is nonreal, its minimal polynomial has a real root.

## Solution

> [!success]- Solution
> We have $\beta^3=2$, and $x^3-2$ is irreducible over $\mathbb Q$ by Eisenstein's criterion. Hence there is a field embedding
>
> $$
> \sigma:K=\mathbb Q(\beta)\longrightarrow\mathbb R
> $$
>
> determined by $\sigma(\beta)=\sqrt[3]{2}$, the real root of the same irreducible polynomial.
>
> If elements $x_1,\ldots,x_k\in K$ satisfied $x_1^2+\cdots+x_k^2=-1$, applying $\sigma$ would give
>
> $$
> \sigma(x_1)^2+\cdots+\sigma(x_k)^2=-1
> $$
>
> in $\mathbb R$. The left side is a sum of nonnegative real numbers, which is impossible. Therefore no such solution exists.

## Related Concepts

- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]

## Notes

- **Routing:** Field Theory is primary because a real embedding of the cubic extension supplies the obstruction.
- **Method boundary:** The field is not literally a subfield of $\mathbb R$ under the displayed embedding in $\mathbb C$, but it admits a different embedding into $\mathbb R$.
- **Source status:** [S1, Ch. 15, §15.2, Ex. 2.3, printed p. 472, PDF p. 484]. The proof is independent.
