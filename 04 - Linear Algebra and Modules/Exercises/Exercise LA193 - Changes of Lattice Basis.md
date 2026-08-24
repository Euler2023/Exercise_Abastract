---
title: "Exercise LA193: Changes of Lattice Basis"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - lattices
  - determinants
  - integer-matrices
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 5, Ex. 5.4, printed p. 188, PDF p. 200"
created: 2026-08-24
---

# Exercise LA193: Changes of Lattice Basis

## Problem Statement

> [!question] Exercise 5.4
> Let $(a,b)$ be a lattice basis of a lattice $L$ in $\mathbb R^2$. Prove that every other lattice basis has the form $(a',b')=(a,b)P$, where $P$ is a $2\times2$ integer matrix with determinant $\pm1$.

## Hints

> [!hint]- Hint 1
> Express $a',b'$ in the old basis and $a,b$ in the new basis.

> [!hint]- Hint 2
> The two integer coordinate matrices are inverses. Take determinants.

## Solution

> [!success]- Solution
> Since $a',b'\in L=\mathbb Za+\mathbb Zb$, there is a matrix $P\in M_2(\mathbb Z)$ such that
>
> $$
> (a',b')=(a,b)P.
> $$
>
> Because $(a',b')$ is also a lattice basis, $a,b$ are integer combinations of $a',b'$. Thus there is $Q\in M_2(\mathbb Z)$ with
>
> $$
> (a,b)=(a',b')Q=(a,b)PQ.
> $$
>
> Linear independence of $a,b$ gives $PQ=I$. Taking determinants yields
>
> $$
> \det(P)\det(Q)=1.
> $$
>
> Both determinants are integers, so $\det(P)=\pm1$.
>
> Conversely, if $P\in M_2(\mathbb Z)$ and $\det(P)=\pm1$, then
>
> $$
> P^{-1}=\frac{1}{\det(P)}\operatorname{adj}(P)
> $$
>
> also has integer entries. Hence $(a',b')=(a,b)P$ generates $L$, while invertibility gives linear independence. Therefore it is a lattice basis. The allowed changes of lattice basis are precisely the matrices in $GL_2(\mathbb Z)$. $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]

## Notes

- The determinant condition records preservation of the lattice, not preservation of Euclidean length or angle.
- **Source status:** The problem is from [S1, Ch. 6, §5, Ex. 5.4, printed p. 188, PDF p. 200]. The proof above is independent.

