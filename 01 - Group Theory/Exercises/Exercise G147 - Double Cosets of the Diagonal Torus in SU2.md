---
title: "Exercise G147: Double Cosets of the Diagonal Torus in SU2"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - double-cosets
  - special-unitary-group
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Miscellaneous Ex. M.10, printed p. 289, PDF p. 301"
created: 2026-08-24
---

# Exercise G147: Double Cosets of the Diagonal Torus in SU2

## Problem Statement

> [!question] Miscellaneous Exercise M.10
> Let $P$ be the matrix (9.3.1) in $SU_2$, and let $T$ denote the subgroup of $SU_2$ of diagonal matrices. Prove that if the entries $a,b$ of $P$ are not zero, then the double coset $TPT$ is homeomorphic to a torus, and describe the remaining double cosets (see Chapter 2, Exercise M.9).

## Hints

> [!hint]- Hint 1
> Parameterize $T$ by $D_u=\operatorname{diag}(u,\overline u)$ with $|u|=1$ and calculate $D_uPD_v$.

## Solution

> [!success]- Solution
> Write
>
> $$
> P=\begin{pmatrix}a&-\overline b\\b&\overline a\end{pmatrix},
> \qquad |a|^2+|b|^2=1.
> $$
>
> Left and right multiplication by $D_u,D_v\in T$ changes the two entries by
>
> $$
> a\longmapsto uv,a,
> \qquad b\longmapsto\overline u v,b.
> $$
>
> If $a,b\ne0$, the orbit map $T\times T\to TPT$ has stabilizer
>
> $$
> \{(I,I),(-I,-I)\}.
> $$
>
> It therefore induces a continuous bijection
>
> $$
> (S^1\times S^1)/\{\pm(1,1)\}\longrightarrow TPT.
> $$
>
> The source is again a torus, and compact-to-Hausdorff makes the bijection a homeomorphism.
>
> If $b=0$, then $P\in T$ and $TPT=T$, a circle. If $a=0$, the matrices are anti-diagonal and the double coset is another circle. These are the only remaining cases. Thus the double cosets are parameterized by $|a|\in[0,1]$: interior values give tori and the two endpoints give circles.
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[06 - Representation Theory/Concepts/SU2 Quaternions and the Spin Cover|SU2, Quaternions, and the Spin Cover]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]

## Notes

- The finite stabilizer acts by translation on $S^1\times S^1$, so the quotient has no orbifold singularity.
- **Source status:** M.10 and matrix (9.3.1) were visually checked at [S1, Ch. 9, §9.3 and Misc. Ex. M.10, printed pp. 266 and 289, PDF pp. 278 and 301]. The stabilizer and topology are independent.

