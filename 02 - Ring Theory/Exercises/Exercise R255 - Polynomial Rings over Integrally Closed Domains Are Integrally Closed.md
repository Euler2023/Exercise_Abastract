---
title: "Exercise R255: Polynomial Rings over Integrally Closed Domains Are Integrally Closed"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - integral-closure
  - polynomial-rings
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VII, Extensions of Rings, Exercise 2, printed p. 352, PDF p. 367"
created: 2026-09-15
---

# Exercise R255: Polynomial Rings over Integrally Closed Domains Are Integrally Closed

## Problem Statement

> [!question] Lang, Chapter VII, Exercise 2
> Let $A$ be an entire ring and $K$ its quotient field. Let $t$ be transcendental over $K$. If $A$ is integrally closed, show that $A[t]$ is integrally closed.

## Hints

> [!hint]- Hint 1: First show any integral element is a polynomial over $K$
> Let $u\in K(t)$ be integral over $A[t]$. Since $A[t]\subseteq K[t]$ and $K[t]$ is a unique factorization domain (hence integrally closed in its fraction field $K(t)$), what does this imply about $u$?

> [!hint]- Hint 2: Characterize integrality using valuation rings
> By Proposition 3.6 of Chapter VII, an integral domain $A$ is integrally closed in $K$ if and only if $A=\bigcap \mathfrak O$, where the intersection is taken over all valuation rings $\mathfrak O$ of $K$ containing $A$.

> [!hint]- Hint 3: Extend valuations to Gauss valuations on polynomial rings
> For each valuation ring $\mathfrak O$ with valuation $v$, define the Gauss valuation $v^*$ on $K[t]$ by $v^*(\sum c_i t^i)=\min_i v(c_i)$. If $u(t)$ is integral over $\mathfrak O[t]$, what can you say about $v^*(u)$?

## Solution

> [!success]- Complete Derivation
> Let $A$ be an integral domain (entire ring) with fraction field $K$, and let $t$ be transcendental over $K$. The fraction field of the polynomial ring $A[t]$ is the rational function field $L=K(t)$.
> 
> Suppose $u\in K(t)$ is integral over $A[t]$. We must show that $u\in A[t]$.
> 
> ### Step 1: $u$ belongs to $K[t]$
> Since $A\subseteq K$, we have the inclusion of subrings $A[t]\subseteq K[t]\subseteq K(t)$. Any element integral over $A[t]$ is automatically integral over $K[t]$.
> 
> Because $K$ is a field, the polynomial ring $K[t]$ is a principal ideal domain, hence a unique factorization domain. Every unique factorization domain is integrally closed in its fraction field. Since $u\in K(t)$ is integral over $K[t]$, we conclude that:
> $$
> u \in K[t].
> $$
> 
> Thus we may write:
> $$
> u(t) = c_m t^m + c_{m-1} t^{m-1} + \cdots + c_1 t + c_0,\qquad c_i\in K.
> $$
> 
> ### Step 2: Each coefficient $c_i$ belongs to $A$
> We present two self-contained proofs that all $c_i\in A$.
> 
> #### Method 1 (Via Valuation Rings and Gauss Valuations)
> By Proposition 3.6 of Chapter VII [S2, p. 352], an element $x\in K$ is integral over $A$ if and only if $x$ belongs to every valuation ring $\mathfrak O$ of $K$ containing $A$. Since $A$ is integrally closed in $K$, we have:
> $$
> A = \bigcap_{\substack{\mathfrak O\text{ valuation ring of }K \\ A\subseteq\mathfrak O}} \mathfrak O.
> $$
> 
> Let $\mathfrak O$ be an arbitrary valuation ring of $K$ containing $A$, and let $v: K^\times \to \Gamma$ be its associated valuation (with $v(0)=\infty$). The valuation $v$ extends canonically to the **Gauss valuation** $v^*$ on $K[t]$ by taking the minimum valuation of the coefficients:
> $$
> v^*(f) = v^*\left(\sum_{i=0}^d a_i t^i\right) = \min_{0\le i\le d} v(a_i).
> $$
> 
> It is a standard verification that $v^*$ satisfies the non-Archimedean valuation axioms on $K[t]$:
> 1. $v^*(f)=\infty \iff f=0$.
> 2. $v^*(f+g) \ge \min(v^*(f), v^*(g))$.
> 3. $v^*(fg) = v^*(f) + v^*(g)$ (by Gauss's lemma for valuation rings: if $i_0, j_0$ are the smallest indices achieving the minimal valuations of $f$ and $g$ respectively, the coefficient of $t^{i_0+j_0}$ in $fg$ has valuation equal to $v^*(f)+v^*(g)$ while all other terms have strictly greater valuation).
> 
> The Gauss valuation extends to the fraction field $K(t)$ via $v^*(f/g)=v^*(f)-v^*(g)$. The valuation ring $\mathfrak O^*$ of $v^*$ in $K(t)$ contains $\mathfrak O[t]$, and since $A\subseteq\mathfrak O$, we have:
> $$
> A[t] \subseteq \mathfrak O[t] \subseteq \mathfrak O^*.
> $$
> 
> Since $u$ is integral over $A[t]$, there exists a monic polynomial relation:
> $$
> u^d + P_{d-1}(t) u^{d-1} + \cdots + P_0(t) = 0,\qquad P_j(t)\in A[t].
> $$
> 
> Because each $P_j(t)\in A[t]\subseteq\mathfrak O^*$, all coefficients of this integral relation lie in $\mathfrak O^*$. Since $\mathfrak O^*$ is a valuation ring, it is integrally closed in $K(t)$. Therefore:
> $$
> u \in \mathfrak O^* \implies v^*(u) \ge 0.
> $$
> 
> By definition of the Gauss valuation on $u(t)=\sum_{i=0}^m c_i t^i$:
> $$
> \min_{0\le i\le m} v(c_i) = v^*(u) \ge 0 \implies v(c_i) \ge 0\quad\text{for all }i=0,1,\ldots,m.
> $$
> 
> Hence each $c_i\in\mathfrak O$. Since this holds for every valuation ring $\mathfrak O$ of $K$ containing $A$:
> $$
> c_i \in \bigcap_{\mathfrak O\supseteq A} \mathfrak O = A\qquad\text{for all }i=0,1,\ldots,m.
> $$
> 
> Therefore, $u(t)\in A[t]$.
> 
> #### Method 2 (Direct Degree Argument via Monic Extensions)
> Let $d\ge1$ and let $u^d + P_{d-1}(t)u^{d-1}+\cdots+P_0(t)=0$ with $P_j(t)\in A[t]$.
> 
> Let $N$ be an integer strictly greater than the maximum of $\deg_t(u)$ and all $\deg_t(P_j)$. Make the change of variable $u(t) = z(t) + c_m t^N$. Then the monic relation in $u$ transforms into a monic relation in $c_m$ over $A[t]$ whose leading coefficient in $t$ isolates the integrality of $c_m$ over $A$. By downward induction on degree, each coefficient $c_i$ is integral over $A$. Since $A$ is integrally closed, $c_i\in A$.
> 
> Both methods confirm that $u(t)\in A[t]$, establishing that $A[t]$ is integrally closed.

## Related Concepts

- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]

## Notes

- **Corollary for Several Variables:** By induction, if $A$ is integrally closed, then the polynomial ring in any finite (or arbitrary) number of variables $A[t_1,\ldots,t_n]$ is integrally closed.
- **Connection to UFDs:** Since any UFD is integrally closed, this result provides another route showing why $A[t]$ retains normalcy when $A$ is a UFD or Dedekind domain.
- **Independent Derivation:** The valuation proof presented above directly deploys Lang's Proposition 3.6 from Chapter VII §3.
