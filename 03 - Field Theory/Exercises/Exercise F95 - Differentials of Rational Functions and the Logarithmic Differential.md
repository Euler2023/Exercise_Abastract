---
title: "Exercise F95: Differentials of Rational Functions and the Logarithmic Differential"
topic: field-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - field-theory
  - derivations-and-differentials
  - kahler-differentials
  - logarithmic-derivatives
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VIII, printed p. 375, PDF p. 390, Exercise 10"
created: 2026-09-15
---

# Exercise F95: Differentials of Rational Functions and the Logarithmic Differential

## Problem Statement

> [!question]
> Let $k, (z)$ be as in Exercise 9. Show that if $P$ is a rational function then
> $$
> d(P(z)) = \operatorname{grad} P(z) \cdot dz,
> $$
> using vector notation, i.e. $dz = (dz_1, \ldots, dz_r)$ and $\operatorname{grad} P = (D_1 P, \ldots, D_r P)$. Define $d\log P$ and express it in terms of coordinates. If $P, Q$ are rational functions in $k(z)$ show that
> $$
> d\log(PQ) = d\log P + d\log Q.
> $$

## Hints

> [!hint]- Hint 1: Universal property of Kähler differentials
> Recall that the differential operator $d: K \to \Omega_{K/k}^1$ is a $k$-derivation satisfying the Leibniz rule $d(fg) = f\, dg + g\, df$ and $da = 0$ for all $a \in k$. How does $d$ act on polynomials via partial derivatives?

> [!hint]- Hint 2: Quotient rule for differentials
> For a rational function $P = A/B$ with $A, B \in k[z]$, compute $d(A/B) = \frac{B\, dA - A\, dB}{B^2}$ and verify that the chain rule $dP = \sum_{j=1}^r \frac{\partial P}{\partial z_j} dz_j$ holds.

> [!hint]- Hint 3: Defining the logarithmic differential
> Define $d\log P = \frac{dP}{P}$ for any $P \in k(z)^\times$. Compute $\frac{d(PQ)}{PQ}$ using the product rule $d(PQ) = P\, dQ + Q\, dP$.

## Solution

> [!success]-
> ### Step 1: Differential of a Rational Function
> 
> Let $K = k(z_1, \ldots, z_r)$ be the field of rational functions in $r$ algebraically independent variables over $k$.
> Let $\Omega_{K/k}^1$ be the space of Kähler differentials of $K$ over $k$.
> By Lang Chapter VIII §5, $\{dz_1, \ldots, dz_r\}$ is a $K$-vector space basis of $\Omega_{K/k}^1$, and the canonical derivation
> $$
> d: K \to \Omega_{K/k}^1
> $$
> is the universal $k$-derivation.
> 
> Let $D_j = \frac{\partial}{\partial z_j} \in \operatorname{Der}_k(K, K)$ denote the partial derivation with respect to $z_j$.
> 
> 1. **For monomials**:
>    Let $M(z) = z_1^{a_1} \cdots z_r^{a_r}$. By the Leibniz rule:
>    $$
>    d(M(z)) = \sum_{j=1}^r a_j z_1^{a_1} \cdots z_j^{a_j - 1} \cdots z_r^{a_r} dz_j = \sum_{j=1}^r D_j(M) dz_j.
>    $$
> 
> 2. **For polynomials**:
>    By $k$-linearity of $d$, for any polynomial $A(z) \in k[z_1, \ldots, z_r]$:
>    $$
>    dA(z) = \sum_{j=1}^r D_j(A) dz_j.
>    $$
> 
> 3. **For rational functions**:
>    Let $P(z) = \frac{A(z)}{B(z)} \in K$, with $A, B \in k[z]$ and $B \neq 0$.
>    Since $d$ is a derivation, it satisfies the quotient rule:
>    $$
>    dP = d\left(\frac{A}{B}\right) = \frac{B\, dA - A\, dB}{B^2}.
>    $$
>    Substituting $dA = \sum_{j=1}^r D_j(A) dz_j$ and $dB = \sum_{j=1}^r D_j(B) dz_j$:
>    $$
>    dP = \frac{B \sum_{j=1}^r D_j(A) dz_j - A \sum_{j=1}^r D_j(B) dz_j}{B^2} = \sum_{j=1}^r \frac{B D_j(A) - A D_j(B)}{B^2} dz_j.
>    $$
>    By the quotient rule for the partial derivation $D_j$:
>    $$
>    D_j(P) = D_j\left(\frac{A}{B}\right) = \frac{B D_j(A) - A D_j(B)}{B^2}.
>    $$
>    Therefore:
>    $$
>    d(P(z)) = \sum_{j=1}^r D_j(P) dz_j.
>    $$
> 
> In vector notation, setting $\operatorname{grad} P(z) = (D_1 P, \ldots, D_r P)$ and $dz = (dz_1, \ldots, dz_r)^T$, this is:
> $$
> d(P(z)) = \operatorname{grad} P(z) \cdot dz.
> $$
> 
> ---
> 
> ### Step 2: Definition of $d\log P$ in Coordinates
> 
> For any nonzero rational function $P \in K^\times$, we define the **logarithmic differential** $d\log P \in \Omega_{K/k}^1$ by:
> $$
> d\log P = \frac{dP}{P}.
> $$
> 
> Expressing this in terms of the basis $\{dz_1, \ldots, dz_r\}$:
> $$
> d\log P = \frac{1}{P} \sum_{j=1}^r D_j(P) dz_j = \sum_{j=1}^r \frac{D_j(P)}{P} dz_j.
> $$
> Notice that each coefficient $\frac{D_j(P)}{P}$ is precisely the logarithmic derivative of $P$ with respect to the variable $z_j$.
> 
> ---
> 
> ### Step 3: Additivity of $d\log$
> 
> Let $P, Q \in K^\times$ be nonzero rational functions in $k(z)$.
> By the Leibniz product rule for the derivation $d$:
> $$
> d(PQ) = P\, dQ + Q\, dP.
> $$
> 
> By definition of $d\log(PQ)$:
> $$
> d\log(PQ) = \frac{d(PQ)}{PQ} = \frac{P\, dQ + Q\, dP}{PQ}.
> $$
> Splitting the fraction into two terms:
> $$
> d\log(PQ) = \frac{P\, dQ}{PQ} + \frac{Q\, dP}{PQ} = \frac{dQ}{Q} + \frac{dP}{P}.
> $$
> Using the definitions $d\log P = \frac{dP}{P}$ and $d\log Q = \frac{dQ}{Q}$, we conclude:
> $$
> d\log(PQ) = d\log P + d\log Q.
> $$
> 
> This proves that $d\log$ is a group homomorphism from the multiplicative group $(k(z)^\times, \cdot)$ into the additive group $(\Omega_{k(z)/k}^1, +)$.

## Related Concepts

- [[03 - Field Theory/Concepts/Derivations and Differentials on Fields|Derivations and Differentials on Fields]]
- [[03 - Field Theory/Concepts/Transcendence Bases and Transcendence Degree|Transcendence Bases and Transcendence Degree]]
- [[04 - Linear Algebra and Modules/Concepts/Hom Functor|Dual spaces as Hom spaces]]

## Notes

- **Source and proof status**: [S2, Ch. VIII, Exercise 10, printed p. 375, PDF p. 390]. The monomial, polynomial, quotient, and logarithmic-differential calculations are independently derived. The basis of differentials for the rational function field is the pure transcendental case of Lang VIII, Proposition 5.5, printed p. 372, PDF p. 387.
- **Domain of the logarithmic differential**: The notation $d\log P$ means $P^{-1}dP$ for $P\ne0$; it does not require a logarithm to exist in the field. In the product identity both $P$ and $Q$ must be nonzero.
