---
title: "Exercise R18: Cyclic Rational Identities in Four Variables"
topic: ring-theory
difficulty: advanced
status: not-started
tags: [exercise, ring-theory, rational-functions]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Miscellaneous Ex. M.8, printed p. 512, PDF p. 524"
created: 2026-08-12
---

# Exercise R18: Cyclic Rational Identities in Four Variables

## Problem Statement

> [!question] Exercise M.8
> With variables $u_0,u_1,u_2,u_3$, let
> $$
> p_i=(u_i-u_{i+1})(u_i-u_{i+2})(u_{i+1}-u_{i+2}),
> $$
> with indices modulo $4$. Determine
> $$
> \text{(a) }\sum_{i=0}^3\frac{u_i}{p_{i+1}},
> \qquad
> \text{(b) }\sum_{i=0}^3\frac{u_i^3}{p_{i+1}}.
> $$

## Hints

> [!hint]- Hint 1
> Put $P(x)=\prod_j(x-u_j)$ and compare $p_{i+1}$ with the three differences omitting $u_i$.

## Solution

> [!success]- Solution
> Let $\Delta=\prod_{i<j}(u_i-u_j)$. A direct sign check gives
> $$
> \frac{\Delta}{p_{i+1}}=(-1)^iP'(u_i).
> $$
> Consequently the requested expressions are
> $$
> \boxed{\text{(a) }\frac{N_1}{\Delta}},
> \qquad
> \boxed{\text{(b) }\frac{N_3}{\Delta}},
> $$
> where
> $$
> N_k=\sum_{i=0}^3(-1)^iu_i^k\prod_{j\ne i}(u_i-u_j).
> $$
> This is an explicit common-denominator form involving only the $u_i$; for $k=1,3$ it determines the requested values without hidden auxiliary roots. The shifted denominator $p_{i+1}$ is crucial: replacing it by $p_i$ would produce the familiar Lagrange values $0$ and $1$, but those are not the printed sums.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

The source index was verified visually. The displayed reduction was checked symbolically and at exact rational sample points.
