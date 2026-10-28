---
title: "Exercise AG96: Pushforward of Degree Zero Divisors"
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 6, Section 6.2, Exercise 6.2.3, printed p. 229, PDF p. 243"
source_refs:
  - "S7/ch-6/sec-2/ex-3"
created: 2026-10-28
---

# Exercise AG96: Pushforward of Degree Zero Divisors

## Problem Statement

> [!question] Original Exercise 6.2.3
> Show that the map $h_D$ is a homomorphism and takes degree-$0$ divisors to degree-$0$ divisors.

## Hints

> [!hint]- Hint 1
> Use the definition on each point of the free abelian divisor group.

> [!hint]- Hint 2
> Over $\mathbb C$ each point has degree one. Group the coefficients of all source points with the same image.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> The divisor group is the free abelian group on the points of the surface. For a finite divisor $D=\sum_x n_x[x]$, the source defines
> $$
> h_D(D)=\sum_x n_x[h(x)].
> $$
> The sum is finite, even when several points have the same image. For another divisor $D'=\sum_x m_x[x]$, collecting coefficients gives
> $$
> h_D(D+D')=\sum_x(n_x+m_x)[h(x)]=h_D(D)+h_D(D').
> $$
> Also $h_D(0)=0$, so this is a group homomorphism. Since these are complex points, every point divisor has degree one and
> $$
> \deg(h_D D)=\sum_{y\in Y}\sum_{x:h(x)=y}n_x=\sum_xn_x=\deg D.
> $$
> In particular a degree-zero divisor maps to a degree-zero divisor.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Divisors and Riemann-Roch on Compact Curves|Divisors and Riemann-Roch on Compact Curves]]
- [[08 - Arithmetic Geometry/Concepts/Jacobians and Functorial Maps|Jacobians and Functorial Maps]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Definition:** Here the subscript $D$ denotes forward pushforward. The reverse map $h^D$ has ramification multiplicities and changes degree by $\deg h$.
- **Field boundary:** For curves over non-algebraically-closed fields, pushforward of closed points also uses residue-field degrees. The exercise is in the complex-analytic setting.
- **Routing:** Divisor pushforward is the primary construction.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
