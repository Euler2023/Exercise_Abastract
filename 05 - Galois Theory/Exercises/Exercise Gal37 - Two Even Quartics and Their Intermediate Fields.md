---
title: "Exercise Gal37: Two Even Quartics and Their Intermediate Fields"
topic: galois-theory
difficulty: advanced
status: not-started
tags: [exercise, galois-theory, quartic-polynomials]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 9, Ex. 9.4, printed p. 508, PDF p. 520"
created: 2026-08-12
---

# Exercise Gal37: Two Even Quartics and Their Intermediate Fields

## Problem Statement

> [!question] Exercise 9.4
> Prove $x^4-8x^2+11$ and $x^4-8x^2+9$ irreducible over $\mathbb Q$ in two ways, and determine all intermediate fields of the splitting field of the first.

## Hints

> [!hint]- Hint 1
> Their roots are $\pm\sqrt{4\pm\sqrt5}$ and $\pm\sqrt{4\pm\sqrt7}$.

## Solution

> [!success]- Solution
> A rational factorization into quadratics forces either rational roots or rational $r,s$ with $r+s=8$ and $rs=11$ (respectively $9$); the resulting discriminants are $20$ and $28$, not rational squares. This proves irreducibility by coefficient comparison. Alternatively, any root determines the inner square root; if its degree were $2$, its square would lie in a quadratic field in a way forcing $4\pm\sqrt5$ (or $4\pm\sqrt7$) to be a square there, which the norm equations rule out.
>
> For $f=x^4-8x^2+11$, put $\alpha=\sqrt{4+\sqrt5}$, $\alpha'=\sqrt{4-\sqrt5}$. Then $K=\mathbb Q(\alpha,\alpha')$, $\alpha\alpha'=\sqrt{11}$, and $G\cong D_4$. With $r(\alpha)=\alpha'$, $r(\alpha')=-\alpha$, $s(\alpha)=\alpha$, $s(\alpha')=-\alpha'$, the ten subgroup fixed fields give:
> $$
> \begin{array}{c|l}
> [L:\mathbb Q]=2&\mathbb Q(\sqrt5),\ \mathbb Q(\sqrt{11}),\ \mathbb Q(\sqrt{55})\\
> [L:\mathbb Q]=4&\mathbb Q(\alpha),\ \mathbb Q(\alpha'),\ \mathbb Q(\alpha+\alpha'),\ \mathbb Q(\alpha-\alpha'),\ \mathbb Q(\sqrt5,\sqrt{11}).
> \end{array}
> $$
> Together with $\mathbb Q,K$, these are all intermediate fields.

## Related Concepts

- [[05 - Galois Theory/Concepts/Fundamental Theorem|Galois Correspondence]]
- [[05 - Galois Theory/Concepts/Quartic Resolvents and Galois Groups|Quartic Resolvents and Galois Groups]]

## Notes

The field list is matched to all ten subgroups of Artin's order-eight $D_4$.
