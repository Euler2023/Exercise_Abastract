---
title: "Exercise AG88: The Weight One Dimension Criterion for Principal Level"
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.9, Exercise 3.9.2, printed p. 108, PDF p. 122"
source_refs:
  - "S7/ch-3/sec-9/ex-2"
created: 2026-10-28
---

# Exercise AG88: The Weight One Dimension Criterion for Principal Level

## Problem Statement

> [!question] Original Exercise 3.9.2
> Theorem3.6.1 provides the dimension formulas $\dim M_1(\Gamma)=\varepsilon_\infty^{\mathrm{reg}}/2$ and $\dim S_1(\Gamma)=0$ when $\varepsilon_\infty^{\mathrm{reg}}>2g-2$. Show that this condition holds for $\Gamma(N)$ if and only if $N<12$.

> [!warning] Source issue
> The quoted odd-weight conclusion has the additional hypothesis $-I\notin\Gamma$, explicit in Theorem3.6.1. The numerical inequality also holds for $\Gamma(2)$, but its weight-one dimension is zero, not $3/2$. The equivalence about the inequality is correct; the weight-one application is restricted to $N>2$.

## Hints

> [!hint]- Hint 1
> All principal-group cusps are regular, and their number is $d_N/N$.

> [!hint]- Hint 2
> For $N>2$, substitute $2g-2=d_N(N-6)/(6N)$ and cancel a positive factor.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> The section assumes $N>1$. All cusps of $\Gamma(N)$ are regular. For $N>2$, the verified formulas are
> $$
> r=d_N/N,\qquad 2g-2=d_N(N-6)/(6N),\qquad d_N>0.
> $$
> Thus
> $$
> r>2g-2\quad\Longleftrightarrow\quad1>(N-6)/6\quad\Longleftrightarrow\quad N<12.
> $$
> At $N=2$, $g=0$ and $r=3$, so the numerical inequality also holds. Hence throughout the section's range it holds exactly for $2\le N<12$. If one includes $N=1$, its genus zero and single regular cusp also satisfy it, so the same positive-integer description $N<12$ remains valid.
>
> For the weight-one consequence of Theorem3.6.1 one must additionally have $-I\notin\Gamma(N)$, that is $N>2$. Consequently $3\le N<12$ gives $\dim M_1=d_N/(2N)$ and $S_1=0$. At $N=2$ (and $N=1$) odd-weight forms vanish because $-I$ belongs to the group; the numerical inequality by itself cannot override that hypothesis.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 108 / PDF 122. The solution above is independently derived.
- **Routing:** The principal toolkit is arithmetic-geometry; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
