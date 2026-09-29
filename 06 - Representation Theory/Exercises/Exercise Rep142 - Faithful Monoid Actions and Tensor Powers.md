---
title: "Exercise Rep142: Faithful Monoid Actions and Tensor Powers"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
  - monoid-algebra
  - tensor-powers
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVIII, Exercise 20, printed p. 726, PDF p. 741"
created: 2026-09-29
---

# Exercise Rep142: Faithful Monoid Actions and Tensor Powers

## Problem Statement

> [!question] Lang XVIII.20 — Steinberg
> Let $G$ be a finite monoid, and $k[G]$ the monoid algebra over a field $k$. Let $G\to\operatorname{End}_k(E)$ be a faithful representation (i.e. injective), so that we identify $G$ with a multiplicative subset of $\operatorname{End}_k(E)$. Show that $T^r$ induces a representation of $G$ on $T^r(E)$, whence a representation of $k[G]$ on $T^r(E)$ by linearity. If $\alpha\in k[G]$ and if $T^r(\alpha)=0$ for all integers $r\ge1$, show that $\alpha=0$. [Hint: Apply the preceding exercise.]

> [!warning] Source issue: a monoid may contain a zero operator
> Take $G=\{1,z\}$ with $z^2=z$, represented on $E=k$ by $1\mapsto I$ and $z\mapsto0$. The action is injective, but the nonzero basis element $[z]\in k[G]$ acts as zero on every positive tensor power. The corrected separation theorem either excludes the zero operator from the image or includes $r=0$. The latter gives an unconditional theorem for finite monoids.

## Hints

> [!hint]- Hint 1: Check multiplication on pure tensors
> The formula $\sigma(v_1\otimes\cdots\otimes v_r)=\sigma v_1\otimes\cdots\otimes\sigma v_r$ preserves the monoid multiplication.

> [!hint]- Hint 2: Keep the two notions of faithfulness separate
> Injectivity of $G\to\operatorname{End}_k(E)$ means its elements are distinct operators, but their linear extensions need not be linearly independent. Apply LA491 across several tensor degrees to recover that independence.

## Solution

> [!success]- Independent proof of the action and corrected separation theorem
> Write $\rho:G\to\operatorname{End}_k(E)$ for the given injective monoid homomorphism. For $r\ge1$, tensor multilinearity defines
>
> $$
> \rho_r(\sigma)=\rho(\sigma)^{\otimes r}\in\operatorname{End}_k(E^{\otimes r}).
> $$
>
> Applying two such maps to a pure tensor proves
>
> $$
> \rho_r(\sigma\tau)=\rho_r(\sigma)\rho_r(\tau),
> \qquad \rho_r(1)=I_{E^{\otimes r}}.
> $$
>
> Pure tensors span the space, so these are identities of operators. In degree zero put $E^{\otimes0}=k$ and let every monoid element act as $1_k$, which also defines a representation.
>
> The monoid algebra is the free $k$-space on symbols $[\sigma]$, with $[\sigma][\tau]=[\sigma\tau]$. Each action extends uniquely to the unital algebra homomorphism
>
> $$
> \widetilde\rho_r:k[G]\longrightarrow\operatorname{End}_k(E^{\otimes r}),
> \qquad
> \sum_{\sigma\in G}c_\sigma[\sigma]\longmapsto
> \sum_{\sigma\in G}c_\sigma\rho(\sigma)^{\otimes r}.
> $$
>
> This linear extension is what $T^r(\alpha)$ denotes in the exercise. It must not be confused with the nonlinear operation $(\sum c_\sigma\rho(\sigma))^{\otimes r}$.
>
> For completeness, the separation argument even allows an infinite-dimensional $E$, although the chapter's standing convention is finite dimension. For each pair of distinct operators choose a vector on which they differ, and for each nonzero operator choose a vector on which it is nonzero. Let $E_0$ be the span of all $G$-translates of these finitely many vectors. Because $G$ is finite and closed under multiplication, $E_0$ is finite-dimensional and $G$-stable. Restrictions to $E_0$ remain pairwise distinct and preserve exactly which operator is zero. Tensor powers of $E_0\hookrightarrow E$ are injective over the field $k$, so every tensor relation on $E$ restricts to the same relation on $E_0$. It is therefore enough to use the finite-dimensional separation result.
>
> Suppose first that none of the distinct operators $\rho(\sigma)$ is zero. If $\widetilde\rho_r(\alpha)=0$ for $1\le r\le |G|$, [[04 - Linear Algebra and Modules/Exercises/Exercise LA491 - Separation of Endomorphisms by Tensor Powers|LA491]] gives $c_\sigma=0$ for every $\sigma$. Hence $\alpha=0$.
>
> If one monoid element $z$ acts as zero, injectivity makes it the only such element. The same argument on the nonzero operators shows that the common kernel of all positive-degree actions is exactly $k[z]$, the one-dimensional span of the basis vector $[z]$. Here $z$ is absorbing: $\rho(z\sigma)=0=\rho(\sigma z)$, so injectivity gives $z\sigma=\sigma z=z$. Thus $k[z]$ is a two-sided ideal of the monoid algebra.
>
> Finally, $\widetilde\rho_0(\alpha)=\sum_\sigma c_\sigma$ by the degree-zero definition. Adding this equation detects the remaining coefficient at $z$. Therefore in all cases
>
> $$
> \bigcap_{r\ge0}\ker\widetilde\rho_r=0.
> $$
>
> More precisely, degrees $0,\ldots,|G|-1$ suffice by the degree-zero version of LA491. This proves the fully general corrected theorem and identifies exactly when the printed positive-degree assertion holds.

## Related Concepts

- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]]
- [[06 - Representation Theory/Concepts/Group Algebra|Group Algebra]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA491 - Separation of Endomorphisms by Tensor Powers|Tensor-Power Separation]]

## Notes

- **Source:** [S2, Ch. XVIII, Exercise 20, printed p. 726, PDF p. 741], including the Steinberg attribution and the full hint, was checked on the original page.
- **Proof status:** The monoid-algebra construction and corrected separation argument are independent. The tensor powers are jointly faithful as algebra representations; an individual tensor power need not be faithful on the algebra.
- **Zero convention:** The basis vector $[z]$ is nonzero in the ordinary monoid algebra, even when $z$ is an absorbing element. Quotienting by its span would produce a different, contracted monoid algebra. The original statement does not specify such a quotient.
