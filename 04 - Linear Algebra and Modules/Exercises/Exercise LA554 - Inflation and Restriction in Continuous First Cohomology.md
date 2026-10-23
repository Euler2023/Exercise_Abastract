---
title: 'Exercise LA554: Inflation and Restriction in Continuous First Cohomology'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, Exercise 4, printed p. 284, PDF p. 303
source_refs:
- S4/ch-IV/sec-3/ex-4
created: '2026-10-23'
---

# Exercise LA554: Inflation and Restriction in Continuous First Cohomology

## Problem Statement

> [!question] Neukirch IV.3.4
> Let $G$ be a profinite group and $A$ a continuous $G$-module. Put
> $$
> H^1(G,A)=Z^1(G,A)/B^1(G,A),
> $$
> where $Z^1(G,A)$ consists of all continuous maps $f:G\to A$ (with respect to the discrete topology on $A$) such that $f(\sigma\tau)=f(\sigma)^\tau f(\tau)$, and $B^1(G,A)$ consists of all functions of the form $f_a(\sigma)=a^{\sigma-1}$, $a\in A$. Show that if $\mathfrak g$ is a closed normal subgroup of $G$, then one has an exact sequence
> $$
> 1\longrightarrow H^1(G/\mathfrak g,A^{\mathfrak g})\longrightarrow H^1(G,A)\longrightarrow H^1(\mathfrak g,A).
> $$

## Hints

> [!hint]- Hint 1
> The first arrow is inflation and the second is restriction. Show that a cocycle in the kernel of restriction can be multiplied by a coboundary so that it is identically $1$ on $\mathfrak g$.

> [!hint]- Hint 2
> Compare $f(g h)$ and $f(h'g)$ for $h'=ghg^{-1}$. This shows that $f(g)\in A^{\mathfrak g}$ and that the cocycle is constant on $\mathfrak g$ cosets.

## Solution

> [!success]- Independent derivation
> Use multiplicative notation and the book's right action. Inflation composes $\bar f:G/\mathfrak g\to A^{\mathfrak g}$ with the quotient map; restriction restricts a cocycle to $\mathfrak g$. Both preserve cocycles and coboundaries, so they are well-defined on $H^1$. An inflated cocycle equals $1$ on $\mathfrak g$, so the composite is zero.
>
> **Injectivity of inflation.** If an inflated cocycle satisfies $f(g)=a^{g-1}$, then for $h\in\mathfrak g$ we have $1=f(h)=a^{h-1}$, hence $a\in A^{\mathfrak g}$. The original quotient-group cocycle is therefore already a coboundary in $A^{\mathfrak g}$, and its class is zero.
>
> **Exactness in the middle.** If $[f]$ is zero in $H^1(\mathfrak g,A)$, there exists $a\in A$ such that $f(h)=a^{h-1}$ for all $h\in\mathfrak g$. Replacing it by $f/f_a$, we may assume $f|_{\mathfrak g}=1$. Then for $g\in G,h\in\mathfrak g$,
> $$
> f(gh)=f(g)^h,\qquad
> f(gh)=f((ghg^{-1})g)=f(g).
> $$
> Thus $f(g)$ is fixed by $\mathfrak g$ and $f$ is constant on right cosets. It therefore descends to a cocycle of $\bar f:G/\mathfrak g\to A^{\mathfrak g}$. The descended map is continuous by the quotient topology, since the original $f$ is continuous and constant on fibers. Its inflation is precisely $f$, proving that the kernel equals the image.
>
> The argument does not require restriction to be surjective. The problem does not put $1$ at the right end of the sequence, so no surjectivity claim needs to be proved.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group Cohomology]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, Exercise 4, printed p. 284, PDF p. 303]. Independent proof by normalizing cocycles, including checks of continuity and the quotient topology.
