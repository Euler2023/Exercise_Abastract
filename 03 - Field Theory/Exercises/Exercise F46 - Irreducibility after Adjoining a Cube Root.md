---
title: "Exercise F46: Irreducibility after Adjoining a Cube Root"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - irreducible-polynomials
  - composita
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Fields, Section 3, The Degree of a Field Extension, Ex. 3.2, printed p. 472, PDF p. 484"
created: 2026-08-28
---

# Exercise F46: Irreducibility after Adjoining a Cube Root

## Problem Statement

> [!question] Exercise 3.2
> Prove that the polynomial $x^4+3x+3$ is irreducible over the field $\mathbb Q[\sqrt[3]{2}]$.

## Hints

> [!hint]- Hint 1
> First apply Eisenstein over $\mathbb Q$ to both defining polynomials, and then compare the relatively prime extension degrees $3$ and $4$.

## Solution

> [!success]- Solution
> Let $K=\mathbb Q(\sqrt[3]{2})$. Eisenstein at $2$ shows $[K:\mathbb Q]=3$. The polynomial
>
> $$
> h(x)=x^4+3x+3
> $$
>
> is Eisenstein at $3$, so if $\alpha$ is one of its roots, then $[\mathbb Q(\alpha):\mathbb Q]=4$.
>
> Put $M=K(\alpha)$. Its degree over $\mathbb Q$ is divisible by both $3$ and $4$, while the general compositum bound gives
>
> $$
> [M:\mathbb Q]\le3\cdot4=12.
> $$
>
> Since $3$ and $4$ are relatively prime, $[M:\mathbb Q]=12$. Therefore
>
> $$
> [K(\alpha):K]=\frac{12}{3}=4.
> $$
>
> The minimal polynomial of $\alpha$ over $K$ consequently has degree $4$ and divides $h$. It must be $h$ itself, so $h$ is irreducible over $K=\mathbb Q[\sqrt[3]{2}]$.

## Related Concepts

- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[05 - Galois Theory/Concepts/Composita and Restriction Maps|Composita and Restriction Maps]]

## Notes

- **Routing:** Field Theory is primary because irreducibility is proved by a compositum degree calculation.
- **Source status:** [S1, Ch. 15, §15.3, Ex. 3.2, printed p. 472, PDF p. 484]. The proof is independent.
