---
title: "Exercise LA615: The Conjugate of a Complex Dual Space"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 6, Section 6.5, Exercise 6.5.4, printed p. 243, PDF p. 257"
source_refs:
  - "S7/ch-6/sec-5/ex-4"
created: 2026-10-28
---

# Exercise LA615: The Conjugate of a Complex Dual Space

## Problem Statement

> [!question] Original Exercise 6.5.4
> Let $V$ be any complex vector space with dual space $V^\wedge$. Show that the set $\overline{V^\wedge}=\{\overline\varphi:\varphi\in V^\wedge\}$ is the set of functions $\psi:V\longrightarrow\mathbb C$ such that $\psi(v+v')=\psi(v)+\psi(v')$ and $\psi(zv)=\overline z\psi(v)$ for all $v,v'\in V$ and $z\in\mathbb C$.

## Hints

> [!hint]- Hint 1
> Interpret $\overline\varphi$ pointwise: $(\overline\varphi)(v)=\overline{\varphi(v)}$.

> [!hint]- Hint 2
> For the reverse inclusion set $\varphi(v)=\overline{\psi(v)}$ and verify complex linearity.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Let $\varphi\in V^\wedge=\operatorname{Hom}_{\mathbb C}(V,\mathbb C)$ and define $\psi(v)=\overline{\varphi(v)}$. Then
> $$
> \psi(v+v')=\overline{\varphi(v)+\varphi(v')}=\psi(v)+\psi(v'),
> $$
> and
> $$
> \psi(zv)=\overline{z\varphi(v)}=\overline z\,\psi(v).
> $$
> Thus every function in the displayed set is additive and conjugate-linear.
>
> Conversely suppose $\psi$ has these two properties. Set $\varphi(v)=\overline{\psi(v)}$. Additivity follows by conjugating the additive identity, and
> $$
> \varphi(zv)=\overline{\overline z\psi(v)}=z\varphi(v).
> $$
> Hence $\varphi\in V^\wedge$ and $\psi=\overline\varphi$. This proves equality of the two sets.
>
> Under pointwise addition and scalar multiplication the set of conjugate-linear functions is itself a complex vector space. The correspondence $\varphi\mapsto\overline\varphi$ is conjugate-linear with respect to these operations: $\overline{z\varphi}=\overline z\,\overline\varphi$. It becomes linear when the source dual is given its conjugate scalar structure.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis, Dimension and Dual Bases]]
- [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|Vector Spaces]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Dimension boundary:** No finite-dimensional assumption is required for this set-theoretic and linearity argument.
- **Notation:** A conjugate-linear functional is different from an ordinary complex-linear functional unless both conditions happen to hold; the only such common functional is zero.
- **Routing:** Conjugate scalar structures and dual spaces are the principal tools.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
