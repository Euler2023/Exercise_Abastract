---
title: "Exercise R251: Mobius Inversion with Abelian Group Values"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, Algebraic Extensions, Exercise 21, printed p. 254, PDF p. 269"
created: 2026-09-06
---

# Exercise R251: Mobius Inversion with Abelian Group Values

## Problem Statement

> [!question] Lang, Chapter V, Exercise 21
> Let $\mathbb Z^+$ be the set of positive integers, and $A$ an additive abelian group. Let $f:\mathbb Z^+\to A$ and $g:\mathbb Z^+\to A$ be maps. Suppose that for all $n$,
> $$
> f(n)=\sum_{d\mid n}g(d).
> $$
> Let $\mu$ be the Möbius function (cf. Exercise 12 of Chapter II). Prove that
> $$
> g(n)=\sum_{d\mid n}\mu(n/d)f(d).
> $$

## Hints

> [!hint]- Hint 1
> Interchange the two finite divisor sums and use $\sum_{d\mid m}\mu(d)=0$ for $m>1$.

## Solution

> [!success]- Solution and proof status
> For a positive integer $m$ with distinct prime divisors $p_1,\ldots,p_r$, only squarefree divisors contribute to the Möbius sum, and
> $$
> \sum_{d\mid m}\mu(d)=(1-1)^r.
> $$
> It equals one when $m=1$ (the empty product) and zero otherwise.
>
> Because $A$ is abelian, we may regroup finite sums. Integer multiplication means repeated addition or its additive inverse; no multiplication of two elements of $A$ is needed. Therefore
> $$
> \begin{aligned}
> \sum_{d\mid n}\mu(n/d)f(d)
> &=\sum_{d\mid n}\mu(n/d)\sum_{e\mid d}g(e)\\
> &=\sum_{e\mid n}\left(\sum_{h\mid n/e}\mu((n/e)/h)\right)g(e)\\
> &=g(n).
> \end{aligned}
> $$
> In the last step, the inner sum is zero unless $e=n$, when it is one.

## Related Concepts

- [[02 - Ring Theory/Concepts/Dirichlet Convolution and Mobius Inversion|Dirichlet Convolution and Mobius Inversion]]
- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]

## Notes

- **Routing:** Divisor convolution and the Möbius identity provide the entire calculation, so this note is in Ring Theory with the existing Möbius material. Only an additive abelian group of values is required.
- **Related source:** [[02 - Ring Theory/Exercises/Exercise R216 - Dirichlet Convolution and Mobius Inversion|Lang II.12 / R216]] develops ring-valued arithmetic functions; the present exercise explicitly covers arbitrary abelian-group values.

- **Source status:** The numbered statement, multipart structure, and notation were checked against the original PDF [S2, Ch. V, Ex. 21, printed p. 254, PDF p. 269]. The solution is an independent derivation except where a source-contained argument, external input, or conjectural boundary is explicitly identified.
