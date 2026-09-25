---
title: "Exercise LA412: Leading and Constant Terms of a Determinant Pencil"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
  - determinants
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Exercises, Exercise 24, printed p. 547, PDF p. 562"
created: 2026-09-26
---

# Exercise LA412: Leading and Constant Terms of a Determinant Pencil

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 24
> Let $A,B$ be square matrices of the same size over a field $k$. Assume that $B$ is non-singular. If $t$ is a variable, show that $\det(A+tB)$ is a polynomial in $t$, whose leading coefficient is $\det(B)$ and whose constant term is $\det(A)$.

## Hints

> [!hint]- Hint 1: Use multilinearity
> Expand the determinant by choosing from each column either the column of $A$ or $t$ times the column of $B$.

> [!hint]- Hint 2: Identify the extreme degrees
> The term with no $B$ columns is $\det A$; the unique term of degree $n$ uses all $B$ columns.

## Solution

> [!success]- Solution
> Write the columns as $A=(a_1,\ldots,a_n)$ and $B=(b_1,\ldots,b_n)$. Multilinearity of the determinant over $k[t]$ gives
>
> $$
> \det(A+tB)=\sum_{S\subseteq\{1,\ldots,n\}}t^{|S|}
> \det(c_1(S),\ldots,c_n(S)),
> $$
>
> where $c_i(S)=b_i$ if $i\in S$ and $c_i(S)=a_i$ otherwise. The only summand with $|S|=0$ is $\det A$; the only one with $|S|=n$ is $t^n\det B$. Hence this is a polynomial of degree at most $n$, with constant term $\det A$ and coefficient of $t^n$ equal to $\det B$. Since $B$ is non-singular, $\det B\ne0$, so its degree is exactly $n$ and $\det B$ is its leading coefficient.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source and proof status:** [S2, Ch. XIII, Ex. 24, printed p. 547, PDF p. 562]. The source statement was checked on the page image; the column expansion is independent.
- **Boundary:** The invertibility of $B$ is needed to call $\det B$ the nonzero leading coefficient. The extreme-coefficient identities themselves hold for every $B$.

