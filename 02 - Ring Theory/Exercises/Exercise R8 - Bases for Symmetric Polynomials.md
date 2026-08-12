---
title: "Exercise R8: Two Bases for Symmetric Polynomials"
topic: ring-theory
difficulty: advanced
status: not-started
tags: [exercise, ring-theory, symmetric-polynomials]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 1, Ex. 1.2, printed p. 505, PDF p. 517"
created: 2026-08-12
---

# Exercise R8: Two Bases for Symmetric Polynomials

## Problem Statement

> [!question] Exercise 1.2
> Find two bases for the polynomial ring as a module over $R=F[s_1,\ldots,s_n]$.

## Hints

> [!hint]- Hint 1
> Use the standard monic reduction, then reverse the variable order.

## Solution

> [!success]- Solution
> Successive division by the monic relations of the $u_i$ yields the Artin basis
> $$
> \mathcal B=\{u_1^{a_1}\cdots u_n^{a_n}:0\le a_i<i\}.
> $$
> Existence follows by reduction; uniqueness follows after passing to the fraction field of $R$, where the generic $S_n$-extension has degree $n!$. Reversing the variable order gives a second basis
> $$
> \mathcal B'=\{u_1^{a_1}\cdots u_n^{a_n}:0\le a_i\le n-i\}.
> $$
> Both contain $n!$ monomials.

## Related Concepts

- [[02 - Ring Theory/Concepts/Symmetric Polynomials and Newton Identities|Symmetric Polynomials and Newton Identities]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]

## Notes

The printed phrase “ring of symmetric polynomials” is read using the surrounding theorem: the full polynomial ring as a module over its symmetric subring $R$. Otherwise $R$ over itself has only a one-element basis.
