---
title: "Exercise LA424: Equivalent Characterizations of Unipotent Operators"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - unipotent-operators
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIV, Exercise 8, printed p. 568, PDF p. 583"
created: 2026-09-29
---

# Exercise LA424: Equivalent Characterizations of Unipotent Operators

## Problem Statement

> [!question] Lang, Chapter XIV, Exercise 8
> Let $E$ be a finite-dimensional vector space over a field $k$. Let $A\in\operatorname{Aut}_k(E)$. Show that the following conditions are equivalent:
>
> (a) $A=I+N$, with $N$ nilpotent.
>
> (b) There exists a basis of $E$ such that the matrix of $A$ with respect to this basis has all its diagonal elements equal to $1$ and all elements above the diagonal equal to $0$.
>
> (c) All roots of the characteristic polynomial of $A$ (in the algebraic closure of $k$) are equal to $1$.

## Hints

> [!hint]- Hint 1: Triangularize the nilpotent part
> Use the kernel filtration of $N$, and pay attention to the word “above” in part (b): reverse the order of a basis that gives an upper triangular matrix.

> [!hint]- Hint 2: Apply Cayley–Hamilton
> Under (c), the monic characteristic polynomial is $(t-1)^n$, where $n=\dim_kE$.

## Solution

> [!success]- Solution
> If $E=0$, all three assertions hold with $N=0$. Assume henceforth that $n=\dim_kE>0$.
>
> **(a) implies (b).** Choose $m$ with $N^m=0$, and successively extend bases along the filtration $0\subseteq\ker N\subseteq\cdots\subseteq\ker N^m=E$. As shown in LA422, $N$ maps every newly chosen basis vector into the span of earlier vectors. Thus its matrix in that order is strictly upper triangular. Reversing the entire basis order changes it into a strictly lower triangular matrix. In this reversed basis, $A=I+N$ has diagonal entries $1$ and entries above the diagonal $0$.
>
> **(b) implies (c).** In the indicated basis, $tI-A$ is lower triangular with all diagonal entries $t-1$. The determinant of a triangular matrix is the product of its diagonal entries, so
>
> $$
> P_A(t)=\det(tI-A)=(t-1)^n.
> $$
>
> Hence every root, in any splitting field, is $1$.
>
> **(c) implies (a).** The characteristic polynomial is monic of degree $n$ and has only the root $1$ in an algebraic closure; therefore it equals $(t-1)^n$. The Cayley–Hamilton theorem gives $(A-I)^n=0$. Taking $N=A-I$ proves (a).
>
> These implications establish the equivalence in every characteristic.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Jordan Canonical Form|Jordan Canonical Form]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA422 - Nilpotent Endomorphisms Have Zero Trace|Exercise LA422]]

## Notes

- **Source and proof status:** [S2, Ch. XIV, Ex. 8, printed p. 568, PDF p. 583]. All three clauses, including “above the diagonal” in (b), were checked visually. The implication chain is independently derived; Cayley–Hamilton is the named prior theorem used in the last implication, not reproved here.
- **Terminology:** An operator satisfying these conditions is called unipotent. In fact, (a) already implies invertibility: if $N^m=0$, then $(I+N)^{-1}=I-N+N^2-\cdots+(-1)^{m-1}N^{m-1}$.
