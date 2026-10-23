---
title: 'Exercise LA565: A Prime-Order Formula for the Herbrand Quotient'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §7, Exercise 3, printed p. 315, PDF p. 334
source_refs:
- S4/ch-IV/sec-7/ex-3
created: '2026-10-23'
---

# Exercise LA565: A Prime-Order Formula for the Herbrand Quotient

## Problem Statement

> [!question] Neukirch IV.7.3
> Let $G$ be a cyclic group of prime order $p$, and let $A$ be a $G$-module such that $q_{0,p}(A)$ is defined. Show that
> $$
> h(G,A)^{p-1}=q_{0,p}(A^G)^p/q_{0,p}(A).
> $$
> **Printed hint:** Use the exact sequence
> $$
> 0\longrightarrow A^G\longrightarrow A\xrightarrow{\sigma-1}A^{\sigma-1}\longrightarrow0.
> $$
> Let $N=1+\sigma+\cdots+\sigma^{p-1}$ in the group ring $\mathbb Z[G]$. Show that the ring $\mathbb Z[G]/\mathbb ZN$ is isomorphic to $\mathbb Z[\zeta]$, for $\zeta$ a primitive $p$-th root of unity, and that in this ring one has
> $$
> p=(\sigma-1)^{p-1}\varepsilon,
> $$
> where $\varepsilon$ is a unit in $\mathbb Z[G]/\mathbb ZN$.

## Hints

> [!hint]- Hint 1
> Set $B=A^G$ and $C=(\sigma-1)A$. The action on $B$ is trivial, so $h(G,B)=q_{0,p}(B)$. On $C$, we have $N=0$, so $h(G,C)=q_{0,\sigma-1}(C)^{-1}$.

> [!hint]- Hint 2
> Use the cyclotomic ring identity $p=(\sigma-1)^{p-1}\varepsilon$ on $C$ to express $q_{0,p}(C)$ as $q_{0,\sigma-1}(C)^{p-1}$.

> [!hint]- Hint 3
> Do not skip finiteness: use finiteness of $A[p]$ to embed the possible extra kernel from $B/pB$ into the finite group $H^1(G,A[p])$.

## Solution

> [!success]- Independent derivation
> Use additive notation and write $T=\sigma-1$, $B=A^G$, and $C=TA$, giving the short exact sequence in the statement. Both $A[p]$ and $A/pA$ are finite.
>
> **1. Showing that $q_{0,p}(B)$ is defined.** The group $B[p]\subseteq A[p]$ is finite. The map $B/pB\to A/pA$ has kernel $(B\cap pA)/pB$. For $a=pb\in B$, the expression $b^g-b$ takes values in $A[p]$ and is a cocycle. Changing $b$ changes it by a coboundary. If its class is zero, adjust $b$ to make it fixed; then $a\in pB$. Thus this kernel embeds into the finite group $H^1(G,A[p])$, which is finite because there are only finitely many functions $G\to A[p]$. Hence $B/pB$ is finite. Applying the two-periodic multiplicativity from Exercise 1 to the short exact sequence above, with differentials $0,p$, shows that $q_{0,p}(C)$ is also defined and that
> $$
> q_{0,p}(A)=q_{0,p}(B)q_{0,p}(C).
> $$
>
> **2. The cyclotomic ring identity.** We have $\mathbb Z[G]=\mathbb Z[X]/(X^p-1)$. Quotienting further by $N=\Phi_p(X)$ gives $\mathbb Z[X]/\Phi_p(X)\simeq\mathbb Z[\zeta]$, with $\sigma\mapsto\zeta$. Also,
> $$
> p=\Phi_p(1)=\prod_{j=1}^{p-1}(1-\zeta^j).
> $$
> Each $(1-\zeta^j)/(1-\zeta)$ is an algebraic integer of norm $p/p=1$, hence a unit: its inverse can be expressed as a polynomial with integer coefficients using the constant term $\pm1$ of its monic minimal polynomial. Taking the product therefore gives $p=(\zeta-1)^{p-1}\varepsilon$ with $\varepsilon$ a unit.
>
> **3. Calculation on $C$.** Since $NT=0$ and $NC=0$, the group $C$ is a module over the cyclotomic ring above, and $p=T^{p-1}\varepsilon$. We have $\ker T\subseteq C[p]$ and $pC\subseteq TC$, so both $\ker T$ and $C/TC$ are finite. The composition formula from Exercise 2 gives
> $$
> q_{0,p}(C)=q_{0,T}(C)^{p-1},
> $$
> because the unit $\varepsilon$ has trivial kernel and cokernel. Since $NC=0$, we also have
> $$
> h(G,C)=\frac{\#C^G}{\#(C/TC)}=q_{0,T}(C)^{-1}.
> $$
> The action on $B$ is trivial and $N=p$, so $h(G,B)=q_{0,p}(B)$. Finiteness of these two terms also makes $h(G,A)$ defined by the Herbrand hexagon. Multiplicativity gives
> $$
> \begin{aligned}
> h(G,A)^{p-1}
> &=q_{0,p}(B)^{p-1}/q_{0,p}(C)\\
> &=q_{0,p}(B)^p/q_{0,p}(A).
> \end{aligned}
> $$
> This is the formula in the statement.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Herbrand Quotients]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Integers]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §7, Exercise 3, printed p. 315, PDF p. 334]. Independent completion of the ring isomorphism and unit identity in the printed hint, including finiteness of every quotient used.
- **Input:** Multiplicativity of the Herbrand quotient on short exact sequences is proved in the main text as (7.3), printed p. 312 / PDF p. 331. The preceding two exercises also give the corresponding two-periodic formulations.
