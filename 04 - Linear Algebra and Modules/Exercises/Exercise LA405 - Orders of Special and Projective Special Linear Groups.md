---
title: "Exercise LA405: Orders of Special and Projective Special Linear Groups"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - finite-fields
  - matrix-groups
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Exercise 16, printed p. 546, PDF p. 561"
created: 2026-09-26
---

# Exercise LA405: Orders of Special and Projective Special Linear Groups

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 16
> Again let $F$ be a finite field with $q$ elements. Show that the order of $SL_n(F)$ is
>
> $$
> q^{n(n-1)/2}\prod_{i=2}^{n}(q^i-1),
> $$
>
> and that the order of $PSL_n(F)$ is
>
> $$
> \frac1d q^{n(n-1)/2}\prod_{i=2}^{n-1}(q^i-1),
> $$
>
> where $d$ is the greatest common divisor of $n$ and $q-1$.

> [!warning] Source issue: missing final factor
> The printed $PSL_n(F)$ product ends at $n-1$; it must end at $n$. For example, at $n=2$ the printed expression is $q/d$, whereas $|PSL_2(F)|=q(q^2-1)/d$. The solution proves the corrected formula while preserving the source expression above.

## Hints

> [!hint]- Hint 1
> The determinant map $GL_n(F)\to F^\times$ is surjective.

> [!hint]- Hint 2
> A central element of $SL_n(F)$ is scalar. Count scalars $\lambda I_n$ with $\lambda^n=1$ in the cyclic group $F^\times$.

## Solution

> [!success]- Independently derived corrected solution
> The determinant is a surjective homomorphism $GL_n(F)\to F^\times$: $\operatorname{diag}(a,1,\ldots,1)$ has determinant $a$ for every $a\in F^\times$. Its kernel is $SL_n(F)$. Because $|F^\times|=q-1$, Exercise 15 gives
>
> $$
> |SL_n(F)|=\frac{|GL_n(F)|}{q-1}
> =q^{n(n-1)/2}\prod_{i=2}^{n}(q^i-1).
> $$
>
> For $n\ge2$, a matrix commuting with every elementary transvection $I+tE_{ij}\in SL_n(F)$ commutes with every $E_{ij}$. Comparing entries in $ZE_{ij}=E_{ij}Z$ for all $i\ne j$ forces all off-diagonal entries of $Z$ to vanish and all diagonal entries to coincide. Thus the center of $SL_n(F)$ consists of the scalar matrices $\lambda I_n$ for which $\lambda^n=1$. The multiplicative group $F^\times$ is cyclic of order $q-1$ (the standard finite-field theorem), so exactly $d=\gcd(n,q-1)$ of its elements satisfy this equation. Dividing by the center yields
>
> $$
> |PSL_n(F)|=\frac1d q^{n(n-1)/2}\prod_{i=2}^{n}(q^i-1).
> $$
>
> At $n=1$ both groups are trivial and the corrected empty-product formula remains valid.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA404 - Counting General Linear Groups over Finite Fields|Exercise LA404]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]

## Notes

- **Source and proof status:** Both displayed source formulas and $d$ were checked against [S2, Ch. XIII, Ex. 16, printed p. 546, PDF p. 561]. The corrected $PSL_n$ formula and proof are independent.
- **External standard input:** The multiplicative group of a finite field is cyclic. Equivalently, its number of $n$-th roots of unity is $\gcd(n,q-1)$.
