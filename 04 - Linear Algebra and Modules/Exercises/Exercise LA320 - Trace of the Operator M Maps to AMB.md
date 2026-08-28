---
title: "Exercise LA320: Trace of the Operator M Maps to AMB"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - trace
  - polynomial-identities
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Section 3, Identities, Ex. 3.3, printed p. 437, PDF p. 449"
created: 2026-08-28
---

# Exercise LA320: Trace of the Operator M Maps to AMB

## Problem Statement

> [!question] Exercise 3.3
> Let $A$ and $B$ be $m\times m$ and $n\times n$ $R$-matrices, respectively. Use permanence of identities to prove that the trace of the linear operator $f(M)=AMB$ on the space $R^{m\times n}$ is the product $(\operatorname{trace}A)(\operatorname{trace}B)$.

## Hints

> [!hint]- Hint 1
> Over $\mathbb C$, vectorization gives the matrix $B^{\mathsf T}\otimes A$ for $f$.

## Solution

> [!success]- Solution
> First work over $\mathbb C$. Relative to the matrix-unit basis, vectorization gives
>
> $$
> \operatorname{vec}(AMB)=(B^{\mathsf T}\otimes A)\operatorname{vec}(M).
> $$
>
> Therefore
>
> $$
> \operatorname{tr}(f)
> =\operatorname{tr}(B^{\mathsf T}\otimes A)
> =\operatorname{tr}(B^{\mathsf T})\operatorname{tr}(A)
> =\operatorname{tr}(A)\operatorname{tr}(B).
> $$
>
> Both sides are polynomials with integer coefficients in the entries of the formal matrices $A$ and $B$. Their difference vanishes for every complex substitution, so Exercise 3.1 says it is the zero formal polynomial. Substitution into any commutative ring $R$ now yields
>
> $$
> \boxed{\operatorname{tr}(M\mapsto AMB)=\operatorname{tr}(A)\operatorname{tr}(B).}
> $$
>
> As a direct check, the coefficient of $E_{ij}$ in $AE_{ij}B$ is $a_{ii}b_{jj}$; summing over $i,j$ gives the same formula.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[02 - Ring Theory/Exercises/Exercise R188 - A Complex Polynomial Is Determined by Its Values|A Complex Polynomial Is Determined by Its Values]]

## Notes

- **Routing:** Linear Algebra is primary because the object being traced is an endomorphism of the free matrix module.
- **Source status:** [S1, Ch. 14, §14.3, Ex. 3.3, printed p. 437, PDF p. 449]. The complex calculation and permanence step are independent.
