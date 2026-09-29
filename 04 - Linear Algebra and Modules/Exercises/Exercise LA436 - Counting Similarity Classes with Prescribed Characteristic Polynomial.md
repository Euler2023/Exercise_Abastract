---
title: "Exercise LA436: Counting Similarity Classes with Prescribed Characteristic Polynomial"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - jordan-form
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIV, Exercises, Exercise 20, printed p. 570, PDF p. 585"
created: 2026-09-29
---

# Exercise LA436: Counting Similarity Classes with Prescribed Characteristic Polynomial

## Problem Statement

> [!question] Lang, Chapter XIV, Exercise 20
> (a) How many non-conjugate elements of $GL_2(\mathbb C)$ are there with characteristic polynomial $t^3(t+1)^2(t-1)$?
>
> (b) How many with characteristic polynomial $t^3-1001t$?

> [!warning] Source issue: matrix size and invertibility
> The page image prints $GL_2(\mathbb C)$. Its characteristic polynomials have degree $2$ and nonzero constant term, whereas the two displayed polynomials have degrees $6$ and $3$ and both have zero constant term. The literal answers are therefore $0$ and $0$. A natural alternative question asks for similarity classes in $M_6(\mathbb C)$ and $M_3(\mathbb C)$, respectively; its answers are $6$ and $1$. This alternative is an independently inferred interpretation, not a verified authorial erratum. Both versions are treated below.

## Hints

> [!hint]- Hint 1: Check the printed ambient group first
> A $2\times2$ matrix has a degree-$2$ characteristic polynomial. An invertible matrix cannot have $0$ as an eigenvalue.

> [!hint]- Hint 2: For the inferred version, count partitions
> The Jordan blocks for an eigenvalue of algebraic multiplicity $m$ correspond to partitions of $m$. Choices for distinct eigenvalues are independent.

## Solution

> [!success]- Independent solution of the literal and inferred questions
> **Literal statement.** For $A\in GL_2(\mathbb C)$, the characteristic polynomial $\det(tI-A)$ has degree $2$ and constant term $\det A\ne0$. Neither printed polynomial satisfies either condition. Consequently there are no such matrices, and both answers are $0$.
>
> **Inferred part (a), in $M_6(\mathbb C)$.** Write $J_m(\lambda)$ for a size-$m$ Jordan block with eigenvalue $\lambda$. Jordan canonical form says that a similarity class is uniquely specified by the multiset of block sizes at each eigenvalue. The multiplicities of $0,-1,1$ are $3,2,1$. The possible blocks on the zero-primary part are
>
> $$
> J_3(0),\qquad J_2(0)\oplus J_1(0),\qquad
> J_1(0)\oplus J_1(0)\oplus J_1(0).
> $$
>
> The possibilities on the $-1$-primary part are $J_2(-1)$ and $J_1(-1)\oplus J_1(-1)$. The $1$-primary part is necessarily $J_1(1)$. Taking any of the three first choices, either of the two second choices, and this last block produces a matrix with the required characteristic polynomial. Different choices have different Jordan block data and hence are not conjugate. Thus there are $3\cdot2\cdot1=6$ classes.
>
> **Inferred part (b), in $M_3(\mathbb C)$.** The factorization is
>
> $$
> t^3-1001t=t(t-\sqrt{1001})(t+\sqrt{1001}).
> $$
>
> These three roots are distinct. Each eigenvalue has multiplicity $1$, so its only Jordan block has size $1$. Every such matrix is conjugate to $\operatorname{diag}(0,\sqrt{1001},-\sqrt{1001})$, giving exactly one class.
>
> In both inferred questions conjugation is by $GL_n(\mathbb C)$ on the whole matrix space $M_n(\mathbb C)$. The matrices being classified are singular, so merely replacing the printed subscript $2$ by $6$ or $3$ in $GL_2$ would still give no examples.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Jordan Canonical Form|Jordan Canonical Form]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Centralizers and Similarity|Matrix Centralizers and Similarity]]

## Notes

- **Source and proof status:** [S2, Ch. XIV, Ex. 20(a)–(b), printed p. 570, PDF p. 585], checked on the page image. The discrepancy and the alternative interpretation are recorded explicitly; the counting argument is independent.
- **Imported standard input:** Jordan canonical form over an algebraically closed field, including uniqueness of the block-size multiset, is used as the classification theorem. Its proof is not repeated here.
- **Boundary:** The answers $6$ and $1$ apply to the specified matrix-space interpretation only. They are not answers to the literal $GL_2(\mathbb C)$ question.
