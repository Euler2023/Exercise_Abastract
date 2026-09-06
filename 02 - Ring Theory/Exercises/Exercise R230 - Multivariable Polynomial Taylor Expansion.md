---
title: "Exercise R230: Multivariable Polynomial Taylor Expansion"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, Polynomials, Exercise 4, printed p. 213, PDF p. 228"
created: 2026-09-06
---

# Exercise R230: Multivariable Polynomial Taylor Expansion

## Problem Statement

> [!question] Lang, Chapter IV, Exercise 4
> Generalize the preceding exercise to polynomials in several variables (introduce partial derivatives and show that a finite Taylor expansion exists for a polynomial in several variables).

## Hints

> [!hint]- Hint 1
> Use multi-indices $\alpha=(\alpha_1,\ldots,\alpha_r)$ and expand each factor $(X_j+Y_j)^{\beta_j}$.

> [!hint]- Hint 2
> In characteristic $0$, divide the mixed partial derivative by $\alpha!=\prod_j\alpha_j!$.

## Solution

> [!success]- Solution
> ### Approach
> Use multi-indices $\alpha=(\alpha_1,\ldots,\alpha_r)$ and expand each factor $(X_j+Y_j)^{\beta_j}$.
>
> ### Proof
> Let $f\in k[X_1,\ldots,X_r]$. Define $\partial_j$ on a monomial by
> $$
> \partial_jX^\beta=\beta_jX_1^{\beta_1}\cdots X_j^{\beta_j-1}\cdots X_r^{\beta_r},
> $$
> with value zero if $\beta_j=0$, and extend $k$-linearly. The monomial product rule proves that each is a derivation; applying two to a monomial shows that the partial derivatives commute.
>
> For $f=\sum_\beta a_\beta X^\beta$, use $\alpha\le\beta$ to mean componentwise inequality and put
> $$
> \binom\beta\alpha=\prod_j\binom{\beta_j}{\alpha_j},
> \qquad
> H_\alpha f(X)=\sum_{\beta\ge\alpha}a_\beta\binom\beta\alpha X^{\beta-\alpha}.
> $$
> Multiplying the one-variable binomial expansions yields the finite identity
> $$
> f(X+Y)=\sum_\alpha H_\alpha f(X)Y^\alpha.
> $$
> Only finitely many $\alpha$ occur, and $H_0f=f$. If $\operatorname{char}k=0$, direct differentiation of monomials gives
> $$
> H_\alpha f=\frac{\partial_1^{\alpha_1}\cdots\partial_r^{\alpha_r}f}{\alpha!}.
> $$
> Thus this is the usual multivariable Taylor formula interpreted algebraically. The $H_\alpha$ version remains valid in all characteristics.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Polynomial Derivations|Polynomial Derivations]]
- [[02 - Ring Theory/Exercises/Exercise R229 - Taylor Expansion and Hasse Derivatives|R229 — Taylor Expansion and Hasse Derivatives]]

## Notes

- **Source status:** The complete numbered statement and its subparts were checked against the original PDF at [S2, Ch. IV, Ex. 4, printed p. 213, PDF p. 228]. The solution is independently derived; any imported theorem or corrected hypothesis is identified above.
