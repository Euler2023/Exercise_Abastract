---
title: 'Exercise G340: Sylow Subgroups of Profinite Integers and Local Units'
topic: group-theory
difficulty: advanced
status: not-started
tags:
- exercise
- group-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §2, Exercise 5, printed p. 274, PDF p. 293
source_refs:
- S4/ch-IV/sec-2/ex-5
created: '2026-10-23'
---

# Exercise G340: Sylow Subgroups of Profinite Integers and Local Units

## Problem Statement

> [!question] Neukirch IV.2.5
> What is the $p$-Sylow subgroup of $\widehat{\mathbb Z}$ and of $\mathbb Z_p^*$?

## Hints

> [!hint]- Hint 1
> Use $\widehat{\mathbb Z}\simeq\prod_\ell\mathbb Z_\ell$. Only one factor contributes to the $p$-part of this additive group.

> [!hint]- Hint 2
> The kernel of reduction modulo $p$ on local units is $1+p\mathbb Z_p$. The quotient $\mathbb F_p^\times$ has order prime to $p$ and is trivial when $p=2$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> **The additive group $\widehat{\mathbb Z}$.** The Chinese remainder theorem gives $\widehat{\mathbb Z}\simeq\prod_\ell\mathbb Z_\ell$. The subgroup
> $$
> P=\mathbb Z_p\times\prod_{\ell\ne p}\{0\}
> $$
> is closed and pro-$p$. Its image in each finite quotient $\mathbb Z/n\mathbb Z$ is exactly the $p$-primary part, so it is a $p$-Sylow subgroup. Since the group is abelian, this Sylow subgroup is unique.
>
> **The multiplicative group $\mathbb Z_p^\times$.** The reduction homomorphism $\mathbb Z_p^\times\twoheadrightarrow\mathbb F_p^\times$ has kernel $U_1=1+p\mathbb Z_p$. The finite quotient
> $$
> U_1/(1+p^m\mathbb Z_p)
> $$
> has order $p^{m-1}$, so $U_1$ is pro-$p$. The image modulo $p$ of any pro-$p$ subgroup is both a $p$-group and a subgroup of a group of order $p-1$, hence trivial. Every such subgroup is therefore contained in $U_1$, making $U_1$ the unique $p$-Sylow subgroup.
>
> For odd $p$, the answer is usually written as the principal unit group $1+p\mathbb Z_p$. For $p=2$, every $2$-adic unit is odd, so $1+2\mathbb Z_2=\mathbb Z_2^\times$ and the entire unit group is the Sylow $2$-subgroup. It must not be replaced by the smaller subgroup $1+4\mathbb Z_2$.

## Related Concepts

- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]
- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §2, Exercise 5, printed p. 274, PDF p. 293]. An independent calculation in finite quotients, with the case $p=2$ treated explicitly.
- **Notation:** The first group is additive and the second is a multiplicative unit group. Their group operations must not be confused.
