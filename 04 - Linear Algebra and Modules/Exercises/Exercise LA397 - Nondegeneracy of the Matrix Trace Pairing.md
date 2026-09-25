---
title: "Exercise LA397: Nondegeneracy of the Matrix Trace Pairing"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-trace
  - bilinear-forms
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Matrices and Linear Maps, Exercise 5, printed p. 545, PDF p. 560"
created: 2026-09-26
---

# Exercise LA397: Nondegeneracy of the Matrix Trace Pairing

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 5
> Let $M$ be an $n\times n$ matrix over a field $k$. Assume that $\operatorname{tr}(MX)=0$ for all $n\times n$ matrices $X$ in $k$. Show that $M=0$.

## Hints

> [!hint]- Hint 1
> Test the trace against a single matrix unit $E_{ji}$.

> [!hint]- Hint 2
> Compute $\operatorname{tr}(ME_{ji})$ in terms of the entries of $M$.

## Solution

> [!success]- Independent derivation
> Write $M=(m_{ab})$. For fixed $i,j$, let $E_{ji}$ have a $1$ in row $j$, column $i$, and zeros elsewhere. The $(a,a)$ entry of $ME_{ji}$ equals $m_{aj}\delta_{ia}$, so
> $$
> \operatorname{tr}(ME_{ji})=\sum_a m_{aj}\delta_{ia}=m_{ij}.
> $$
> The hypothesis applies to every $E_{ji}$, hence every $m_{ij}=0$ and $M=0$. Equivalently, the bilinear pairing $(M,X)\mapsto\operatorname{tr}(MX)$ on $M_n(k)$ is non-degenerate over every field, including fields of positive characteristic.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- The statement was checked against [S2, Ch. XIII, Exercise 5, printed p. 545, PDF p. 560]. The matrix-unit proof is independently supplied.
- Testing only $X=I$ would be insufficient, especially if the field characteristic divides $n$; the hypothesis permits every matrix unit.
