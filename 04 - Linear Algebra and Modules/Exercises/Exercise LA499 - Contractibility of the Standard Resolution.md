---
title: "Exercise LA499: Contractibility of the Standard Resolution"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - group-cohomology
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XX, Exercise 1, printed p. 826, PDF p. 841"
created: 2026-09-29
---

# Exercise LA499: Contractibility of the Standard Resolution

## Problem Statement

> [!question] Lang XX.1
> Prove that the example of the standard complex given in §1 is actually a complex, and is exact, so it gives a resolution of $\mathbb Z$. [Hint: To show that the sequence of the standard complex is exact, choose an element $z\in S$ and define $h:E^i\to E^{i+1}$ by letting
> $$
> h(x_0,\ldots,x_i)=(z,x_0,\ldots,x_i).
> $$
> Prove that $dh+hd=\mathrm{id}$, and that $dd=0$. Exactness follows at once.]

> [!warning] Source boundary: the set must be nonempty
> The example in §1 says only that $S$ is a set. The resolution assertion requires $S\ne\varnothing$, as already implicit in the instruction to choose $z$. If $S=\varnothing$, all $E_i$ vanish, so $E_0\to\mathbb Z$ is not surjective. We prove the assertion for nonempty $S$ and include the augmentation in the contraction.

## Hints

> [!hint]- Hint 1: Pair the double deletions
> Every tuple obtained by deleting two distinct entries occurs twice in $d^2$, with opposite signs.

> [!hint]- Hint 2: Include degree minus one
> Put $E_{-1}=\mathbb Z$, $h_{-1}(1)=(z)$, and $h_i(x_0,\ldots,x_i)=(z,x_0,\ldots,x_i)$. Deleting the new first entry produces the identity term.

## Solution

> [!success]- Independent calculation of the augmented contraction
> For $i\ge0$, let $E_i=\mathbb Z[S^{i+1}]$. Define
> $$
> d_i(x_0,\ldots,x_i)=\sum_{j=0}^i(-1)^j(x_0,\ldots,\widehat{x_j},\ldots,x_i)
> \quad(i\ge1),
> $$
> and $d_0(x_0)=1\in E_{-1}=\mathbb Z$.
>
> For $i\ge2$, fix positions $j<k$. Deleting position $k$ and then $j$ contributes sign $(-1)^{k+j}$. Deleting $j$ first shifts the old position $k$ to $k-1$, giving sign $(-1)^{j+k-1}$. These cancel, and all terms of $d_{i-1}d_i$ occur in such pairs. Also $d_0d_1(x_0,x_1)=1-1=0$. Thus the augmented sequence is a complex.
>
> Choose $z\in S$ and define $h$ as in the second hint. For $i\ge1$, deleting entries of the tuple with $z$ prepended gives
> $$
> d_{i+1}h_i(x_0,\ldots,x_i)
> =(x_0,\ldots,x_i)-h_{i-1}d_i(x_0,\ldots,x_i).
> $$
> In degree $0$ the same identity reads
> $$
> d_1h_0(x_0)=(x_0)-(z),\qquad h_{-1}d_0(x_0)=(z).
> $$
> In degree $-1$, $d_0h_{-1}=\mathrm{id}_{\mathbb Z}$. By linearity, $dh+hd=\mathrm{id}$ throughout the augmented complex.
>
> If $d_i v=0$ for $i\ge0$, this identity gives $v=d_{i+1}h_i(v)$, so every cycle is a boundary. The identity in degree $-1$ gives surjectivity onto $\mathbb Z$. Therefore
> $$
> \cdots\longrightarrow E_2\longrightarrow E_1\longrightarrow E_0
> \longrightarrow\mathbb Z\longrightarrow0
> $$
> is exact and is a resolution of $\mathbb Z$ by free abelian groups.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group cohomology and standard resolutions]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective modules]]

## Notes

- Source statement and hint checked at [S2, Ch. XX, Exercise 1, printed p. 826, PDF p. 841]; the referenced definition was checked at [S2, Ch. XX, §1, printed p. 764, PDF p. 779].
- Proof status: independent derivation. The calculation includes the augmentation, which is necessary to prove exactness at $\mathbb Z$.
- The source alternates upper and lower degree indices. The proof consistently uses chain indices, with $d$ lowering degree and $h$ raising it.
- When $S=G$ and $G$ acts diagonally, this contraction is generally only $\mathbb Z$-linear, not $G$-linear. Exactness does not require an equivariant contraction.

