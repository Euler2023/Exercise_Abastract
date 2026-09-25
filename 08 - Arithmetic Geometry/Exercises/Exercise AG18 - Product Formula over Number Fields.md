---
title: "Exercise AG18: Product Formula over Number Fields"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
  - valuations
  - number-fields
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XII, Exercises, Exercise 2, printed p. 496, PDF p. 511"
created: 2026-09-25
---

# Exercise AG18: Product Formula over Number Fields

## Problem Statement

> [!question] Lang, Chapter XII, Exercise 2
> Let $M_{\mathbb Q}$ consist of the ordinary absolute value and all $p$-adic absolute values $v_p$ on $\mathbb Q$. Show that, for every $a\in\mathbb Q^\times$,
>
> $$
> \prod_{v\in M_{\mathbb Q}}|a|_v=1.
> $$
>
> If $K/\mathbb Q$ is finite, let $M_K$ be the absolute values of $K$ extending those in $M_{\mathbb Q}$. For each $w\in M_K$ above $v$, put $N_w=[K_w:\mathbb Q_v]$. Show that every $\alpha\in K^\times$ satisfies
>
> $$
> \prod_{w\in M_K}|\alpha|_w^{N_w}=1.
> $$

## Hints

> [!hint]- Hint 1: Factor a rational number
> Write $a=\pm\prod_p p^{e_p}$, with only finitely many nonzero exponents. Compare the ordinary and $p$-adic contributions.

> [!hint]- Hint 2: Group the places of $K$
> Fix a place $v$ of $\mathbb Q$ and multiply the factors for all $w$ above it.

> [!hint]- Hint 3: Bring in the norm
> Relate the product over $w\mid v$ to $|N_{K/\mathbb Q}(\alpha)|_v$ through the local norm identity from Lang, Chapter XII, §3.

## Solution

> [!success]- Solution
> Every nonzero rational $a$ has a unique expression $a=\pm\prod_p p^{e_p}$ with $e_p\in\mathbb Z$ and only finitely many $e_p\ne0$. Therefore
>
> $$
> |a|_\infty=\prod_p p^{e_p},
> \qquad
> |a|_p=p^{-e_p},
> \qquad
> |a|_\infty\prod_p|a|_p=1.
> $$
>
> Now let $K/\mathbb Q$ be finite and $\alpha\in K^\times$. For each place $v$ of $\mathbb Q$, the finite-extension norm identity gives
>
> $$
> \prod_{w\mid v}|\alpha|_w^{[K_w:\mathbb Q_v]}
> =\prod_{w\mid v}|N_{K_w/\mathbb Q_v}(\alpha)|_v
> =|N_{K/\mathbb Q}(\alpha)|_v.
> $$
>
> The first equality follows because an absolute value on a complete field has a unique extension to each finite extension: all local conjugates of $\alpha$ have absolute value $|\alpha|_w$, and their product is the local norm. The second equality follows by taking the determinant of multiplication by $\alpha$ after the decomposition $K\otimes_{\mathbb Q}\mathbb Q_v\simeq\prod_{w\mid v}K_w$; equivalently, it is Lang's Proposition 3.5. These facts include the real and complex places: for a complex place above the ordinary real absolute value, the local degree is $2$ and $|N_{\mathbb C/\mathbb R}(z)|=|z|^2$.
>
> The rational number $N_{K/\mathbb Q}(\alpha)$ is nonzero. Multiplying the displayed equality over all rational places and applying the first part to this norm yields
>
> $$
> \prod_{w\in M_K}|\alpha|_w^{N_w}
> =\prod_{v\in M_{\mathbb Q}}|N_{K/\mathbb Q}(\alpha)|_v=1.
> $$
>
> The products are finite in effect: $\alpha$ and $\alpha^{-1}$ are integral away from a finite set of rational primes, so every local absolute value of $\alpha$ above any other prime is $1$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]

## Notes

- **Routing:** The computation is the global arithmetic product formula, using local degrees and norms; it is placed in Arithmetic Geometry.
- **Source-contained input:** The local norm identities are Lang, *Algebra*, Ch. XII, §3, Propositions 3.5–3.6, printed p. 479, PDF p. 494. Their hypotheses hold here because number-field extensions are separable and the rational absolute values are well behaved in Lang's sense.
- **Proof status:** The rational calculation and assembly over the places of $K$ are independently derived using those explicitly named source results.
- **Source status:** Both product formulas and the exponent $N_w=[K_w:\mathbb Q_v]$ were checked against [S2, Ch. XII, Exercise 2, printed p. 496, PDF p. 511].
