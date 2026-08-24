---
title: "Exercise LA3: Columns of Lorentz Matrices"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-groups
  - lorentz-groups
  - bilinear-forms
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 1, Ex. 1.2, printed p. 283, PDF p. 295"
created: 2026-08-10
---

# Exercise LA3: Columns of Lorentz Matrices

## Problem Statement

> [!question] Exercise 1.2
> A matrix $P$ is orthogonal if and only if its columns form an orthonormal basis. Describe the properties of the columns of a matrix in the Lorentz group $O_{3,1}$.

## Hints

> [!hint]- Hint 1
> Write $P=(v_1\ v_2\ v_3\ v_4)$ and interpret the $(i,j)$ entry of $P^{\mathsf T}I_{3,1}P$.

> [!hint]- Hint 2
> Use the Lorentz product $\langle x,y\rangle_{3,1}=x^{\mathsf T}I_{3,1}y$.

## Solution

> [!success]- Solution
> Let
> $$
> I_{3,1}=\operatorname{diag}(1,1,1,-1)
> $$
> and write the columns of $P$ as
> $$
> P=(v_1\ v_2\ v_3\ v_4).
> $$
> The $(i,j)$ entry of $P^{\mathsf T}I_{3,1}P$ is
> $$
> v_i^{\mathsf T}I_{3,1}v_j
> =\langle v_i,v_j\rangle_{3,1}.
> $$
> Therefore $P\in O_{3,1}$ exactly when
> $$
> \langle v_i,v_j\rangle_{3,1}=0\qquad(i\ne j),
> $$
> and
> $$
> \langle v_1,v_1\rangle_{3,1}
> =\langle v_2,v_2\rangle_{3,1}
> =\langle v_3,v_3\rangle_{3,1}=1,
> $$
> while
> $$
> \langle v_4,v_4\rangle_{3,1}=-1.
> $$
> Thus the columns form a Lorentz-orthogonal basis: the first three columns have Lorentz norm squared $+1$, the fourth has Lorentz norm squared $-1$, and distinct columns are Lorentz-orthogonal. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Indefinite Bilinear Forms and Lorentz Groups|Indefinite Bilinear Forms and Lorentz Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]

## Notes

The phrase “orthonormal basis” must be interpreted relative to the form being preserved. The Lorentz form is indefinite, so the fourth column has squared norm $-1$, not $+1$.

**Source status:** The definition of $O_{3,1}$ is stated in [S1, Ch. 9, §9.1, formula (9.1.5), printed p. 262, PDF p. 274]. The column characterization requested by Ex. 1.2 is proved completely above.
