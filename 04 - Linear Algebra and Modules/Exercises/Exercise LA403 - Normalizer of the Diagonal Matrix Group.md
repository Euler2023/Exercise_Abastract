---
title: "Exercise LA403: Normalizer of the Diagonal Matrix Group"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-groups
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Exercise 14, printed p. 546, PDF p. 561"
created: 2026-09-26
---

# Exercise LA403: Normalizer of the Diagonal Matrix Group

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 14
> Let $F$ be any field. Let $D$ be the subgroup of diagonal matrices in $GL_n(F)$. Let $N$ be the normalizer of $D$ in $GL_n(F)$. Show that $N/D$ is isomorphic to the symmetric group on $n$ elements.

> [!warning] Source issue: the field with two elements
> The printed assertion for **any** field is false. For $F=\mathbb F_2$, $D=\{I_n\}$, hence $N=GL_n(\mathbb F_2)$; at $n=2$ this has order $6$, while $S_2$ has order $2$. The corrected statement below assumes $|F|>2$ (or trivially $n=1$).

## Hints

> [!hint]- Hint 1
> When $|F|>2$, for each coordinate $i$ choose a diagonal matrix acting by a scalar $\lambda\ne1$ on $e_i$ and by $1$ on the other basis vectors.

> [!hint]- Hint 2
> A matrix normalizing $D$ must permute the one-dimensional common eigenspaces $Fe_i$; such matrices are monomial matrices.

## Solution

> [!success]- Independently derived corrected solution
> Assume $|F|>2$. The group $D$ fixes each coordinate line $Fe_i$ as a common eigenspace. These are its **only** common eigenlines. Indeed, choose $\lambda\in F^\times$ with $\lambda\ne1$ and set $d_i=\operatorname{diag}(1,\ldots,\lambda,\ldots,1)$. A vector with nonzero components in two different coordinates cannot be an eigenvector for every $d_i$: choosing $i$ to be one of those coordinates gives different eigenvalues on its two nonzero components.
>
> If $g\in N$, then for any common $D$-eigenline $L$, the line $gL$ is again a common $D$-eigenline, since $g^{-1}Dg=D$. Thus $g$ permutes the lines $Fe_1,\ldots,Fe_n$. Equivalently, $g$ has exactly one nonzero entry in each row and column: it is a monomial matrix. Conversely, every monomial matrix permutes diagonal entries under conjugation and therefore normalizes $D$.
>
> Sending a monomial matrix to its permutation of the coordinate lines gives a surjective homomorphism $N\to S_n$. Its kernel is the matrices fixing every coordinate line, namely $D$. Hence $N/D\cong S_n$.
>
> For the printed exceptional field $F=\mathbb F_2$, the only invertible diagonal matrix is $I_n$. Thus $N=GL_n(\mathbb F_2)$, and at $n=2$ its $6$ elements already contradict the printed conclusion. For $n=1$, both quotient and symmetric group are trivial over every field.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]

## Notes

- **Routing:** Characterizing matrix normalizers through common eigenlines is the main computation, so this note belongs to Linear Algebra and Modules.
- **Source and proof status:** The unrestricted field hypothesis was visually checked at [S2, Ch. XIII, Ex. 14, printed p. 546, PDF p. 561]. The correction, proof, and $\mathbb F_2$ counterexample are independent; the textbook supplies the question, not this proof.
