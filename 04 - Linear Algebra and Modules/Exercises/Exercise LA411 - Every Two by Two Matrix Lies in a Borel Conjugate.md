---
title: "Exercise LA411: Every Two by Two Matrix Lies in a Borel Conjugate"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-groups
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Exercises, Exercise 23, printed p. 547, PDF p. 562"
created: 2026-09-26
---

# Exercise LA411: Every Two by Two Matrix Lies in a Borel Conjugate

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 23
> Let $k$ be a field in which every quadratic polynomial has a root. Let $B$ be the Borel subgroup of $GL_2(k)$. Show that $G$ is the union of all the conjugates of $B$. (This cannot happen for finite groups!)

> [!warning] Source issue: $G$ is not defined
> The printed exercise introduces $B\leq GL_2(k)$ but never defines $G$. The natural intended statement is $GL_2(k)=\bigcup_{g\in GL_2(k)}gBg^{-1}$. We retain the printed $G$ above and prove this interpretation.

## Hints

> [!hint]- Hint 1: Find an invariant line
> The characteristic polynomial of a $2\times2$ matrix has degree two. An eigenvector provides a one-dimensional invariant subspace.

> [!hint]- Hint 2: Interpret the conjugates
> A matrix lies in a conjugate of the upper-triangular subgroup precisely when it preserves some line in $k^2$.

## Solution

> [!success]- Solution of the intended statement
> Let $A\in GL_2(k)$. Its characteristic polynomial $\det(TI-A)$ has degree two and therefore has a root $\lambda\in k$ by hypothesis. Thus $\det(\lambda I-A)=0$ and there is a nonzero $v\in k^2$ with $Av=\lambda v$. Extend $v$ to a basis $(v,w)$ of $k^2$. In that basis, $A$ preserves the first coordinate line, so its matrix is upper triangular with nonzero diagonal entries. If $g$ is the change-of-basis matrix with columns $v,w$, then $g^{-1}Ag\in B$ and $A\in gBg^{-1}$. Since every conjugate of $B$ is contained in $GL_2(k)$, this proves
>
> $$
> GL_2(k)=\bigcup_{g\in GL_2(k)}gBg^{-1}.
> $$
>
> For the parenthetical assertion, let a finite group $H$ act transitively on the cosets of a proper subgroup $B<H$. By double-counting pairs $(h,x)$ with $hx=x$, the average number of fixed cosets of $h\in H$ equals the number of orbits, namely $1$. The identity fixes $[H:B]>1$ cosets, so some element fixes no coset. That element belongs to no conjugate of $B$, since $h$ fixes $gB$ exactly when $g^{-1}hg\in B$. Hence no finite group is the union of conjugates of one proper subgroup.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- **Routing:** The proof triangularizes each matrix by an eigenline; its main tool is linear algebra.
- **Source and proof status:** [S2, Ch. XIII, Ex. 23, printed p. 547, PDF p. 562]. The statement and undefined $G$ were checked against the original page image. Both arguments are independent derivations.

