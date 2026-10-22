---
title: 'Exercise AG47: Dwork Reciprocity and the Missing Valuation Weights'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §2, Exercise 3, printed p. 332, PDF p. 351
source_refs:
- S4/ch-V/sec-2/ex-3
created: '2026-10-23'
---

# Exercise AG47: Dwork Reciprocity and the Missing Valuation Weights

## Problem Statement

> [!question] Neukirch V.2.3
> (Theorem of Dwork.) Let $L/K$ be a totally ramified abelian extension of $p$-adic number fields. Let $x\in K^*$ and $y\in\widehat L^*$ such that $N_{\widehat L/\widehat K}(y)=x$. Let $z_i\in\widehat L^*$ and choose $\sigma_i\in G(L/K)$ such that
> $$
> y^{\varphi_K-1}=\prod_i z_i^{\sigma_i-1}.
> $$
> Putting $\sigma=\prod_i\sigma_i$, one has $(x,L/K)=\sigma^{-1}$.
>
> **Printed hint.** See chap. IV, §5, exercise 1.

## Hints

> [!hint]- Hint 1
> Keep the valuation of every $z_i$ visible when comparing its Galois increment with reciprocity.

> [!hint]- Hint 2
> The unweighted printed formula fails if any $z_i$ has valuation other than $1$. Separate $z_i$ into a uniformizer power and a unit; use surjectivity of $\varphi_K-1$ on units to remove the unit factors.

## Solution

> [!success]- Independent derivation
> **Source issue.** The printed statement is false without weights. In a nontrivial totally ramified abelian extension take $x=y=z_1=1$ and any nonidentity $\sigma_1$. The displayed hypothesis holds, but its claimed conclusion would say $1=\sigma_1^{-1}$. The valid statement replaces $\sigma$ by
> $$
> \sigma=\prod_i\sigma_i^{v_L(z_i)},
> $$
> where $v_L$ is normalized by $v_L(\pi)=1$. The printed version follows from this correction when every $z_i$ is a uniformizer. A second sign issue occurs in the cited IV.§5 Exercise 1: with $w^{\varphi-1}=\pi^{\tau-1}$ the correct norm class is $Nw=r_{L/K}(\tau)^{-1}$, hence $\operatorname{Artin}(Nw)=\tau^{-1}$. The sign is independently calibrated below.
>
> Set $E=\widehat L$, $F=\widehat K$, $G=G(L/K)$, and choose the lift $\varphi$ fixing $L$ and inducing arithmetic Frobenius on the unramified coefficients. It commutes with $G$. Lemma V(2.1), proved in the source before this exercise, says $a\mapsto a^{\varphi-1}$ is onto $U_E$.
>
> Write $z_i=\pi^{n_i}u_i$. Choose $a_i\in U_E$ with $a_i^{\varphi-1}=u_i$. Dividing $y$ by $\prod_i a_i^{\sigma_i-1}$ leaves its norm unchanged and changes its $\varphi-1$ coboundary to $\pi^B$, where
> $$
> B=\sum_i n_i(\sigma_i-1)\in I_G\subset\mathbb Z[G].
> $$
> The elementary identity $ab-1=(a-1)+(b-1)+(a-1)(b-1)$ gives $B\equiv\sigma-1\pmod{I_G^2}$ for $\sigma=\prod_i\sigma_i^{n_i}$. Every $\pi^{(\rho-1)(\tau-1)}$ is a $\varphi-1$ coboundary of a norm-one unit: $\pi^{\rho-1}$ is a unit, so choose $b\in U_E$ with $b^{\varphi-1}=\pi^{\rho-1}$ and use $b^{\tau-1}$. Decomposing $B-(\sigma-1)$ into such products and dividing out their coboundaries gives $w$ with the same norm as $y$ and
> $$
> w^{\varphi-1}=\pi^{\sigma-1}.
> $$
> Multiplying $w$ by a power of the $\varphi$-fixed $\pi$ makes $w$ a unit and changes $Nw$ only by a norm from $L^*$; this does not change its Artin symbol.
>
> For completeness, the sign in the single-uniformizer formula can be checked by the defining reciprocity construction. Put $\tau=\sigma\varphi$, let $\Sigma$ be its fixed field in $L\widetilde K$, and take a prime element $\pi_\Sigma$. The element $u=\pi_\Sigma/\pi$ is a unit and satisfies $u^{\tau-1}=\pi^{1-\sigma}$. In the $G$-coinvariants of the units, $\tau$ acts as $\varphi$, so $[uw]^{\varphi-1}=1$. The norm comparison for unramified units (IV(5.4), the unit exact sequence used in constructing reciprocity) implies $N(uw)\in N_{L/K}L^*$. On the other hand,
> $$
> Nu=\frac{N_{\Sigma/K}\pi_\Sigma}{N_{L/K}\pi}
> \equiv r_{L/K}(\sigma)\pmod{N_{L/K}L^*}.
> $$
> Thus $Nw\equiv r_{L/K}(\sigma)^{-1}$, as claimed. Applying the inverse reciprocity map and recalling that all earlier modifications had norm one or a norm from $L^*$ proves the corrected Dwork formula
> $$
> (x,L/K)=\left(\prod_i\sigma_i^{v_L(z_i)}\right)^{-1}.
> $$
> Exercise 2 ensures the existence of $y$ and, because $N(y^{\varphi-1})=1$, of the displayed augmentation expression. The calculation also shows that the resulting group element is independent of all choices.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local fields]]
- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois theory]]

## Notes

Original statement: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §2, Exercise 3, printed p. 332, PDF p. 351]. Original page inspected at 200 dpi. The original false statement and printed hint are retained verbatim. The independent derivation proves the valuation-weighted correction. The sign correction to IV.§5 Exercise 1 is visible rather than silently propagated.
