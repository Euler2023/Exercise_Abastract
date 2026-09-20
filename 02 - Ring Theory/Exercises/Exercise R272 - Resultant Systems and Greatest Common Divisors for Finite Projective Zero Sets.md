---
title: "Exercise R272: Resultant Systems and Greatest Common Divisors for Finite Projective Zero Sets"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - elimination-theory
  - resultant-systems
  - projective-geometry
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IX, Exercises, Exercise 11, printed p. 411, PDF p. 426"
created: 2026-09-15
---

# Exercise R272: Resultant Systems and Greatest Common Divisors for Finite Projective Zero Sets

## Problem Statement

> [!question]
> Let $\mathfrak{a} = (f_1, \ldots, f_r)$ be a homogeneous ideal in $k[X_1, \ldots, X_n]$ (with $k$ algebraically closed). Assume that the only zeros of $\mathfrak{a}$ consist of a finite number of points $(x^{(1)}), \ldots, (x^{(d)})$ in projective space $\mathbf{P}^{n-1}$, so the coordinates of each $x^{(j)}$ can be taken in $k$. Let $u_1, \ldots, u_n$ be independent variables and let
> $$
> L_u(X) = u_1 X_1 + \cdots + u_n X_n.
> $$
> Let $R_1(u), \ldots, R_s(u) \in k[u]$ be a resultant system for $f_1, \ldots, f_r, L_u$.
> 
> **(a)** Show that the common non-trivial zeros of the system $R_i(u)$ ($i = 1, \ldots, s$) in $k$ are the zeros of the polynomial
> $$
> \prod_j L_u(x^{(j)}) \in k[u].
> $$
> 
> **(b)** Let $D(u)$ be the greatest common divisor of $R_1(u), \ldots, R_s(u)$ in $k[u]$. Show that there exist integers $m_j \geqq 1$ such that (up to a factor in $k$)
> $$
> D(u) = \prod_{j=1}^d L_u(x^{(j)})^{m_j}.
> $$
> 
> *[See van der Waerden, Moderne Algebra, Second Edition, Volume II, §79.]*

## Hints

> [!hint]- Hint 1
> For part (a), recall what a resultant system means: a point $u^0 \in k^n \setminus \{0\}$ satisfies $R_1(u^0) = \cdots = R_s(u^0) = 0$ if and only if the system of homogeneous equations
> $$
> f_1(X) = 0, \ldots, f_r(X) = 0, \quad L_{u^0}(X) = 0
> $$
> has a non-trivial solution $[X] \in \mathbf{P}^{n-1}(k)$.
> 
> What are the common zeros of $f_1, \ldots, f_r$?

> [!hint]- Hint 2
> For part (b), consider $k[u_1, \ldots, u_n]$. Each linear form $L_u(x^{(j)}) = \sum_{i=1}^n x_i^{(j)} u_i$ is an irreducible polynomial in $k[u]$.
> 
> Since the zero locus of the ideal $J = (R_1(u), \ldots, R_s(u))$ in $k^n$ is the union of the hyperplanes $L_u(x^{(j)}) = 0$, what are the minimal prime ideals containing $J$?
> Apply Hilbert's Nullstellensatz and the property of GCD in the UFD $k[u]$.

## Solution

> [!success]- Solution
> Let $k$ be algebraically closed, and write the distinct projective zeros of $\mathfrak a$ as $[x^{(1)}],\ldots,[x^{(d)}]$, choosing nonzero representatives. Put
> $$
> L_j(u)=L_u(x^{(j)}),\qquad
> P(u)=\prod_{j=1}^d L_j(u),\qquad
> J=(R_1,\ldots,R_s)\subseteq k[u].
> $$
> The defining property of a resultant system says that, for every $u^0\in k^n$, all $R_i(u^0)$ vanish if and only if $f_1,\ldots,f_r,L_{u^0}$ have a common projective zero. This includes $u^0=0$. [S2, Ch. IX, Theorem 4.1 and the following definition, printed p. 402, PDF p. 417]
>
> **(a) The zero set.** A common projective zero of $f_1,\ldots,f_r$ must be one of the $[x^{(j)}]$. Adding $L_{u^0}=0$ therefore gives
> $$
> R_1(u^0)=\cdots=R_s(u^0)=0
> \iff L_j(u^0)=0\text{ for some }j
> \iff P(u^0)=0.
> $$
> Thus $V(J)=V(P)$ in the full affine $u$-space; restricting both sides to $u\ne0$ gives the assertion about non-trivial zeros. If $d=0$, the product is $1$ and both zero sets are empty.
>
> **(b) The gcd.** First assume $d\ge1$. Each $L_j$ is a nonzero linear polynomial, hence irreducible. Distinct projective points give nonassociate $L_j$, so their hyperplanes $H_j=V(L_j)$ are distinct. The strong Hilbert Nullstellensatz and unique factorization give
> $$
> \sqrt J=I(V(J))
> =\bigcap_{j=1}^d(L_j)
> =\left(\prod_{j=1}^dL_j\right).
> $$
> The last equality holds because a polynomial divisible by each of the distinct prime elements $L_j$ is divisible by their product.
>
> Since $k$ is infinite and $P\ne0$, $V(P)\ne k^n$; therefore not all $R_i$ are zero, and their gcd $D$ is a nonzero polynomial. As $J\subseteq(L_j)$, every $L_j$ divides each $R_i$, hence divides $D$.
>
> Conversely, if an irreducible $Q$ divides $D$, then $J\subseteq(Q)$. Taking radicals gives
> $$
> \left(\prod_jL_j\right)=\sqrt J\subseteq(Q),
> $$
> so $Q$ divides some $L_j$ and is associate to that $L_j$. Equivalently, the geometric inclusion has direction $V(Q)\subseteq V(J)$, and irreducibility places $V(Q)$ inside one of the $H_j$.
>
> Unique factorization now yields
> $$
> D=c\prod_{j=1}^dL_j^{m_j},
> \qquad c\in k^\times,\quad m_j\ge1.
> $$
> If $d=0$, then $V(J)=\varnothing$, so the Nullstellensatz gives $J=k[u]$ and $D$ is a unit. The same formula holds with an empty product.

## Related Concepts

- [[02 - Ring Theory/Concepts/Multivariate Resultants and Resultant Systems|Multivariate Resultants and Resultant Systems]]
- [[02 - Ring Theory/Concepts/Hilbert Nullstellensatz|Hilbert Nullstellensatz]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[08 - Arithmetic Geometry/Concepts/Affine and Projective Varieties|Affine and Projective Varieties]]

## Notes

- **Independent derivation and inputs:** Part (a) uses the source's definition of a resultant system. Part (b) uses the strong Hilbert Nullstellensatz over an algebraically closed field and unique factorization in $k[u]$; these prerequisites are linked above.
- **Dependence on the system:** The integers $m_j$ need not be intrinsic intersection or Hilbert–Samuel multiplicities. Replacing every $R_i$ by $R_i^2$ preserves the defining common-zero property and doubles every gcd exponent.
- **Example:** The ideal $(X)\subset k[X,Y]$ defines the reduced projective point $[0:1]$, of length $1$. For $X$ and $L_u=u_1X+u_2Y$, both $\{u_2\}$ and $\{u_2^2\}$ are resultant systems, with gcd exponents $1$ and $2$. A geometric interpretation of exponents requires an additional specified construction and a multiplicity theorem.
- **Source status:** Lang's exercise cites van der Waerden, *Moderne Algebra*, Vol. II, §79. That reference is retained as printed; its contents have not been independently checked here.
