---
title: "Exercise AG71: Riemann Hurwitz and the Modular Genus Formula"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.1, Exercise 3.1.3, printed p. 69, PDF p. 83"
source_refs:
  - "S7/ch-3/sec-1/ex-3"
created: 2026-10-28
---

# Exercise AG71: Riemann Hurwitz and the Modular Genus Formula

## Problem Statement

> [!question] Original Exercise 3.1.3
> (a) Fill in details as necessary in the computations preceding Theorem 3.1.1.
>
> (b) Prove Theorem 3.1.1.
>
> (c) Prove Corollary 3.1.2.
>
> **Referenced statements, printed pp. 67–68 / PDF pp. 81–82.** For a congruence subgroup $\Gamma$, put $d=[SL_2(\mathbb Z):\{\pm I\}\Gamma]$. Let $\varepsilon_2,\varepsilon_3$ count its elliptic points of effective periods $2,3$, and let $\varepsilon_\infty$ count its cusps. Theorem 3.1.1 asserts
> $$
> g(X(\Gamma))=1+\frac d{12}-\frac{\varepsilon_2}4-\frac{\varepsilon_3}3-\frac{\varepsilon_\infty}2.
> $$
> Corollary 3.1.2 asserts
> $$
> 2g-2+\frac{\varepsilon_2}2+\frac{2\varepsilon_3}3+\varepsilon_\infty>0.
> $$

## Hints

> [!hint]- Hint 1
> Above an elliptic point of period $h=2$ or $3$, a source elliptic point has local degree $1$; every other source point has local degree $h$.

> [!hint]- Hint 2
> Compute ramification over the two elliptic target points and the cusp, then substitute into Riemann–Hurwitz.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> The imported surface theorem is Riemann–Hurwitz: for a nonconstant holomorphic map $f:X\to Y$ of compact connected Riemann surfaces of degree $d$,
> $$
> 2g_X-2=d(2g_Y-2)+\sum_{x\in X}(e_x-1).
> $$
> The source states it and sketches a triangulation proof on printed p. 66 / PDF p. 80. We apply it to the natural projection $X(\Gamma)\to X(1)$, where $g(X(1))=0$.
>
> **(a).** Let $y_h$ denote the target elliptic point of period $h\in\{2,3\}$ and put $n_h=|f^{-1}(y_h)|$. Effective stabilizers in the source are subgroups of a cyclic group of prime order $h$, hence have order $1$ or $h$. The local period-ratio formula gives degree $h$ in the former case and $1$ in the latter. Exactly $\varepsilon_h$ points belong to the latter case. The sum of local degrees over any fiber is $d$, so
> $$
> d=h(n_h-\varepsilon_h)+\varepsilon_h.
> $$
> It follows that
> $$
> \sum_{x\in f^{-1}(y_h)}(e_x-1)
> =(h-1)(n_h-\varepsilon_h)=\frac{h-1}{h}(d-\varepsilon_h).
> $$
> Above the target cusp the fiber has $\varepsilon_\infty$ points, so its contribution is
> $$
> \sum_{x\in f^{-1}(y_\infty)}(e_x-1)
> =\sum_{x\in f^{-1}(y_\infty)}e_x-\varepsilon_\infty=d-\varepsilon_\infty.
> $$
> There is no ramification elsewhere: both source and target stabilizers are trivial and the local charts make the projection locally a fractional linear bijection.
>
> **(b).** Riemann–Hurwitz therefore gives
> $$
> \begin{aligned}
> 2g-2
> &=-2d+\frac{d-\varepsilon_2}{2}
> +\frac{2(d-\varepsilon_3)}3+d-\varepsilon_\infty\\
> &=\frac d6-\frac{\varepsilon_2}2-\frac{2\varepsilon_3}3-\varepsilon_\infty.
> \end{aligned}
> $$
> Dividing by $2$ and adding $1$ proves Theorem 3.1.1.
>
> **(c).** Rearranging the last equality gives exactly
> $$
> 2g-2+\frac{\varepsilon_2}2+\frac{2\varepsilon_3}3+\varepsilon_\infty=\frac d6>0,
> $$
> since the finite index $d$ is a positive integer. This proves the strict inequality rather than merely nonnegativity.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 69 / PDF 83. The solution above is independently derived.
- **Proof boundary:** Riemann–Hurwitz and the genus-zero description of $X(1)$ are named surface-theory inputs; all local-degree counts assigned by the exercise are derived above.
- **Routing:** The principal toolkit is arithmetic-geometry; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
