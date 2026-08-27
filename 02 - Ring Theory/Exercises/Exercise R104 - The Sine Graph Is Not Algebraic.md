---
title: "Exercise R104: The Sine Graph Is Not Algebraic"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - algebraic-curves
  - transcendence
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, Miscellaneous Exercises, Ex. M.6, printed p. 358, PDF p. 370"
created: 2026-08-27
---

# Exercise R104: The Sine Graph Is Not Algebraic

## Problem Statement

> [!question] Exercise M.6
> Prove that the locus $y=\sin x$ in $\mathbb R^2$ does not lie on any algebraic curve in $\mathbb C^2$.

## Hints

> [!hint]- Hint 1
> If $P(x,\sin x)$ vanished on the real axis, extend it to an entire function and evaluate at $x=it$.

## Solution

> [!success]- Solution
> Suppose a nonzero $P(x,y)=\sum_{k=0}^n a_k(x)y^k\in\mathbb C[x,y]$, with $a_n\ne0$, satisfies $P(x,\sin x)=0$ for all real $x$. The function $P(z,\sin z)$ is entire and vanishes on a set with a limit point, so the identity theorem makes it identically zero.
>
> Put $z=it$ with $t\to+\infty$. Since $\sin(it)=i\sinh t$, division by $(i\sinh t)^n$ gives
>
> $$
> a_n(it)+\sum_{k<n}a_k(it)(i\sinh t)^{k-n}=0.
> $$
>
> Each term in the sum tends to $0$ exponentially faster than any polynomial can grow, while the nonzero polynomial $a_n(it)$ cannot tend to $0$ as $t\to\infty$. This contradiction proves that no nonzero polynomial vanishes on the sine graph.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]
- [[03 - Field Theory/Concepts/Algebraic and Transcendental Elements|Algebraic and Transcendental Elements]]

## Notes

- **External standard input:** The complex-analytic identity theorem and elementary exponential growth of $\sinh t$ are used explicitly.
- **Source status:** The problem is from [S1, Ch. 11, Misc. Exercises, Ex. M.6, printed p. 358, PDF p. 370]. The proof is independent.

