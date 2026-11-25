---
title: "Exercise LA687: The Heisenberg Exponential is Bijective"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 3, Section 3.9, Exercise 18, printed p. 75, PDF p. 87"
source_refs:
  - "S10/ch-3/sec-9/ex-18"
created: 2026-11-25
---

# Exercise LA687: The Heisenberg Exponential is Bijective

## Problem Statement

> [!question] Original Chapter 3, Exercise 18
> Show that the exponential map from the Lie algebra of the Heisenberg group to the Heisenberg group is one-to-one and onto.

## Hints

> [!hint]- Hint 1
> The Lie algebra consists of strictly upper triangular $3\times3$ real matrices. Compute the square and cube of such a matrix.

> [!hint]- Hint 2
> In the exponential, the entries in positions $(1,2)$ and $(2,3)$ are unchanged. Use them to recover the entry in position $(1,3)$.

## Solution

> [!success]- Solution
> Let $E_{ij}$ be the matrix unit with its $1$ in row $i$ and column $j$. Hall's equation (1.13) describes the real Heisenberg group $H$ as the set of matrices $I+aE_{12}+bE_{13}+cE_{23}$ for real $a,b,c$ [S10, §1.2.6, printed p. 11, PDF p. 23]. Proposition 3.26 gives its Lie algebra as the set of matrices $X=xE_{12}+yE_{13}+zE_{23}$ for real $x,y,z$ [S10, §3.4, printed p. 59, PDF p. 71].
>
> The matrix-unit product is $E_{ij}E_{k\ell}=\delta_{jk}E_{i\ell}$. Of the nine products entering $X^2$, only $E_{12}E_{23}=E_{13}$ is nonzero. Thus $X^2=xzE_{13}$ and $X^3=0$. The exponential series gives
> $$
> e^X=I+X+\frac12X^2
>    =I+xE_{12}+\left(y+\frac{xz}{2}\right)E_{13}+zE_{23}.
> $$
> To obtain an arbitrary $I+aE_{12}+bE_{13}+cE_{23}\in H$, this formula requires $x=a$, $z=c$, and $y=b-ac/2$. These real values give the desired matrix and are uniquely determined, proving surjectivity and injectivity.
>
> In terms of $N=A-I$ for $A\in H$, the inverse is the polynomial $N-\tfrac12N^2$.

## Related Concepts

- [[01 - Group Theory/Concepts/Heisenberg Group|Heisenberg Group]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Logarithms|Matrix Logarithms]]

## Notes

- **Source status:** The exercise was checked at 200 dpi on printed p. 75 / PDF p. 87. Hall supplies the group and Lie algebra coordinates, and the inverse formula above is independently derived.
- **Concrete verification:** With $A=I+2E_{12}+3E_{23}$, the inverse formula gives $X=2E_{12}-3E_{13}+3E_{23}$. Here $X^2=6E_{13}$, so $I+X+X^2/2=A$ and the quadratic term cancels the $(1,3)$ entry of $X$.
- **Routing:** Nilpotent matrix powers and the resulting polynomial exponential determine both existence and uniqueness.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
