---
title: "Exercise Gal19: Counting Intermediate Fields for C2 x C12"
topic: galois-theory
difficulty: intermediate
status: completed
tags:
  - exercise
  - galois-theory
  - galois-correspondence
source: Michael Artin, Algebra, 2nd ed., Ch. 16, Section 7, Ex. 7.2, printed p. 507, PDF p. 519
created: 2026-08-12
---

# Exercise Gal19: Counting Intermediate Fields for $C_2\times C_{12}$

## Problem Statement

> [!question] Exercise 7.2
> If $G(K/F)\cong C_2\times C_{12}$, how many intermediate $L$ satisfy (a) $[L:F]=4$, (b) $[L:F]=9$, (c) $G(K/L)\cong C_4$?

## Hints

> [!hint]- Hint 1
> Decompose the group into its 2- and 3-primary parts.

## Solution
    
 > [!success] Solution
> 
> Decompose $G = \operatorname{Gal}(K/F) \cong A \times B \times C$, where:
> - $A = \langle a \rangle \cong C_2$ ($a^2 = 1$)
> - $B = \langle b \rangle \cong C_4$ ($b^4 = 1$)
> - $C = \langle c \rangle \cong C_3$ ($c^3 = 1$)
> - $|G| = 2 \cdot 4 \cdot 3 = 24$
> 
> By Galois correspondence, intermediate fields $L$ correspond bijectively to subgroups $H = \operatorname{Gal}(K/L) \le G$ with $[L:F] = [G:H] = \frac{|G|}{|H|} =  \frac{24}{|H|}$.
> 
> ---
> 
> **(a) Intermediate fields with $[L:F] = 4$**
> - Required order: $|H| = \frac{24}{4} = 6$.
> - Since $G$ is abelian, $H \cong H_2 \times H_3$ with $H_2 \le A \times B$ ($|H_2| = 2$) and $H_3 \le C$ ($|H_3| = 3$).
> - $C$ has **$1$** subgroup of order $3$: $\langle c \rangle$.
> - Subgroups of order $2$ in $A \times B$ correspond to elements of order $2$:
>   $$\{a,\, b^2,\, ab^2\} \implies \langle a \rangle,\, \langle b^2 \rangle,\, \langle ab^2 \rangle \quad (3\text{ subgroups})$$
> - Total: $3 \times 1 = 3$ subgroups:
>   $$H \in \{\langle a, c \rangle,\, \langle b^2, c \rangle,\, \langle ab^2, c \rangle\}$$
> 
> **Answer: 3**
> 
> ---
> 
> **(b) Intermediate fields with $[L:F] = 9$**
> - Required order: $|H| = \frac{24}{9} \notin \mathbb{Z}$.
> - By Lagrange's Theorem, no such subgroup exists.
> 
> **Answer: 0**
> 
> ---
> 
> **(c) Intermediate fields with $\operatorname{Gal}(K/L) \cong C_4$**
> - Since $\gcd(4, |C|) = 1$, any cyclic subgroup of order $4$ must lie entirely in $A \times B$.
> - Elements of order $4$ in $A \times B$ are those with $b$-component of order $4$:
>   $$\{b,\, b^3,\, ab,\, ab^3\} \quad (4\text{ elements})$$
> - Since each cyclic order-$4$ group has $\phi(4) = 2$ generators:
>   - $\langle b \rangle = \langle b^3 \rangle$
>   - $\langle ab \rangle = \langle ab^3 \rangle$
> 
> **Answer: 2**

## Related Concepts

- [[05 - Galois Theory/Concepts/Fundamental Theorem|Galois Correspondence]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]
- [[Abelian Groups]]
- [[Cyclic Extensions|Cyclic Extension]]

## Notes


1. According  to Fundamental Theorem of Finitely Generated Abelian Groups in [[Abelian Groups]], $C_{12} = C_{4}\times C_{3}$

2. [[Direct Products]]
> [!abstract] Chinese Remainder Theorem (for groups)
> $\mathbb{Z}/mn\mathbb{Z} \cong \mathbb{Z}/m\mathbb{Z} \times \mathbb{Z}/n\mathbb{Z}$ iff $\gcd(m, n) = 1$.