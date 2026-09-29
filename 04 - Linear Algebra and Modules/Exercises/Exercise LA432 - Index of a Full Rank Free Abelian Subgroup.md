---
title: "Exercise LA432: Index of a Full Rank Free Abelian Subgroup"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - lattices
  - determinants
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIV, Representation of One Endomorphism, Exercise 16, printed p. 569, PDF p. 584"
created: 2026-09-29
---

# Exercise LA432: Index of a Full Rank Free Abelian Subgroup

## Problem Statement

> [!question] Lang, Chapter XIV, Exercise 16
> Let $\Gamma$ be a free abelian group of dimension $n\ge1$. Let $\Gamma'$ be a subgroup of dimension $n$ also. Let $\{v_1,\ldots,v_n\}$ be a basis of $\Gamma$, and let $\{w_1,\ldots,w_n\}$ be a basis of $\Gamma'$. Write
>
> $$
> w_i=\sum_j a_{ij}v_j.
> $$
>
> Show that the index $(\Gamma:\Gamma')$ is equal to the absolute value of the determinant of the matrix $(a_{ij})$.

## Hints

> [!hint]- Hint 1
> Use the basis $v_1,\ldots,v_n$ to identify $\Gamma$ with $\mathbb Z^n$. The coordinate columns of the $w_i$ form the transpose of the displayed matrix.

> [!hint]- Hint 2
> Apply Smith normal form over $\mathbb Z$. Unimodular changes of coordinates preserve the index and the absolute determinant, while a diagonal subgroup has an explicitly countable quotient.

## Solution

> [!success]- Independent derivation using Smith normal form
> Put $A=(a_{ij})\in M_n(\mathbb Z)$ and use the basis $v_1,\ldots,v_n$ to identify $\Gamma$ with $\mathbb Z^n$. With column coordinates, the generators $w_i$ form the columns of $A^{\mathsf T}$, so
>
> $$
> \Gamma/\Gamma'\cong\mathbb Z^n/A^{\mathsf T}\mathbb Z^n.
> $$
>
> The matrix $A^{\mathsf T}$ has nonzero determinant. Indeed, a nonzero rational vector in its kernel could be multiplied by a common denominator to give a nonzero integer vector in its kernel, which would be a nontrivial integer relation among the basis vectors $w_i$.
>
> We use the **Smith normal form theorem over $\mathbb Z$** as a named external input: for a full-rank integer matrix $C$, there exist $U,V\in GL_n(\mathbb Z)$ and positive integers $d_1,\ldots,d_n$, with $d_i\mid d_{i+1}$, such that $UCV=\operatorname{diag}(d_1,\ldots,d_n)$. Apply it to $C=A^{\mathsf T}$ and put $D=\operatorname{diag}(d_1,\ldots,d_n)$.
>
> Since $V\mathbb Z^n=\mathbb Z^n$, right multiplication by $V$ leaves the image subgroup unchanged. Left multiplication by $U$ is an automorphism of the ambient group and sends $A^{\mathsf T}\mathbb Z^n$ onto $D\mathbb Z^n$. It therefore induces
>
> $$
> \Gamma/\Gamma'
> \cong\mathbb Z^n/D\mathbb Z^n
> \cong\bigoplus_{i=1}^{n}\mathbb Z/d_i\mathbb Z.
> $$
>
> This quotient is finite with $\prod_i d_i$ elements. Taking determinants in $UA^{\mathsf T}V=D$ and using $\det U,\det V\in\{1,-1\}$ gives
>
> $$
> (\Gamma:\Gamma')
> =\prod_{i=1}^{n}d_i
> =|\det D|
> =|\det A^{\mathsf T}|
> =|\det A|.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]
- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA414 - Index of a Full Rank Sublattice by Determinant|Exercise LA414]]

## Notes

- **Source and proof status:** The complete statement and row-index convention were checked against [S2, Ch. XIV, Ex. 16, printed p. 569, PDF p. 584]. The derivation here is independent. Smith normal form is a named external structural input; its application and the quotient count are given explicitly, while the theorem itself is not reproved.
- **Terminology and routing:** The source's “dimension” means the rank of a free abelian group. The proof primarily uses integer matrices, basis changes, and determinants, so this note belongs in Linear Algebra and Modules.
- **Related source exercise:** Lang XIII.27, archived separately as Exercise LA414, has the same determinant-index conclusion. This note retains its own XIV.16 provenance so that the two numbered source exercises remain separately traceable.
