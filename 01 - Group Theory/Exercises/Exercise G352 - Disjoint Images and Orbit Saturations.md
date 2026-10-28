---
title: "Exercise G352: Disjoint Images and Orbit Saturations"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 2, Section 2.1, Exercise 2.1.2, printed p. 47, PDF p. 62"
source_refs:
  - "S7/ch-2/sec-1/ex-2"
created: 2026-10-28
---

# Exercise G352: Disjoint Images and Orbit Saturations

## Problem Statement

> [!question] Original Exercise 2.1.2
> Establish equivalence (2.1).
>
> **Referenced equivalence (2.1), printed p. 45 / PDF p. 60.** For subsets $U_1,U_2\subseteq\mathcal H$, with $\pi:\mathcal H\to Y(\Gamma)=\Gamma\backslash\mathcal H$ the natural projection and $\Gamma(U_1)=\bigcup_{\gamma\in\Gamma}\gamma(U_1)$, the equivalence is
> $$
> \pi(U_1)\cap\pi(U_2)=\varnothing\text{ in }Y(\Gamma)
> \quad\Longleftrightarrow\quad
> \Gamma(U_1)\cap U_2=\varnothing\text{ in }\mathcal H.
> $$

## Hints

> [!hint]- Hint 1
> Prove the equivalent statement that the two intersections are simultaneously nonempty.

> [!hint]- Hint 2
> The equality $\pi(u_1)=\pi(u_2)$ says that $u_2=\gamma u_1$ for some $\gamma\in\Gamma$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent orbit argument; no separation or openness assumption is needed.
>
> Suppose $\pi(U_1)\cap\pi(U_2)\ne\varnothing$. Choose $u_1\in U_1$ and $u_2\in U_2$ with $\pi(u_1)=\pi(u_2)$. Equality of the two orbits means $u_2=\gamma u_1$ for some $\gamma\in\Gamma$. Hence $u_2\in\Gamma(U_1)\cap U_2$, so this latter intersection is nonempty.
>
> Conversely, suppose $u_2\in\Gamma(U_1)\cap U_2$. By the definition of saturation, $u_2=\gamma u_1$ for some $u_1\in U_1$ and $\gamma\in\Gamma$. Then
> $$
> \pi(u_2)=\Gamma u_2=\Gamma\gamma u_1=\Gamma u_1=\pi(u_1).
> $$
> This common orbit belongs to both $\pi(U_1)$ and $\pi(U_2)$, so their intersection is nonempty. We have proved
> $$
> \pi(U_1)\cap\pi(U_2)\ne\varnothing
> \quad\Longleftrightarrow\quad
> \Gamma(U_1)\cap U_2\ne\varnothing.
> $$
> Negating both sides gives the required equivalence.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[07 - Modular Forms/Concepts/Modular Group|Modular Group]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The exercise and the referenced equation were checked on 200 dpi images of printed pp. 47 and 45 / PDF pp. 62 and 60, respectively.
- **Proof status:** This is an independent proof of the assigned equivalence. Although the text applies it to neighborhoods, it holds for arbitrary subsets of any group-action space.
- **Routing:** The equivalence is a statement about orbit intersections, so Group Theory supplies the primary toolkit.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
