---
title: 'Exercise Gal180: Failure of Mackey Reciprocity Completion without Descent'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 20, printed p. 310, PDF p. 329
source_refs:
- S4/ch-IV/sec-6/ex-20
created: '2026-10-23'
---

# Exercise Gal180: Failure of Mackey Reciprocity Completion without Descent

## Problem Statement

> [!question] Neukirch IV.6.20
> Under the hypotheses of exercise 18 and 19 one obtains a canonical homomorphism of $G$-modulations
> $$
> A\longrightarrow\pi^{ab}
> $$
> whose kernel is the $G$-modulation $NA$ of universal norms (see exercise 13). It induces an isomorphism
> $$
> \widehat A\xrightarrow{\sim}\pi^{ab}
> $$
> of the completion $\widehat A$ of $A$ (see exercise 14).

## Hints

> [!hint]- Hint 1 — first step
> Compare the order-two elements in the proposed norm completion with the torsion subgroup of $G^{ab}$.

> [!hint]- Hint 2 — proof route
> Apply the fully checked counterexample of Exercise 19. At the base orbit, the extra summand has order two, whereas $G^{ab}$ is torsion-free. Compare it with the universal norm kernel.

## Solution

> [!success]- Independent counterexample and derivation
> **Source issue.** Under the printed general-modulation hypotheses this fails for the same counterexample as Exercise 19. Recall the complete construction there: $G=A_5\times\widehat{\mathbb Z}$, the genuine global idèle-class base $\mathcal B$, and the Mackey summand $T$ supported at $H\supseteq A_5$, with $T(G/(A_5\times m\widehat{\mathbb Z}))=\operatorname{Map}(\mathbb Z/m,\mathbb F_2)$. Put $A=\mathcal B\oplus T$ and $v(b,t)=v(b)$. That solution verifies the henselian value group, all Mackey squares, every unramified unit exact sequence, the power condition, both cyclic norm axioms, and the prime-degree reciprocity isomorphisms. No conclusion of the false Exercise 19 is assumed here.
>
> At the base orbit $G/G$, let $t\ne0$ be the element of its direct summand $T(G/G)=\mathbb F_2$. Any group homomorphism
> $$
> A(G/G)\longrightarrow\pi^{ab}(G/G)=G^{ab}=\widehat{\mathbb Z}
> $$
> kills $t$, because $t$ has order $2$ and $\widehat{\mathbb Z}$ has no nonzero torsion. Yet $t$ is not a universal norm: the Galois cover associated with $H=\{1\}\times\widehat{\mathbb Z}$ has $T(G/H)=0$, so its norm image has zero $T$-component. In particular
> $$
> t\notin\operatorname{Ind}_H^G A(G/H),
> \qquad t\notin NA(G/G).
> $$
> Thus no homomorphism to $\pi^{ab}$, canonical or otherwise, can have the printed universal-norm kernel.
>
> The claimed completed isomorphism also fails as an abstract group assertion. For every open normal subgroup $H$, supported covers have surjective transfer on $T$ and hence zero quotient; unsupported covers have quotient $T(G/G)=\mathbb F_2$. Unsupported normal subgroups are cofinal in the norm system, since any open normal subgroup can be intersected with $\{1\}\times\widehat{\mathbb Z}$. All transition maps on these nonzero quotients are the identity. Therefore
> $$
> \widehat T(G/G)=\mathbb F_2.
> $$
> The genuine base has $\widehat{\mathcal B}(G/G)=G^{ab}=\widehat{\mathbb Z}$ by global reciprocity. Inverse limits commute with this finite direct sum, so
> $$
> \widehat A(G/G)=\widehat{\mathbb Z}\oplus\mathbb F_2
> \not\cong\widehat{\mathbb Z}=\pi^{ab}(G/G).
> $$
> The torsion subgroup already distinguishes the two groups. As in Exercise 19, extra descent/cohomological hypotheses are necessary before one can assert the displayed general-modulation theorem; the original statement is retained rather than replaced silently by a theorem for modulations arising from one $G$-module.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Cyclic norm exactness]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Global class formation]]
- [[01 - Group Theory/Concepts/Simple Groups|Perfect simple groups]]

## Notes

Exact source: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 20, printed p.310, PDF p.329], original page inspected. Independent counterexample, using the construction and every hypothesis check given in the preceding exercise. It disproves both the specified universal-norm kernel and the completed isomorphism. It does not treat the failure of an unverified toy base as a source error; the base here is a genuine global class formation.
