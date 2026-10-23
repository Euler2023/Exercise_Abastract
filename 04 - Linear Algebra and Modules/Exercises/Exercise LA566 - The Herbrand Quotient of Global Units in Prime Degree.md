---
title: 'Exercise LA566: The Herbrand Quotient of Global Units in Prime Degree'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §7, Exercise 4, printed p. 315, PDF p. 334
source_refs:
- S4/ch-IV/sec-7/ex-4
created: '2026-10-23'
---

# Exercise LA566: The Herbrand Quotient of Global Units in Prime Degree

## Problem Statement

> [!question] Neukirch IV.7.4
> Let $L|K$ be a cyclic extension of prime degree. Using exercise 3, compute the Herbrand quotient of the group of units $\mathcal O_L^*$ of $L$, viewed as a $G(L|K)$-module.

## Hints

> [!hint]- Hint 1
> For a finitely generated abelian group $B$, one has $q_{0,p}(B)=p^{\operatorname{rank}B}$. The kernel and cokernel contributions from its finite torsion subgroup cancel.

> [!hint]- Hint 2
> Use Dirichlet's unit theorem: $\operatorname{rank}\mathcal O_F^\times=r_F+s_F-1$. The fixed units are $\mathcal O_K^\times$.

> [!hint]- Hint 3
> In odd prime degree, there is no real-to-complex ramification. In degree $2$, let $t$ be the number of real places that become complex.

## Solution

> [!success]- Independent derivation
> Interpret $\mathcal O_L$ as rings of integers of number fields. Set $p=[L:K]$ and $U_F=\mathcal O_F^\times$, and let $m_F=r_F+s_F$ denote the numbers of infinite places. Dirichlet's unit theorem gives $U_F\simeq\mu(F)\times\mathbb Z^{m_F-1}$. The book's unit lattice statement is in [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, (1.11), printed p. 191, PDF p. 210].
>
> On a finite abelian group $T$, multiplication by $p$ has kernel and cokernel of the same order, since $\#T=\#T[p]\,\#pT$. Thus
> $$
> q_{0,p}(U_F)=p^{m_F-1}.
> $$
> Also, $U_L^G=U_K$: a fixed element lies in $K$, and integrality of it and its inverse is equivalent to being a unit in $\mathcal O_K$. Exercise 3 therefore gives
> $$
> h(G,U_L)^{p-1}=p^{p(m_K-1)-(m_L-1)}.
> $$
>
> If $p$ is odd, a real place becoming complex would have local decomposition group of order $2$, which cannot divide the odd number $p$. Thus each infinite place gives $p$ places of the same type, and $m_L=pm_K$. Substitution gives $h(G,U_L)^{p-1}=p^{-(p-1)}$. Since the Herbrand quotient is a positive rational number,
> $$
> h(G,U_L)=1/p.
> $$
> If $p=2$, let $t$ be the number of real places of $K$ that become complex in $L$. Each such place gives just one complex place, while every other infinite place gives two. Hence $m_L=2m_K-t$, giving
> $$
> h(G,U_L)=2^{t-1}.
> $$
> The two cases can be written uniformly as
> $$
> h(G,U_L)=\frac{\prod_{v\mid\infty}[L_w:K_v]}{[L:K]},
> $$
> where for each $v$ we choose any $w\mid v$. Only the real-to-complex local degrees contribute a factor of $2$.
>
> As checks, $\mathbb Q(i)/\mathbb Q$ has $t=1$ and a finite unit group, so its Herbrand quotient is $1$. For a real quadratic extension, $t=0$ and the result is $1/2$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Dirichlets Unit Theorem and Logarithmic Unit Lattices|Dirichlet Unit Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Herbrand Quotients]]
- [[03 - Field Theory/Concepts/Real Places and Archimedean Valuation Rings|Real and Complex Places]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §7, Exercise 4, printed p. 315, PDF p. 334]. Independent calculation from the preceding formula and the unit ranks.
- **Scope:** The groups here are global unit groups of number fields. If $L/K$ denotes nonarchimedean local fields, the unit groups are not the finitely generated discrete groups used here, and Dirichlet's rank formula does not apply. The local-unit Herbrand quotient requires a separate calculation and is usually $1$.
