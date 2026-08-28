---
title: "Exercise F53: Symmetry of Irreducibility over Simple Extensions"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - irreducible-polynomials
  - composita
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Fields, Section 3, The Degree of a Field Extension, Ex. 3.9, printed p. 473, PDF p. 485"
created: 2026-08-28
---

# Exercise F53: Symmetry of Irreducibility over Simple Extensions

## Problem Statement

> [!question] Exercise 3.9
> Let $\alpha$ and $\beta$ be complex roots of irreducible polynomials $f(x)$ and $g(x)$ in $\mathbb Q[x]$. Let $K=\mathbb Q(\alpha)$ and $L=\mathbb Q(\beta)$. Prove that $f(x)$ is irreducible in $L[x]$ if and only if $g(x)$ is irreducible in $K[x]$.

## Hints

> [!hint]- Hint 1
> Compute the degree of the compositum $KL=\mathbb Q(\alpha,\beta)$ in two different towers.

## Solution

> [!success]- Solution
> Put $M=KL=\mathbb Q(\alpha,\beta)$. The polynomial $f$ remains irreducible over $L$ exactly when the minimal polynomial of $\alpha$ over $L$ still has degree $\deg f=[K:\mathbb Q]$. Equivalently,
>
> $$
> [M:L]=[K:\mathbb Q].
> $$
>
> By the tower law, this is equivalent to
>
> $$
> [M:\mathbb Q]=[K:\mathbb Q][L:\mathbb Q].
> $$
>
> The last equality is symmetric in $K$ and $L$. Reversing the argument, it is equivalent to
>
> $$
> [M:K]=[L:\mathbb Q]=\deg g,
> $$
>
> which says exactly that $g$ remains irreducible over $K$. Thus the two irreducibility assertions are equivalent.

## Related Concepts

- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]
- [[05 - Galois Theory/Concepts/Composita and Restriction Maps|Composita and Restriction Maps]]

## Notes

- **Routing:** Field Theory is primary because the symmetry is a direct consequence of the two tower decompositions of a compositum.
- **Source status:** [S1, Ch. 15, §15.3, Ex. 3.9, printed p. 473, PDF p. 485]. The proof is independent.
