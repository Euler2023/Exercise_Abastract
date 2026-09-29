---
title: "Exercise LA441: Determinant Identities for Paired Endomorphisms"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - bilinear-forms
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIV, Exercises, Exercise 25, printed p. 570, PDF p. 585"
created: 2026-09-29
---

# Exercise LA441: Determinant Identities for Paired Endomorphisms

## Problem Statement

> [!question] Lang, Chapter XIV, Exercise 25
> Let $V,W$ be finite dimensional vector spaces over $k$, of dimension $n$. Let $(v,w)\mapsto\langle v,w\rangle$ be a non-singular bilinear form on $V\times W$. Let $c\in k$, and let $A:V\to V$ and $V:W\to W$ be endomorphisms such that
>
> $$
> \langle Av,Bw\rangle=c\langle v,w\rangle
> \quad\text{for all }v\in V\text{ and }w\in W.
> $$
>
> Show that
>
> $$
> \det(A)\det(tI-B)=(-1)^n\det(cI-tA)
> $$
>
> and
>
> $$
> \det(A)\det(B)=c^n.
> $$

> [!warning] Source issue: the name of the second endomorphism
> The source line introducing the maps prints $V:W\to W$, but its hypothesis and conclusions consistently use $B$. The proof uses the intended second map $B:W\to W$. The coefficient in the first determinant identity is visibly $(-1)^n$, not $(-t)^n$; both printed determinant identities are correct with this reading. No assumption $c\ne0$ or invertibility of $A$ is added.

## Hints

> [!hint]- Hint 1: Choose bases and write the pairing matrix
> If $C$ represents the non-singular pairing, then $C$ is invertible and the hypothesis reads $A^{\mathsf T}CB=cC$.

> [!hint]- Hint 2: Multiply the polynomial matrix without dividing by $A$
> Set $\widetilde B=CBC^{-1}$. Then $A^{\mathsf T}\widetilde B=cI$, so $A^{\mathsf T}(tI-\widetilde B)=tA^{\mathsf T}-cI$. Take determinants.

## Solution

> [!success]- Independent solution valid also for singular maps
> Choose bases of $V$ and $W$, and denote the matrices of the endomorphisms by the same letters $A,B$. There is an invertible matrix $C$ with $\langle v,w\rangle=v^{\mathsf T}Cw$. It is invertible because the pairing is non-singular and both spaces have the same finite dimension. The given equality for all coordinate vectors becomes
>
> $$
> v^{\mathsf T}A^{\mathsf T}CBw=c\,v^{\mathsf T}Cw,
> \qquad A^{\mathsf T}CB=cC.
> $$
>
> Put $\widetilde B=CBC^{-1}$, so $A^{\mathsf T}\widetilde B=cI$. Over $k[t]$ this gives
>
> $$
> A^{\mathsf T}(tI-\widetilde B)=tA^{\mathsf T}-cI.
> $$
>
> Multiplicativity of determinants, invariance under similarity, and invariance under transpose imply
>
> $$
> \begin{aligned}
> \det(A)\det(tI-B)
> &=\det(A^{\mathsf T})\det(tI-\widetilde B)\\
> &=\det(tA^{\mathsf T}-cI)\\
> &=\det(tA-cI)\\
> &=(-1)^n\det(cI-tA).
> \end{aligned}
> $$
>
> Finally, taking determinants directly in $A^{\mathsf T}\widetilde B=cI$ gives
>
> $$
> \det(A)\det(B)=\det(A^{\mathsf T})\det(\widetilde B)
> =\det(cI)=c^n.
> $$
>
> This argument never uses $A^{-1}$ or $B^{-1}$, so it includes $c=0$ and singular endomorphisms. When $n=0$, all empty determinants and the zeroth power $c^0$ are $1$, and the identities hold with that convention.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source and proof status:** [S2, Ch. XIV, Ex. 25, printed p. 570, PDF p. 585], checked on the page image. The map-name issue and the sign $(-1)^n$ were checked visually. The matrix proof is independent.
- **Proof inputs and boundary:** The proof uses the invertible matrix of a perfect finite-dimensional pairing and elementary determinant identities. The pairing is bilinear between two spaces; no symmetry, Hermitian condition, or identification $V=W$ is required.
- **Source remark after Exercises 24–25:** The book points to Hartshorne's *Algebraic Geometry*, Appendix C, §4, for a topological or algebraic-geometric application. That reference is recorded as a source remark and is not a proof input verified in this note.
