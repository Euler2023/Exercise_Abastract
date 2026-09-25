---
title: "Exercise F106: Real Closed Extensions with Large Transcendence Degree"
topic: field-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - field-theory
  - real-closed-fields
  - transcendence-degree
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XI, Exercises, Exercise 12, printed p. 463, PDF p. 478"
created: 2026-09-25
---

# Exercise F106: Real Closed Extensions with Large Transcendence Degree

## Problem Statement

> [!question] Lang, Chapter XI, Exercise 12
> Let $K$ be a real closed field. Show that there exists a real closed field $R$ containing $K$ and having arbitrarily large transcendence degree over $K$, and such that $K$ is maximal archimedean in $R$.

## Hints

> [!hint]- Hint 1: Add many independent infinitesimals
> For any chosen cardinal $\kappa$, adjoin algebraically independent variables $t_i$ for $i$ in an index set of size $\kappa$. Order their monomials lexicographically so each $t_i$ is infinitesimal over $K$.

> [!hint]- Hint 2: Compute the residue
> A rational function has a leading monomial. When it is finite over $K$, its residue is either zero or the ratio of two leading coefficients in $K$.

> [!hint]- Hint 3: Take a real closure
> Use Exercise 7 to show that passing to an order-preserving real closure does not enlarge the canonical residue field beyond the already real closed $K$.

## Solution

> [!success]- Solution
> Fix any cardinal $\kappa$ and a well-ordered index set $I$ of size $\kappa$. Let $L_0=K(t_i:i\in I)$ be a purely transcendental extension. Order the free abelian group $\Gamma=\bigoplus_{i\in I}\mathbb Z e_i$ lexicographically: a nonzero vector is positive if its first nonzero coordinate is positive. Give a polynomial in the $t_i$ the sign of the coefficient of its least exponent vector in this order. This is an ordering of the polynomial ring—leading coefficients of positive polynomials remain positive under sums and products—and it extends to the fraction field $L_0$. Since $e_i>0$, each $t_i$ is positive and smaller than every positive element of $K$.
>
> For a nonzero rational function $x=P/Q\in L_0$, let $\gamma(x)\in\Gamma$ be the difference between the least exponent vectors of $P$ and $Q$. If $\gamma(x)<0$, then $|x|$ is larger than every element of $K_{>0}$; if $\gamma(x)>0$, then $x$ is infinitesimal over $K$. If $\gamma(x)=0$, the leading coefficients give $c\in K^\times$ with $x-c$ infinitesimal. Thus the canonical valuation ring of $L_0$ over $K$ has residue field exactly $K$.
>
> This also makes $K$ maximal archimedean in $L_0$. Indeed, if $E$ were a proper intermediate field archimedean over $K$, take $x\in E\setminus K$. It is finite over $K$, so it has residue $c\in K$. Then $x-c$ is a nonzero infinitesimal, whereas $(x-c)^{-1}\in E$ is infinitely large over $K$, a contradiction.
>
> Let $R$ be an order-preserving real closure of $L_0$, whose existence follows from Lang's Theorem 2.11. Since $K$ is already real closed, Exercise 7 applied to $K\subseteq L_0\subseteq R$ says that the canonical residue field of $R$ over $K$ is still $K$. The same reciprocal argument now shows that $K$ is maximal archimedean in $R$. Finally, $R/L_0$ is algebraic, so
>
> $$
> \operatorname{trdeg}_K R=\operatorname{trdeg}_K L_0=|I|=\kappa.
> $$
>
> Since $\kappa$ was arbitrary, these extensions have arbitrarily large transcendence degree.

## Related Concepts

- [[03 - Field Theory/Concepts/Ordered and Real Closed Fields|Ordered and Real Closed Fields]]
- [[03 - Field Theory/Concepts/Real Places and Archimedean Valuation Rings|Real Places and Archimedean Valuation Rings]]
- [[03 - Field Theory/Concepts/Transcendence Bases and Transcendence Degree|Transcendence Bases and Transcendence Degree]]

## Notes

- **Source and proof status:** [S2, Ch. XI, Exercise 12, printed p. 463, PDF p. 478]. The lexicographic ordering, residue computation, and maximality proof are independently derived. The argument uses Lang's real-closure existence theorem and the independently solved Exercise 7.
- **Meaning of “arbitrarily large”:** For each prescribed cardinal $\kappa$ there is a suitable field $R$ of transcendence degree $\kappa$; one fixed set-sized field does not have every cardinal transcendence degree.
