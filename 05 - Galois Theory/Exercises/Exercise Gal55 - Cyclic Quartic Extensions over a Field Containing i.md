---
title: "Exercise Gal55: Cyclic Quartic Extensions over a Field Containing i"
topic: galois-theory
difficulty: advanced
status: not-started
tags: [exercise, galois-theory, kummer-extensions]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 11, Ex. 11.3, printed p. 510, PDF p. 522"
created: 2026-08-12
---

# Exercise Gal55: Cyclic Quartic Extensions over a Field Containing $i$

## Problem Statement

> [!question] Exercise 11.3
> If $F\subset\mathbb C$ contains $i$ and $K/F$ is Galois with group $C_4$, must $K=F(\alpha)$ with $\alpha^4\in F$?

## Hints

> [!hint]- Hint 1
> Apply Kummer theory with fourth roots of unity.

## Solution

> [!success]- Solution
> Yes. Let $\sigma$ generate $C_4$. Since $F$ contains all fourth roots of unity, $\sigma$, viewed as an $F$-linear operator on $K$, is diagonalizable with eigenvalues among $1,i,-1,-i$. Faithfulness forces an eigenvalue of order $4$; choose $\alpha\ne0$ with $\sigma(\alpha)=i\alpha$. Then $\sigma(\alpha^4)=\alpha^4$, so $\alpha^4\in F$. The orbit of $\alpha$ has four elements, hence $[F(\alpha):F]=4$ and $K=F(\alpha)$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Kummer Extensions|Kummer Extensions]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

This is the composite-exponent Kummer argument; the presence of $i$ is essential.
