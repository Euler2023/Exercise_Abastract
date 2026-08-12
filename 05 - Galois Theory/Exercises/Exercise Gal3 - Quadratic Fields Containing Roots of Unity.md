---
title: "Exercise Gal3: Quadratic Fields Containing Roots of Unity"
topic: galois-theory
difficulty: intermediate
status: completed
tags:
  - exercise
  - galois-theory
  - cyclotomic-extensions
source: Michael Artin, Algebra, 2nd ed., Ch. 15, Section 6, Ex. 6.3, printed p. 474, PDF p. 486
created: 2026-08-10
---

# Exercise Gal3: Quadratic Fields Containing Roots of Unity

## Problem Statement

> [!question] Exercise (as printed)
> Determine the quadratic number fields $\mathbb Q[\sqrt d]$ that contain a primitive $n$th root of unity, for some integer $n$.

> [!warning] Source issue
> Taken literally, $n=1$ or $n=2$ makes every quadratic number field an answer because $1,-1\in\mathbb Q$. The nontrivial intended reading is $n>2$.

## Hints

> [!hint]- Hint 1
> If $\zeta_n\in K$ and $[K:\mathbb Q]=2$, compare $\varphi(n)=[\mathbb Q(\zeta_n):\mathbb Q]$ with $2$.

> [!hint]- Hint 2
> Solve $\varphi(n)\le 2$, then identify the corresponding cyclotomic fields.

## Solution

> [!success]- Solution
> Let $K=\mathbb Q(\sqrt d)$ be quadratic and suppose that it contains a primitive $n$th root $\zeta_n$. Then
> $$
> \mathbb Q\subseteq \mathbb Q(\zeta_n)\subseteq K,
> $$
> so
> $$
> \varphi(n)=[\mathbb Q(\zeta_n):\mathbb Q]\mid [K:\mathbb Q]=2.
> $$
> Hence $\varphi(n)\le2$, which occurs only for
> $$
> n=1,2,3,4,6.
> $$
> For $n>2$,
> $$
> \mathbb Q(\zeta_4)=\mathbb Q(i)=\mathbb Q(\sqrt{-1}),
> $$
> while
> $$
> \mathbb Q(\zeta_3)=\mathbb Q(\zeta_6)=\mathbb Q(\sqrt{-3}).
> $$
> Both are quadratic, so they do contain the required primitive roots. Thus, under the intended condition $n>2$, the complete list is
> $$
> \mathbb Q(i),\quad \mathbb Q(\sqrt{-3}).
> $$
> Under the literal wording allowing $n=1$ or $2$, every quadratic number field qualifies.

## Related Concepts

- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

## Notes

The exercise statement is source material from S1. The solution is an independent derivation using the standard cyclotomic-degree formula $[\mathbb Q(\zeta_n):\mathbb Q]=\varphi(n)$. The ambiguity concerning $n=1,2$ is preserved rather than silently repaired.
