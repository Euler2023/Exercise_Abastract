---
title: "Exercise F60: Squares in Finite Fields and Universal Modular Reducibility"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - finite-fields
  - quadratic-residues
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Fields, Miscellaneous Ex. M.4, printed p. 476, PDF p. 488"
created: 2026-08-28
---

# Exercise F60: Squares in Finite Fields and Universal Modular Reducibility

## Problem Statement

> [!question] Miscellaneous Exercise M.4
> **(a)** Let $p$ be an odd prime. Prove that exactly half of the elements of $\mathbb F_p^\times$ are squares and that if $\alpha$ and $\beta$ are nonsquares, then $\alpha\beta$ is a square.
>
> **(b)** Prove the same assertion for any finite field of odd order.
>
> **(c)** Prove that in a finite field of even order, every element is a square.
>
> **(d)** Prove that the irreducible polynomial for $\gamma=\sqrt2+\sqrt3$ over $\mathbb Q$ is reducible modulo $p$ for every prime $p$.

## Hints

> [!hint]- Hint 1
> In odd characteristic, study the kernel and image of the squaring homomorphism on the multiplicative group.
>
> [!hint]- Hint 2
> For (d), separate the cases in which $2$, $3$, or their product is a square modulo $p$.

## Solution

> [!success]- Solution
> **(a)** The homomorphism $s:\mathbb F_p^\times\to\mathbb F_p^\times$, $x\mapsto x^2$, has kernel $\{1,-1\}$. Its image therefore has $(p-1)/2$ elements. The quotient $\mathbb F_p^\times/(\mathbb F_p^\times)^2$ has order $2$, so the product of the two nontrivial square classes is the trivial class: a product of two nonsquares is a square.
>
> **(b)** The same proof works in every finite field $\mathbb F_q$ of odd order: $x^2=1$ has exactly the roots $\pm1$, so the square subgroup has index $2$.
>
> **(c)** In characteristic $2$, the Frobenius map $x\mapsto x^2$ is injective. On a finite field it is therefore bijective, so every element has a square root.
>
> **(d)** The minimal polynomial is
>
> $$
> f(x)=x^4-10x^2+1,
> $$
>
> which is irreducible over $\mathbb Q$ because, for $\gamma=\sqrt2+\sqrt3$, one has $\gamma^{-1}=\sqrt3-\sqrt2$ and therefore
>
> $$
> \sqrt3=\frac{\gamma+\gamma^{-1}}2,
> \qquad
> \sqrt2=\frac{\gamma-\gamma^{-1}}2.
> $$
>
> Thus $\mathbb Q(\gamma)=\mathbb Q(\sqrt2,\sqrt3)$ has degree $4$.
>
> For $p=2$, $f=(x+1)^4$; for $p=3$, $f=(x^2+1)^2$. Now let $p\ne2,3$. If $2=a^2$ in $\mathbb F_p$, then
>
> $$
> f=(x^2-2ax-1)(x^2+2ax-1).
> $$
>
> If $3=b^2$, then
>
> $$
> f=(x^2-2bx+1)(x^2+2bx+1).
> $$
>
> If both $2$ and $3$ are nonsquares, part (a) makes $6=c^2$, and
>
> $$
> f=(x^2-(5+2c))(x^2-(5-2c)).
> $$
>
> These cases exhaust all primes, so $f$ is reducible modulo every $p$.

## Related Concepts

- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]

## Notes

- **Routing:** Field Theory is primary because square classes in finite fields control every part, including the modular factorization.
- **Computational verification:** Expanding each displayed quadratic factorization recovers $x^4-10x^2+1$ in the relevant residue field.
- **Source status:** [S1, Ch. 15, Misc. M.4, printed p. 476, PDF p. 488]. The proof and factorizations are independent.
