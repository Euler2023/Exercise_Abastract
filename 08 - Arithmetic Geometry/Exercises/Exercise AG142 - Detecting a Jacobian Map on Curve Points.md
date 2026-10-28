---
title: "Exercise AG142: Detecting a Jacobian Map on Curve Points"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.8, Exercise 8.8.1, printed p. 368, PDF p. 381"
source_refs:
  - "S7/ch-8/sec-8/ex-1"
created: 2026-10-28
---

# Exercise AG142: Detecting a Jacobian Map on Curve Points

## Problem Statement

> [!question] Original Exercise 8.8.1
> Let $\beta_{\mathbb C}=\alpha_*\circ(T_p-a_p(E)):\operatorname{Pic}^0(X_0(N)_{\mathbb C})\to\operatorname{Pic}^0(E_{\mathbb C})$ be the bottom composite of (8.40). Augment it to a map of curves
> $$
> \gamma_{\mathbb C}:X_0(N)_{\mathbb C}\longrightarrow\operatorname{Pic}^0(X_0(N)_{\mathbb C})\xrightarrow{\beta_{\mathbb C}}\operatorname{Pic}^0(E_{\mathbb C})\longrightarrow E_{\mathbb C},
> $$
> where the first map sends $P$ to $[(P)-(P_0)]$ for a base point $P_0$, and the last sends a degree-zero divisor class to its elliptic group sum. The composite is holomorphic and therefore an algebraic curve morphism.
>
> (a) Show $\gamma_{\mathbb C}=0$ implies $\beta_{\mathbb C}=0$. (A hint is at the end of the book.)
>
> (b) Assume $P_0$ has algebraic coordinates. Show $\gamma_{\mathbb C}$ is defined over $\overline{\mathbb Q}$ by computing, for every $\sigma\in\operatorname{Aut}(\mathbb C/\overline{\mathbb Q})$,
> $$
> \gamma_{\mathbb C}(P^\sigma)=\gamma_{\mathbb C}(P)^\sigma=\gamma_{\mathbb C}^\sigma(P^\sigma).
> $$
> Since $P^\sigma$ ranges over all points, this proves invariance.
>
> (c) Let $\beta=\alpha_*\circ(T_p-a_p(E)):\operatorname{Pic}^0(X_0(N))\to\operatorname{Pic}^0(E)$ be the corresponding top composite of (8.41), restricted to $\overline{\mathbb Q}$-points, and let $\gamma$ be the restriction of $\gamma_{\mathbb C}$ as a morphism over $\overline{\mathbb Q}$. Use only the algebraic geometry of curves to show that, if $\beta$ is not surjective, then $\beta_{\mathbb C}=0$. The source notes that quoting the constant-or-surjective dichotomy for variety-to-curve morphisms would give this immediately, but asks for the curve argument.

> **Context and notation.** Here $\alpha:X_0(N)\to E$ is the rational modular parametrization in Theorem 8.8.2, and $p$ is a prime away from the conductor and level, as in diagram (8.40), printed p. 362 / PDF p. 375. The final sum map is on degree-zero divisors, so multiplicities and negative coefficients are included. The field in (b),(c) is $\overline{\mathbb Q}$, not necessarily $\mathbb Q$.

## Hints

> [!hint]- Hint 1
> The classes of $(P)-(P_0)$ generate the degree-zero Picard group.

> [!hint]- Hint 2
> If the map of curves in (c) were nonconstant, it would already surject onto the elliptic curve, forcing surjectivity of $\beta$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> Let $X=X_0(N)$ and let $s:\operatorname{Pic}^0(E)\xrightarrow{\sim}E$ be the elliptic Abel–Jacobi group isomorphism.
>
> (a) For every $P\in X(\mathbb C)$, the hypothesis gives $\beta_{\mathbb C}([(P)-(P_0)])=0$, since $s$ is injective. A degree-zero divisor $D=\sum n_P(P)$ has $\sum n_P=0$, so
> $$
> [D]=\sum n_P[(P)-(P_0)].
> $$
> Every Picard class is represented by such a divisor. The classes on the right therefore generate the whole Picard group, and the homomorphism $\beta_{\mathbb C}$ vanishes on every one of its elements.
>
> (b) The morphism $\alpha$, the Hecke correspondence $T_p$, the integer multiplication $a_p(E)$, and the elliptic origin are defined over $\mathbb Q$ in this setting. Their induced divisor and Picard maps commute with every automorphism fixing $\overline{\mathbb Q}$. The base point $P_0$ is fixed by these automorphisms. Hence
> $$
> \begin{aligned}
> \gamma_{\mathbb C}(P^\sigma)
> &=s\beta_{\mathbb C}([(P^\sigma)-(P_0)])\\
> &=s\beta_{\mathbb C}([(P)-(P_0)]^\sigma)
> =(s\beta_{\mathbb C}([(P)-(P_0)]))^\sigma.
> \end{aligned}
> $$
> The last expression is also $\gamma_{\mathbb C}^\sigma(P^\sigma)$ by the definition of conjugating a morphism. Since conjugation permutes all geometric points, $\gamma_{\mathbb C}^\sigma=\gamma_{\mathbb C}$. The field-of-definition criterion for morphisms now descends it to $\overline{\mathbb Q}$. Concretely, a morphism between varieties already defined over this algebraically closed field is described by finitely many rational functions; invariance of their graph under all such automorphisms forces its defining ideal, and hence the morphism, to descend. This is the usual Galois-descent criterion being used, not descent to $\mathbb Q$ from a merely algebraic base point.
>
> (c) Suppose $\beta$ is not surjective on $\overline{\mathbb Q}$-points. Since $\gamma(P)=s\beta([(P)-(P_0)])$, its image is contained in the proper subgroup $s(\operatorname{im}\beta)\subset E(\overline{\mathbb Q})$. A nonconstant morphism of nonsingular projective curves is surjective; over an algebraically closed field every target point then has a geometric inverse image. Thus $\gamma$ cannot be nonconstant. It is constant, and evaluating at $P_0$ gives $\gamma(P_0)=0$, so it is the zero morphism. Its base change $\gamma_{\mathbb C}$ is also zero, and (a) gives $\beta_{\mathbb C}=0$.
>
> This establishes the implication used in (8.40) through a morphism whose domain and target are curves. It does not invoke the dimension or image theorem for general Abelian varieties.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Reduction mod p|Reduction mod p]]
- [[08 - Arithmetic Geometry/Concepts/Jacobians and Functorial Maps|Jacobians and Functorial Maps]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 368 / PDF p. 381. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
