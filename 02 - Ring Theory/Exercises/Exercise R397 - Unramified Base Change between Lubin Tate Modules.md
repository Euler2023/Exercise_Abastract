---
title: 'Exercise R397: Unramified Base Change between Lubin Tate Modules'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §4, Exercise 6, printed p. 346, PDF p. 365
source_refs:
- S4/ch-V/sec-4/ex-6
created: '2026-10-23'
---

# Exercise R397: Unramified Base Change between Lubin Tate Modules

## Problem Statement

> [!question] Neukirch V.4.6
> Two Lubin–Tate modules $F_e$ and $F_{\bar e}$ for prime elements $\pi$ and $\bar\pi$ always become isomorphic over $\mathfrak o_{\widehat K}$, where $\widehat K$ is the completion of the maximal unramified extension $\widetilde K\mid K$.
>
> **Hint:** The power series $\theta$ of (2.3) yields an isomorphism $\theta:F_{\bar e}\to F_e$.

## Hints

> [!hint]- Hint 1
> Choose a unit $\varepsilon$ in the completed unramified extension with $\varepsilon^{\varphi-1}=\pi/\bar\pi$, and use (2.3).

> [!hint]- Hint 2
> Compare $\theta(F_{\bar e}(X,Y))$ and $F_e(\theta(X),\theta(Y))$ using the uniqueness statement of the multivariable twisted equation (2.2).

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Let $\varphi$ be Frobenius on $\widehat K$, write $\pi=u\bar\pi$, and use Lemma (2.1) to choose $\varepsilon\in U_{\widehat K}$ with $\varepsilon^{\varphi-1}=u$. Corollary (2.3) gives a unique integral series
> $$
> \theta(X)=\varepsilon X+O(X^2),\qquad e\circ\theta=\theta^\varphi\circ\bar e.
> $$
> Its linear coefficient is a unit, so it has an integral composition inverse. It remains to verify the group and scalar identities, not merely the existence of an invertible series.
>
> Set $H_1=\theta\circ F_{\bar e}$ and $H_2=F_e\circ(\theta,\theta)$. Both have linear part $\varepsilon(X+Y)$. Since $e,\bar e,F_e,F_{\bar e}$ have coefficients in $K$, Frobenius fixes those coefficients. The commutation relations for the formal groups give
> $$
> e\circ H_j=H_j^\varphi\circ(\bar e,\bar e)\qquad(j=1,2).
> $$
> For $H_1$ this follows from $e\theta=\theta^\varphi\bar e$ and $\bar e F_{\bar e}=F_{\bar e}(\bar e,\bar e)$. For $H_2$ it follows from $e F_e=F_e(e,e)$ and the same equation for $\theta$. The multivariable uniqueness in (2.2), with prescribed linear part $\varepsilon(X+Y)$, therefore gives $H_1=H_2$. Thus $\theta$ is a formal-group homomorphism.
>
> For each $a\in\mathfrak o_K$, compare $\theta\circ[a]_{\bar e}$ and $[a]_e\circ\theta$. They have the same linear part $\varepsilon aX$. Commutation of $[a]$ with its respective Lubin–Tate series shows that both satisfy the one-variable twisted equation $e\circ H=H^\varphi\circ\bar e$. Uniqueness in (2.2) gives
> $$
> \theta\circ[a]_{\bar e}=[a]_e\circ\theta.
> $$
> Thus $\theta$ is $\mathfrak o_K$-linear. Its composition inverse satisfies both identities after composing with $\theta^{-1}$, so it is the required formal-module isomorphism over $\mathfrak o_{\widehat K}$.
>
> The Frobenius equation explains why the enlargement of coefficients is needed: if $\varepsilon\in K$, then $\varepsilon^\varphi=\varepsilon$, forcing $u=1$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Formal Groups and Lubin Tate Modules|Formal Groups and Lubin Tate Modules]]

- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[02 - Ring Theory/Concepts/Polynomial Derivations|Polynomial Derivations]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]

## Notes

- **Source status:** The complete problem and printed hint were visually checked at [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. V, §4, Exercise 6, printed p. 346, PDF p. 365]. The twisted uniqueness equation (2.2), its proof and Corollary (2.3) were checked at [printed pp. 329–330, PDF pp. 348–349].
- **Proof scope:** Independent application of the proved twisted-existence and uniqueness results, with both group compatibility and scalar compatibility shown. Lemma (2.1) supplies the Frobenius equation for the unit; it is a source input, not an assumed root in $K$.
