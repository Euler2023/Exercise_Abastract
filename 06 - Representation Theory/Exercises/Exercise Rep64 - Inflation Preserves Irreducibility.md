---
title: "Exercise Rep64: Inflation Preserves Irreducibility"
topic: representation-theory
difficulty: intermediate
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 4, Ex. 4.7, printed p. 316, PDF p. 328"
created: 2026-08-27
---

# Exercise Rep64: Inflation Preserves Irreducibility

## Problem Statement

> [!question] Exercise 4.7
> Let $\pi:G\to G'=G/N$ be the canonical map from a finite group to a quotient group, and let $\rho'$ be an irreducible representation of $G'$. Prove that $\rho=\rho'\circ\pi$ is irreducible in two ways: directly, and using Theorem 10.4.6.

## Hints

> [!hint]- Hint 1
> A $G$-invariant subspace is the same as a $G'$-invariant subspace because $\pi$ is onto.

## Solution

> [!success]- Solution
> Directly, a subspace $W$ is invariant under every $\rho(g)$ iff it is invariant under every $\rho'(g')$, since every $g'\in G'$ has a lift in $G$. Irreducibility of $\rho'$ therefore leaves only $0$ and $V$.
>
> For the character proof, $\chi=\chi'\circ\pi$. Every fiber of $\pi$ has $|N|$ elements, so
>
> $$
> (\chi,\chi)_G=\frac1{|G|}\sum_{g\in G}|\chi'(\pi g)|^2
> =\frac{|N|}{|G|}\sum_{g'\in G'}|\chi'(g')|^2
> =(\chi',\chi')_{G'}=1.
> $$
>
> Theorem 10.4.6 then implies that $\rho$ is irreducible. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]
- [[06 - Representation Theory/Concepts/Characters|Characters]]

## Notes

- **Source status:** [S1, Ch. 10, §4, Ex. 4.7, printed p. 316, PDF p. 328]; both proofs are independent.

