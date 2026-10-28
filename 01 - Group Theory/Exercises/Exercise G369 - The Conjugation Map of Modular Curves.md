---
title: "Exercise G369: The Conjugation Map of Modular Curves"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.1, Exercise 5.1.5, printed p. 168, PDF p. 182"
source_refs:
  - "S7/ch-5/sec-1/ex-5"
created: 2026-10-28
---

# Exercise G369: The Conjugation Map of Modular Curves

## Problem Statement

> [!question] Original Exercise 5.1.5
> Check that the map $\alpha:X_3\longrightarrow X_3'$ given by $\Gamma_3\tau\mapsto\Gamma_3'\alpha(\tau)$ is well defined.
>
> **Referenced construction (5.1), printed pp. 166–167 / PDF pp. 180–181.** Let $\alpha\in GL_2^+(\mathbb Q)$,
> $$
> \Gamma_3=\alpha^{-1}\Gamma_1\alpha\cap\Gamma_2,\qquad
> \Gamma_3'=\alpha\Gamma_3\alpha^{-1},\qquad X_3=X(\Gamma_3),\quad X_3'=X(\Gamma_3').
> $$

## Hints

> [!hint]- Hint 1
> Write two representatives as $\tau'=\eta\tau$.

> [!hint]- Hint 2
> Conjugate $\eta$ by $\alpha$ and check the inverse formula with $\alpha^{-1}$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Positive determinant makes $\alpha$ a bijection of $\mathcal H$, and rationality makes it permute $\mathbb Q\cup\{\infty\}$. Thus it acts bijectively on $\mathcal H^*$.
>
> If $\Gamma_3\tau'=\Gamma_3\tau$, write $\tau'=\eta\tau$ with $\eta\in\Gamma_3$. Then
> $$
> \alpha\tau'=(\alpha\eta\alpha^{-1})(\alpha\tau),
> \qquad\alpha\eta\alpha^{-1}\in\Gamma_3'.
> $$
> The image orbit is therefore independent of the representative, including at cusps.
>
> The reverse formula $\Gamma_3'z\mapsto\Gamma_3\alpha^{-1}z$ is well defined by the equality $\alpha^{-1}\Gamma_3'\alpha=\Gamma_3$. Both compositions are identity maps on orbit classes, so the map is bijective.
>
> To recover the section's stronger Riemann-surface isomorphism claim, apply Exercise 2.4.7 [S7, printed p. 63 / PDF p. 78] to $\alpha$ and $\alpha^{-1}$. The two conjugated-group equalities verify that theorem's containment hypothesis in each direction, so both maps are holomorphic. This analytic input is separate from the explicit well-definedness proof.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.1.5, printed p. 168 / PDF p. 182]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Source context:** The group definitions and (5.1) were checked on printed pp. 166–167 / PDF pp. 180–181. The imported analytic descent is proved independently in [[07 - Modular Forms/Exercises/Exercise MF39 - Holomorphic Maps Induced by Rational Matrices|Exercise MF39]].
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
