---
title: "Exercise R9: Newton Identities and Power Sums"
topic: ring-theory
difficulty: advanced
status: not-started
tags: [exercise, ring-theory, symmetric-polynomials]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 1, Ex. 1.3, printed p. 505, PDF p. 517"
created: 2026-08-12
---

# Exercise R9: Newton Identities and Power Sums

## Problem Statement

> [!question] Exercise 1.3
> Let $w_k=u_1^k+\cdots+u_n^k$. (a) Prove
> $$
> w_k-s_1w_{k-1}+\cdots+(-1)^{k-1}s_{k-1}w_1+(-1)^kks_k=0.
> $$
> (b) Do $w_1,\ldots,w_n$ generate the symmetric-polynomial ring?

## Hints

> [!hint]- Hint 1
> Logarithmically differentiate $\prod_i(1-u_it)$.

## Solution

> [!success]- Solution
> With $E(t)=\prod_i(1-u_it)=\sum_{j=0}^n(-1)^js_jt^j$,
> $$
> -t\frac{E'(t)}{E(t)}=\sum_{k\ge1}w_kt^k.
> $$
> Multiplication by $E(t)$ and coefficient comparison proves the identity.
>
> If $1,\ldots,n$ are units in the coefficient ring, the identities recursively solve for every $s_k$, so the answer is yes. Over an arbitrary ring it can fail: in characteristic $p\le n$, $w_p=w_1^p$; for example over $\mathbb F_2$, $w_1,w_2=w_1^2$ do not generate $s_2$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Symmetric Polynomials and Newton Identities|Symmetric Polynomials and Newton Identities]]

## Notes

The characteristic dependence in part (b) is essential.
