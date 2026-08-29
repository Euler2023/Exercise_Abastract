---
title: "Exercise LA367: Exactness of Directed Colimits"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - direct-limits
  - exact-sequences
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. III, Modules, Exercise 21, printed pp. 170-171, PDF pp. 185-186"
created: 2026-08-29
---

# Exercise LA367: Exactness of Directed Colimits

## Problem Statement

> [!question] Exercise 21
> Let $(M_i',f_j^i)$ and $(M_i,g_j^i)$ be directed systems of modules over a ring. By a homomorphism
>
> $$
> (M_i')\xrightarrow{u}(M_i)
> $$
>
> one means a family of homomorphisms $u_i:M_i'\to M_i$ which commute with the transition maps. Suppose that we are given an exact sequence
>
> $$
> 0\longrightarrow(M_i')\xrightarrow{u}(M_i)
> \xrightarrow{v}(M_i'')\longrightarrow0
> $$
>
> of directed systems, meaning that for each $i$ the sequence
>
> $$
> 0\longrightarrow M_i'\xrightarrow{u_i}M_i
> \xrightarrow{v_i}M_i''\longrightarrow0
> $$
>
> is exact. Show that the direct limit preserves exactness; that is,
>
> $$
> 0\longrightarrow\varinjlim_iM_i'
> \xrightarrow{\varinjlim u_i}\varinjlim_iM_i
> \xrightarrow{\varinjlim v_i}\varinjlim_iM_i''
> \longrightarrow0
> $$
>
> is exact.

## Hints

> [!hint]- Hint 1
> Surjectivity on the right follows by lifting one representative at one stage.

> [!hint]- Hint 2
> For injectivity and middle exactness, use Exercise III.19: an element that becomes zero in a direct limit is already zero after passing to one sufficiently late stage.

## Solution

> [!success]- Independently derived solution
> Write
>
> $$
> U=\varinjlim u_i,
> \qquad
> V=\varinjlim v_i.
> $$
>
> Since $v_i u_i=0$ at every stage, functoriality gives $VU=0$.
>
> **Injectivity of $U$.** Let a class $[x_i]\in\varinjlim M_i'$ satisfy $U([x_i])=0$. By the finite-stage vanishing criterion of Exercise III.19, there is $j\ge i$ such that the image of $u_i(x_i)$ in $M_j$ is zero. Commutativity of the directed systems gives
>
> $$
> u_j\bigl(f_j^i(x_i)\bigr)=0.
> $$
>
> Because $u_j$ is injective, $f_j^i(x_i)=0$. Exercise III.19 now implies $[x_i]=0$ in $\varinjlim M_i'$. Thus $U$ is injective.
>
> **Exactness in the middle.** Let $[y_i]\in\varinjlim M_i$ satisfy $V([y_i])=0$. Again, Exercise III.19 gives an index $j\ge i$ for which the image $y_j$ of $y_i$ satisfies
>
> $$
> v_j(y_j)=0.
> $$
>
> Exactness at $M_j$ supplies $x_j\in M_j'$ with $u_j(x_j)=y_j$. Therefore
>
> $$
> [y_i]=[y_j]=U([x_j]),
> $$
>
> so $\ker V\subseteq\operatorname{im}U$. The reverse inclusion follows from $VU=0$.
>
> **Surjectivity of $V$.** Let $[z_i]\in\varinjlim M_i''$. Since $v_i$ is surjective, choose $y_i\in M_i$ with $v_i(y_i)=z_i$. Then
>
> $$
> V([y_i])=[z_i].
> $$
>
> Hence $V$ is surjective, and the displayed direct-limit sequence is exact.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Direct and Inverse Limits|Direct and Inverse Limits]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA365 - Vanishing in a Direct Limit|Exercise LA365]]

## Notes

- **Scope:** This is exactness of filtered direct limits of modules. Inverse limits are generally only left exact without additional hypotheses such as Mittag-Leffler stabilization.
- **Source status:** The definition of a morphism of directed systems and the levelwise and direct-limit exact sequences were visually checked across [S2, Ch. III, Ex. 21, printed pp. 170-171, PDF pp. 185-186]. The proof is independent.

