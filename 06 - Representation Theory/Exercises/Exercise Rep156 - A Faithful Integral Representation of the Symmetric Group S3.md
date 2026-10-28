---
title: "Exercise Rep156: A Faithful Integral Representation of the Symmetric Group S3"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 9, Section 9.1, Exercise 9.1.3, printed p. 379, PDF p. 391"
source_refs:
  - "S7/ch-9/sec-1/ex-3"
created: 2026-10-28
---

# Exercise Rep156: A Faithful Integral Representation of the Symmetric Group S3

## Problem Statement

> [!question] Original Exercise 9.1.3
> Show that (9.6) defines an embedding of $S_3$ in $\mathrm{GL}_2(\mathbb Z)$.

> **Referenced context.** Formula (9.6) sends $(123)$ to $\begin{pmatrix}0&1\\-1&-1\end{pmatrix}$ and $(23)$ to $\begin{pmatrix}0&1\\1&0\end{pmatrix}$.

## Hints

> [!hint]- Hint 1
> Use $S_3=\langle r,s:r^3=s^2=1,\ srs=r^{-1}\rangle$.

> [!hint]- Hint 2
> The six candidates are $I,A,A^2,B,AB,A^2B$; compare determinants and orders.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Let
> $$
> A=\begin{pmatrix}0&1\\-1&-1\end{pmatrix},\qquad B=\begin{pmatrix}0&1\\1&0\end{pmatrix}.
> $$
> Both are invertible over $\mathbb Z$, with determinants $1$ and $-1$. Multiplication gives
> $$
> A^2=\begin{pmatrix}-1&-1\\1&0\end{pmatrix},\quad A^3=I,\quad B^2=I,\quad BAB=A^2.
> $$
> These are the defining relations of the permutations $r=(123)$ and $s=(23)$. Every word in them reduces, by $BA=A^{-1}B$, to $A^iB^j$ with $0\le i<3$, $0\le j<2$. The first three matrices are distinct because $A$ has exact order three. The other three are distinct by right cancellation of $B$, and no matrix from one group equals one from the other because their determinants differ. Thus the generated subgroup has six elements and the homomorphism from the six-element group $S_3$ is injective.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Referenced formula:** (9.6), printed p. 377, PDF p. 389; both assigned generator matrices were directly checked.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
