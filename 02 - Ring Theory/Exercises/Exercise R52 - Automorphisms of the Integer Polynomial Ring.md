---
title: "Exercise R52: Automorphisms of the Integer Polynomial Ring"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - polynomial-rings
  - automorphisms
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §3, Ex. 3.7, printed p. 355, PDF p. 367"
created: 2026-08-27
---

# Exercise R52: Automorphisms of the Integer Polynomial Ring

## Problem Statement

> [!question] Exercise 3.7
> Determine the automorphisms of the polynomial ring $\mathbb Z[x]$.

## Hints

> [!hint]- Hint 1
> An automorphism fixes $\mathbb Z$, and the degrees of the images of $x$ under inverse maps multiply.

## Solution

> [!success]- Solution
> A unital automorphism $\Phi$ fixes every integer and is determined by $f(x)=\Phi(x)$. If $\Psi$ is its inverse and $g(x)=\Psi(x)$, then
>
> $$
> g(f(x))=x.
> $$
>
> Hence $\deg f\deg g=1$, so both have degree $1$. Write $f=ax+b$. Its leading coefficient must be a unit of $\mathbb Z$, so $a=\pm1$, while $b\in\mathbb Z$. Conversely, every substitution
>
> $$
> x\longmapsto x+b
> \quad\text{or}\quad
> x\longmapsto -x+b
> $$
>
> has an inverse of the same form. These are all automorphisms.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Ring Homomorphisms|Ring Homomorphisms]]

## Notes

- **Source status:** The statement is from [S1, Ch. 11, §3, Ex. 3.7, printed p. 355, PDF p. 367]. The degree argument is independent.

