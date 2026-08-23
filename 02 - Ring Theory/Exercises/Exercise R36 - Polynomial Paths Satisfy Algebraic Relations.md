---
title: "Exercise R36: Polynomial Paths Satisfy Algebraic Relations"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - polynomial-rings
  - algebraic-dependence
  - plane-curves
source: "Michael Artin, Algebra, 2nd ed., Ch. 3, Miscellaneous Problems, Ex. M.3, printed p. 101, PDF p. 113"
created: 2026-08-23
---

# Exercise R36: Polynomial Paths Satisfy Algebraic Relations

## Problem Statement

> [!question] Exercise M.3
> **(a)** If $x(t),y(t)$ are real quadratic polynomials, prove that the path $(x(t),y(t))$ lies on a conic: some nonzero real polynomial $f(x,y)$ of degree at most $2$ satisfies $f(x(t),y(t))=0$.
> 
> **(b)** For $x(t)=t^2-1$ and $y(t)=t^3-t$, find such a nonzero polynomial, and sketch both its zero locus and the path.
> 
> **(c)** Prove that every pair of real polynomials $x(t),y(t)$ satisfies a nonzero polynomial relation $f(x,y)=0$.

## Hints

> [!hint]- Hint 1
> In (a), compare the six monomials $1,x,y,x^2,xy,y^2$ inside the five-dimensional space of polynomials in $t$ of degree at most $4$.

> [!hint]- Hint 2
> In (b), use $y=tx$ and $t^2=x+1$.

> [!hint]- Hint 3
> For (c), take enough monomials $x^iy^j$ so their number exceeds the dimension allowed by their degrees in $t$.

## Solution

> [!success]- Solution
> **(a)** After substitution, the six polynomials
> 
> $$
> 1,x(t),y(t),x(t)^2,x(t)y(t),y(t)^2
> $$
> 
> all have degree at most $4$, a vector space of dimension $5$. They are dependent, giving the required nonzero quadratic $f$.
> 
> **(b)** Since $y=tx$ and $t^2=x+1$,
> 
> $$
> y^2=t^2x^2=(x+1)x^2.
> $$
> 
> Thus $f(x,y)=y^2-x^3-x^2$. Its real locus has a node at $(0,0)$, a loop from $(0,0)$ through $(-1,0)$ and back, and two unbounded branches for $x>0$. The parametrized path traverses the entire locus: $-1\le t\le1$ traces the loop, while $|t|>1$ traces the two unbounded branches.
> 
> **(c)** Let $m=\deg x$ and $n=\deg y$. For a sufficiently large $N$, the $(N+1)^2$ polynomials $x(t)^iy(t)^j$ with $0\le i,j\le N$ all have degree at most $N(m+n)$. Since $(N+1)^2>N(m+n)+1$ for large $N$, they are linearly dependent. Their dependence is a nonzero polynomial $f(X,Y)$ with $f(x(t),y(t))=0$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 3, Misc. Problems, Ex. M.3, printed p. 101, PDF p. 113]. The solution is an independent derivation for this vault, not a solution printed in Artin.
