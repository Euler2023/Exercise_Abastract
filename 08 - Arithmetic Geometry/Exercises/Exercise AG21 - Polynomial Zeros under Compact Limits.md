---
title: "Exercise AG21: Polynomial Zeros under Compact Limits"
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
  - exercise
  - arithmetic-geometry
  - discrete-valuations
  - compactness
  - polynomial-zeros
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XII, Exercises, Exercise 9, printed p. 496, PDF p. 511"
created: 2026-09-25
---

# Exercise AG21: Polynomial Zeros under Compact Limits

## Problem Statement

> [!question] Lang, Chapter XII, Exercise 9
> Let $K$ be a field complete with respect to a discrete valuation, let $\mathfrak o$ be the ring of integers of $K$, and assume that $\mathfrak o$ is compact. Let $f_1,f_2,\ldots$ be a sequence of polynomials in $n$ variables, with coefficients in $\mathfrak o$. Assume that all these polynomials have degree $\leq d$, and that they converge to a polynomial $f$ (i.e. that $|f-f_i|\to0$ as $i\to\infty$). If each $f_i$ has a zero in $\mathfrak o$, show that $f$ has a zero in $\mathfrak o$. If the polynomials $f_i$ are homogeneous of degree $d$, and if each $f_i$ has a non-trivial zero in $\mathfrak o$, show that $f$ has a non-trivial zero in $\mathfrak o$. [Hint: Use the compactness of $\mathfrak o$ and of the units of $\mathfrak o$ for the homogeneous case.]
>
> Lang points to his paper “On quasi-algebraic closure,” *Annals of Mathematics* **55** (1952), pp. 412–444, for applications of this exercise and Proposition 7.6.

## Hints

> [!hint]- Hint 1: Work in a fixed coefficient space
> There are only finitely many monomials in $n$ variables of total degree at most $d$. Coefficient convergence controls evaluation uniformly on $\mathfrak o^n$.

> [!hint]- Hint 2: Use compactness
> Choose a zero of each $f_i$ and extract a convergent subsequence in $\mathfrak o^n$.

> [!hint]- Hint 3: Normalize a nonzero homogeneous zero
> Divide its coordinates by one having the largest absolute value. The resulting vector is still in $\mathfrak o^n$, is still a zero, and has a coordinate equal to $1$.

## Solution

> [!success]- Solution
> Write
>
> $$
> f_i(X)=\sum_{|\nu|\leq d}a_{i,\nu}X^\nu,
> \qquad
> f(X)=\sum_{|\nu|\leq d}a_\nu X^\nu.
> $$
>
> The coefficient maximum norm in the question gives $\max_\nu|a_{i,\nu}-a_\nu|\to0$. For every $x\in\mathfrak o^n$, each $|x^\nu|\leq1$; hence the ultrametric inequality gives the uniform bound
>
> $$
> |f_i(x)-f(x)|
> \leq \max_{|\nu|\leq d}|a_{i,\nu}-a_\nu|
> \longrightarrow0.
> $$
>
> Choose $x_i\in\mathfrak o^n$ with $f_i(x_i)=0$. The finite product $\mathfrak o^n$ is compact, so some subsequence $x_{i_j}$ converges to $x\in\mathfrak o^n$. The displayed uniform bound implies $f(x_{i_j})\to0$. Polynomial evaluation is continuous, so $f(x)=0$.
>
> Now assume every $f_i$ is homogeneous of degree $d$ and has a nonzero zero $x_i\in\mathfrak o^n$. Choose an index $j_i$ for which $|x_{i,j_i}|=\max_j|x_{i,j}|>0$ and set $y_i=x_i/x_{i,j_i}$ coordinatewise. Every coordinate of $y_i$ lies in $\mathfrak o$, its $j_i$-th coordinate equals $1$, and homogeneity gives $f_i(y_i)=x_{i,j_i}^{-d}f_i(x_i)=0$. Pass first to a subsequence on which $j_i$ is a fixed index $j$, then to a convergent subsequence of $y_i$ in $\mathfrak o^n$. Its limit $y$ satisfies $y_j=1$, so $y\ne0$. The same uniform-convergence argument gives $f(y)=0$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Compactness and Quasi-Compactness|Compactness and Quasi-Compactness]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]

## Notes

- **Routing:** The proof uses compactness of a valuation ring and uniform convergence for bounded polynomial coefficients, so Arithmetic Geometry is primary.
- **Notation:** A zero “in $\mathfrak o$” of an $n$-variable polynomial means a vector in $\mathfrak o^n$. The polynomial norm is the maximum of the absolute values of its finitely many coefficients, as in Exercise 1(a).
- **Source and proof status:** [S2, Ch. XII, Ex. 9, printed p. 496, PDF p. 511]. This is an independent compactness proof. The source suggests using compactness of $\mathfrak o^\times$; normalizing one coordinate to exactly $1$ gives the same nonvanishing control.
