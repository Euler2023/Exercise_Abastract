---
title: "Exercise AG145: The Legendre Relation for Weierstrass Quasiperiods"
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.8, Exercise 4.8.2, printed p. 142, PDF p. 156"
source_refs:
  - "S7/ch-4/sec-8/ex-2"
created: 2026-10-28
---

# Exercise AG145: The Legendre Relation for Weierstrass Quasiperiods

## Problem Statement

> [!question] Original Exercise 4.8.2
> Prove the Legendre relation $\eta_2(\Lambda)\omega_1-\eta_1(\Lambda)\omega_2=2\pi i$. (A hint for this exercise is at the end of the book.)
>
> Here $\Lambda=\omega_1\mathbb Z+\omega_2\mathbb Z$, $\omega_1/\omega_2\in\mathcal H$, and $\eta_j=Z_\Lambda(z+\omega_j)-Z_\Lambda(z)$.

## Hints

> [!hint]- Hint 1
> Integrate $Z_\Lambda$ around a translated fundamental parallelogram with no lattice points on its boundary.

> [!hint]- Hint 2
> Use the positive edge order $\omega_2,\omega_1,-\omega_2,-\omega_1$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Choose a translate $P$ of the fundamental parallelogram containing exactly one lattice point in its interior and none on its boundary. Its positive orientation follows $\omega_2$ and then $\omega_1$, since $\operatorname{Im}(\omega_1/\omega_2)>0$. The function $Z_\Lambda$ has residue one at each lattice point and no other poles, so the residue theorem gives $\oint_{\partial P}Z_\Lambda(z)\,dz=2\pi i$.
>
> Pair the two edges parallel to $\omega_1$. Translation by $\omega_2$ increases $Z$ by $\eta_2$; their opposite boundary directions therefore contribute $\eta_2\omega_1$. The two edges parallel to $\omega_2$ similarly contribute $-\eta_1\omega_2$. Adding the four edge integrals gives exactly $\eta_2\omega_1-\eta_1\omega_2=2\pi i$. The choice of translated parallelogram only avoids boundary poles and does not affect these constant quasiperiod differences.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Weierstrass Elliptic Functions|Weierstrass Elliptic Functions]]
- [[08 - Arithmetic Geometry/Concepts/Complex Tori and Isogenies|Complex Tori and Isogenies]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 142 / PDF 156. The solution above is independently derived.
- **Routing:** The principal toolkit is arithmetic-geometry; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
