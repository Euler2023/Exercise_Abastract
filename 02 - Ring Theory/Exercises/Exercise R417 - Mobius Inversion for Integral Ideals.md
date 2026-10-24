---
title: 'Exercise R417: Mobius Inversion for Integral Ideals'
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §6, Exercise 2, printed p. 484, PDF p. 503
source_refs:
- S4/ch-VII/sec-6/ex-2
created: '2026-10-23'
---

# Exercise R417: Mobius Inversion for Integral Ideals

## Problem Statement

> [!question] Neukirch VII.6.2
> Prove the Möbius inversion formula: let $f(\mathfrak a)$ be any function of integral ideals with values in an additive abelian group, and let
> $$
> g(\mathfrak a)=\sum_{\mathfrak b\mid\mathfrak a}f(\mathfrak b).
> $$
> Then one has
> $$
> f(\mathfrak a)=\sum_{\mathfrak b\mid\mathfrak a}\mu\!\left(\frac{\mathfrak a}{\mathfrak b}\right)g(\mathfrak b).
> $$

## Hints

> [!hint]- Hint 1
> Expand $g(\mathfrak b)$ and reorder a finite double sum.

> [!hint]- Hint 2
> For fixed $\mathfrak c\mid\mathfrak a$, the coefficient of $f(\mathfrak c)$ is $\sum_{\mathfrak d\mid\mathfrak a/\mathfrak c}\mu(\mathfrak d)$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> All ideals here are nonzero integral ideals. Unique prime-ideal factorization makes their divisor sets finite. For the ideal Möbius function,
> $$
> \sum_{\mathfrak d\mid\mathfrak e}\mu(\mathfrak d)
> =\begin{cases}1,&\mathfrak e=\mathfrak o,\\0,&\mathfrak e\ne\mathfrak o.\end{cases}
> $$
> Indeed, if $\mathfrak e$ has $r>0$ distinct prime divisors, only squarefree divisors contribute, giving $\sum_{j=0}^r\binom rj(-1)^j=(1-1)^r=0$; for the unit ideal the only divisor is itself.
>
> Integer multiplication of an element of an additive abelian group is defined, including negative coefficients. Substitute the formula for $g$:
> $$
> \begin{aligned}
> \sum_{\mathfrak b\mid\mathfrak a}\mu(\mathfrak a/\mathfrak b)g(\mathfrak b)
> &=\sum_{\mathfrak b\mid\mathfrak a}\sum_{\mathfrak c\mid\mathfrak b}\mu(\mathfrak a/\mathfrak b)f(\mathfrak c)\\
> &=\sum_{\mathfrak c\mid\mathfrak a}
> \left(\sum_{\mathfrak c\mid\mathfrak b\mid\mathfrak a}\mu(\mathfrak a/\mathfrak b)\right)f(\mathfrak c)\\
> &=\sum_{\mathfrak c\mid\mathfrak a}
> \left(\sum_{\mathfrak d\mid\mathfrak a/\mathfrak c}\mu(\mathfrak d)\right)f(\mathfrak c)
> =f(\mathfrak a).
> \end{aligned}
> $$
> The reindexing is $\mathfrak d=\mathfrak a/\mathfrak b$. No multiplication of values of $f$ is used, so an additive abelian group is sufficient. For $\mathfrak a=\mathfrak p^2$, the formula reads $f(\mathfrak p^2)=g(\mathfrak p^2)-g(\mathfrak p)$, since $\mu(\mathfrak p^2)=0$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Hecke Characters and Their Finite and Infinite Parts|Hecke Characters and Their Finite and Infinite Parts]]

- [[02 - Ring Theory/Concepts/Dirichlet Convolution and Mobius Inversion|Dirichlet Convolution and Mobius Inversion]]
- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]

## Notes

- **Source status:** The full exercise and the additive-abelian target hypothesis were visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VII, §6, Exercise 2, printed p. 484, PDF p. 503]. The ideal Möbius definition and Proposition (6.5) were checked at [printed p. 474, PDF p. 493].
- **Proof scope:** Independent finite double-sum calculation; the zero ideal is excluded because it has infinitely many ideal divisors.
