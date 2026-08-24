---
title: "Exercise Rep30: Adjoint Action of O2 on Its Lie Algebra"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
  - adjoint-action
  - orthogonal-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 6, Ex. 6.6, printed p. 286, PDF p. 298"
created: 2026-08-24
---

# Exercise Rep30: Adjoint Action of O2 on Its Lie Algebra

## Problem Statement

> [!question] Exercise 6.6
> (a) Show that $O_2$ operates by conjugation on its Lie algebra.
>
> (b) Show that this operation is compatible with the bilinear form $(A,B)=\frac12\operatorname{trace}(AB)$.
>
> (c) Use the operation to define a homomorphism $O_2\to O_L$, and describe this homomorphism explicitly.

## Hints

> [!hint]- Hint 1
> The Lie algebra is the line $L=\mathbb RJ$, where $J=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$.

## Solution

> [!success]- Solution
> For $P\in O_2$ and $A\in L$, the curve $Pe^{tA}P^{-1}$ lies in $O_2$, so its derivative $PAP^{-1}$ lies in $L$. Thus conjugation acts on $L$. Cyclicity of trace gives
>
> $$
> (PAP^{-1},PBP^{-1})
> =\frac12\operatorname{tr}(PABP^{-1})
> =\frac12\operatorname{tr}(AB)=(A,B).
> $$
>
> Since $J^2=-I$, the form on $L$ is $(aJ,bJ)=-ab$. Directly,
>
> $$
> PJP^{-1}=(\det P)J.
> $$
>
> Therefore the resulting homomorphism into the orthogonal group $O_L\cong\{\pm1\}$ is exactly
>
> $$
> \operatorname{Ad}:O_2\longrightarrow O_L,
> \qquad P\longmapsto\det P.
> $$
>
> Rotations act trivially and reflections act by $-1$. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Adjoint Representation and Invariant Trace Forms|Adjoint Representation and Invariant Trace Forms]]
- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]

## Notes

- The form $\frac12\operatorname{tr}(AB)$ here is an invariant trace form on a particular matrix Lie algebra, not the standard Killing form $\operatorname{tr}(\operatorname{ad}_A\operatorname{ad}_B)$.
- **Source status:** Ex. 6.6 and its notation $O_L$ were visually checked at [S1, Ch. 9, §9.6, printed p. 286, PDF p. 298]. The explicit determinant description is independent.
