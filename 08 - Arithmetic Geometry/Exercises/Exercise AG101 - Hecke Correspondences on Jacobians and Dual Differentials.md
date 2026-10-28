---
title: "Exercise AG101: Hecke Correspondences on Jacobians and Dual Differentials"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 6, Section 6.3, Exercise 6.3.1, printed p. 234, PDF p. 248"
source_refs:
  - "S7/ch-6/sec-3/ex-1"
created: 2026-10-28
---

# Exercise AG101: Hecke Correspondences on Jacobians and Dual Differentials

## Problem Statement

> [!question] Original Exercise 6.3.1
> (a) Show that diagram (6.10) commutes. (A hint for this exercise is at the end of the book.)
>
> (b) Show that diagram (6.11) commutes.

> **Referenced context.** Diagram (6.10) identifies $g\mapsto g|_2\alpha$ on $S_2(\Gamma_Y)\to S_2(\Gamma_X)$ with $h^*: \Omega^1(Y)\to\Omega^1(X)$, and their duals with $h_*:J(X)\to J(Y)$. Diagram (6.11) reverses these arrows: $f\mapsto\sum_j f|_2\alpha^{-1}\gamma_j$ on cusp forms corresponds to the differential trace and, dually, to $h^*:J(Y)\to J(X)$, where $H\gamma_j$ are the matrix cosets. The central-factor qualification is stated in the solution.

## Hints

> [!hint]- Hint 1
> The derivative of a fractional linear transformation is its determinant divided by the square of its denominator.

> [!hint]- Hint 2
> Write the differential trace as a sum of inverse local branches. Compare effective covering sheets with the matrix cosets, including the central stabilizers.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Write $h:X\to Y$ for the map induced by $\alpha\in\mathrm{GL}_2^+(\mathbb Q)$ with $H=\alpha\Gamma_X\alpha^{-1}\subseteq\Gamma_Y$. Put $\omega_f=f(\tau)\,d\tau$. The modular-form/differential identification is an input from Section 3.3.
>
> **(a).** For $\alpha=\begin{pmatrix}a&b\\c&d\end{pmatrix}$,
> $$
> d(\alpha\tau)=\frac{\det\alpha}{(c\tau+d)^2}\,d\tau.
> $$
> Consequently $h^*\omega_g=(g|_2\alpha)(\tau)d\tau$. The differential pullback $h^*$ has dual $h^\vee$ on differential duals; on periods, $h^\vee(\int_\gamma)=\int_{h\circ\gamma}$. It therefore descends to $h_*:J(X)\to J(Y)$. These identities prove every arrow of (6.10) commutes, including the passage to the period quotients.
>
> **(b): central-stabilizer qualification.** Let $Z_Y=\Gamma_Y\cap\{\pm I\}$, $Z_H=H\cap\{\pm I\}$ and $\kappa=[Z_Y:Z_H]$. On an unramified open disk in $Y$, its inverse branches are $\tau\mapsto\alpha^{-1}\gamma\tau$, with $\gamma$ ranging over $(HZ_Y)\backslash\Gamma_Y$. The geometric trace of $\omega_f$ is thus
> $$
> \operatorname{Tr}_h(\omega_f)=\sum_{\gamma\in(HZ_Y)\backslash\Gamma_Y}(f|_2\alpha^{-1}\gamma)(\tau)d\tau.
> $$
> Each effective coset has precisely $\kappa$ preimages in $H\backslash\Gamma_Y$, and weight two gives the same summand for $\gamma$ and $-\gamma$. Hence the source's matrix-coset operator $C_\alpha$ satisfies
> $$
> C_\alpha f=\sum_{\gamma\in H\backslash\Gamma_Y}f|_2\alpha^{-1}\gamma,
> \qquad \omega_{C_\alpha f}=\kappa\operatorname{Tr}_h(\omega_f).
> $$
> The equality, proved away from finitely many branch points, extends across them because differential traces extend holomorphically. Dually, the geometric trace induces $h^*:J(Y)\to J(X)$: integration around a loop equals integration over the sum of its lifts. Therefore (6.11), with the unscaled geometric arrows, commutes when $\kappa=1$; for arbitrary unequal centers its modular-form arrow must be divided by $\kappa$, or its geometric arrows multiplied by $\kappa$.
>
> This qualification is necessary. Take $\Gamma_Y=\Gamma_0(11)$, $\Gamma_X=\Gamma(33)$ and $\alpha=I$. Their centers have orders two and one. For a nonzero holomorphic differential $\lambda$ on the genus-one curve $X_0(11)$ and $f$ corresponding to $h^*\lambda$, the geometric trace is $\deg(h)\lambda$, whereas the matrix sum is $2\deg(h)\lambda$. The usual equal-center Hecke correspondences have $\kappa=1$, so the intended application is unchanged.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Jacobians and Functorial Maps|Jacobians and Functorial Maps]]
- [[07 - Modular Forms/Concepts/Hecke Operators|Hecke Operators]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Referenced diagrams:** (6.10) and (6.11), printed pp. 231–232, PDF pp. 245–246; the diagrams are transcribed as searchable arrow identities below.
- **Source issue:** Matrix cosets and geometric covering sheets differ when the central stabilizers have different orders. The solution preserves the printed task and proves the exact multiplicity formula and the intended equal-center case.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
