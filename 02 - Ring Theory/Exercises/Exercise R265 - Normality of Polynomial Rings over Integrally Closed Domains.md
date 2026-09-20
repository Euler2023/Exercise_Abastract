---
title: "Exercise R265: Normality of Polynomial Rings over Integrally Closed Domains"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - commutative-algebra
  - polynomial-rings
  - integrally-closed
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IX, Exercises, Exercise 4, printed p. 410, PDF p. 425"
created: 2026-09-15
---

# Exercise R265: Normality of Polynomial Rings over Integrally Closed Domains

## Problem Statement

> [!question]
> Let $R$ be an entire ring with quotient field $K$. Let $t$ be transcendental over $K$. Let $f(t) = \sum a_i t^i \in K[t]$. Prove:
> 
> **(a)** If $f(t)$ is integral over $R[t]$, then all $a_i$ are integral over $R$.
> 
> **(b)** If $R$ is integrally closed, then $R[t]$ is integrally closed.

## Hints

> [!hint]- Hint 1
> For part (a), recall from Chapter VII that the integral closure $\bar{R}$ of $R$ in $K$ is the intersection of all valuation rings $V$ of $K$ containing $R$:
> $$
> \bar{R} = \bigcap_{R \subseteq V \subseteq K} V.
> $$
> For a polynomial $f=\sum_i a_it^i$, use the Gauss value $w(f)=\min_i v(a_i)$ associated to the valuation $v$ of $V$. If $f(t)$ is integral over $V[t]$, what can be deduced about $w(f)$?

> [!hint]- Hint 2
> For part (a), suppose that the Gauss value of $f$ is negative. In a monic equation for $f$ with coefficients in $V[t]$, compare the value of the leading power of $f$ with those of all the other terms.
>
> For part (b), an element of $\operatorname{Frac}(R[t]) = K(t)$ that is integral over $R[t]$ is also integral over $K[t]$. Since $K[t]$ is a PID (hence integrally closed), this element must already lie in $K[t]$. Then apply part (a).

## Solution

> [!success]- Solution
> Let $R$ be an entire ring (integral domain) with quotient field $K$, and let $t$ be an indeterminate transcendental over $K$.
>
> ### Part (a): $f(t)$ integral over $R[t] \implies$ all $a_i$ integral over $R$
>
> Let $f(t) = \sum_{i=0}^d a_i t^i \in K[t]$ be integral over $R[t]$.
> Let $\bar{R}$ denote the integral closure of $R$ in $K$. We must show that each coefficient $a_i \in \bar{R}$.
>
> By Chapter VII, §3, Proposition 3.6 [S2, printed p. 351, PDF p. 366], the integral closure $\bar{R}$ of an integral domain $R$ in its quotient field $K$ is the intersection of all valuation rings of $K$ containing $R$:
> $$
> \bar{R} = \bigcap_{\substack{V \text{ valuation ring of } K \\ R \subseteq V \subseteq K}} V.
> $$
> Thus it suffices to prove that for every valuation ring $V$ of $K$ containing $R$, each $a_i$ belongs to $V$.
>
> The case $f=0$ is immediate, so assume $f\ne0$. Let $V$ be an arbitrary valuation ring of $K$ containing $R$, with associated valuation $v:K^\times\to\Gamma$, where $\Gamma$ is a totally ordered abelian group; set $v(0)=\infty$. One can take $\Gamma=K^\times/V^\times$, ordered so that $v(a)\ge v(b)$ means $a/b\in V$.
> Since $R \subseteq V$, the polynomial ring $R[t]$ is contained in $V[t]$.
> Since $f(t)$ is integral over $R[t]$, it is also integral over $V[t]$.
>
> For a nonzero polynomial $g(t)=\sum_j c_jt^j\in K[t]$, define its Gauss value by
> $$
> w(g)=\min_j v(c_j),\qquad w(0)=\infty.
> $$
> The coefficient inequality gives $w(g+h)\ge\min(w(g),w(h))$, and $g\in V[t]$ exactly when $w(g)\ge0$. We also verify multiplicativity. For nonzero $g,h$, choose coefficients $c,d$ attaining their respective minimum values. Then $g/c,h/d\in V[t]$, and each has a coefficient which is a unit of $V$. Their reductions modulo the maximal ideal of $V$ are nonzero polynomials over the residue field, so their product is nonzero. Thus $(g/c)(h/d)$ has Gauss value zero, and
> $$
> w(gh)=w(g)+w(h).
> $$
> Now take a monic integral equation
> $$
> f^N+b_{N-1}(t)f^{N-1}+\cdots+b_0(t)=0,\qquad b_j(t)\in V[t].
> $$
> If $w(f)<0$, then for every $j<N$,
> $$
> w(b_jf^j)\ge j\,w(f)>N\,w(f)=w(f^N).
> $$
> The sum of the lower-power terms has value strictly greater than $w(f^N)$ and therefore cannot equal $-f^N$. This contradiction proves $w(f)\ge0$.
> By definition of Gauss's valuation,
> $$
> w(f) = \min_{0 \le i \le d} v(a_i) \ge 0.
> $$
> Consequently, $v(a_i) \ge 0$ for each $i \in \{0, \ldots, d\}$, which means that
> $$
> a_i \in V \quad \text{for all } i = 0, \ldots, d.
> $$
> Since this holds for every valuation ring $V$ of $K$ containing $R$, we conclude:
> $$
> a_i \in \bigcap_{R \subseteq V \subseteq K} V = \bar{R} \quad \text{for all } i = 0, \ldots, d.
> $$
> That is, each coefficient $a_i$ is integral over $R$.
>
> ### Part (b): $R$ integrally closed $\implies R[t]$ integrally closed
>
> Assume $R$ is integrally closed in $K$.
> The quotient field of $R[t]$ is $K(t) = \operatorname{Frac}(R[t])$.
> Let $u \in K(t)$ be integral over $R[t]$. We must show that $u \in R[t]$.
>
> 1. **Reduction to $K[t]$:**
>    Since $R[t] \subseteq K[t]$, the element $u$ is also integral over $K[t]$.
>    The ring $K[t]$ is a principal ideal domain (PID), because $K$ is a field.
>    To see directly that $K[t]$ is integrally closed, write an integral element as $P/Q$ with coprime $P,Q\in K[t]$. Multiplying a monic equation of degree $N$ by $Q^N$ shows that $Q$ divides $P^N$. Coprimality forces $Q$ to be a unit, so $P/Q\in K[t]$.
>    Since $u \in K(t)$ is integral over $K[t]$, it follows that
>    $$
>    u \in K[t].
>    $$
>
> 2. **Application of Part (a):**
>    Since $u \in K[t]$, we can write $u = \sum_{i=0}^m a_i t^i$ with $a_i \in K$.
>    By assumption, $u$ is integral over $R[t]$.
>    Applying part (a) to $u \in K[t]$, each coefficient $a_i$ must be integral over $R$.
>    Since $R$ is integrally closed in $K$, we deduce that
>    $$
>    a_i \in R \quad \text{for each } i = 0, \ldots, m.
>    $$
>    Consequently,
>    $$
>    u = \sum_{i=0}^m a_i t^i \in R[t].
>    $$
>
> Thus $R[t]$ is integrally closed in its quotient field $K(t)$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]

## Notes

- **Independent derivation and source input:** The intersection-of-valuation-rings criterion is Lang VII, §3, Proposition 3.6 [S2, printed p. 351, PDF p. 366]. The Gauss multiplicativity argument, the monic-equation comparison, and the proof that $K[t]$ is integrally closed are supplied independently here. The exercise statement is checked at [S2, Ch. IX, Exercise 4, printed p. 410, PDF p. 425].
- **Inductive corollary:** By mathematical induction on the number of variables, if $R$ is integrally closed, then the polynomial ring in any finite number of variables $R[t_1, \ldots, t_n]$ is also integrally closed.
