---
title: "Exercise R267: Homogeneous Decomposition in Graded Integral Closures"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - commutative-algebra
  - graded-rings
  - integrally-closed
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IX, Exercises, Exercise 6, printed p. 410, PDF p. 425"
created: 2026-09-15
---

# Exercise R267: Homogeneous Decomposition in Graded Integral Closures

## Problem Statement

> [!question]
> **Shared setup for Exercises 5–9.** Let $R=k[x]=k[X]/\mathfrak{p}$, where $\mathfrak{p}$ is a homogeneous prime ideal. Thus $(x)$ is a homogeneous generic point of a $k$-variety. Let $K=k(x)=\operatorname{Frac}(R)$ and let $I$ be the integral closure of $R$ in $K$. Assume, as in the source, that $K/k$ is a regular extension.
>
> Define an element $f \in k(x)$ to be **homogeneous** if $f(tx) = t^d f(x)$ for $t$ transcendental over $k(x)$ and some integer $d$. Let $f \in I$. Show that $f$ can be written in the form $f = \sum f_i$ where each $f_i$ is homogeneous of degree $i \geqq 0$, and where also $f_i \in I$. (Some $f_i$ may be 0, of course.)

## Hints

> [!hint]- Hint 1
> Apply $x\mapsto tx$ to an integral equation for $f$. This makes $f(tx)\in K(t)$ integral over $R[t]$, and hence over $K[t]$. Use the integral closedness of $K[t]$ to prove that $f(tx)$ is a polynomial in $t$.

> [!hint]- Hint 2
> Write $f(tx)=\sum_i a_i(x)t^i$ and introduce a second independent indeterminate $s$. Compare the coefficients of $t$ in $f(t(sx))=f((st)x)$ to prove $a_i(sx)=s^i a_i(x)$. Then apply Exercise 4(a) to the polynomial $f(tx)$.

## Solution

> [!success]- Solution
> Let $R=\bigoplus_{d\ge0}R_d$, $K=\operatorname{Frac}(R)$, and $f\in I$. The zero element has the required decomposition, so we may assume $f\ne0$.
>
> ### Step 1: Obtain a polynomial in the scaling parameter
>
> Since $\mathfrak{p}$ is homogeneous, scaling the coordinates defines a homomorphism
> $$
> \sigma_t:R\longrightarrow R[t],\qquad h=\sum_d h_d\longmapsto\sum_d h_dt^d.
> $$
> Evaluation at $t=1$ recovers $h$, so $\sigma_t$ is injective. It therefore extends to a field embedding $K\to K(t)$, written $f(x)\mapsto f(tx)$.
>
> An integral equation for $f$ has the form
> $$
> f^N+g_{N-1}f^{N-1}+\cdots+g_0=0,\qquad g_j\in R.
> $$
> Applying $\sigma_t$ gives
> $$
> f(tx)^N+g_{N-1}(tx)f(tx)^{N-1}+\cdots+g_0(tx)=0,
> $$
> with every $g_j(tx)\in R[t]$. Thus $f(tx)$ is integral over $R[t]$, and hence over $K[t]$. The polynomial ring $K[t]$ is integrally closed in $K(t)$, as shown in Exercise 4(b). Consequently,
> $$
> f(tx)=\sum_{i=0}^D a_i(x)t^i\in K[t].
> $$
> This step proves both finiteness of the expansion and nonnegativity of its exponents.
>
> ### Step 2: Prove that each coefficient is homogeneous
>
> Let $s,t$ be algebraically independent over $K$. Apply the coordinate scaling $x\mapsto sx$ to the preceding identity, leaving $t$ fixed. Comparing with substitution $t\mapsto st$ gives
> $$
> \sum_{i=0}^D a_i(sx)t^i=f(t(sx))=f((st)x)
> =\sum_{i=0}^D a_i(x)s^it^i.
> $$
> Equality of coefficients in $K(s)[t]$ implies
> $$
> a_i(sx)=s^ia_i(x).
> $$
> Hence each nonzero $a_i$ is homogeneous of degree $i$ in the source's sense.
>
> ### Step 3: Prove that the coefficients lie in the integral closure
>
> The polynomial $f(tx)\in K[t]$ is integral over $R[t]$. Exercise 4(a) therefore implies that every coefficient $a_i(x)$ is integral over $R$. As $a_i(x)\in K$, this means $a_i\in I$.
>
> Finally, specialize $t=1$. For a fraction $f=P/Q$ with $Q\ne0$, the denominator $Q(tx)$ specializes to $Q(x)\ne0$, so this specialization is valid. We obtain
> $$
> f=\sum_{i=0}^D a_i.
> $$
> Set $f_i=a_i$. This gives the required decomposition. It is unique: a finite relation $\sum_i h_i=0$ among homogeneous elements of distinct degrees becomes $\sum_i h_it^i=0$ after scaling, forcing every $h_i=0$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[02 - Ring Theory/Concepts/Filtered and Graded Algebras|Filtered and Graded Algebras]]
- [[02 - Ring Theory/Exercises/Exercise R265 - Normality of Polynomial Rings over Integrally Closed Domains|Exercise R265 (Normality of Polynomial Rings)]]

## Notes

- **Independent derivation and source input:** The shared setup and Exercise 6 are checked at [S2, Ch. IX, printed p. 410, PDF p. 425]. The solution is independently derived from Exercise 4, whose proof is supplied in [[02 - Ring Theory/Exercises/Exercise R265 - Normality of Polynomial Rings over Integrally Closed Domains|Exercise R265]]. The regular-extension assumption is retained from the source but is not needed for this particular proof.
- **Method boundary:** The full fraction field $K$ need not be a direct sum of homogeneous pieces: $1/(1+x)\in k(x)$ is not a finite Laurent polynomial. Here the polynomial expansion of $f(tx)$ follows from integrality, before any homogeneous components of $f$ are introduced.
- **Grading of the integral closure:** A consequence of this exercise is that the integral closure $I$ of a graded domain $R$ in its fraction field is itself a graded ring:
  $$
  I = \bigoplus_{m \ge 0} I_m, \qquad I_m = I \cap k(x)_m.
  $$
  Here $k(x)_m$ means the homogeneous elements of degree $m$, together with zero; this notation does not assert a direct-sum decomposition of all of $k(x)$.
