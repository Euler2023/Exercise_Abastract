---
title: "Exercise Rep124: Diagonal Conjugation and Semisimple Matrix Spaces"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
  - semisimple-modules
  - conjugation
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVII, Exercise 15, printed p. 662, PDF p. 677"
created: 2026-09-29
---

# Exercise Rep124: Diagonal Conjugation and Semisimple Matrix Spaces

## Problem Statement

> [!question] Lang XVII.15 — Conjugation representation
> Let $A$ be the multiplicative group of diagonal matrices in $F$ with non-zero diagonal components. For $a\in A$, the conjugation action of $a$ on $\operatorname{Mat}_n(F)$ is denoted by $c(a)$, so $c(a)M=aMa^{-1}$ for $M\in\operatorname{Mat}_n(F)$.
>
> (a) Show that $\mathfrak n$ is stable under this action.
>
> (b) Show that $\mathfrak n$ is semisimple under this action. More precisely, for $1\le i<j\le n$, let $E_{ij}$ be the matrix with $(ij)$-component $1$, and all other components $0$. Then these matrices $E_{ij}$ form a basis for $\mathfrak n$ over $F$, and each $E_{ij}$ is an eigenvector for the conjugation action, namely for $a=\operatorname{diag}(a_1,\ldots,a_n)$ we have
> $$
> aE_{ij}a^{-1}=(a_i/a_j)E_{ij},
> $$
> so the corresponding character $\chi_{ij}$ is given by $\chi_{ij}(a)=a_i/a_j$.
>
> (c) Show that $\operatorname{Mat}_n(F)$ is semisimple, and in fact is equal to $\mathfrak d\oplus\mathfrak n\oplus{}^t\mathfrak n$, where $\mathfrak d$ is the space of diagonal matrices.

> [!info] Notation from the preceding exercise
> Here $F$ is an arbitrary field, $n\ge1$, and $\mathfrak n=\mathfrak n(F)$ is the space of strictly upper triangular $n\times n$ matrices, as in [[04 - Linear Algebra and Modules/Exercises/Exercise LA490 - Strictly Upper Triangular Nilpotent Algebra|Lang XVII.14]]. The notation ${}^t\mathfrak n$ means its transpose subspace, namely the strictly lower triangular matrices. Semisimplicity means being a direct sum of simple modules for the group action, or equivalently for the group algebra $F[A]$.

## Hints

> [!hint]- Hint 1: Track each matrix entry
> Multiplication on the left by $a$ multiplies row $i$ by $a_i$, and multiplication on the right by $a^{-1}$ multiplies column $j$ by $a_j^{-1}$. Apply this to a matrix unit.

> [!hint]- Hint 2: Decompose into invariant lines
> Each line $FE_{ij}$ is an invariant one-dimensional subspace, hence a simple module. The matrix-unit basis gives a direct sum of these lines even when different lines have the same character.

## Solution

> [!success]- Independent derivation over an arbitrary field
> The group action is well-defined: $c(1)$ is the identity and
> $$
> c(ab)M=abM(ab)^{-1}=a(bMb^{-1})a^{-1}=c(a)c(b)M.
> $$
> Each $c(a)$ is $F$-linear. For any $1\le i,j\le n$, entrywise multiplication gives
> $$
> aE_{ij}=a_iE_{ij},\qquad E_{ij}a^{-1}=a_j^{-1}E_{ij},
> $$
> and therefore
> $$
> c(a)E_{ij}=(a_i/a_j)E_{ij}.
> $$
> All the displayed ratios are defined and nonzero because $a\in A$.
>
> **(a) Stability of the strictly upper triangular space.** The matrices $E_{ij}$ for $i<j$ span $\mathfrak n$, and the formula sends each of them into its own line. Thus $c(a)\mathfrak n\subseteq\mathfrak n$ for every $a$. Applying the same statement to $a^{-1}$ also gives equality.
>
> **(b) The simple summands and their characters.** A strictly upper triangular matrix has a unique expansion
> $$
> M=\sum_{1\le i<j\le n}m_{ij}E_{ij},
> $$
> because its entries are precisely the coefficients on the right. Thus these matrix units form a basis, and
> $$
> \mathfrak n=\bigoplus_{i<j}FE_{ij}
> $$
> is a direct sum of invariant subspaces. Each $FE_{ij}$ is a nonzero one-dimensional $F$-space, so its only $F$-subspaces are $0$ and itself. In particular, it has no proper nonzero submodule for the action and is simple. This proves semisimplicity of $\mathfrak n$.
>
> The scalar on the line $FE_{ij}$ is $\chi_{ij}(a)=a_i/a_j$. If $a,b\in A$, then
> $$
> \chi_{ij}(ab)=\frac{a_ib_i}{a_jb_j}
> =\chi_{ij}(a)\chi_{ij}(b),\qquad\chi_{ij}(1)=1.
> $$
> Thus $\chi_{ij}:A\to F^\times$ is indeed a multiplicative character, and the displayed matrix unit is a simultaneous eigenvector for the entire action.
>
> **(c) The whole matrix space.** Every matrix is the unique sum of its diagonal part, its strictly upper triangular part, and its strictly lower triangular part. Their entries occupy disjoint positions, so
> $$
> \operatorname{Mat}_n(F)=\mathfrak d\oplus\mathfrak n\oplus{}^t\mathfrak n
> $$
> is a direct sum of vector spaces. Each summand is invariant by the matrix-unit formula. More explicitly,
> $$
> \mathfrak d=\bigoplus_iFE_{ii},\qquad
> {}^t\mathfrak n=\bigoplus_{i>j}FE_{ij}.
> $$
> The diagonal lines are fixed pointwise because $a_i/a_i=1$; the lower triangular lines have characters $a\mapsto a_i/a_j$ just as above. Every displayed line is simple. Consequently
> $$
> \operatorname{Mat}_n(F)=\bigoplus_{1\le i,j\le n}FE_{ij}
> $$
> is a direct sum of simple modules, proving semisimplicity of the whole conjugation representation and the more precise three-part decomposition in the question.

## Related Concepts

- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]]
- [[06 - Representation Theory/Concepts/Group Algebra|Group Algebra]]
- [[04 - Linear Algebra and Modules/Concepts/Semisimple Modules and Rings|Semisimple Modules and Rings]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]

## Notes

- **Source and proof status:** All three parts, the character formula, and the transpose notation were visually checked at [S2, Ch. XVII, Exercise 15, printed p. 662, PDF p. 677]. The definition of $\mathfrak n$ was checked in Exercise 14 on the same page. The solution is an independent entrywise calculation.
- **Finite fields and repeated characters:** Semisimplicity here does not require the characters on distinct matrix-unit lines to differ. Over $\mathbb F_2$, the diagonal group $A$ is trivial, so all the characters coincide. Over $\mathbb F_3$, the characters on $FE_{ij}$ and $FE_{ji}$ agree because every nonzero scalar is its own inverse. The explicit direct sum of invariant lines remains valid in both cases.
- **The diagonal summand:** For $n>1$, $\mathfrak d$ is a sum of $n$ copies of the trivial representation; it is not itself a simple representation. The three large summands in (c) are therefore not being asserted to be irreducible.
- **Boundary and method:** If $n=1$, then $\mathfrak n={}^t\mathfrak n=0$, interpreted as empty direct sums, and the full matrix space is one trivial line. No algebraic-closure assumption or Maschke theorem is used.
