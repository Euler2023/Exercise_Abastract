---
title: "Exercise R229: Taylor Expansion and Hasse Derivatives"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, Polynomials, Exercise 3, printed p. 213, PDF p. 228"
created: 2026-09-06
---

# Exercise R229: Taylor Expansion and Hasse Derivatives

## Problem Statement

> [!question] Lang, Chapter IV, Exercise 3
> Let $f$ be a polynomial in one variable over a field $k$. Let $X,Y$ be two variables. Show that in $k[X,Y]$ we have a “Taylor series” expansion
> $$
> f(X+Y)=f(X)+\sum_{i=1}^n\varphi_i(X)Y^i,
> $$
> where $\varphi_i(X)$ is a polynomial in $X$ with coefficients in $k$. If $k$ has characteristic $0$, show that
> $$
> \varphi_i(X)=\frac{D^if(X)}{i!}.
> $$

## Hints

> [!hint]- Hint 1
> Expand each monomial $(X+Y)^j$ with the binomial theorem.

> [!hint]- Hint 2
> Compare the falling factorial $j(j-1)\cdots(j-i+1)$ with $i!\binom ji$.

## Solution

> [!success]- Solution
> ### Approach
> Expand each monomial $(X+Y)^j$ with the binomial theorem.
>
> ### Proof
> Write $f(X)=\sum_{j=0}^n a_jX^j$. The binomial theorem gives
> $$
> f(X+Y)=\sum_{i=0}^n\left(\sum_{j=i}^n a_j\binom ji X^{j-i}\right)Y^i.
> $$
> The coefficient for $i=0$ is $f(X)$; define $\varphi_i$ by the inner sum. These coefficients exist in every characteristic and are unique because powers of $Y$ form a basis of $k[X,Y]$ over $k[X]$.
>
> Repeated formal differentiation gives
> $$
> D^if(X)=\sum_{j=i}^n a_jj(j-1)\cdots(j-i+1)X^{j-i}=i!\varphi_i(X).
> $$
> In characteristic $0$, $i!$ is invertible in $k$, proving the formula. In characteristic $p$, the coefficient construction still works even when division by $i!$ does not: for $f=X^p$, one has $\varphi_p=1$ while $D^pf=0$. For the zero polynomial the expansion has all coefficients zero.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Polynomial Derivations|Polynomial Derivations]]

## Notes

- **Source status:** The complete numbered statement and its subparts were checked against the original PDF at [S2, Ch. IV, Ex. 3, printed p. 213, PDF p. 228]. The solution is independently derived; any imported theorem or corrected hypothesis is identified above.
