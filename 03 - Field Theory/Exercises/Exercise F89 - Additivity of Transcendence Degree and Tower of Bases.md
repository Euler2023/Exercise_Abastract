---
title: "Exercise F89: Additivity of Transcendence Degree and Tower of Bases"
topic: field-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - field-theory
  - transcendence-basis
  - transcendence-degree
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VIII, printed p. 374, PDF p. 389, Exercise 3"
created: 2026-09-15
---

# Exercise F89: Additivity of Transcendence Degree and Tower of Bases

## Problem Statement

> [!question]
> Let $k \subset E \subset K$ be extension fields. Show that
> $$
> \text{tr. deg. } (K/k) = \text{tr. deg. } (K/E) + \text{tr. deg. } (E/k).
> $$
> If $\{x_i\}$ is a transcendence base of $E/k$, and $\{y_j\}$ is a transcendence base of $K/E$, then $\{x_i, y_j\}$ is a transcendence base of $K/k$.

## Hints

> [!hint]- Hint 1: Two conditions for a transcendence base
> To show that $S = \{x_i\} \cup \{y_j\}$ is a transcendence base of $K/k$, you must prove two things:
> 1. $S$ is algebraically independent over $k$;
> 2. $K$ is algebraic over $k(S)$.

> [!hint]- Hint 2: Algebraic dependence
> Suppose a nonzero polynomial with coefficients in $k$ vanishes at elements of $\{x_i\}$ and $\{y_j\}$. Group the terms according to powers of $\{y_j\}$: the coefficients are then polynomials in $\{x_i\}$ with coefficients in $k$. What does the algebraic independence of $\{y_j\}$ over $E$ imply about these coefficients?

> [!hint]- Hint 3: Transitivity of algebraic extensions
> Use the tower of fields:
> $$
> k(\{x_i\}, \{y_j\}) \subset E(\{y_j\}) \subset K.
> $$
> Explain why each step in this tower is an algebraic extension.

## Solution

> [!success]-
> Let $X = \{x_i\}_{i \in I}$ be a transcendence base of $E/k$, and let $Y = \{y_j\}_{j \in J}$ be a transcendence base of $K/E$.
> We must prove that:
> 1. $X \cap Y = \emptyset$;
> 2. $X \cup Y$ is algebraically independent over $k$;
> 3. $K$ is algebraic over $k(X \cup Y)$;
> 4. $\operatorname{tr.deg}(K/k) = \operatorname{tr.deg}(K/E) + \operatorname{tr.deg}(E/k)$.
> 
> ### Step 1: Algebraic independence of $X \cup Y$ over $k$
> 
> Let $x_1, \ldots, x_m \in X$ and $y_1, \ldots, y_n \in Y$ be distinct elements.
> Suppose there is a polynomial $F \in k[X_1, \ldots, X_m, Y_1, \ldots, Y_n]$ such that
> $$
> F(x_1, \ldots, x_m, y_1, \ldots, y_n) = 0.
> $$
> We can write $F$ as a polynomial in the variables $Y_1, \ldots, Y_n$ with coefficients in $k[X_1, \ldots, X_m]$:
> $$
> F(X_1, \ldots, X_m, Y_1, \ldots, Y_n) = \sum_\alpha P_\alpha(X_1, \ldots, X_m) Y^\alpha,
> $$
> where $\alpha = (\alpha_1, \ldots, \alpha_n)$ ranges over multi-indices, and each $P_\alpha \in k[X_1, \ldots, X_m]$.
> 
> Evaluating at $X_i = x_i$ gives:
> $$
> \sum_\alpha P_\alpha(x_1, \ldots, x_m) y_1^{\alpha_1} \cdots y_n^{\alpha_n} = 0.
> $$
> Since each $x_i \in E$, the coefficient $c_\alpha = P_\alpha(x_1, \ldots, x_m)$ lies in the field $E$.
> Thus we have a polynomial relation among $y_1, \ldots, y_n$ with coefficients in $E$:
> $$
> \sum_\alpha c_\alpha y_1^{\alpha_1} \cdots y_n^{\alpha_n} = 0.
> $$
> But $Y = \{y_j\}$ is algebraically independent over $E$.
> Therefore, all coefficients $c_\alpha$ must be zero:
> $$
> P_\alpha(x_1, \ldots, x_m) = 0 \quad \text{for every multi-index } \alpha.
> $$
> Now, each $P_\alpha \in k[X_1, \ldots, X_m]$.
> Since $X = \{x_i\}$ is algebraically independent over $k$, $P_\alpha(x_1, \ldots, x_m) = 0$ implies that $P_\alpha$ is the zero polynomial in $k[X_1, \ldots, X_m]$.
> Since this holds for every $\alpha$, the polynomial $F(X, Y)$ is identically zero.
> 
> This proves that $X \cup Y$ is algebraically independent over $k$.
> In particular, no element of $Y$ can belong to $X$ (as that would immediately yield a relation $y_j - x_i = 0$), so $X \cap Y = \emptyset$.
> 
> ### Step 2: $K$ is algebraic over $k(X \cup Y)$
> 
> We examine the tower of fields:
> $$
> k(X \cup Y) = k(X)(Y) \subset E(Y) \subset K.
> $$
> 1. By definition of $Y$ as a transcendence base of $K/E$, the extension $K / E(Y)$ is algebraic.
> 2. By definition of $X$ as a transcendence base of $E/k$, the extension $E / k(X)$ is algebraic.
> 3. Adjoining $Y$ to both fields, $E(Y)$ is an algebraic extension of $k(X)(Y) = k(X \cup Y)$ (since every element of $E$ is algebraic over $k(X)$, so every generator of $E(Y)$ over $k(X)(Y)$ is algebraic).
> 4. By the transitivity of algebraic extensions (if $M/L$ is algebraic and $L/F$ is algebraic, then $M/F$ is algebraic), $K$ is an algebraic extension of $k(X \cup Y)$.
> 
> ### Step 3: Conclusion
> 
> Since $X \cup Y$ is algebraically independent over $k$ and $K$ is algebraic over $k(X \cup Y)$, $X \cup Y$ is a transcendence base of $K/k$.
> 
> Since $X$ and $Y$ are disjoint, the cardinality of $X \cup Y$ is:
> $$
> |X \cup Y| = |X| + |Y|.
> $$
> By definition of transcendence degree as the cardinality of a transcendence base, we obtain:
> $$
> \operatorname{tr.deg}(K/k) = \operatorname{tr.deg}(K/E) + \operatorname{tr.deg}(E/k).
> $$
> This holds for both finite and infinite transcendence degrees.

## Related Concepts

- [[03 - Field Theory/Concepts/Transcendence Bases and Transcendence Degree|Transcendence Bases and Transcendence Degree]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[03 - Field Theory/Concepts/Algebraic Extensions|Algebraic Extensions]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]

## Notes

- **Source and proof status**: [S2, Ch. VIII, Exercise 3, printed p. 374, PDF p. 389]. The tower-of-bases argument above is independently derived using algebraic independence and transitivity of algebraic extensions.
- **Infinite bases**: The addition in the formula is cardinal addition. It does not allow cancellation of infinite cardinals or detection of freeness from the cardinal equality alone.
