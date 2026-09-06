---
title: "Exercise LA374: A Resultant Estimate from Sylvester Cofactors"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, Polynomials, Exercise 16, printed p. 215, PDF p. 230"
created: 2026-09-06
---

# Exercise LA374: A Resultant Estimate from Sylvester Cofactors

## Problem Statement

> [!question] Lang, Chapter IV, Exercise 16
> Let $w\in\mathbb C$ and $c=\max(1,|w|)$. Let $F,G$ be nonzero complex polynomials in one variable of degrees $d,d'$ with $|F|,|G|\ge1$, where $|F|$ denotes the maximum absolute value of its coefficients. If $R$ is their resultant, prove
> $$
> |R|\le c^{d+d'}\bigl(|F(w)|+|G(w)|\bigr)|F|^{d'}|G|^d(d+d')^{d+d'}.
> $$

## Hints

> [!hint]- Hint 1
> Write the Sylvester matrix using ascending coefficient columns. Add $w^k$ times column $k$ to the constant column.

> [!hint]- Hint 2
> Expand along the new constant column and bound each cofactor by its Leibniz expansion.

## Solution

> [!success]- Solution
> ### Approach
> Write the Sylvester matrix using ascending coefficient columns. Add $w^k$ times column $k$ to the constant column.
>
> ### Proof
> Put $N=d+d'$ and $M=|F|$, $L=|G|$. First assume $d,d'\ge1$. Use the Sylvester matrix whose rows are the coefficient vectors of $X^jF$ for $0\le j<d'$ and $X^jG$ for $0\le j<d$, with columns ordered by $1,X,\ldots,X^{N-1}$. Its determinant has absolute value $|R|$; reversing column conventions affects only sign.
>
> Replace column $0$ by $\sum_{k=0}^{N-1}w^kC_k$. This leaves the determinant unchanged: the coefficient of the old column $0$ is $1$, and all added determinants have two equal columns. The new column has entries $w^jF(w)$ and $w^jG(w)$.
>
> A cofactor from an $F$ row has $d'-1$ remaining $F$ rows and $d$ remaining $G$ rows. Each product in its Leibniz expansion is bounded by $M^{d'-1}L^d$, and there are $(N-1)!$ products. Similarly a cofactor from a $G$ row is bounded by $(N-1)!M^{d'}L^{d-1}$. Since $|w|^j\le c^{N-1}$, expansion gives
> $$
> |R|\le (N-1)!c^{N-1}\bigl[d'|F(w)|M^{d'-1}L^d+d|G(w)|M^{d'}L^{d-1}\bigr].
> $$
> Using $M,L,c\ge1$, $d,d'\le N$, and $N!\le N^N$ proves the requested inequality.
>
> If $d=0<d'$, then $|R|=M^{d'}$, while the proposed right side is at least $M^{d'}$ because $c\ge1$, $|F(w)|=M\ge1$, and $(d')^{d'}\ge1$. The other constant case is symmetric. If both degrees are zero, the empty Sylvester determinant is $1$; with the convention $0^0=1$, the right side is $|F|+|G|\ge2$. Alternatively one can state the printed estimate only for $N\ge1$ to avoid that convention.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Polynomial Resultants|Polynomial Resultants]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Routing:** Linear Algebra and Modules is primary because the proof is a determinant column operation followed by cofactor estimates.
- **Source input:** Sylvester determinant definition [S2, Ch. IV, §8, printed p. 200, PDF p. 215]. The norm here is the coefficient maximum, not a supremum on a complex region.

- **Source status:** The complete numbered statement and its subparts were checked against the original PDF at [S2, Ch. IV, Ex. 16, printed p. 215, PDF p. 230]. The solution is independently derived; any imported theorem or corrected hypothesis is identified above.
