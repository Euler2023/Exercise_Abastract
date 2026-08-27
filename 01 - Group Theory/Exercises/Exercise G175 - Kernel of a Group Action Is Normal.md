---
title: "Exercise G175: Kernel of a Group Action Is Normal"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - group-actions
  - normal-subgroups
source: "Michael Artin, Algebra, 2nd ed., Ch. 6, Section 11, Ex. 11.3, printed p. 192, PDF p. 204"
created: 2026-08-27
---

# Exercise G175: Kernel of a Group Action Is Normal

## Problem Statement

> [!question] Exercise 11.3
> Let $S$ be a set on which a group $G$ operates, and let $H$ be the subset of elements $g$ such that $gs=s$ for all $s$ in $S$. Prove that $H$ is a normal subgroup of $G$.

## Hints

> [!hint]- Hint 1
> The action defines a homomorphism $G\to\operatorname{Sym}(S)$.

> [!hint]- Hint 2
> Identify $H$ as its kernel.

## Solution

> [!success]- Solution
> The action gives a homomorphism
>
> $$
> \rho:G\longrightarrow\operatorname{Sym}(S),qquad \rho(g)(s)=gs.
> $$
>
> By definition, $g\in\ker\rho$ exactly when $gs=s$ for every $s\in S$. Hence $H=\ker\rho$. Kernels of homomorphisms are normal, so $H\triangleleft G$.
>
> Directly, if $h\in H$, $g\in G$, and $s\in S$, then
>
> $$
> (ghg^{-1})s=g\bigl(h(g^{-1}s)\bigr)=g(g^{-1}s)=s,
> $$
>
> so $ghg^{-1}\in H$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]

## Notes

- The action is faithful exactly when this normal subgroup is trivial.
- **Source status:** [S1, Ch. 6, §11, Ex. 11.3, printed p. 192, PDF p. 204]; independent proof.

