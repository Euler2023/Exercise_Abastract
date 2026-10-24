---
title: 'Exercise G337: Limits of Integer Powers in a Profinite Group'
topic: group-theory
difficulty: advanced
status: not-started
tags:
- exercise
- group-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §2, Exercise 2, printed p. 274, PDF p. 293
source_refs:
- S4/ch-IV/sec-2/ex-2
created: '2026-10-23'
---

# Exercise G337: Limits of Integer Powers in a Profinite Group

## Problem Statement

> [!question] Neukirch IV.2.2
> If $\sigma\in G$ and $a=\lim_{i\to\infty}a_i\in\widehat{\mathbb Z}$ with $a_i\in\mathbb Z$, then $\sigma^a=\lim_{i\to\infty}\sigma^{a_i}$ in $G$.

## Hints

> [!hint]- Hint 1
> In each finite quotient, the residue of $a_i$ modulo the group exponent eventually equals that of $a$.

> [!hint]- Hint 2
> Convergence in a profinite group is equivalent to eventual agreement in each finite quotient.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Fix an open normal subgroup $N$ and put $m=\exp(G/N)$. The convergence $a_i\to a$ means that eventually $a_i\equiv a\pmod m$ in the finite discrete quotient $\mathbb Z/m\mathbb Z$. Consequently, eventually
> $$
> \sigma^{a_i}N=(\sigma N)^{a_i}=(\sigma N)^{a\bmod m}=\sigma^aN.
> $$
> As $N$ varies, the cosets $\sigma^aN$ form a neighborhood basis of $\sigma^a$. Thus every neighborhood eventually contains all $\sigma^{a_i}$, proving $\sigma^{a_i}\to\sigma^a$.
>
> The same argument applies to any convergent net, not just a sequence. Convergence of the exponents in a single $\mathbb Z_p$ is insufficient for a general profinite $G$. For example, if $G$ has a cyclic quotient of order prime to $p$, the residues of the exponents in that quotient are not controlled.

## Related Concepts

- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[01 - Group Theory/Concepts/Quotient Groups|Finite Quotients]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §2, Exercise 2, printed p. 274, PDF p. 293]. An independent convergence proof in finite quotients, consistent with the continuous extension constructed in the preceding exercise.
