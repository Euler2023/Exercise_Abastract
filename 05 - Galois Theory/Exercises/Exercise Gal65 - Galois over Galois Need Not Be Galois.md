---
title: "Exercise Gal65: Galois over Galois Need Not Be Galois"
topic: galois-theory
difficulty: beginner
status: not-started
tags: [exercise, galois-theory, normal-extensions]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Miscellaneous Ex. M.2, printed p. 511, PDF p. 523"
created: 2026-08-12
---

# Exercise Gal65: Galois over Galois Need Not Be Galois

## Problem Statement

> [!question] Exercise M.2
> If $L/F$ and $K/L$ are Galois, must $K/F$ be Galois?

## Hints

> [!hint]- Hint 1
> Try $\mathbb Q\subset\mathbb Q(\sqrt2)\subset\mathbb Q(\sqrt[4]2)$.

## Solution

> [!success]- Solution
> No. Let
> $$
> F=\mathbb Q,\qquad L=\mathbb Q(\sqrt2),\qquad K=\mathbb Q(\sqrt[4]2).
> $$
> Both successive extensions are quadratic, hence Galois. But $K/F$ is not normal: the irreducible polynomial $x^4-2$ has the root $\sqrt[4]2\in K$ but not the conjugate $i\sqrt[4]2$, since $K\subset\mathbb R$. Thus $K/F$ is not Galois.

## Related Concepts

- [[03 - Field Theory/Concepts/Normal Extensions|Normal Extensions]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]

## Notes

Normality is not transitive up a tower.
