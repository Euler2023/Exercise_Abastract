---
title: "Exercise G286: Double Cosets and Ordinary Coset Representatives"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - cosets
  - double-cosets
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. I, Groups, Exercise 8, printed p. 75, PDF p. 90"
created: 2026-08-28
---

# Exercise G286: Double Cosets and Ordinary Coset Representatives

## Problem Statement

> [!question] Exercise 8
> Let $G$ be a group and let $H,H'$ be subgroups. A double coset is a subset $HxH'$ of $G$.
>
> **(a)** Show that $G$ is a disjoint union of double cosets.
>
> **(b)** Let $\{c\}$ be representatives of the double cosets. Write $[c]H'=cH'c^{-1}$ and, for each $c$, choose representatives $\{x_c\}\subseteq H$ such that
>
> $$
> H=\coprod_{x_c}x_c\bigl(H\cap[c]H'\bigr).
> $$
>
> Show that the elements $x_c c$ form representatives for the left cosets of $H'$ in $G$, so that
>
> $$
> G=\coprod_c\coprod_{x_c}x_c cH'.
> $$

## Hints

> [!hint]- Hint 1
> For (a), use the relation $x\sim y$ if $y=hxh'$ for some $h\in H$, $h'\in H'$.

> [!hint]- Hint 2
> Within $HcH'$, compare $x_c cH'$ and $x'_c cH'$ by conjugating the resulting element of $H'$ by $c$.

## Solution

> [!success]- Solution
> **(a)** Define $x\sim y$ when $y=hxh'$ for some $h\in H$ and $h'\in H'$. Reflexivity and symmetry are immediate, and products of two such expressions prove transitivity. Its equivalence class through $x$ is exactly $HxH'$. Therefore the double cosets partition $G$.
>
> **(b)** Since the $c$ represent all double cosets,
>
> $$
> G=\coprod_c HcH'.
> $$
>
> For fixed $c$, substitute the chosen left-coset decomposition of $H$:
>
> $$
> HcH'
> =\bigcup_{x_c}x_c\bigl(H\cap cH'c^{-1}\bigr)cH'
> =\bigcup_{x_c}x_c cH'.
> $$
>
> Indeed, if $u\in H\cap cH'c^{-1}$, then $uc=ch'$ for some $h'\in H'$, so $x_cucH'=x_ccH'$.
>
> It remains to prove disjointness. Distinct double cosets cannot share an $H'$-coset. Within the same double coset, suppose
>
> $$
> x_c cH'=y_c cH'.
> $$
>
> Then $y_c^{-1}x_c\in cH'c^{-1}\cap H$. Since $x_c$ and $y_c$ represent distinct left cosets of this intersection in $H$, they must be equal as representatives. Hence all displayed $H'$-cosets are disjoint, and the $x_cc$ form a complete family of representatives.

## Related Concepts

- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]
- [[01 - Group Theory/Exercises/Exercise G103 - Double Cosets Form a Partition|Exercise G103]]
- [[01 - Group Theory/Exercises/Exercise G259 - Double Cosets and Orbits on Ordered Pairs|Exercise G259]]

## Notes

- **Source status:** The multipart statement and formulas were checked on the rendered source page [S2, Ch. I, Ex. 8, printed p. 75, PDF p. 90]. The proof is independent.
