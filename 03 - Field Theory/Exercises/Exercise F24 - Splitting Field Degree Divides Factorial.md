---
title: "Exercise F24: Splitting Field Degree Divides n Factorial"
topic: field-theory
difficulty: intermediate
status: not-started
tags: [exercise, field-theory, splitting-fields]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 3, Ex. 3.1, printed p. 506, PDF p. 518"
created: 2026-08-12
---

# Exercise F24: Splitting Field Degree Divides $n!$

## Problem Statement

> [!question] Exercise 3.1
> Let $f$ be a polynomial of degree $n$ over $F$, and let $K$ be a splitting field for $f$ over $F$. Prove that $[K:F]$ divides $n!$.

## Hints

> [!hint]- Hint 1
> Choose an irreducible factor of degree $d$, adjoin one root, and apply induction to the remaining degree $n-d$.

## Solution

> [!success]- Solution
> We argue by induction on $n=\deg f$, without a separability assumption. Choose an irreducible factor $g\mid f$ of degree $d$, a root $\alpha\in K$, and put $E=F(\alpha)$. Then $[E:F]=d$. Over $E$, remove one full copy of $g$ after adjoining $\alpha$; the remaining roots needed to generate $K$ occur in a polynomial of total degree at most $n-d$. By induction,
> $$
> [K:E]\mid(n-d)!.
> $$
> Therefore $[K:F]\mid d(n-d)!$. Since
> $$
> \frac{n!}{d(n-d)!}=\binom nd(d-1)!
> $$
> is an integer, $d(n-d)!\mid n!$, and hence $[K:F]\mid n!$.

## Related Concepts

- [[03 - Field Theory/Concepts/Splitting Fields|Splitting Fields]]
- [[03 - Field Theory/Concepts/Separable Extensions|Separable Extensions]]

## Notes

The induction proves the characteristic-free statement. In the separable case there is also the shorter faithful embedding $\operatorname{Gal}(K/F)\hookrightarrow S_n$.
