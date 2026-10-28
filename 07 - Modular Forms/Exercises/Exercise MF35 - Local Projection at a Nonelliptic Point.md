---
title: "Exercise MF35: Local Projection at a Nonelliptic Point"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 2, Section 2.2, Exercise 2.2.1, printed p. 52, PDF p. 67"
source_refs:
  - "S7/ch-2/sec-2/ex-1"
created: 2026-10-28
---

# Exercise MF35: Local Projection at a Nonelliptic Point

## Problem Statement

> [!question] Original Exercise 2.2.1
> Let $\tau\in\mathcal H$ be fixed only by the identity transformation in $\Gamma$. Use Proposition 2.1.1 to show that some neighborhood $U$ of $\tau$ is homeomorphic to its image in $Y(\Gamma)$.
>
> **Referenced Proposition 2.1.1, printed p. 46 / PDF p. 61.** Given $\tau_1,\tau_2\in\mathcal H$, there are neighborhoods $U_1,U_2$ of these points such that, for every $g\in SL_2(\mathbb Z)$, the condition $g(U_1)\cap U_2\ne\varnothing$ implies $g\tau_1=\tau_2$. Here $\Gamma$ is a congruence subgroup, $Y(\Gamma)=\Gamma\backslash\mathcal H$ has its quotient topology, and the image means the image under $\pi(z)=\Gamma z$.

## Hints

> [!hint]- Hint 1
> Apply the proposition with both centers equal to $\tau$, and intersect the two resulting neighborhoods.

> [!hint]- Hint 2
> If two points of this intersection have the same image, an element of $\Gamma$ moves one to the other and its translate of the neighborhood meets the neighborhood. What must this transformation be?

## Solution

> [!success]- Solution
> **Proof scope:** Independent deduction from the stated Proposition 2.1.1 and the orbit-saturation formula for openness.
>
> Apply the proposition with $\tau_1=\tau_2=\tau$. Taking open neighborhoods inside its neighborhoods if necessary, obtain open sets $U_1,U_2$ about $\tau$ such that
> $$
> g(U_1)\cap U_2\ne\varnothing\quad\Longrightarrow\quad g\tau=\tau.
> $$
> Let $U=U_1\cap U_2$. If $z_1,z_2\in U$ satisfy $\pi(z_1)=\pi(z_2)$, then $z_2=gz_1$ for some $g\in\Gamma$. In particular, $z_2\in g(U)\cap U\subseteq g(U_1)\cap U_2$. Hence $g\tau=\tau$.
>
> By the hypothesis, every such $g$ is the identity as a fractional linear transformation, so $z_2=gz_1=z_1$. Thus $\pi|_U:U\to\pi(U)$ is bijective. The word “transformation” is essential: if $-I\in\Gamma$, both $I$ and $-I$ act as this same identity transformation and cause no failure of injectivity.
>
> The restriction $\pi|_U$ is continuous because $\pi$ is continuous in the quotient topology. To show it is open, let $W$ be open in $U$. Since $U$ is open in $\mathcal H$, so is $W$, and
> $$
> \pi^{-1}(\pi(W))=\bigcup_{g\in\Gamma}g(W)
> $$
> is open, because every $g$ is a homeomorphism. Hence $\pi(W)$ is open in $Y(\Gamma)$, and therefore in $\pi(U)$. A bijective continuous open map has continuous inverse. Consequently $\pi|_U$ is the required homeomorphism, and $\pi(U)$ is an open neighborhood of $\pi(\tau)$.

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]
- [[07 - Modular Forms/Concepts/Modular Curves and Moduli|Modular Curves and Moduli]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]

## Notes

- **Source status:** The exercise was checked on the 200 dpi image of printed p. 52 / PDF p. 67, and the full proposition on printed p. 46 / PDF p. 61. Its matrix estimates and compactness argument are completed independently in [[04 - Linear Algebra and Modules/Exercises/Exercise LA592 - Matrix Bounds for Proper Discontinuity|Exercise LA592]].
- **Proof input:** Proposition 2.1.1 supplies the neighborhood. The present solution proves the homeomorphism conclusion, including openness; it does not assume the conclusion merely from bijectivity.
- **Routing:** The purpose of the argument is the local chart on a modular quotient at a nonelliptic point, so it is placed with the modular-curve chart exercises.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
