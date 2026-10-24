---
title: 'Exercise AG48: Cyclotomic Reciprocity from the Corrected Dwork Formula'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §2, Exercise 4, printed p. 332, PDF p. 351
source_refs:
- S4/ch-V/sec-2/ex-4
created: '2026-10-23'
---

# Exercise AG48: Cyclotomic Reciprocity from the Corrected Dwork Formula

## Problem Statement

> [!question] Neukirch V.2.4
> Deduce from exercises 2 and 3 the formula $(u,\mathbb Q_p(\zeta)\mid\mathbb Q_p)\zeta=\zeta^{u^{-1}}$, for some $p^n$-th root of unity $\zeta$.

## Hints

> [!hint]- Hint 1
> Use $\zeta-1$ as a uniformizer and compare its conjugates under Frobenius and the chosen $\sigma$.

> [!hint]- Hint 2
> Use the power series $\theta$ of V(2.3) to exhibit an element of norm $u$ whose Frobenius coboundary has exactly one uniformizer factor; then apply the corrected Exercise 3.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> It suffices to treat a primitive $p^n$-th root, since the general case follows by restriction. Write $K=\mathbb Q_p$, $L=K(\zeta)$, $\lambda=\zeta-1$, and $d=[L:K]=p^{n-1}(p-1)$. First let $u$ be a positive integer prime to $p$, and define $\sigma\in G(L/K)$ by $\sigma(\zeta)=\zeta^{u^{-1}}$.
>
> We use the power-series existence statement V(2.3), proved independently of the cyclotomic reciprocity theorem in the source [printed p.330, PDF p.349]. With
> $$
> e(X)=upX+X^p,\qquad \bar e(X)=(1+X)^p-1,\qquad [u](X)=(1+X)^u-1,
> $$
> it gives $\theta(X)=\varepsilon X+\cdots\in\mathcal O_{\widehat K}[[X]]$, with $\varepsilon$ a unit, satisfying
> $$
> e\circ\theta=\theta^\varphi\circ\bar e,
> \qquad \theta^\varphi=\theta\circ[u].
> $$
> Here $\varphi$ acts as arithmetic Frobenius on the unramified coefficients and fixes $L$. Put $t=\theta(\lambda)$. Since $[u](\lambda^\sigma)=\lambda$, one has $t^{\sigma\varphi}=t$, hence $t^\varphi=t^{\sigma^{-1}}$. Its valuation is $1$ because the linear coefficient of $\theta$ is a unit.
>
> The element $t$ is a root of
> $$
> P(X)=e^{n-1}(X)^{p-1}+up,
> $$
> where superscripts on $e$ denote iteration. Indeed $e^j(t)=\theta^{\varphi^j}(\zeta^{p^j}-1)$ vanishes for $j=n$ and not for $j=n-1$, and $e^n(X)=e^{n-1}(X)P(X)$. The polynomial $P$ is Eisenstein of degree $d$, because $e(X)\equiv X^p\pmod p$, and its constant term is $up$. Consequently the conjugates of $t$ over $K$ are all the $G$-conjugates used in the norm $E=\widehat L$ over $F=\widehat K$, and
> $$
> N_{E/F}t=(-1)^d up,
> \qquad N_{L/K}\lambda=(-1)^d p.
> $$
> One can also see the equality of the two conjugate sets by noting that $K(t)$ has degree $d$ and is fixed by $\sigma\varphi$, so it is linearly disjoint from the maximal unramified field and generates $E$ after scalar extension.
>
> Thus $y=t/\lambda$ has $N_{E/F}y=u$, and
> $$
> y^{\varphi-1}=t^{\sigma^{-1}-1}.
> $$
> This is the Dwork expression with the single element $z_1=t$, of normalized valuation $1$, and $\sigma_1=\sigma^{-1}$. The corrected Exercise 3 gives $(u,L/K)=(\sigma^{-1})^{-1}=\sigma$, proving the required action on $\zeta$. Exercise 2 provides the general norm/coboundary framework; here the power series constructs the required norm lift explicitly.
>
> Positive integers prime to $p$ are dense in $\mathbb Z_p^*$. Both the Artin map to the finite group $G(L/K)$ and $u\mapsto u^{-1}\bmod p^n$ are continuous, so the identity extends to every $u\in\mathbb Z_p^*$. This includes $p=2$; only the root order and the corresponding finite cyclotomic group change.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local fields]]
- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois theory]]

## Notes

Original statement: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §2, Exercise 4, printed p. 332, PDF p. 351]. Original page inspected at 200 dpi. Independent derivation using Exercises 2 and the corrected 3, plus the earlier power-series existence result V(2.3), not the target reciprocity theorem V(2.4) or later Lubin–Tate reciprocity. The supporting series and norm computation were checked against printed pp.330–332 / PDF pp.349–351.
