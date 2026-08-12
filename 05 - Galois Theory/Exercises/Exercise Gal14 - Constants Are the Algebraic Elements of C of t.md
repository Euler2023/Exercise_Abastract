---
title: "Exercise Gal14: Constants Are the Algebraic Elements of C(t)"
topic: galois-theory
difficulty: advanced
status: complete
tags:
  - exercise
  - galois-theory
  - rational-functions
source: Michael Artin, Algebra, 2nd ed., Ch. 16, Section 5, Ex. 5.3, printed p. 507, PDF p. 519
created: 2026-08-12
---

# Exercise Gal14: Constants Are the Algebraic Elements of $\mathbb C(t)$

## Problem Statement

> [!question] Exercise 5.3
> Prove every element of $\mathbb C(t)\setminus\mathbb C$ is transcendental over $\mathbb C$.

## Hints

> [!hint]- Hint 1
> Argue by contradiction. If $u\in\mathbb C(t)$ is algebraic over $\mathbb C$, then some nonzero polynomial $f(x)\in\mathbb C[x]$ satisfies $f(u)=0$.

> [!hint]- Hint 2
> Use that $\mathbb C$ is algebraically closed: factor $f(x)$ completely into linear factors. Then use that the field $\mathbb C(t)$ has no zero divisors.

> [!hint]- Hint 3: a proof valid over every base field
> Write a nonconstant $u=a(t)/b(t)$ and consider
> $$
> P(X)=a(X)-u b(X)\in\mathbb C(u)[X].
> $$
> Check carefully that $P(X)$ is not the zero polynomial before applying transitivity of algebraicity.

## Solution

> [!success]- Solution
> Let $u\in\mathbb C(t)\setminus\mathbb C$. Suppose, for contradiction, that $u$ is algebraic over $\mathbb C$. Then there is a nonzero polynomial $f(x)\in\mathbb C[x]$ such that $f(u)=0$.
>
> Because $\mathbb C$ is algebraically closed, $f$ splits completely:
> $$
> f(x)=c\prod_{j=1}^{n}(x-\lambda_j),
> \qquad c\in\mathbb C^\times,
> \quad \lambda_j\in\mathbb C.
> $$
> Evaluating at $u$ gives an equality in the field $\mathbb C(t)$:
> $$
> 0=f(u)=c\prod_{j=1}^{n}(u-\lambda_j).
> $$
> A field has no zero divisors, and $c\ne0$. Hence $u-\lambda_j=0$ for at least one $j$. Thus $u=\lambda_j\in\mathbb C$, contradicting the choice $u\notin\mathbb C$. Therefore every element of $\mathbb C(t)\setminus\mathbb C$ is transcendental over $\mathbb C$.
>
> **Alternative proof, exhibiting the rational-function structure.** Write
> $$
> u=\frac{a(t)}{b(t)},
> \qquad a(t),b(t)\in\mathbb C[t],
> \quad b(t)\ne0.
> $$
> Since $u\notin\mathbb C$, it is a nonconstant rational function. Consider
> $$
> P(X)=a(X)-u b(X)\in\mathbb C(u)[X].
> $$
> We have $P(t)=a(t)-u b(t)=0$. We must also verify that $P$ is not the zero polynomial. If $P=0$, write $a(X)=\sum a_iX^i$ and $b(X)=\sum b_iX^i$. Then $a_i=u b_i$ for every $i$. Since some $b_j\ne0$, this would imply
> $$
> u=\frac{a_j}{b_j}\in\mathbb C,
> $$
> again a contradiction. Thus $P\ne0$, so $t$ is algebraic over $\mathbb C(u)$.
>
> If $u$ were algebraic over $\mathbb C$, then $\mathbb C(u)/\mathbb C$ would be algebraic. Since $t$ is algebraic over $\mathbb C(u)$, transitivity of algebraicity would make $t$ algebraic over $\mathbb C$. This is impossible because $t$ is, by definition, an indeterminate over $\mathbb C$. Hence $u$ is transcendental over $\mathbb C$.

## Related Concepts

- [[03 - Field Theory/Concepts/Algebraic and Transcendental Elements|Algebraic and Transcendental Elements]]

## Notes

- **Source status:** Artin states this as Exercise 16.5.3; the two proofs above are independent derivations. [S1, Ch. 16, §16.5, Ex. 5.3, printed p. 507, PDF p. 519]
- The first proof uses only that $\mathbb C$ is algebraically closed. More generally, if $k$ is algebraically closed and $L/k$ is any field extension, then every element of $L$ algebraic over $k$ already lies in $k$.
- The alternative proof proves the stronger rational-function statement for an arbitrary field $k$: every element of $k(t)\setminus k$ is transcendental over $k$. Its essential extra step is proving that $a(X)-u b(X)$ is a nonzero polynomial; omitting this is a genuine proof gap.
